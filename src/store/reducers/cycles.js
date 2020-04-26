import constants from "../constants";
import { sub as subtractDates } from "date-fns"

const preparedTime = date => {
    date = [date.getHours(), date.getMinutes()];
    return `${date[0] < 10 ? "0"+date[0] : date[0]}:${date[1] < 10 ? "0"+date[1] : date[1]}`;
}

const calculateDuration = (i, config) => {
    const { singleCycleTime, timeToFallAsleep } = config;
    let minutes = (i+1) * (parseInt(singleCycleTime) || 0) + (parseInt(timeToFallAsleep) || 0);
    let hours = 0;

    if(minutes > 59) {
        hours += Math.round(minutes / 60);
        minutes = minutes % 60;
    }

    return  { hours, minutes }
}

const getAdvice = (i, config) => {
    const { hours, minutes } = config.timeToWakeUp;
    const wakeUpDate = new Date();
    wakeUpDate.setHours(hours);
    wakeUpDate.setMinutes(minutes);

    const duration = calculateDuration(i, config);
    const goToSleepDate = subtractDates(wakeUpDate, duration)

    return preparedTime(goToSleepDate);
}

export default (state, action, globalState) => {
    switch(action.type) {
        case constants.CALCULATE_CYCLES:

            const count = parseInt(globalState.settings.chronoCardAmount) || 0;
            const config = {
                singleCycleTime: globalState.settings.singleCycleTime,
                timeToFallAsleep: globalState.settings.timeToFallAsleep,
                timeToWakeUp: state.timeToWakeUp
            }
            const advices = [];
            for (let i = 0; i < count; i++) {
                advices.push(getAdvice(i, config));
            }

            return { ...state, advices }

        case constants.SET_TIME_TO_GET_UP:

            return {
                ...state,
                timeToWakeUp: {
                    hours: action.payload.hours === undefined ? state.timeToWakeUp.hours : action.payload.hours,
                    minutes: action.payload.minutes === undefined ? state.timeToWakeUp.minutes : action.payload.minutes
                }
            }

        default:
            return state;
    }
}