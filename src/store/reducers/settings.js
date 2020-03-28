import constants from "../constants";
export default (state, action) => {
    switch(action.type) {
        case constants.SET_CHRONOCARDAMOUNT:
            return {...state, chronoCardAmount: action.payload}
        case constants.SET_TIMETOFALLASLEEP:
            return {...state, timeToFallAsleep: action.payload}
        case constants.SET_SINGLECYCLETIME:
            return {...state, singleCycleTime: action.payload}
        default: 
            return state
    }
}