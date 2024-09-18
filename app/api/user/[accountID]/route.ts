import supabase from "@/app/supabase";
// import type Asagohan from "@/app/types/Asagohan";
import User from "@/app/types/User";

interface UserResponse {
  id: string;
  name: string;
  account_id: string;
}

export async function GET(
  _: Request,
  { params }: { params: { accountID: string } }
) {
  const accountID = params.accountID;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0); // 今日の開始時刻 (00:00:00)

  const todayEnd = new Date();
  todayEnd.setHours(11, 59, 59, 999); // 今日の終了時刻 (11:59:59)

  const { data, error } = await supabase
    .from("users")
    .select(
      `
      id,
      name,
      account_id
      `
    )
    .eq("account_id", accountID)
    .single<UserResponse>();
  console.log(data);

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
  // const publicAsagohanURLresponseData = await supabase.storage
  //   .from("asagohans")
  //   .getPublicUrl("");
  const publicUserIconURLresponseData = await supabase.storage
    .from("user-icons")
    .getPublicUrl("");
  // const publicAsagohanURL = publicAsagohanURLresponseData.data.publicUrl || "";
  const publicUserIconURL = publicUserIconURLresponseData.data.publicUrl || "";

  // const formatCreatedAtDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return `${date.getHours()}時${date.getMinutes()}分`;
  // };

  const user: User = {
    name: data.name,
    accountID: data.account_id,
    userIconPath: `${publicUserIconURL}${data.id}.png`,
  };
  return Response.json({ data: user });
}
