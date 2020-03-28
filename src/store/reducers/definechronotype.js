import constants from "../constants";
export default (state, action) => {
    switch(action.type) {
        case constants.DEFINE_CHRONOTYPE:
            let sum = 0;
            let type= "";
            for(let key in action.payload) {
                sum += action.payload[key];
            }
            if(sum <= 10) {
                type="lark"
            } else if(sum <= 15) {
                type = "pigeon"
            } else {
                type = "owl"
            }
            return {...state, showTest: false, type};
        case constants.CLEAR_CHRONOTYPE:
            return {...state, showTest: true, type: null}
        default:
            return state;
    }
}
