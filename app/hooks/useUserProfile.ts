"use client";
import { useEffect, useState } from "react";
import type { UserProfile } from "@/app/types/User";

const useUserProfile = (accountID: string) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [fetching, setFetching] = useState(false);

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

  return { userProfile, todayUserProfileFetching: fetching };
};

export default useUserProfile;
