import React from "react";

const Button = ({ children, onClick, large=false }) => (
    <button className={`button ${large && 'button_large'}`} onClick={onClick}>
        <span className="button-body">
            {children}
        </span>
    </button>
)

export default Button;