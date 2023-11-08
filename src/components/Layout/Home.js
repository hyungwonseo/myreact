import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Left } from "./Left";
import { Right } from "./Right";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw-10px);
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: lightblue;
`;
const StyledNav = styled.div`
  width: 100%;
  height: 70px;
  background-color: lightcoral;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 50% 50%;
`;
const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightcyan;
`;

export function Home() {
  return (
    <>
      <Container>
        <StyledHeader>
          <Header />
        </StyledHeader>
        <StyledNav>
          <NavBar />
        </StyledNav>
        <StyledMain>
          <Left />
          <Right />
        </StyledMain>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Container>
    </>
  );
}
