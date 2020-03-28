let state = {
    settings: {
        chronoCardAmount: 6,
        timeToFallAsleep: 30,
        singleCycleTime: 90,
    },
    cycles: {
        lastTimeCheckUp: 0,
        advices: [],
    },
    chronotype: {
        type: null,
        showTest: true,
    },
    message: {
        text: "",
        show: false
    },
    debug: false,
}

if(window && window.localStorage && !state.debug) {
    const savedState = window.localStorage.getItem('app-state');
    if(savedState !== null) state = JSON.parse(savedState);
}

export default state;