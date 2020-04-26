import { Component } from "react";
import { connect } from "../store";
import { calculateCycles } from "../store/actions/cycles";
import { alertMessage } from "../store/actions/message";
import Push from "push.js";

class StateController extends Component {
    componentDidMount() {
        this.props.calculateCycles();
        this.initNotifications();
        window.addEventListener('unload', () =>
            window.localStorage.setItem("app-state", JSON.stringify(this.props.state))
        );
    }

    initNotifications() {
        const { alertMessage } = this.props;
        if (!Push.Permission.has()) {
            Push.Permission.request(
                () => alertMessage('Уведомления активны', 3000),
                () => alertMessage('Уведомления отключены', 3000)
            );
        }
    }

    render() {
        return null;
    }
}

export default connect(state => ({state}), { calculateCycles, alertMessage })(StateController);