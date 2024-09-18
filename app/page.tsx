"use client";
import styles from "./page.module.css";
import type Asagohan from "@/app/types/Asagohan";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { useEffect, useState } from "react";

const getTodayAsagohans = async (userID: string): Promise<Asagohan[]> => {
  const res = await fetch(`http://localhost:3000/api/asagohans/${userID}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const asagohans = await res.json();
  return asagohans.data;
};

export default function Home() {
  const [userID, setUserID] = useState("b2113406-aaaf-43bc-a32c-a5cc003506d7");
  const [asagohans, setAsagohans] = useState<Asagohan[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(asagohans);

  useEffect(() => {
    setLoading(true);
    getTodayAsagohans(userID)
      .then((asagohans) => {
        setAsagohans(asagohans);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userID]);

  return (
    <div className={styles.page}>
      <Header>
        <div className={styles.first}>
          <Image
            className={styles.aikon}
            src="ロゴアイコン.svg"
            alt="ロゴアイコン画像"
            width={60}
            height={60}
          />
          <h1 className={styles.h1}>
            起きろ!
            <br />
            朝ごはんReal.
          </h1>
        </div>
        <div className={styles.next}>
          <Link href={"/ranking"}>
            <Image
              className={styles.ranking}
              src="ランキング画像.svg"
              alt="ランキング画像"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/user/1"}>
            <Image
              className={styles.profile}
              src="プロフィール画像.svg"
              alt="プロフィール画像"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </Header>
      <main className={styles.main}>あいうえお</main>
    </div>
  );
}
