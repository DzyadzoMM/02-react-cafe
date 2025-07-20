import CafeInfo from "../CafeInfo/CafeInfo"
import VoteStats from "../VoteStats/VoteStats"
import VoteOptions from "../VoteOptions/VoteOptions"
import css from "./App.module.css"



export default function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
      </div>
    </>
  );
}
