import React from "react";
import { connect } from "../store";
import { alertMessage } from "../store/actions/message";
import CycleCard from "./CycleCard";

const Cycles = ({ advices, alertMessage }) => {
    return (
        <>
            {advices.map((cycle, index) => (
                <CycleCard count={index+1} cycle={cycle} key={index} onClickHandler={() => alertMessage('Напоминание установленно')}/>
            ))}
        </>
    )
}

export default connect(state => ({ advices: state.cycles.advices }), { alertMessage })(Cycles);