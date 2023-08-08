import React from "react";
import SvgComponent from "../components/CardSVG";

export default function Card(props) {
  return (
    <>
      <div className="card-content">
        <img
          src={`images/${props.imgURL}`}
          alt=""
          className="card-content-image"
        />
        <div className="card-content-location">
          <div className="card-content-location-description">
            <SvgComponent />
            <p className="card-content-location-description-p">
              {props.location}
            </p>
            <a href={props.gMapLink}>View on Google Maps</a>
          </div>
          <div className="card-content-description">
            <h1 className="card-content-description-title">{props.title}</h1>
            <p className="card-content-description-date">
              {props.startDate} - {props.endDate}
            </p>
            <p className="card-content-description-info">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
