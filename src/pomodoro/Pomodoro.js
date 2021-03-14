import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import DurationAdjust from "../DurationAdjust.jsx";
import TimerControls from "../TimerControls.jsx";
import Timer from "../Timer.jsx";

function Pomodoro() {
  
  const initialState = {
    displayTimer: false,
    focusVal: 25,
    focusInc: 5,
    focusMin: 5,
    focusMax: 60,
    count: 1, 
    breakVal: 5,
    breakInc: 1,
    breakMin: 1,
    breakMax: 15,
    isRunning: false,
    focusing: true
  }

  const [values, setValues] = useState({...initialState})

  useInterval(() => {
     if(values.isRunning){
       setValues({...values, count: values.count - 1})
     
     if (values.count === 0 && values.focusing){
        setValues({...values, count: values.breakVal * 60, focusing: !values.focusing})
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
     }
     if (values.count === 0 && !values.focusing) {
        setValues({...values, count: values.focusVal * 60, focusing: !values.focusing})
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
     }
    }
     
  }, values.isRunning ? 1000 : null);

  return (
    <div className="pomodoro"> 
        <DurationAdjust values={values} setValues={setValues} />
        <TimerControls values={values} setValues={setValues} initialState={initialState}/>
        <Timer values={values}  />
    </div>
  );
}

export default Pomodoro;
