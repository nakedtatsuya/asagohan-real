import type User from "@/app/types/User";
import type Comment from "@/app/types/Comment";

export default interface Asagohan {
  id: string;
  created_at: string;
  title: string;
  imagePath: string;
  likes: number;
  comments: Comment[];
  user: User;
}
