import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";
import { useContext } from "react";
import { GameContext } from "./GameShop";

export function Dashboard() {
  const { loginState } = useContext(GameContext);
  const { data, isLoading } = useQuery("getAllPurchase", () =>
    getAllPurchasedGames(loginState?.id)
  );

  return (
    <>
      <h1>Dashboard</h1>
      <h3>{loginState?.id} 의 구매목록</h3>
      {!isLoading
        ? data.map((d, i) => (
            <p key={i}>
              타이틀 : {d.game.title}, 수량 : {d.quantity}
            </p>
          ))
        : null}
    </>
  );
}
