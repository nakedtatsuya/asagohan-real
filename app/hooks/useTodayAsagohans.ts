"use client";
import { useEffect, useState } from "react";
import type Asagohan from "@/app/types/Asagohan";

const useTodayAsagohans = (userID: string) => {
  const [asagohans, setAsagohans] = useState<Asagohan[] | null>(null);
  const [fetching, setFetching] = useState(false);

  const getTodayAsagohans = async (userID: string): Promise<Asagohan[]> => {
    const res = await fetch(`http://localhost:3000/api/asagohans/${userID}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const asagohans = await res.json();
    return asagohans.data;
  };

  useEffect(() => {
    setFetching(true);
    getTodayAsagohans(userID)
      .then((asagohans) => {
        setAsagohans(asagohans);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [userID]);

  return { asagohans, todayAsagohansFetching: fetching };
};

export default useTodayAsagohans;
