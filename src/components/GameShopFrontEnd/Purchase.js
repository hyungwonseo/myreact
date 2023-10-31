import { useQuery } from "react-query";
import { purchaseGames } from "./api";
import { Navigate } from "react-router-dom";

export function Purchase({ purchasedGames }) {
  const { data, isLoading } = useQuery("purchase", () =>
    purchaseGames(purchasedGames)
  );
  return (
    <>
      {isLoading ? (
        <h1>구매 처리중.....</h1>
      ) : (
        <Navigate to="/dashboard"></Navigate>
      )}
    </>
  );
}
