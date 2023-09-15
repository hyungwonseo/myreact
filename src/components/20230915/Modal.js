import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: khaki;
  position: absolute;
  top: 200px;
  left: 1600px;
  transform: scale(1);
  transition: all 0.5s ease;
  &.modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(3);
  }
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

function ModalBox() {
  const [toggle, setToggle] = useState(false);
  function onClick(e) {
    if (toggle) {
      setToggle(false);
      e.currentTarget.classList.remove("modal");
    } else {
      setToggle(true);
      e.currentTarget.classList.add("modal");
    }
  }
  return (
    <>
      {toggle ? <Backdrop /> : null}
      <Box onClick={onClick}>
        <h1>Modal Window</h1>
      </Box>
    </>
  );
}

export function Modal() {
  return (
    <>
      <ModalBox />
    </>
  );
}
