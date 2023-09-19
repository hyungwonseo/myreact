import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
`;

const Slide = styled(motion.div)`
  position: absolute;
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.left}px;
  top: 0;
`;

const Btn1 = styled.button`
  position: absolute;
  left: 100px;
  top: 600px;
`;
const Btn2 = styled.button`
  position: absolute;
  left: calc(100vw - 150px);
  top: 600px;
`;

function Page1({ left }) {
  return (
    <>
      <Page bgcolor="lightgreen" left={left}>
        <h1>Page 1</h1>
      </Page>
    </>
  );
}
function Page2({ left }) {
  return (
    <>
      <Page bgcolor="khaki" left={left}>
        <h1>Page 2</h1>
      </Page>
    </>
  );
}
function Page3({ left }) {
  return (
    <>
      <Page bgcolor="lightblue" left={left}>
        <h1>Page 3</h1>
      </Page>
    </>
  );
}
function Page4({ left }) {
  return (
    <>
      <Page bgcolor="teal" left={left}>
        <h1>Page 4</h1>
      </Page>
    </>
  );
}

export function SlideBox() {
  const pageList = [Page1, Page2, Page3, Page4];
  const [slideX, setSlideX] = useState(0);
  const page = useRef(0);
  function handleLeftBtn() {
    if (page.current > 0) {
      setSlideX(slideX + 1);
      page.current = page.current - 1;
    }
  }
  function handleRightBtn() {
    if (page.current < pageList.length - 1) {
      setSlideX(slideX - 1);
      page.current = page.current + 1;
    }
  }

  return (
    <>
      <Container>
        <Slide
          animate={{ x: slideX * window.innerWidth }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {pageList.map((Page, i) => (
            <Page key={i} left={window.innerWidth * i} />
          ))}
        </Slide>
        <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2>
      </Container>
    </>
  );
}
