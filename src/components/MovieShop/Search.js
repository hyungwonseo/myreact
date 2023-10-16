import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import { searchKeywordMovies, genreList, getBackDropUrl } from './api';
import styled from 'styled-components';

const Container = styled.div`
  width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Card = styled.div`
  width: 280px;
  border: 2px solid dodgerblue;
  margin: 10px 0;
  font-size: 0.8rem;
  cursor: pointer;
`
const Img = styled.img`
  width: 100%;
`
const Text = styled.p`
  margin-left: 10px;
`
export function Search() {
  // Reat API로 전달된 파라미터 keyword값을 읽는다
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  // keyword를 이용하여 fetch함수를 실행한다
  const { data, isLoading } = useQuery(["searchMovies", keyword], 
          ()=>searchKeywordMovies(keyword));
  const navigate = useNavigate();

  function onClick(id) {
    navigate(`/products/${id}`);
  }
  function getGenre(array) {
    let str = "";
    array.forEach((a) => {
      const temp = genreList.find((g)=>g.id === +a);
      str = str + " " + temp.name;
    });
    return str;
  }
  return <>
    <Container>
      { !isLoading && data.results.map((movie, i)=>(
          <Card key={movie.id}>
            <div onClick={(e)=>onClick(movie.id)}>
              <Img src={getBackDropUrl(movie.backdrop_path)} />
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <Text>{movie.overview}</Text>
            </div>
          </Card>
        ))
      }      
    </Container>
  </>
}