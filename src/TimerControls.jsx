import React from "react"
import classNames from "./utils/class-names";


const TimerControls = ({values, setValues, initialState}) => {
    
    function playPause({target}) {
      target.children[0].className === 'oi oi-media-play' && !values.displayTimer
       ? setValues({...values , isRunning: !values.isRunning, count: values.focusVal * 60, displayTimer: true})
       : setValues({...values, isRunning: !values.isRunning})
      }
      
      function stopTimer() {
        if(values.displayTimer){ 
          setValues({...initialState})
        }
      }

    return (
        <>
        <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !values.isRunning,
                  "oi-media-pause": values.isRunning,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={stopTimer}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
        </div>
        </>
    )

}

export default TimerControls;