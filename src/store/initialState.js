let state = {
    settings: {
        chronoCardAmount: 6,
        timeToFallAsleep: 30,
        singleCycleTime: 90,
    },
    cycles: {
        timeToWakeUp: {
            hours: 0,
            minutes: 0,
        },
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
    notification: {
        timeOutKey: 0,
    },
    debug: false,
    version: [1,0,0]
}

if (window && window.localStorage && !state.debug) {
    const savedState = JSON.parse(window.localStorage.getItem('app-state'));
    if ((savedState !== null) && (savedState.version !== undefined) && savedState.version[0] >= state.version[0]) {
        state = savedState;
    }
}

export default state;