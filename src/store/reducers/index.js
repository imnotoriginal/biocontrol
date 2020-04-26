import { combineReducers } from "../";
import settings from "./settings";
import cycles from "./cycles";
import message from "./message";
import chronotype from "./definechronotype";
import notification from "./notification";

export default combineReducers({
    settings,
    cycles,
    message,
    chronotype,
    notification
});