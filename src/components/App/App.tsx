import { useState } from 'react';
import {Votes, VoteType} from "../../types/votes"
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteStats from "../VoteStats/VoteStats"
import VoteOptions from "../VoteOptions/VoteOptions"
import Notification from "../Notification/Notification"
import css from "./App.module.css"

export default function App() {
  const [votes, setVotes]=useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0
  });
  const handleVote=(type: VoteType)=>{
    setVotes((prevVotes)=>({
      ...prevVotes,
      [type]: prevVotes[type]+1,
    }));
  };
  const resertVotes=()=>{
    setVotes({
      good: 0,
	    neutral: 0,
	    bad: 0
    });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  console.log(totalVotes);
  console.log(positiveRate)
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions 
        onVote={handleVote}
        onReset={resertVotes}
        canReset={totalVotes > 0} />
        {totalVotes>0?<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> :
        <Notification />}
      </div>
    </>
  );
}
