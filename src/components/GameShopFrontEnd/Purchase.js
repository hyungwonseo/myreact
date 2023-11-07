import { purchaseGames } from "./api";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function Purchase({
  items,
  setPurchasing,
  setPurchaseComplete,
  setPurchaseFailed,
}) {
  const { data } = useQuery("purchase", () => purchaseGames(items), {
    retry: 0,
  });

  useEffect(() => {
    if (data && data !== "ERROR") {
      console.log("구매완료", data);
      setTimeout(() => {
        setPurchaseComplete(true);
        setPurchasing(false);
      }, 1000);
    } else if (data === "ERROR") {
      console.log("구매실패");
      setTimeout(() => {
        setPurchaseFailed(true);
        setPurchasing(false);
      }, 1000);
    }
  }, [data]);

  return <h1>구매 처리중.....</h1>;
}
