import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboad";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { useQuery } from "react-query";
import { getAllGames } from "./api";

export const GameContext = createContext();

export function GameShop() {
  const { data: games, isLoading: isGamesLoading } = useQuery(
    "games",
    getAllGames
  );
  return (
    <>
      {!isGamesLoading ? (
        <GameShopLoader games={games} isGamesLoading={isGamesLoading} />
      ) : null}
    </>
  );
}

function GameShopLoader({ games, isGamesLoading }) {
  const defaultCheckList = games.map((g) => {
    return { id: g.id, checked: false };
  });
  const [checkList, setCheckList] = useState(defaultCheckList);
  const [user, setUser] = useState({});
  return (
    <>
      <GameContext.Provider
        value={{
          checkList,
          setCheckList,
          user,
          setUser,
          games,
          isGamesLoading,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
