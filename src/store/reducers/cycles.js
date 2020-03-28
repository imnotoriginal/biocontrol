import constants from "../constants";

const preparedTime = date => {
    date = [date.getHours(), date.getMinutes()];
    return `${date[0] < 10 ? "0"+date[0] : date[0]}:${date[1] < 10 ? "0"+date[1] : date[1]}`;
}

const getAdvice = (i, singleCycleTime, timeToFallAsleep) => {
    const endDate = new Date();
    let minutes = endDate.getMinutes() + (i+1) * (parseInt(singleCycleTime) || 0) + (parseInt(timeToFallAsleep) || 0);
    let hours = endDate.getHours();

    if(minutes > 59) {
        hours += Math.round(minutes / 60);
        minutes = minutes % 60;
    }

    endDate.setHours(hours);
    endDate.setMinutes(minutes);
    return preparedTime(endDate);
}

export default (state, action, globalState) => {
    switch(action.type) {
        case constants.CALCULATE_CYCLES:
            const advices = [];
            const date = new Date();
            const currentTime = [date.getHours(), date.getMinutes()];
            const count = parseInt(globalState.settings.chronoCardAmount) || 0;

            for(let i = 0; i < count; i++) {
                advices.push(getAdvice(i, globalState.settings.singleCycleTime, globalState.settings.timeToFallAsleep))
            }

            return {
                advices,
                lastTimeCheckUp: currentTime,
            }
        default:
            return state;
    }
}