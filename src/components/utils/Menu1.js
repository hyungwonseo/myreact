import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 150px;
  height: 60px;
  /* border: 1px solid blue; */
  margin: 100px auto;
  line-height: 60px;
  text-align: center;
  &::before {
    content: "";
    width: 0;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightblue;
    transition: all 0.3s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
  &::after {
    content: "";
    width: 0;
    height: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: lightblue;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.2s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Menu = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export function Menu1() {
  return (
    <>
      <Container>
        <Menu>Menu</Menu>
      </Container>
    </>
  );
}
