import styled from "styled-components";

const StyleButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  line-height: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
`;

export function Button({ color, bgcolor, title }) {
  console.log("Button called!!");
  return (
    <>
      <StyleButton color={color} bgcolor={bgcolor}>
        {title}
      </StyleButton>
    </>
  );
}
