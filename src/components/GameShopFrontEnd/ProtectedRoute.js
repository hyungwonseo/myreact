import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GameContext } from "./GameShop";

export function ProtectedRoute({ children }) {
  const { loginState } = useContext(GameContext);

  if (loginState?.id) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
