import constants from "../constants";
export const alertMessage = (text, timeout=1000) => dispatch => {
    setTimeout(dispatch, timeout, { type: constants.HIDE_MESSAGE });
    dispatch({ type: constants.ALERT_MESSAGE, payload: text});
}