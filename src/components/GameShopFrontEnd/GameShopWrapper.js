import { QueryClient, QueryClientProvider } from "react-query";
import { GameShop } from "./GameShop";

const client = new QueryClient();

export function GameShopWrapper() {
  return (
    <>
      <QueryClientProvider client={client}>
        <GameShop />
      </QueryClientProvider>
    </>
  );
}
