"use client";

const useLike = (userID: string) => {
  const onClickLike = async (asagohanID: string, isLiked: boolean) => {
    if (!isLiked) {
      const res = await fetch(
        `http://localhost:3000/api/asagohan/${asagohanID}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: userID,
          }),
        }
      );
      return res;
    } else {
      const res = await fetch(
        `http://localhost:3000/api/asagohan/${asagohanID}/like`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: userID,
          }),
        }
      );
      return res;
    }
  };
  return { onClickLike };
};

export default useLike;
