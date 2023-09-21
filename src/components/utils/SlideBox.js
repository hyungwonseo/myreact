import { useRef, useState } from "react";
import styled from "styled-components";

// 슬라이드 한개의 크기를 여기서 세팅함(px)
// 화면 전체는 window.innerWidth, window.innerHeight를 사용
const WIDTH = 900;
const HEIGHT = 600;

// 화면전체. 슬라이드 컨테이너를 화면 가운데 배치
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 슬라이드 1개를 보여주는 윈도우. 슬라이드 하나의 사이즈를 가짐(액자형식)
const Container = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: hidden;
  position: relative;
`;
// 이동하는 슬라이드, 여러개의 슬라이드가 연결되어있음
const Slide = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.$translateX}px);
`;
// 슬라이드 1개의 스타일링
const Page = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  background-color: ${(props) => props.$bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: 0;
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 600px;
`;
const Btn1 = styled(Btn)`
  left: 100px;
`;
const Btn2 = styled(Btn)`
  right: 100px;
`;

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
      <Wrapper>
        <Container>
          <Slide $translateX={slideX * WIDTH}>
            {pageList.map((Page, i) => (
              <Page key={i} left={WIDTH * i} />
            ))}
          </Slide>
        </Container>
        <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2>
      </Wrapper>
    </>
  );
}

function Page1({ left }) {
  return (
    <>
      <Page $bgcolor="lightgreen" $left={left}>
        <h1>Page 1</h1>
      </Page>
    </>
  );
}
function Page2({ left }) {
  return (
    <>
      <Page $bgcolor="khaki" $left={left}>
        <h1>Page 2</h1>
      </Page>
    </>
  );
}
function Page3({ left }) {
  return (
    <>
      <Page $bgcolor="lightblue" $left={left}>
        <h1>Page 3</h1>
      </Page>
    </>
  );
}
function Page4({ left }) {
  return (
    <>
      <Page $bgcolor="teal" $left={left}>
        <h1>Page 4</h1>
      </Page>
    </>
  );
}
