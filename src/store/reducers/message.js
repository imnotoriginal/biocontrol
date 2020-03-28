import constants from "../constants";
export default (state, action) => {
    switch(action.type) {
        case constants.ALERT_MESSAGE:
            return { ...state, text: action.payload, show: true};
        case constants.HIDE_MESSAGE:
                return { ...state, show: false};
        default:
            return state;
    }
}