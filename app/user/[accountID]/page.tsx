import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/"}><div>←</div></Link><h1 className={styles.h1}>ユーザプロフィール!

        <div>アカウント名<Image src="/user_image.png" alt={"userIcon"} height={100} width={100} /></div>
        <div>べすと朝ごはん！
          <Image src="/breakfast_image.png" alt={"AsagohanPicture"} height={100} width={150} />
        </div>
        <div>今週の朝ごはん <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150} />
          <div>○月○日</div></div>

      </h1>
    </main>
  );
}
