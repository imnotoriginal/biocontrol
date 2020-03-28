import React from "react";
import { connect } from "../store";
import { alertMessage } from "../store/actions/message";
import CycleCard from "./CycleCard";

const copyText = text => {
    const inputElement = document.createElement('input');
    inputElement.value = text;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
}

const Cycles = ({cycles, alertMessage}) => {
    return (
        <div>
            {cycles.advices.map((cycle, index) => (
                <CycleCard count={index+1} cycle={cycle} key={index} onClickHandler={() => { copyText(cycle); alertMessage('Скопировано')}}/>
            ))}
        </div>
    )
}

export default connect(state => ({cycles: state.cycles}), { alertMessage })(Cycles);