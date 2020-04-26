import constants from "../constants"

export default (state, action) => {
    switch (action.type) {
        case constants.SET_NOTIFICATION_KEY:
            return {...state, timeoutKey: action.payload }
        default:
            return state
    }
}