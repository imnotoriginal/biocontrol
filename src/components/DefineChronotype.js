import React from "react";
import { connect } from "../store";
import { alertMessage } from "../store/actions/message";
import { defineChronotype, clearChronotype } from "../store/actions/definechronotype";
import ChronotypeInfo from "./ChronotypeInfo";

class DefineChronotype extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q0: 0,
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange({ target }) {
        this.setState({[target.name]: parseInt(target.value)});
    }

    onSubmit(e) {
        e.preventDefault();
        let validated = true;
        for(let key in this.state) {
            this.state[key] === 0 && (validated = false);
        }
        if(validated) {
            this.props.defineChronotype(this.state);
        } else {
            this.props.alertMessage('Не все поля заполнены!')
        }
    }

    render() {
        const { state, onInputChange, onSubmit } = this;
        const { clearChronotype, type } = this.props; 
        return (this.props.showTest ? (
            <form>
                <p>Трудно ли вам вставать рано утром?</p>
                <div className="form-group">
                    <p className="label"><input type="radio" name="q0" value="4" checked= {state.q0 === 4 } onChange={onInputChange}/> Да, почти всегда </p>
                    <p className="label"><input type="radio" name="q0" value="3" checked= {state.q0 === 3 } onChange={onInputChange}/> Иногда </p>
                    <p className="label"><input type="radio" name="q0" value="2" checked= {state.q0 === 2 } onChange={onInputChange}/> Редко </p>
                    <p className="label"><input type="radio" name="q0" value="1" checked= {state.q0 === 1 } onChange={onInputChange}/> Крайне редко </p>
                </div>
                <p>Если бы у вас была возможность выбора, в какое время вы ложились бы спать?</p>
                <div className="form-group">
                    <p className="label"><input type="radio" name="q1" value="4" checked= {state.q1 === 4 } onChange={onInputChange}/> Позже 1 часа ночи </p>
                    <p className="label"><input type="radio" name="q1" value="3" checked= {state.q1 === 3 } onChange={onInputChange}/> Около 23 часов </p>
                    <p className="label"><input type="radio" name="q1" value="2" checked= {state.q1 === 2 } onChange={onInputChange}/> Около 22 часов </p>
                    <p className="label"><input type="radio" name="q1" value="1" checked= {state.q1 === 1 } onChange={onInputChange}/> До 22 часов </p>
                </div>
                <p>Насколько вы голодны после пробуждения? </p>
                <div className="form-group">
                    <p className="label"><input type="radio" name="q2" value="4" checked= {state.q2 === 4 } onChange={onInputChange}/> Предпочитаю плотный завтрак </p>
                    <p className="label"><input type="radio" name="q2" value="3" checked= {state.q2 === 3 } onChange={onInputChange}/> Обычный завтрак </p>
                    <p className="label"><input type="radio" name="q2" value="2" checked= {state.q2 === 2 } onChange={onInputChange}/> Легкий завтрак </p>
                    <p className="label"><input type="radio" name="q2" value="1" checked= {state.q2 === 1 } onChange={onInputChange}/> Не голоден </p>
                </div>
                <p>От чего вам легче отказаться? </p>
                <div className="form-group">
                    <p className="label"><input type="radio" name="q3" value="3" checked= {state.q3 === 3 } onChange={onInputChange}/> От чая вечером </p>
                    <p className="label"><input type="radio" name="q3" value="2" checked= {state.q3 === 2 } onChange={onInputChange}/> От кофе/чая утром </p>
                </div>
                <p className="text-size-bug-fix">Насколько легко вы изменяете своим привычкам относительно принятия пищи во время отпуска? </p>
                <div className="form-group">
                    <p className="label"><input type="radio" name="q4" value="4" checked= {state.q4 === 4 } onChange={onInputChange}/> Очень легко </p>
                    <p className="label"><input type="radio" name="q4" value="3" checked= {state.q4 === 3 } onChange={onInputChange}/> Легко </p>
                    <p className="label"><input type="radio" name="q4" value="2" checked= {state.q4 === 2 } onChange={onInputChange}/> Трудно </p>
                    <p className="label"><input type="radio" name="q4" value="1" checked= {state.q4 === 1 } onChange={onInputChange}/> Не изменяются </p>
                </div>
                <button onClick={onSubmit}>Завершить</button>
            </form>
        ) : (
        <React.Fragment>
            <ChronotypeInfo type={type}/>
            <button onClick={clearChronotype} className="button_secondary">
                Пройти тест заново
            </button>
        </React.Fragment>))
    }
}

export default connect(state => state.chronotype, { alertMessage, defineChronotype, clearChronotype })(DefineChronotype);