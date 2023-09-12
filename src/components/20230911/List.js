import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => (props.isActive ? "orange" : props.fontColor)};
`;

const TitleBlue = styled(Title)`
  color: blue;
`;

const Photo = styled.img`
  border-radius: 50%;
`;

export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Lamarr",
    imageUrl:
      "https://i.imgur.com/WohslsL_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    imageSize: 90,
  };
  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => (
          <Title fontColor="blue">{p.title}</Title>
        ))}
      </ul>
      <Container>
        <Title fontColor="green" isActive={true}>
          {user.name}
        </Title>
        <Photo src={user.imageUrl} />
      </Container>
    </>
  );
}
