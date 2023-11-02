import { useQuery } from "react-query";
import { signUp } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GameContext } from "./GameShop";

export function Register() {
  const location = useLocation();
  const userRegister = location.state?.userRegister;
  const { setUser } = useContext(GameContext);
  const navigate = useNavigate();

  const { data } = useQuery("register", () => {
    if (userRegister) {
      return signUp(userRegister);
    } else {
      navigate("/login");
    }
  });

  console.log(data);

  useEffect(() => {
    if (data && data.data == null) {
      setUser({ loginId: userRegister.loginId });
      navigate("/dashboard");
    }
  }, [data]);

  return <></>;
}
