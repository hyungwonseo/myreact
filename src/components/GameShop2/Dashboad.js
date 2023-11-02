import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";

export function Dashboard() {
  const { data: purchasedGames, isLoading } = useQuery(
    "dashborad",
    getAllPurchasedGames
  );
  return (
    <>
      <h1>Dashboard</h1>
      {!isLoading &&
        purchasedGames.map((game, index) => (
          <p key={index}>
            타이틀 : {game.game.title}, 수량 : {game.quantity}
          </p>
        ))}
    </>
  );
}
