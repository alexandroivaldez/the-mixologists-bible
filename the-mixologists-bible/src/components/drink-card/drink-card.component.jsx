import React from 'react';
import "./drink-card.css";

const DrinkCard = ({recipes}) => {
    return (
        <div className="card">
            {console.log("TEST PROP: " + recipes.drinks[0])}
            <h1> Recipe Name </h1>
            <p> ID </p>
        </div>
    )
}

export default DrinkCard;