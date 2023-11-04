import { purchaseGames } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Purchase() {
  const navigate = useNavigate();
  const location = useLocation();
  const purchasedGames = location.state?.newList;

  useEffect(() => {
    const delay = 1000; // 1초 딜레이 시간 (밀리초 단위)

    if (purchasedGames && purchasedGames.length > 0) {
      purchaseGames(purchasedGames);

      // 1초 후에 페이지 전환
      setTimeout(() => {
        navigate("/dashboard");
      }, delay);
    } else {
      navigate("/cart");
    }
  }, []);

  return <h1>구매 처리중.....</h1>;
}
