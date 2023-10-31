import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";

export function Dashboard() {
  const { data, isLoading } = useQuery("getAllPurchase", getAllPurchasedGames);
  return (
    <>
      <h1>Dashboard</h1>
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
