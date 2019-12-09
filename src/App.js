//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeam, setHomeTeam] = useState('Lions')
  const [awayTeam, setAwayTeam] = useState('Tigers')
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
   

  // React.useEffect(() => {
  //   setHomeTeam('Ravens')
  //   setRenderCounter(renderCounter + 1)
  // },[])

  let homeScoreClick = () => {
    console.log('homeScoreClick')
    setHomeScore(homeScore+6)
  }
  let awayScoreClick = () => {
    console.log('homeScoreClick')
    setAwayScore(awayScore+6)
  }
  let homeFgClick = () => {
    setHomeScore(homeScore+1)
  }
  let awayFgClick = () => {
    setAwayScore(awayScore+1)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
          className="homeButtons__touchdown"
          onClick = {homeScoreClick}
          >
            Home Touchdown
          </button>
          <button 
          className="homeButtons__fieldGoal"
          onClick = {homeFgClick}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button 
          className="awayButtons__touchdown"
          onClick = {awayScoreClick}
          >
            Away Touchdown
          </button>
          <button 
          className="awayButtons__fieldGoal"
          onClick = {awayFgClick}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
