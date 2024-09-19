"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { useState } from "react";
import useTodayAsagohans from "@/app/hooks/useTodayAsagohans";
import { Avatar, colors } from "@mui/material";
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const testAsagohan =
{
  id: "1",
  createdAt: "8時30分",
  title: "test朝ごはん",
  imagePath: "https://prkmeuqkrooltclacpzl.supabase.co/storage/v1/object/public/asagohans/2.png",
  likes: 10,
  isLiked: true,
  ranking: 1,
  comments: [
    {
      content: "おいしそう!",
      createdAt: "8時31分",
      user: {
        name: "testユーザー",
        accountID: "test-user",
        userIconPath:
          "https://prkmeuqkrooltclacpzl.supabase.co/storage/v1/object/public/user_icons/79441e4f-39bc-4d2e-978b-68d5907000c2.png",
      },
    },
    {
      content: "早起きえらい",
      createdAt: "10時31分",
      user: {
        name: "testユーザー",
        accountID: "test-user",
        userIconPath:
          "https://prkmeuqkrooltclacpzl.supabase.co/storage/v1/object/public/user_icons/79441e4f-39bc-4d2e-978b-68d5907000c2.png",
      },
    },
  ],
  user: {
    name: "test-yuka",
    accountID: "test-user",
    userIconPath:
      "https://prkmeuqkrooltclacpzl.supabase.co/storage/v1/object/public/user_icons/79441e4f-39bc-4d2e-978b-68d5907000c2.png",
  },
};
export default function Home() {
  const [userID] = useState("b2113406-aaaf-43bc-a32c-a5cc003506d7");
  const { asagohans, todayAsagohansFetching } = useTodayAsagohans(userID);
  console.log(asagohans, todayAsagohansFetching);

  // const [flag, setFlag] = useState(false); // 初期値はfalse
  // console.log(flag);

  const handleClick = () => {
    console.log("クリックされました");
  };

  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState('');

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // コメントの処理（例えば、APIに送信など）
      console.log(comment);
      setComment(''); // 入力欄をクリア
    }
  };

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
      <main className={styles.main}>
        <Drawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <div className={styles.drawer}
            role="presentation">
            <div className={styles.usercomment}>
              <div className={styles.useravatar}>
                <Avatar
                  alt="投稿者イラスト"
                  src={testAsagohan.user.userIconPath}
                />
              </div>
              <div className={styles.timecomment}>
                <p style={{ marginTop: "0", marginBottom: "0" }}>
                  <span style={{ color: '#402011' }}>
                    {testAsagohan.user.name}
                  </span>
                  <span style={{ color: '#605b58', paddingLeft: "10px" }}>
                    {testAsagohan.createdAt}
                  </span>
                </p>
                <p style={{ color: '#402011', marginTop: "0", marginBottom: "0" }}>
                  {testAsagohan.comments[0].content}
                </p>
              </div>
            </div>
            <div className={styles.commentpush}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
              />
              <TextField
                label="コメントを入力..."
                id="outlined-size-small"
                fullWidth
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
              <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </div>
          </div>
        </Drawer>
        <div className={styles.acount}>
          <div className={styles.third}>
            <Avatar
              alt="投稿者イラスト"
              src={testAsagohan.user.userIconPath}
            />
            <p>{testAsagohan.user.name}</p>
          </div>
          <p className={styles.time}>
            {testAsagohan.createdAt}
          </p>
        </div>
        <div className={styles.container}>
          <Image className={styles.post}
            src={testAsagohan.imagePath}
            alt="朝ごはん投稿画像"
            width={319}
            height={229}
          />
        </div>
        <div className={styles.forth}>
          <div className={styles.button}>
            <div className={styles.good}>
              <Image onClick={handleClick} className={styles.goodbutton}
                src={testAsagohan.isLiked ? "いいね前のボタン.svg" : "いいね後のボタン.svg"}
                alt="いいね前のボタン画像"
                width={25}
                height={25}
              />
              <p className={styles.goodcount}>
                {testAsagohan.likes}
              </p>
            </div>
            <div onClick={toggleDrawer(true)} style={{ cursor: 'pointer' }}>
              <div className={styles.comment}>
                <Image className={styles.commentbutton}
                  src="コメントボタン.svg"
                  alt="コメントボタン画像"
                  width={25}
                  height={25}
                />
                <p className={styles.commentcount}>
                  {testAsagohan.comments.length}
                </p>
              </div>
            </div>
          </div>
          <p className={styles.title}>
            {testAsagohan.title}
          </p>
        </div>
        <div className={styles.rankingstar}>
          <Image className={styles.star}
            src="ランキング星画像.svg"
            alt="ランキング星画像"
            width={70}
            height={70}
          />
          <p className={styles.rankingcount}>
            {testAsagohan.ranking}
          </p>
        </div>
      </main>
    </div >
  );
}
