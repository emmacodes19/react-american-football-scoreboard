//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { setTimeout } from "core-js";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const[HomeScore, setHomeScore] = useState(32);

  const[AwayScore, setAwayScore] = useState(32);

  // const [HappyPoints, setHappyPoints] = useState(100);
  // const[IsHappy, setIsHappy] = useState(true);
  // const winner = e => {
  //   setHappyPoints(IsHappy + 100);
  // };

  // const lost = e => {
  //   setHappyPoints(IsHappy - 100);
  //   setIsHappy(false);

  // }

  const [lightOn, setlightOn] = useState(true);
  setTimeout(() => {
    setlightOn(!lightOn)
  }, 2000)



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{HomeScore} </div>
            <div> The game is  {lightOn? 'ON' : 'OFF'} </div>
          </div>
          <div className="timer">00:03
          <div> The game is {lightOn? 'ON' : 'OFF'} </div>
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"> {AwayScore} </div>
            <div> The game is {lightOn? 'ON' : 'OFF'} </div>
            
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
      
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button onClick ={() => setHomeScore(HomeScore + 7)} 
          className="homeButtons__touchdown">Home Touchdown</button>
          

          <button onClick = {() => setHomeScore(HomeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = {() => setHomeScore(0)} className="homeButtons__fieldGoal">Reset for Lions </button>
        </div>

        <div className="awayButtons">
          <button  onClick ={() => setAwayScore(AwayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick ={() => setAwayScore(AwayScore + 3)}  className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {() => setAwayScore(0)} className="homeButtons__fieldGoal">Reset for Tigers </button>
        </div>
      </section>
    </div>
  );
}

export default App;
