import React from 'react';
import {minutesToDuration} from './utils/duration'

const DurationAdjust = ({values, setValues}) => {

  const boundaryCheck = (dur, min, max) => (dur > max ? max : dur < min ? min : dur);

  const focusHandler = ({target}) => {
    if (target.id === "minus" && !values.displayTimer) {
      const newValue = boundaryCheck(values.focusVal - values.focusInc, values.focusMin, values.focusMax)
      setValues({...values, focusVal: newValue})
    }
    if (target.id === "plus" && !values.displayTimer) {
      const newValue = boundaryCheck(values.focusVal + values.focusInc, values.focusMin, values.focusMax)
      setValues({...values, focusVal: newValue})
    }
  }

  const breakHandler = ({target}) => {
    if (target.id === "minus" && !values.displayTimer) {
      const newValue = boundaryCheck(values.breakVal - values.breakInc, values.breakMin, values.breakMax)
      setValues({...values, breakVal: newValue})
    }
    if (target.id === "plus" && !values.displayTimer){
      const newValue = boundaryCheck(values.breakVal  + values.breakInc, values.breakMin, values.breakMax)
      setValues({...values, breakVal: newValue})
    }
  }




return (
    <>
    <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(values.focusVal)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                id="minus"
                onClick={focusHandler}
              >
                <span className="oi oi-minus" id="minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                id="plus"
                onClick={focusHandler}
              >
                <span className="oi oi-plus" id="plus" />
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(values.breakVal)}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  id="minus"
                  onClick={breakHandler}
                >
                  <span className="oi oi-minus" id="minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  id="plus"
                  onClick={breakHandler}
                >
                  <span className="oi oi-plus" id="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
     </> 
)
}

export default DurationAdjust;