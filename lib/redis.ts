import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL ?? "redis://localhost:6379";

// 全域 Redis 連線
// - 預設啟用 offline queue：連線建立中時指令會排隊等待，避免首個請求即刻失敗
// - commandTimeout：Redis 完全離線時指令最多等 3 秒即失敗，由呼叫端降級處理
// - 斷線後背景重試：1s 起遞增、每 10s 最多一次，Redis 恢復後自動重連
export const redis = new Redis(REDIS_URL, {
  maxRetriesPerRequest: 1,
  commandTimeout: 3000,
  retryStrategy: (times) => Math.min(times * 1000, 10000),
});

export type RateLimitResult = { allowed: boolean; remaining: number };

/**
 * 滑動窗口限流：windowSeconds 內最多 limit 次（以 Redis sorted set 實現）。
 * Redis 不可用時一律放行，避免 Redis 故障拖垮整個網站。
 */
export async function rateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  try {
    const now = Date.now();
    const windowStart = now - windowSeconds * 1000;
    const zkey = `rl:${key}`;
    const member = `${now}-${Math.random().toString(36).slice(2)}`;

    const multi = redis.multi();
    multi.zremrangebyscore(zkey, 0, windowStart); // 清走窗口外舊記錄
    multi.zadd(zkey, now, member);                // 記下本次請求
    multi.zcard(zkey);                            // 窗口內請求數
    multi.expire(zkey, windowSeconds);            // 自動過期
    const results = await multi.exec();

    const count = (results?.[2]?.[1] as number) ?? 0;
    return { allowed: count <= limit, remaining: Math.max(0, limit - count) };
  } catch {
    return { allowed: true, remaining: limit };
  }
}

/**
 * 把表單提交記錄 push 到 Redis list（供日後後台讀取 / 排程處理）。
 * Redis 不可用時靜默略過，不影響表單回應。
 */
export async function recordSubmission(listKey: string, data: unknown): Promise<void> {
  try {
    await redis.lpush(listKey, JSON.stringify(data));
    await redis.ltrim(listKey, 0, 999); // 只保留最近 1000 筆
  } catch {
    // Redis 離線時略過
  }
}
