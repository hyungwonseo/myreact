import { useQuery } from "react-query";
import { purchaseGames } from "./api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export function Purchase() {
  const navigate = useNavigate();
  const location = useLocation();
  const purchasedGames = location.state?.newList;
  const { data, isLoading } = useQuery("purchase", () => {
    if (purchasedGames && purchasedGames.length > 0) {
      purchaseGames(purchasedGames);
    } else {
      navigate("/cart");
    }
  });
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
