import React from "react";
import { connect } from "../store";

const Message = ({text, show}) => (
    <div className={`message ${show ? 'message_shown' : 'message_hidden'}`}>{ text }</div>
)

export default connect(state => state.message)(Message);

