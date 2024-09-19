"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/app/components/Header";
import Badge from "@mui/material/Badge";
import Avatar, {
  AvatarOwnProps,
  AvatarSlotsAndSlotProps,
} from "@mui/material/Avatar"; // 必要に応じてインポート
import { CommonProps } from "@mui/material/OverridableComponent";
import { JSX, ElementType, useState } from "react";
import useUserProfile from "@/app/hooks/useUserProfile";
import { Button, IconButton, Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";

// SmallAvatar の定義
const SmallAvatar = (
  props: JSX.IntrinsicAttributes & {
    component: ElementType<JSX.Element, keyof JSX.IntrinsicElements>;
  } & AvatarOwnProps &
    AvatarSlotsAndSlotProps &
    CommonProps
) => <Avatar {...props} sx={{ width: 40, height: 40 }} />;

export default function Home({ params }: { params: { accountID: string } }) {
  const accountID = params.accountID;
  const { userProfile, todayUserProfileFetching } = useUserProfile(accountID);
  const [isEditingName, setIsEditingName] = useState(false);

  if (todayUserProfileFetching) {
    return <main>Loading...</main>;
  }
  if (!userProfile) {
    return <main>Not Found</main>;
  }

  console.log(userProfile, todayUserProfileFetching);

  const modalStyle = {
    bgcolor: "var(--light)",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    boxShadow: 24,
    p: 4,
    fontFamily: "var(--font)",
  };

  return (
    <main className={styles.main}>
      <Header>
        <Link href={"/"}>←</Link>
        <h1 className={styles.h1}>ユーザプロフィール</h1>
        <div></div>
      </Header>

      <Modal
        open={isEditingName}
        onClose={() => setIsEditingName(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <form action="update">
            <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="ユーザネーム"
                defaultValue={userProfile.name}
                sx={{
                  // 入力値にフォントを適用
                  "& .MuiOutlinedInput-root": { fontFamily: "var(--font)" },
                  "& input": {
                    color: "var(--primary)",
                  },
                  "& label": {
                    fontFamily: "var(--font)",
                  },
                }}
              />
              <Button type="submit" variant="contained">
                完了
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <div className={styles.iconPicture}>
        <div className={styles.changeIcon}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <SmallAvatar
                alt="camera"
                src="/camera.svg"
                component={"symbol"}
              />
            }
          >
            <Avatar
              className={styles.userIcon}
              src="/user_image.png"
              alt={"userIcon"}
              sx={{ width: "200px", height: "200px" }}
            />
          </Badge>
        </div>

        <div className={styles.account_name}>
          アカウント名
          <IconButton
            onClick={() => setIsEditingName(true)}
            sx={{ width: "fit-content" }}
          >
            <Image src="/pen.svg" alt={"pen"} height={16} width={16} />
          </IconButton>
        </div>
      </div>

      <div className={styles.usericonTextContainer}>
        <div className={styles.iconTextContainer}>
          <Image
            src="/icon512_maskable.png"
            alt={"Icon"}
            height={30}
            width={30}
          />
          べすと朝ごはん！
        </div>

        <div className={styles.profile1}>
          <Image
            src="/breakfast_image.png"
            alt={"AsagohanPicture"}
            height={100}
            width={150}
          />
        </div>
      </div>

      <div className={styles.weeklyAsagohan}>
        <div className={styles.iconTextContainer}>
          <Image
            src="/icon512_maskable.png"
            alt={"Icon"}
            height={30}
            width={30}
          />
          今週の朝ごはん
        </div>

        <div className={styles.week_asagohan}>
          <div className={styles.scroll}>
            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>

            <div className={styles.profile2}>
              <Image
                src="/breakfast_image.png"
                alt={"WeeklyAsagohan"}
                height={100}
                width={150}
              />
              <div className={styles.date}>○月○日</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
