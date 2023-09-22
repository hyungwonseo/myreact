import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border: 2px solid blue;
`;
const Box = styled.div`
  background-color: lightblue;
  opacity: 1;
  transition: all 1s linear;
  &.hidden {
    opacity: 0;
  }
`;

export function MouseEnter() {
  const [hidden, setHidden] = useState("");
  function onMouseEnter() {
    setTimeout(() => {
      setHidden("hidden");
      console.log("timeout");
    }, 2000);
  }
  return (
    <>
      <Container onMouseEnter={onMouseEnter}>
        <Box className={hidden}>사라지는 텍스트</Box>
      </Container>
    </>
  );
}
