import constants from "../constants"
import Push from "push.js"

export const planNotification = (time) => (dispatch, state) => {
    clearTimeout(state.notification.timeoutKey);
    console.log(`[debug]: Notification planned. Timeout param equials ${time / 1000} seconds.`);
    const timeoutKey = setTimeout(() => Push.create("Время готовиться ко сну!", {
        body: "Bio control app",
        vibrate: true,
        requireInteraction: true
    }), time)

    dispatch({ type: constants.SET_NOTIFICATION_KEY, payload: timeoutKey });
}