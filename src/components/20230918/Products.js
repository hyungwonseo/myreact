import { Outlet, useNavigate } from "react-router-dom";
import games from "./db/Data";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Card = styled.div`
  width: 180px;
  border: 2px solid dodgerblue;
  margin-bottom: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.p`
  margin-left: 10px;
`;

export function Products() {
  const navigate = useNavigate();
  function onClick(id) {
    // 상대경로는 '/'없이 작성함. 현재 주소뒤에 추가됨
    navigate(`${id}`);
    // 절대경로는 '/'로 시작되는 root이하 전체 주소를 적어야 함
    //navigate(`/products/${id}`);
  }
  function onChange() {}
  return (
    <>
      <h3>Games List</h3>
      <Container>
        {games.map((game, i) => (
          <Card key={game.id}>
            <div onClick={() => onClick(game.id)}>
              <Img src={game.image} />
              <Text>타이틀 : {game.title}</Text>
              <Text>장르 : {game.genre}</Text>
              <Text>가격 : {game.price}</Text>
            </div>
            <input type="checkbox" id={game.id} onChange={onChange} />
          </Card>
        ))}
      </Container>
    </>
  );
}
