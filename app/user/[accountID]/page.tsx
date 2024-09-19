import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Avatar } from "@mui/material";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
<Header> <Link href={"/"}>←
      </Link>

      <h1 className={styles.h1}>ユーザプロフィール</h1><div></div>
</Header>
     
      <div>
      </div>
      <Avatar src="/user_image.png" alt={"userIcon"} sx={{ width: '200px', height: '200px' }}></Avatar>
      <div className={styles.account_name}>アカウント名
      </div>

      <div className={styles.profile1}>
        <div className={styles.iconTextContainer}><Image
          src="/icon512_maskable.png"
          alt={"Icon"}
          height={50}
          width={50}
        />
          <div>べすと朝ごはん!</div>
        </div>
        <Image src="/breakfast_image.png" alt={"AsagohanPicture"} height={100} width={150}
        />
      </div>

      <div className={styles.profile1}>
        <div className={styles.iconTextContainer}><Image
          src="/icon512_maskable.png"
          alt={"Icon"}
          height={50}
          width={50} />
          <div>今週の朝ごはん </div>
        </div>
        <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
        />○月○日
      </div>
    </main >
  );
}