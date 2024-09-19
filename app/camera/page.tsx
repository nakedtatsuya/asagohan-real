"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Image from 'next/image';
import useTodayAsagohans from "@/app/hooks/useTodayAsagohans";



export default function Home() {
    const [userID] = useState("b2113406-aaaf-43bc-a32c-a5cc003506d7");
    const { asagohans, todayAsagohansFetching } = useTodayAsagohans(userID);
    console.log(asagohans, todayAsagohansFetching);
    return (
        <div className={styles.page}>

            <h1 className={styles.h1}>
                起きろ!
                <br />
                朝ごはんReal.
            </h1>

            <main className={styles.main}>
                <div className={styles.container}>
                    <Image className={styles.post}
                        src="朝ごはん投稿画像.svg"
                        alt="朝ごはん投稿画像"
                        width={380}
                        height={380}
                    />
                </div>
                <Image className={styles.camera_button}
                    src="camera_button.svg"
                    alt="camera_button"
                    width={80}
                    height={80}
                />

            </main>
        </div>
    );
}
