import constants from "../constants";
export const defineChronotype = payload => dispatch => dispatch({type: constants.DEFINE_CHRONOTYPE, payload});
export const clearChronotype = () => dispatch => dispatch({ type: constants.CLEAR_CHRONOTYPE });