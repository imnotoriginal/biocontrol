import { Component } from "react";
import { connect } from "../store";
import { calculateCycles } from "../store/actions/cycles";
import { alertMessage } from "../store/actions/message";

class StateController extends Component {
    componentDidMount() {
        this.props.calculateCycles();

        window.addEventListener('unload', () =>
            window.localStorage.setItem("app-state", JSON.stringify(this.props.state))
        );
    }

    initNotifications() {
        if (!("Notification" in window)) {
            this.props.alertMessage("This browser does not support desktop notification", 3000);
        }
        else if (Notification.permission === "granted") {
            const notification = new Notification("Hi there!");
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    var notification = new Notification("Hi there!");
                }
            });
        }
    }

    render() {
        return null;
    }
}

export default connect(state => ({state}), { calculateCycles, alertMessage })(StateController);