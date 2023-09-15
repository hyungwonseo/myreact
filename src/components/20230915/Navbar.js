import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #eee;
  font-size: 1.5rem;
  padding: 50px 10px;
`;
const Li = styled.li`
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
`;
export function Navbar({ setPage }) {
  return (
    <>
      <Container>
        <ul>
          <Li>
            <Link href="#" onClick={() => setPage(Home)}>
              Home
            </Link>
          </Li>
          <Li>
            <Link href="#">Contact</Link>
          </Li>
          <Li>
            <Link href="#">About</Link>
          </Li>
        </ul>
      </Container>
    </>
  );
}
