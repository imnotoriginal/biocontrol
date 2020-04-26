import React from "react";
import { connect } from "../store";
import { alertMessage } from "../store/actions/message";
import { planNotification } from "../store/actions/notification";
import CycleCard from "./CycleCard";

const Cycles = ({ advices, alertMessage, planNotification }) => {
    return (
        <>
            {advices.map((cycle, index) => (
                <CycleCard count={index + 1} cycle={cycle} key={index} onClickHandler={() => {
                    planNotification(cycle.timeout)
                    alertMessage("Уведомление устaновлено");
                }} />
            ))}
        </>
    )
}

export default connect(state => ({ advices: state.cycles.advices }), { alertMessage, planNotification })(Cycles);