import React from "react";
import { useLocation, Link } from "react-router-dom";
import Icon from "./Icon";
import { connect } from "../store";
import { calculateCycles } from "../store/actions/cycles";

const BottomMenu = ({ calculateCycles }) => {
    const active = useLocation().pathname;
    return (
        <footer className="Bottom-menu">
        <Link to="/settings">
            <div className={`Bottom-menu-tab ${active === "/settings" && 'Bottom-menu-tab_active'}`}>
                <Icon type="settings"/>
                <div className="Bottom-menu-tab__text">Настройки</div>
            </div>
        </Link>

        <Link to="/" onClick={calculateCycles}>
            <div className={`Bottom-menu-tab ${active === "/" && 'Bottom-menu-tab_active'}`}>
                <Icon type="cycles"/>
                <div className="Bottom-menu-tab__text">Циклы</div>
            </div>
        </Link>

        <Link to="/definechronotype">
            <div className={`Bottom-menu-tab ${active === "/definechronotype" && 'Bottom-menu-tab_active'}`}>
                <Icon type="chronotype"/>
                <div className="Bottom-menu-tab__text">Хронотип</div>
            </div>
        </Link>
        </footer>
    )
}

export default connect(false, { calculateCycles })(BottomMenu);