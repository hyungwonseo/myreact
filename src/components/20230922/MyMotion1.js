import styled from "styled-components";
import { motion } from "framer-motion";

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
// 애니메이션 세팅을 한 객체를 Framer-motion에서는 Variant라고 부름
const animate1 = {
  start: {
    scale: 1,
    x: 500,
    transition: { duration: 1, type: "spring", damping: 9 },
  },
  end: {
    scale: 1,
    transition: { duration: 1, type: "spring", damping: 9, delay: 1 },
  },
  round: {
    scale: 1,
    borderRadius: "50%",
    transition: { duration: 1, type: "spring", damping: 9, delay: 1 },
  },
  leftMove: {
    scale: 1,
    x: -500,
    rotateZ: -720,
    transition: { duration: 2, type: "spring", delay: 1 },
  },
};
export function MyMotion1() {
  return (
    <>
      <Container>
        <Box variants={animate1} initial="start" animate="leftMove"></Box>
      </Container>
    </>
  );
}
