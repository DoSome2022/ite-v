import { NextResponse } from "next/server";
import { rateLimit, recordSubmission } from "@/lib/redis";

// 聯絡我們表單的暫時實作：
// ⚠️ 尚未接上 SMTP / 電郵服務，目前只回傳成功讓前端流程可完整示範。
// 提交內容會記錄到 Redis list（ite:contact-submissions）供日後處理。
export async function POST(request: Request) {
  // 限流：每 IP 每小時最多 5 次提交（Redis 離線時自動放行）
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const { allowed } = await rateLimit(`contact:${ip}`, 5, 3600);
  if (!allowed) {
    return NextResponse.json(
      { ok: false, message: "提交次數過多，請稍後再試" },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    // TODO: 接入電郵服務，將 body 轉發至 info@ite.edu.hk
    console.log("[send-contact] 收到查詢:", JSON.stringify(body));
    await recordSubmission("ite:contact-submissions", {
      ...body,
      source: "contact",
      ip,
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
