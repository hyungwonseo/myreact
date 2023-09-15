import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, lightblue, dodgerblue);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding-top: 5px;
  padding-right: 30px;
`;
const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function OpenWeather({ cityName }) {
  const API_KEY = "0f9dadad923c3b8044765233ab93226e";
  const API_KEY_NINJA = "uvS/Vd5ZkGdHe8VMWc6Bmw==ZAOqpKgaLOPieexT";

  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  console.log("렌더링");
  // useEffect() 후크
  // 1. 특정한 state의 변화에만 실행되는 코드를 내부에 정의할 수 있음
  // 2. 컴포넌트가 최초에 로딩될때 딱 한번만 실행되는 코드를 정의할 수 있음
  // 2번째 파라미터에 배열형식으로 의존하는 state를 결정할 수 있음
  // 빈 배열([])을 사용하면 최초 로딩시 딱 한번만 실행됨
  useEffect(() => {
    if (cityName) {
      // 닌자한테 해당 도시의 위도,경도를 요청
      const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
      fetch(urlToNinja, {
        headers: {
          "X-Api-Key": API_KEY_NINJA,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const position = {
            coords: {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
            },
          };
          geoOK(position);
        })
        .catch((error) => {
          geoError(error);
        });
    } else {
      // 특정도시 이름을 입력하지 않았으므로 그냥 현재 위치를 요청
      navigator.geolocation.getCurrentPosition(geoOK, geoError);
    }
  }, []);

  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data.name);
        setTemp(parseInt(data.main.temp));
        setIcon(data.weather[0].icon);
        setWeather(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      });
  }
  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
