import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboad";
import { Login } from "./Login";
import { Cart } from "./Cart";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { useQuery } from "react-query";
import { getAllGames } from "./api";
import { Register } from "./Register";
import { Logout } from "./Logout";

const client = new QueryClient();
export const GameContext = createContext();

export function GameShop() {
  const { data, isLoading } = useQuery("games", getAllGames);
  return (
    <>
      <QueryClientProvider client={client}>
        {!isLoading && data && (
          <GameShopLoader
            games={data}
            gamesCheckList={data.map((g) => {
              return { id: g.id, checked: false };
            })}
          />
        )}
      </QueryClientProvider>
    </>
  );
}

function GameShopLoader({ games, gamesCheckList }) {
  const [checkList, setCheckList] = useState(gamesCheckList);
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("loginState"))
  );
  return (
    <>
      <GameContext.Provider
        value={{ checkList, setCheckList, loginState, setLoginState, games }}
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
              <Route path="logout" element={<Logout />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
