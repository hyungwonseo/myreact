import styled from "styled-components";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 80%;
`;
const Content = styled.div``;

export function MyRouter() {
  const [page, setPage] = useState(Home);
  return (
    <>
      <Container>
        <Navbar setPage={setPage} />
        <Content>{page}</Content>
      </Container>
    </>
  );
}
