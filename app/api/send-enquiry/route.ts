import { NextResponse } from "next/server";

// 企業培訓諮詢表單的暫時實作：
// ⚠️ 尚未接上 SMTP / 電郵服務，目前只回傳成功讓前端流程可完整示範。
// 正式上線前請在此接入電郵發送（例如 nodemailer + SMTP 或 SendGrid 等），
// 並把查詢內容轉發至 info@ite.edu.hk。
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: 接入電郵服務，將 body 轉發至 info@ite.edu.hk
    console.log("[send-enquiry] 收到企業諮詢:", JSON.stringify(body));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
