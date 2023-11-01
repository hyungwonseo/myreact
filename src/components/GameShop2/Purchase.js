import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { purchaseGames } from "./api";

export function Purchase({ list }) {
  const { data: purchaseList, isLoading: purchasing } = useQuery(
    "purchase",
    () => purchaseGames(list)
  );
  return (
    <>{purchasing ? <h1>구매 처리중...</h1> : <Navigate to="/dashboard" />}</>
  );
}
