import { QueryClient, QueryClientProvider } from "react-query";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";

// 글로벌 세팅 구현

const client = new QueryClient();
export const MyContext = createContext();

export function LayoutApp() {
  const [myGlobalState, setMyGlobalState] = useState(null);

  return (
    <>
      <QueryClientProvider client={client}>
        <MyContext.Provider value={(myGlobalState, setMyGlobalState)}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </QueryClientProvider>
    </>
  );
}
