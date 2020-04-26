import constants from "../constants";
export const calculateCycles = () => dispatch => dispatch({ type: constants.CALCULATE_CYCLES, payload: null })
export const setTimeToWakeUp = time => dispatch => dispatch({ type: constants.SET_TIME_TO_GET_UP, payload: time })