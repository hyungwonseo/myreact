import { Tab } from "./components/20230911/Tab";
import { Session1 } from "./components/20230911/Session1";
import { List } from "./components/20230911/List";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";

export default function App() {
  return (
    <>
      <PropsTest
        firstName={"철수"}
        score={{ math: 80, english: 90, history: 100 }}
      />
    </>
  );
}
