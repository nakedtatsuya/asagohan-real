"use client";
import { useEffect, useState } from "react";
import type { UserProfile } from "@/app/types/User";

const useUserProfile = (accountID: string) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [fetching, setFetching] = useState(true);

  const getUserProfile = async (accountID: string): Promise<UserProfile> => {
    const res = await fetch(`http://localhost:3000/api/user/${accountID}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const userProfile = await res.json();
    return userProfile.data;
  };

  useEffect(() => {
    setFetching(true);
    getUserProfile(accountID)
      .then((fetchedUserProfile) => {
        setUserProfile(fetchedUserProfile);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [accountID]);

  const updateUserName = async (newName: string) => {
    if (userProfile) {
      const updatedUserProfile = { ...userProfile, name: newName };
      setUserProfile(updatedUserProfile);
    } else {
      console.error("このユーザーは存在しません");
    }
  };

  return { userProfile, todayUserProfileFetching: fetching, updateUserName };
};

export default useUserProfile;
