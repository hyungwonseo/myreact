import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GameContext } from "./GameShop";

export function Logout() {
  const { setLoginState } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify({ id: null }));
    setLoginState({ id: null });
    navigate("/");
  }, []);

  return <></>;
}
