import React from 'react'

const Score = (theEvilProps) => {
    return(
        <div className={theEvilProps.home}>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
          className={`${theEvilProps.home}__touchdown`}
          onClick = {theEvilProps.Score}
          >
            {theEvilProps.side} Touchdown
          </button>
          <button 
          className={`${theEvilProps.home}__fieldgoal`}
          onClick = {theEvilProps.Goal}
          >
            {theEvilProps.side} Field Goal
          </button>
        </div>
    )
}

export default Score