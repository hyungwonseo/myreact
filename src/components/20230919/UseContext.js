import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UseContext() {
  const [user, setUser] = useState("Tom");
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>useContext</h1>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}

function Component1() {
  return (
    <>
      <h1>Component1</h1>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component4</h1>
      <p>Hello {user}</p>
    </>
  );
}
