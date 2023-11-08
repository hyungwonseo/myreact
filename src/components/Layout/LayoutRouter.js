import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";

export function LayoutRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
