import constants from "../constants"
import Push from "push.js"

export const setNotificationKey = key => dispatch => dispatch({ type: constants.SET_NOTIFICATION_KEY, payload: key })
export const planNotification = (time) => (dispatch, state) => {
    clearTimeout(state.notification.timeOutKey);
    const timeOutKey = setTimeout(() => Push.create("Время готовиться ко сну!", {
        body: "Bio control app",
        vibrate: true,
        requireInteraction: true
    }), time)

    setNotificationKey(timeOutKey);
}