import type { User } from "@supabase/supabase-js";

export default interface Comment {
  text: string;
  createdAt: string;
  user: User;
}
