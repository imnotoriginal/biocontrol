import constants from "../constants";
export const setChronoCardAmount = chronoCardAmount => dispatch => dispatch({type: constants.SET_CHRONOCARDAMOUNT, payload: chronoCardAmount});
export const setTimeToFallAsleep = timeToFallAsleep => dispatch => dispatch({type: constants.SET_TIMETOFALLASLEEP, payload: timeToFallAsleep});
export const setSingleCycleTime = singleCycleTime => dispatch => dispatch({type: constants.SET_SINGLECYCLETIME, payload: singleCycleTime});