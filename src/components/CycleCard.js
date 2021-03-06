import React from "react";


const CycleCard = ({ count, cycle, onClickHandler}) => (
    <div className="card card_animated" onClick={onClickHandler}>
        <span className="card__subtitle">Количество циклов: {count}</span>
        <h3 className="card__time">{cycle.preparedTime}</h3>
    </div>
);

export default CycleCard;