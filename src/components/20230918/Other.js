import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const Card = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  border: 1px solid dodgerblue;
  margin: 10px 0;
  position: relative;
`;
const Img = styled.img`
  height: 100%;
  margin: 1px;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button``;

export function Other() {
  return (
    <>
      <Container>
        <Card>
          <Img />
          <div>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </div>
          <DeleteBtn></DeleteBtn>
        </Card>
      </Container>
      <h3>총결제금액 : </h3>
    </>
  );
}
