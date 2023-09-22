import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d0e, #91f);
`;
const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 15px;
`;
const Btn = styled.button`
  width: 100px;
  height: 60px;
  position: absolute;
  text-align: center;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;

// 이동할때마다 이동거리를 상태로 저장해서 이동거리를 계속 변화시킴
// export function MyMotion3() {
//   const [currentX, setCurrentX] = useState(0);
//   const [currentY, setCurrentY] = useState(0);
//   const control = useAnimationControls();

//   function onClick(direction) {
//     control.start(direction);
//     if (direction == "left") {
//       setCurrentX((prev) => prev - 100);
//     } else if (direction == "right") {
//       setCurrentX((prev) => prev + 100);
//     } else if (direction == "up") {
//       setCurrentY((prev) => prev - 100);
//     } else {
//       setCurrentY((prev) => prev + 100);
//     }
//   }
//   const move = {
//     left: { x: currentX - 100 },
//     right: { x: currentX + 100 },
//     up: { y: currentY - 100 },
//     down: { y: currentY + 100 },
//   };
//   return (
//     <>
//       <Container>
//         <Box variants={move} animate={control} />
//       </Container>
//       <Btn $left="200px" $top="100px" onClick={() => onClick("left")}>
//         Left
//       </Btn>
//       <Btn $left="400px" $top="100px" onClick={() => onClick("right")}>
//         Right
//       </Btn>
//       <Btn $left="300px" $top="40px" onClick={() => onClick("up")}>
//         Up
//       </Btn>
//       <Btn $left="300px" $top="160px" onClick={() => onClick("down")}>
//         Down
//       </Btn>
//     </>
//   );
// }

// 애니메이션이 종료됐을때 현재위치를 저장하고 그 위치에서 다시 이동하는 방법
export function MyMotion3() {
  const [initPosition, setInitPosition] = useState({ x: 0, y: 0 });
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const boxRef = useRef();
  const control = useAnimationControls();

  function onClick(direction) {
    control.start(direction);
  }

  const move = {
    left: { x: currentX - 100 },
    right: { x: currentX + 100 },
    up: { y: currentY - 100 },
    down: { y: currentY + 100 },
  };

  useEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      console.log("Init Position (x, y):", rect.left, rect.top);
      setInitPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  function onComplete() {
    const rect = boxRef.current.getBoundingClientRect();
    console.log("Position (x, y):", rect.left, rect.top);
    setCurrentX(rect.left - initPosition.x);
    setCurrentY(rect.top - initPosition.y);
  }
  return (
    <>
      <Container>
        <Box
          variants={move}
          animate={control}
          ref={boxRef}
          onAnimationComplete={onComplete}
        />
      </Container>
      <Btn $left="200px" $top="100px" onClick={() => onClick("left")}>
        Left
      </Btn>
      <Btn $left="400px" $top="100px" onClick={() => onClick("right")}>
        Right
      </Btn>
      <Btn $left="300px" $top="40px" onClick={() => onClick("up")}>
        Up
      </Btn>
      <Btn $left="300px" $top="160px" onClick={() => onClick("down")}>
        Down
      </Btn>
    </>
  );
}
