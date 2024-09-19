"use client";
import { useState } from "react";
import supabase from "../supabase";

const usePostUser = () => {
  const [sending, setSending] = useState(true);

  const postUser = async (
    userID: string,
    name: string,
    accountID: string,
    userIcon: File
  ) => {
    setSending(true);
    console.log(userID, name, accountID);
    const res = await fetch(`http://localhost:3000/api/user/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, name, accountID }),
    });

    console.log(res);
    if (!res.ok) {
      console.error("Failed to post user");
    }

    const removeHyphen = (id: string) => id.replace(/-/g, "");

    const { error } = await supabase.storage
      .from("user_icons")
      .upload(`${removeHyphen(userID)}.png`, userIcon);
    if (error) {
      throw new Error("Failed to update user icon");
    }

    setSending(false);
  };

  return { postUser, userSending: sending };
};

export default usePostUser;
