import { Component } from "react";
import { connect } from "../store";
import { calculateCycles } from "../store/actions/cycles";

class StateController extends Component {
    componentDidMount() {
        this.props.calculateCycles();
        window.addEventListener('unload', () => 
            window.localStorage.setItem("app-state", JSON.stringify(this.props.state))
        );
    }

    render() {
        return null;
    }
}

export default connect(state => ({state}), { calculateCycles })(StateController);