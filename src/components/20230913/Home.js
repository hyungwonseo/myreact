import styled from "styled-components";
import { Menu } from "./Menu";

const Container = styled.div`
  width: 120px;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={SMALL} />
      </Container>
    </>
  );
}
