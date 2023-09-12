import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  console.log("CounterState start!!!!");

  const [count, setCount] = useState(0);
  // let count = 0;
  function minus() {
    setCount(count - 1);
    // count = count - 1;
    console.log("minus", count);
  }
  function plus() {
    setCount(count + 1);
    // count = count + 1;
    console.log("plus", count);
  }
  console.log("CounterState end!!!!", count);
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}
// 리액트 Hook (=후크)

// useState
// useEffect
// useRef
// useContext
// useMemo
// useReducer

// 객체의 디스트럭쳐링
// const {name, score} = 객체이름;
// name은 곧 객체의 key 이므로 spell이 정확해야함.

// 배열의 디스트럭쳐링
// const fruits = ["사과", "바나나", "망고"];
// const [apple, mango, banana] = fruits;

// useState함수의 리턴값은 배열이고 배열의 첫번째아이템은
// value, 두번째 아이템은 value를 수정하는 콜백함수이름

// useState함수의 리턴값은 [value, setter function]
