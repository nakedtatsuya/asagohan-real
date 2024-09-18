'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { Avatar } from "@mui/material";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header>
        <div className={styles.first}>
          <Image className={styles.aikon}
            src="ロゴアイコン.svg"
            alt="ロゴアイコン画像"
            width={60}
            height={60}
          />
          <h1 className={styles.h1}>
            起きろ!<br />
            朝ごはんReal.
          </h1>
        </div>
        <div className={styles.next}>
          <Link href={"/ranking"} >
            <Image className={styles.ranking}
              src="ランキング画像.svg"
              alt="ランキング画像"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/user/1"}>
            <Image className={styles.profile}
              src="プロフィール画像.svg"
              alt="プロフィール画像"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </Header>
      <main className={styles.main}>
        <div className={styles.third}>
          <Avatar
            alt="投稿者イラスト"
            src="user_image.png"
          />
          <p>アカウント名</p>
        </div>
        <div>
          <p className={styles.time}>
            ○時○分
          </p>
        </div>
      </main>
    </div>
  )
}

