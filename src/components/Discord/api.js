import axios from "axios";

export function apiLoginByAxiosPost(loginId, password) {
  return axios.post(
    "http://localhost:8080/api/authenticate",
    {
      username: loginId,
      password: password,
    },
    {
      "Content-Type": "application/json",
    }
  );
}

export function apiLoginByAxios(loginId, password) {
  return axios({
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
}

export function apiLoginByFetch(loginId, password) {
  return fetch("http://localhost:8080/api/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginId,
      password: password,
    }),
  }).then((response) => response.json());
}

export function apiGetMyInfo() {
  const token = sessionStorage.getItem("token");
  return axios.get("http://localhost:8080/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
