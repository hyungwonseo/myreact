import { Tab } from "./components/20230911/Tab";
import { Session1 } from "./components/20230911/Session1";
import { List } from "./components/20230911/List";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";
import { CounterState } from "./components/20230912/CounterState";
import { Home } from "./components/20230913/Home";
import { createGlobalStyle } from "styled-components";
import { Gallery } from "./components/20230914/Gallery";
import { OpenWeather } from "./components/20230914/OpenWeather";
import { MyRef } from "./components/20230915/MyRef";
import { MyRouter } from "./components/20230915/MyRouter";
import { GameShop } from "./components/20230918/GameShop";
import { SlideBox } from "./components/utils/SlideBox";
import { UseContext } from "./components/20230919/UseContext";
import { Frame } from "./components/utils/Frame";
import { Grid } from "./components/utils/Grid";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: Poppins, GmarketSansMedium;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Grid />
    </>
  );
}
