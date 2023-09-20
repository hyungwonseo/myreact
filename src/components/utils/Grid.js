import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const Box = styled.div`
  width: 100%;
  height: 100px;
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  border: 1px solid lightblue;
`;

export function Grid() {
  return (
    <>
      <Container>
        <Box col="span 1" row="span 1">
          1
        </Box>
        <Box col="span 1" row="span 1">
          2
        </Box>
        <Box col="span 2" row="span 2">
          3
        </Box>
        <Box col="span 1" row="span 1">
          4
        </Box>
        <Box col="span 1" row="span 1">
          5
        </Box>
        <Box col="span 1" row="span 3">
          6
        </Box>
        <Box col="span 1" row="span 1">
          7
        </Box>
        <Box col="span 1" row="span 1">
          8
        </Box>
        <Box col="span 1" row="span 1">
          9
        </Box>
        <Box col="span 1" row="span 1">
          10
        </Box>
        <Box col="span 1" row="span 1">
          11
        </Box>
        <Box col="span 1" row="span 1">
          12
        </Box>
        <Box col="span 1" row="span 1">
          13
        </Box>
        <Box col="span 1" row="span 1">
          14
        </Box>
        <Box col="span 1" row="span 1">
          15
        </Box>
        <Box col="span 1" row="span 1">
          16
        </Box>
      </Container>
    </>
  );
}
