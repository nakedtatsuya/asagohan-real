import supabase from "../supabase";

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

  return Response.json({ data });
}
