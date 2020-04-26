import React from 'react'
import { connect } from "../store"
import { setTimeToWakeUp, calculateCycles } from "../store/actions/cycles"

const CyclesForm = ({ timeToWakeUp, setTimeToWakeUp, calculateCycles }) => (
    <div className="card">
        <h2 className="cycles__title">Время пробуждения:</h2>
        <form className="cycles-form">
            <label>
                <input type="number" className="cycles-form__form-control" value={timeToWakeUp.hours} onChange={e => setTimeToWakeUp({hours: e.target.value})} />
                Часов
            </label>
            <label>
                <input type="number" className="cycles-form__form-control" value={timeToWakeUp.minutes} onChange={e => setTimeToWakeUp({minutes: e.target.value})} />
                Минут
            </label>
        </form>
        <button onClick={calculateCycles}>Рассчитать</button>
    </div>
)

export default connect(state => ({ timeToWakeUp: state.cycles.timeToWakeUp }), { setTimeToWakeUp, calculateCycles })(CyclesForm);