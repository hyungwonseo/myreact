import { useContext } from "react";
import { Login } from "./Login";
import { GameContext } from "./GameShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(GameContext);
  //로그인이 되었는지 확인하는 조건 필요!!
  if (user.name && user.email) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
