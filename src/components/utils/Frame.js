import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Menu = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background-color: beige;
  position: fixed;
  top: 0;
`;
const Box1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightcoral;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
const Box3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightcyan;
  position: relative;
`;
const Slide = styled.div`
  width: 1000px;
  height: 500px;
  background-color: lightgreen;
`;
const Left = styled.div`
  width: 600px;
  height: 400px;
  background-color: crimson;
`;
const Right = styled.div`
  width: 600px;
  height: 400px;
  background-color: dodgerblue;
`;
const Footer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: indigo;
`;

export function Frame() {
  return (
    <>
      <Container>
        <Menu>
          <h1>Menu</h1>
        </Menu>
        <Box1>
          <Slide>
            <h1>Slide 이미지</h1>
          </Slide>
        </Box1>
        <Box2>
          <Left>
            <h1>이미지</h1>
          </Left>
          <Right>
            <h1>설명</h1>
          </Right>
        </Box2>
        <Box3>
          <Footer>
            <h1>Footer</h1>
          </Footer>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            odio laoreet sollicitudin fringilla. In pellentesque purus in ipsum
            molestie, eget ultrices sapien hendrerit. Morbi scelerisque magna
            sit amet turpis iaculis sagittis. Pellentesque non auctor urna.
            Vestibulum auctor velit eu ullamcorper mollis. Aenean vehicula
            vulputate tellus vitae feugiat. Cras quis lorem dui. Donec imperdiet
            pharetra luctus. Nam hendrerit egestas massa, et pharetra magna
            pretium a. Aliquam massa odio, consequat nec auctor non, scelerisque
            vel erat. Vivamus ut dapibus est. Quisque convallis ex non hendrerit
            blandit. Phasellus malesuada mauris non efficitur facilisis. Quisque
            ut nunc ac urna vehicula venenatis.
          </h3>
          <br></br>
          <br></br>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            odio laoreet sollicitudin fringilla. In pellentesque purus in ipsum
            molestie, eget ultrices sapien hendrerit. Morbi scelerisque magna
            sit amet turpis iaculis sagittis. Pellentesque non auctor urna.
            Vestibulum auctor velit eu ullamcorper mollis. Aenean vehicula
            vulputate tellus vitae feugiat. Cras quis lorem dui. Donec imperdiet
            pharetra luctus. Nam hendrerit egestas massa, et pharetra magna
            pretium a. Aliquam massa odio, consequat nec auctor non, scelerisque
            vel erat. Vivamus ut dapibus est. Quisque convallis ex non hendrerit
            blandit. Phasellus malesuada mauris non efficitur facilisis. Quisque
            ut nunc ac urna vehicula venenatis.
          </h4>
        </Box3>
      </Container>
    </>
  );
}
