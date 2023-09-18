import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboad";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";

export function GameShop() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Other />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
