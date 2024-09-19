"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import { useState } from "react";
import useTodayAsagohans from "@/app/hooks/useTodayAsagohans";
import { Avatar } from "@mui/material";


export default function Home() {
    const [userID] = useState("b2113406-aaaf-43bc-a32c-a5cc003506d7");
    const { asagohans, todayAsagohansFetching } = useTodayAsagohans(userID);
    console.log(asagohans, todayAsagohansFetching);
    return (
        <div className={styles.page}>
            <Header>
                {" "}
                <Link className={styles.arrow} href={"/"}>←</Link>
                <h1 className={styles.h1}>ランキング！</h1>
                <div></div>
            </Header>

            <main className={styles.main}>
                <div className={styles.rankingstar}>
                    <Image className={styles.star}
                        src="ランキング星画像.svg"
                        alt="ランキング星画像"
                        width={70}
                        height={70}
                    />
                    <p className={styles.rankingcount}>
                        1
                    </p>
                </div>

                <div className={styles.acount}>
                    <div className={styles.third}>
                        <Avatar
                            alt="投稿者イラスト"
                            src="user_image.png"
                        /><div className={styles.account_name}>
                            アカウント名</div>
                    </div>
                    <div className={styles.button}>
                        <div className={styles.good}>
                            <div className={styles.good_count}>
                                58
                            </div>
                            <Image className={styles.goodbutton}
                                src="いいねボタン.svg"
                                alt="いいねボタン画像"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image className={styles.post}
                        src="朝ごはん投稿画像.svg"
                        alt="朝ごはん投稿画像"
                        width={300}
                        height={300}
                    />
                </div>
                <div className={styles.forth}>
                    <p className={styles.title}>
                        タイトル
                    </p>
                </div>

            </main>
        </div>
    );
}
