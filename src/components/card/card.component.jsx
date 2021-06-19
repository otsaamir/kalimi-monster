import React from "react";
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.information.id}?set=set2&size=180x180`} alt={props.information.name} />
        <h2>{props.information.name}</h2>
        <p>{props.information.email}</p>
    </div>
);