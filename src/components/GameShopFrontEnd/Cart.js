import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { GameContext } from "./GameShop";
import { Purchase } from "./Purchase";
import { useNavigate } from "react-router-dom";

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
  height: calc(100%-2);
  margin: 1px;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
  width: 30px;
  height: 100%;
  background-color: teal;
  position: absolute;
  right: 0;
  text-align: center;
  line-height: 100px;
  border: none;
  cursor: pointer;
`;

export function Cart() {
  const { checkList, setCheckList, games } = useContext(GameContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newList, setNewList] = useState([]);
  const navigate = useNavigate();

  function onClick(e) {
    const temp = checkList.map((item) => {
      if (item.id === +e.target.id) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });
    setCheckList(temp);
  }

  function onClickBtn() {
    const temp = checkList.map((item) => {
      return { ...item, checked: false };
    });
    setCheckList(temp);
    navigate("/purchase", { state: { newList } });
  }

  useEffect(() => {
    setNewList(games.filter((g, i) => checkList[i].checked));
  }, [checkList, games]);

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < newList.length; i++) {
      price = price + newList[i].price;
    }
    setTotalPrice(price);
  }, [newList]);

  return (
    <>
      <Container>
        {newList.map((game) => (
          <Card key={game.id}>
            <Img src={game.image} />
            <div>
              <Text>타이틀 : {game.title}</Text>
              <Text>장르 : {game.genre}</Text>
              <Text>가격 : {game.price}원</Text>
            </div>
            <DeleteBtn id={game.id} onClick={onClick}>
              X
            </DeleteBtn>
          </Card>
        ))}
      </Container>
      <h3>총결제금액 : {totalPrice}원</h3>
      <button onClick={onClickBtn}>결제버튼</button>
    </>
  );
}
