import supabase from "@/app/supabase";
import type Asagohan from "../types/Asagohan";

export async function GET() {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0); // 今日の開始時刻 (00:00:00)

  const todayEnd = new Date();
  todayEnd.setHours(11, 59, 59, 999); // 今日の終了時刻 (11:59:59)

  const { data, error } = await supabase
    .from("asagohans")
    .select("*")
    .gte("created_at", todayStart.toISOString()) // 今日の開始時刻以降
    .lte("created_at", todayEnd.toISOString()); // 今日の終了時刻以前

  if (error) {
    return new Response(`Internal Server Error: ${error.message}`, {
      status: 500,
    });
  }
  if (!data) {
    return new Response("Not Found", {
      status: 404,
    });
  }
  const publicURLresponseData = await supabase.storage
    .from("asagohans")
    .getPublicUrl("");
  const publicURL = publicURLresponseData.data.publicUrl || "";

  const asagohans: Asagohan[] = data.map((asagohan) => ({
    id: asagohan.id,
    created_at: asagohan.created_at,
    title: asagohan.title,
    imagePath: `${publicURL}${asagohan.id}.png`,
    userID: asagohan.user_id,
  }));

  return Response.json({ data: asagohans });
}
