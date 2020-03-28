import React from "react";


const CycleCard = ({ count, cycle, onClickHandler}) => (
    <div className="card" onClick={onClickHandler}>
        <span className="card__subtitle">Количество циклов: {count}</span>
        <h3 className="card__time">{cycle}</h3>
    </div>
);

export default CycleCard;