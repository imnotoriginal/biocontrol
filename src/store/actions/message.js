import constants from "../constants";
export const alertMessage = text => dispatch => {
    setTimeout(dispatch, 1000, { type: constants.HIDE_MESSAGE });
    dispatch({ type: constants.ALERT_MESSAGE, payload: text});
}