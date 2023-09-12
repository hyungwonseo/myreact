import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const persons = [
  { name: "Steve", job: "programmer", country: "대한민국" },
  { name: "Tom", job: "student", country: "USA" },
  { name: "Adrian", job: "engineer", country: "France" },
  { name: "Max", job: "painter", country: "Germany" },
];

const colors = ["lightgreen", "teal", "lightgrey", "khaki"];

export function AvatarList() {
  return (
    <>
      <Container>
        {persons.map((p, i) => (
          <Avatar bgcolor={colors[i]} person={p} />
        ))}
      </Container>
    </>
  );
}
