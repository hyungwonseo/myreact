import styled from "styled-components";
import { useQuery } from "react-query";
import { signUp } from "./api";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameShop";

const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;

const options = [
  { value: "MAN", label: "MAN" },
  { value: "WOMAN", label: "WOMAN" },
];

export function Register() {
  const [loginId, setLoginId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("MAN");
  const [email, setEmail] = useState("");

  const [userRegister, setUserRegister] = useState(null);
  const { setUser } = useContext(GameContext);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery("register", () => {
    if (userRegister) {
      return signUp(userRegister);
    }
  });

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS") {
      console.log(data);
      setUser({ loginId: userRegister.loginId });
      navigate("/dashboard");
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/login");
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [userRegister]);

  function onSubmit(e) {
    console.log("submit");
    e.preventDefault();
    const user = {
      loginId: loginId,
      password: password,
      name: username,
      birthDate: birthDate,
      gender: gender,
      email: email,
    };
    setUserRegister(user);
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Header>Register</Header>
          <div>
            <label>Login ID</label>
            <br />
            <input
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>
          <div>
            <label>User Name</label>
            <br />
            <input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              id="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Birth Date (YYYY-MM-DD)</label>
            <br />
            <input
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label>Gender (MAN or WOMAN)</label>
            <br />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>User Email</label>
            <br />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit">제출</Button>
        </form>
      </Container>
    </>
  );
}
