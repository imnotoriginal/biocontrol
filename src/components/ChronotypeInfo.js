import React from "react";

const data = {
    name: {
        lark: "Жаворонок",
        pigeon: "Голубь",
        owl: "Сова" 
    },
    timeToGetUp: {
        lark: "4-6ч",
        pigeon: "6-8ч",
        owl: "8-10 и позднее" 
    },
    timeToFallAsleep: {
        lark: "20-22ч",
        pigeon: "22-24ч",
        owl: "24ч и позже" 
    },
    highActivity: {
        lark: "6-12ч  и с 19ч",
        pigeon: "10-12ч и 16-18ч",
        owl: "после 16" 
    },
    meals: {
        lark: [
            "4-8ч"
        ],
        pigeon: [
            "6-10ч"
        ],
        owl: [
            "8-12ч"
        ] 
    }
}

export default ({ type }) => (
    <div className="block">
        <div className="block__title">
            Хронотип: {data.name[type]}
        </div>
        <div className="block__text">
            Подходящее время для пробуждения: <span className="block__value">{data.timeToGetUp[type]}</span>
        </div>
        <div className="block__text">
            Подходящее время для засыпания: <span className="block__value">{data.timeToFallAsleep[type]}</span>
        </div>
        <div className="block__text">
            Время наибольшей активности: <span className="block__value">{data.highActivity[type]}</span>
        </div>
        <div className="block__text">
            Подходящее время для завтрака: <span className="block__value">{data.meals[type][0]}</span>
        </div>
    </div>
);