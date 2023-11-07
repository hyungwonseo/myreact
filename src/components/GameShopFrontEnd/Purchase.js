import { purchaseGames } from "./api";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { GameContext } from "./GameShop";

export function Purchase({
  items,
  setPurchasing,
  setPurchaseComplete,
  setPurchaseFailed,
}) {
  const { loginState } = useContext(GameContext);
  const { data } = useQuery(
    "purchase",
    () => purchaseGames(items, loginState.id),
    {
      retry: 0,
      staleTime: 1000,
    }
  );

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
