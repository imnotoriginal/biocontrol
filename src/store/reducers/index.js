import { combineReducers } from "../";
import settings from "./settings";
import cycles from "./cycles";
import message from "./message";
import chronotype from "./definechronotype";

export default combineReducers({
    settings,
    cycles,
    message,
    chronotype
});