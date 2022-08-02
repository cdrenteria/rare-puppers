import React from "react";
import carIcon from '../images/car-icon.svg'

export default function Card(props) {
    return(
        <div className="animal-card">
            <img className="animal-img" src={"../images/" + props.img} />
            <div className="location-information">
                <img className="icon" src={carIcon}></img>
                <p className="miles-away">{props.milesAway} mi</p>
                <p className="country">{props.country}</p>
            </div>
            <p className="disabilityTags">({props.disability})</p>
            <h4 className="estimatedMonthlyCost">Around ${props.cost}</h4>
        </div>
    )
}