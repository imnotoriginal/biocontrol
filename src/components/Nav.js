import React from "react"
import { useLocation } from "react-router-dom";

const pageTitleMap = {
  "/": "циклы",
  "/settings": "настройки",
  "/definechronotype": "определение хронотипа"
}

const Nav = () => (
  <div className="navigation">
    <span className="navigation__title">{ pageTitleMap[useLocation().pathname] }</span>
  </div>
);

export default Nav;
