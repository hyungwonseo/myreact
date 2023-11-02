import { useContext } from "react";
import { GameContext } from "./GameShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user } = useContext(GameContext);
  //로그인이 되었는지 확인하는 조건 필요!!
  if (user.loginId) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
