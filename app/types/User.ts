import type { UserBestAsagohan, UserThisWeekAsagohan } from "./Asagohan";

export default interface User {
  name: string;
  accountID: string;
  userIconPath: string;
}

export interface UserProfile extends User {
  bestAsagohan: UserBestAsagohan;
  thisWeekAsagohans: UserThisWeekAsagohan[];
}
