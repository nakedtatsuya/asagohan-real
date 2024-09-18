import type User from "@/app/types/User";
import type Comment from "@/app/types/Comment";

export default interface Asagohan {
  id: string;
  createdAt: string;
  title: string;
  imagePath: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  user: User;
}

export interface UserBestAsagohan extends Pick<Asagohan, "id" | "imagePath"> {}

export interface UserThisWeekAsagohan
  extends Pick<Asagohan, "createdAt" | "imagePath"> {}
