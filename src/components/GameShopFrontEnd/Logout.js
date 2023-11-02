import { useContext, useEffect } from "react";
import { GameContext } from "./GameShop";
import { Navigate } from "react-router-dom";

export function Logout() {
  const { setUser } = useContext(GameContext);
  useEffect(() => {
    setUser({ loginId: null });
  }, []);

  return (
    <>
      <Navigate to="/" />
    </>
  );
}
