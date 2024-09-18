import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={"/"}><div>←</div></Link><h1 className={styles.h1}>ユーザプロフィール!

          <div>アカウント名<img src="user_image.png"></img></div>
          <div>べすと朝ごはん！
            <img src="breakfast_image.png"></img>
          </div>
          <div>今週の朝ごはん <img src="breakfast_image.png"></img>
            <div>○月○日</div></div>

        </h1>
      </main>

    </div>
  );
}
