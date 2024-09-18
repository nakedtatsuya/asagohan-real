import type User from "@/app/types/User";

export default interface Asagohan {
  id: string;
  created_at: string;
  title: string;
  imagePath: string;
  user: User;
}
