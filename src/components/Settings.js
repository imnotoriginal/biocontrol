import React from "react";
import { connect } from "../store";
import { setChronoCardAmount, setTimeToFallAsleep, setSingleCycleTime } from "../store/actions/settings";

const Settings = ({ chronoCardAmount, timeToFallAsleep, singleCycleTime, setChronoCardAmount, setTimeToFallAsleep, setSingleCycleTime, version }) => (
    <React.Fragment>
        <form onSubmit={e => e.preventDefault}>
            <label htmlFor="chronoCardAmount">Количество карт-циклов</label>
            <input type="number" value={chronoCardAmount} onChange={e => setChronoCardAmount(e.target.value)} id="chronoCardAmount" placeholder="0"/>

            <label htmlFor="timeToFallAsleep">Время для того, чтобы заснуть (мин)</label>
            <input type="number" value={timeToFallAsleep} onChange={e => setTimeToFallAsleep(e.target.value)} id="timeToFallAsleep" placeholder="0"/>

            <label htmlFor="singleCycleTime">Время 1 цикла (мин)</label>
            <input type="number" value={singleCycleTime} onChange={e => setSingleCycleTime(e.target.value)} id="singleCycleTime" placeholder="0"/>
        </form>
        <div>
            Версия: {version[0]}.{version[1]}.{version[2]}
        </div>
    </React.Fragment>
)

const mapStateToProps = state => ({
    chronoCardAmount: state.settings.chronoCardAmount,
    timeToFallAsleep: state.settings.timeToFallAsleep,
    singleCycleTime: state.settings.singleCycleTime,
    version: state.version
})

export default connect(mapStateToProps, { setChronoCardAmount, setTimeToFallAsleep, setSingleCycleTime })(Settings);
