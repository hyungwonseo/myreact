import axios from "axios";
import { useEffect, useState } from "react";
import {
  apiGetMyInfo,
  apiLoginByAxios,
  apiLoginByAxiosPost,
  apiLoginByFetch,
} from "./api";

export function Discord() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  async function onLogin() {
    try {
      const response = await apiLoginByAxios(loginId, password);
      if (response.data.resultCode === "SUCCESS") {
        console.log(response.data);
        setToken(response.data.data.token);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err.response.data);
    }
    // try {
    //   const data = await apiLoginByFetch(loginId, password);
    //   if (data.resultCode === "SUCCESS") {
    //     console.log(data);
    //     setToken(data.data.token);
    //   } else {
    //     alert(data.message);
    //   }
    // } catch (err) {
    //   console.log(err.response.data);
    // }
  }

  function onLogout() {
    setToken(null);
    setLoginId("");
    setPassword("");
  }

  async function onMyInfo() {
    try {
      const response = await apiGetMyInfo();
      if (response.data.resultCode === "SUCCESS") {
        console.log(response.data.data);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", null);
    }
  }, [token]);

  return (
    <>
      {token ? (
        <>
          <h1>Welcome, {loginId}</h1>
          <p>
            <button onClick={onLogout}>Logout</button>
          </p>
          <p>
            <button onClick={onMyInfo}>My Info</button>
          </p>
        </>
      ) : (
        <>
          <h1>Hello, Discord~~</h1>
          <p>Login ID</p>
          <input value={loginId} onChange={(e) => setLoginId(e.target.value)} />
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <button onClick={onLogin}>Login</button>
          </p>
        </>
      )}
    </>
  );
}

/*
    // Fetch
    const response = await fetch("http://localhost:8080/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Axios기본형
    const response = await axios({
      method: "POST",
      url: "http://localhost:8080/api/authenticate",
      data: {
          username: loginId,
          password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Axios메소드형
    const response = await axios.post(
      "http://localhost:8080/api/authenticate",
      {
        username: loginId,
        password: password,
      },
      {
        "Content-Type": "application/json",
      }
    );
*/
