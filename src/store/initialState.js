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
        timeoutKey: 0,
    },
    load: true,
    version: [1,0,2]
}

const checkVersions = (v1, v2) => {
    v1 = v1[0] * 100 + v1[1] * 10 + v1[2];
    v2 = v2[0] * 100 + v2[1] * 10 + v2[2];
    return v1 >= v2;
}

if (window && window.localStorage && state.load) {
    const savedState = JSON.parse(window.localStorage.getItem('app-state'));
    if (savedState !== null) {
        if ((savedState.version !== undefined) && checkVersions(savedState.version, state.version)) {
            state = savedState;
            console.log("[debug]: Load state from localStorage.")
        } else {
            console.log(`[debug]: Rewrite state to localStorage. Old app version was ${savedState.version ? savedState.version.join('.') : '[not installed]'}.`)
        }
    }
} else {
    console.log("[debug]: Didn't load state from localStorage because state.load flag is disabled.")
}

export default state;