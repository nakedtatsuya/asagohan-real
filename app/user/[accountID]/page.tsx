import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/app/components/Header";
import Badge from "@mui/material/Badge";
import Avatar, { AvatarOwnProps, AvatarSlotsAndSlotProps } from "@mui/material/Avatar"; // 必要に応じてインポート
import { CommonProps } from "@mui/material/OverridableComponent";
import { JSX, ElementType } from "react";

// SmallAvatar の定義
const SmallAvatar = (props: JSX.IntrinsicAttributes & { component: ElementType<any, keyof JSX.IntrinsicElements>; } & AvatarOwnProps & AvatarSlotsAndSlotProps & CommonProps & Omit<any, "children" | "className" | "style" | "classes" | "alt" | "imgProps" | "sizes" | "src" | "srcSet" | "sx" | "variant" | "slots" | "slotProps">) => (
  <Avatar
    {...props}
    sx={{ width: 40, height: 40 }}
  />
);

export default function Home() {
  return (
    <main className={styles.main}>
      <Header> <Link href={"/"}>←
      </Link>
        <h1 className={styles.h1}>ユーザプロフィール</h1><div></div>
      </Header>

      <div className={styles.iconPicture}>
        <div className={styles.changeIcon}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <SmallAvatar alt="camera" src="/camera.svg" component={"symbol"} />
            }
          >
            <Avatar className={styles.userIcon} src="/user_image.png" alt={"userIcon"} sx={{ width: '200px', height: '200px' }} />
          </Badge>
        </div>

        <div className={styles.account_name}>アカウント名
          <Image src="/pen.svg" alt={"pen"} height={16} width={16} />
        </div>
      </div>

      <div className={styles.usericonTextContainer}>
        <div className={styles.iconTextContainer}><Image
          src="/icon512_maskable.png"
          alt={"Icon"}
          height={30}
          width={30} />
          べすと朝ごはん！
        </div>

        <div className={styles.profile1}>
          <Image src="/breakfast_image.png" alt={"AsagohanPicture"} height={100} width={150}
          />
        </div>
      </div>

      <div className={styles.weeklyAsagohan}>
        <div className={styles.iconTextContainer}><Image
          src="/icon512_maskable.png"
          alt={"Icon"}
          height={30}
          width={30} />
          今週の朝ごはん
        </div>

        <div className={styles.week_asagohan}>
          <div className={styles.scroll}>
            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image src="/breakfast_image.png" alt={"WeeklyAsagohan"} height={100} width={150}
              /><div className={styles.date}>○月○日</div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}