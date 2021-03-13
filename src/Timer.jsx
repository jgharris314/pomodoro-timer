import React from 'react'
import {minutesToDuration, secondsToDuration} from './utils/duration'


const Timer = ({values}) => {

  const getPercent = (percentFor, percentOf) =>{
    return 100 - Math.floor(percentFor/percentOf*100);
  }

  function setSession(){
    if(values.focusing){
      return "Focusing"
    } return "On Break"
  }

  function setRemaining(){
    if(values.focusing){
      return minutesToDuration(values.focusVal)
    } return minutesToDuration(values.breakVal)
  }

  const sessionStatus = setSession();
  const remaining = setRemaining();
  
    return (
        <>
        <div className={values.displayTimer ? null : "hidden"}>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{`${sessionStatus} for ${remaining} minutes`}</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
             {secondsToDuration(values.count)} remaining 
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  values.focusing
                  ? getPercent(values.count, values.focusVal * 60, )
                  : getPercent(values.count, values.breakVal * 60)
                } // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${
                          values.focusing
                          ? getPercent(values.count, values.focusVal * 60, )
                          : getPercent(values.count, values.breakVal * 60)
                 }%`
                 }} // TODO: Increase width % as elapsed time increases
              />
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Timer;