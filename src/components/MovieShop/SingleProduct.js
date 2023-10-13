import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovieDetailById, getBackDropUrl } from './api';
import { useQuery } from 'react-query';

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  margin: 20px;
  color: dodgerblue;
  text-align: center;
  position: relative;
`
const Back = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
`
const Img = styled.img`
  width: 100%;
`
const Content = styled.div`
  font-size: .9rem;
  line-height: 30px;
`
export function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["movies", `id=${id}`], 
    ()=>getMovieDetailById(id));
  if (!isLoading) {
    console.log(data);
  }    
  return <>     
    <Container>
      {
        isLoading ? <h1>Loading...</h1>
        : <>
        <Header>
          <h1>{data.title}</h1>
          <Back><Link to="/products">BACK</Link></Back>
        </Header>
        <Img src={getBackDropUrl(data.backdrop_path)} ></Img>
        <Content>
          <p>타이틀 : {data.title}</p>
          <p>장르 : {data.genres.map((d)=>d.name + " / ")}</p>
          <p>개봉일 : {data.release_date}</p>
          <p>상영시간 : {data.runtime}분</p>
          {data.homepage ? <a href={data.homepage}>{data.homepage}</a> : null}
          <p>{data.overview}</p>    
          <br />
          <Link to="/products">목록으로 돌아가기</Link>
          <br />
          <br />
          <br />      
        </Content></>
      }
    </Container>
  </>
}