import React from "react";
import ReactDOM from "react-dom";
import carIcon from "../images/car-icon.svg";
import { useNavigate, useParams } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="animal-card">
      <img className="animal-img" src={"../images/" + props.img} alt="dog" />
      <div className="location-information">
        <img className="icon" src={carIcon} alt="car icon" />
        <p className="miles-away">{props.milesAway} mi</p>
        <p className="country">{props.country}</p>
      </div>
      <p className="disabilityTags">({props.disability})</p>
      <h4 className="estimatedMonthlyCost">Around ${props.cost}</h4>
    </div>
  );
}
