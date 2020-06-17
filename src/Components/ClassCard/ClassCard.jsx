import React from "react";
import "./ClassCard.css";
import thumbNailImage from "./thumbnail.png";

const ClassCard = (props) => {
  return (
    <div className="w3-card classCardContainer">
      <div className="w3-row">
        <div className="w3-quarter thumbnailImageContainer">
          <img src={thumbNailImage} className="thumbnailImage" alt="" />
        </div>
        <div className="w3-half classInfoContainer">
          <div className="classInfoHeading">
            <div className="className">{props.dataProps.title}</div>
            <div className="classTeacher">
              with {props.dataProps.instructorDetails.name}
            </div>
          </div>
          <div className="classInfoBody w3-row">
            <div className="w3-third">
              {props.dataProps.scheduledStart.substring(0, 10)}
            </div>
            <div className="w3-third">
              {props.dataProps.scheduledStart.substring(11, 16)}{" "}
              {props.dataProps.durationInMinutes}
            </div>
            <div className="w3-third">
              {props.dataProps.numBooked}/{props.dataProps.maxStudents} LEFT
            </div>
          </div>
          <div className="classInfoFooter">
            <span className="days">MON</span>
            <span className="days">MON</span>
            <span className="days">MON</span>
          </div>
        </div>
        <div className="w3-quarter ticket">
          <div className="classType">
            <div className="heading">{props.dataProps.classType}</div>
            <div className="type">Class Type</div>
          </div>
          <div className="classType">
            <div className="heading">{props.dataProps.level}</div>
            <div className="type">LEVEL</div>
          </div>
          <button
            className={` ${
              props.dataProps.status === "CANCELLED"
                ? "disabledButton"
                : "button"
            }`}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
            {props.dataProps.status === "CANCELLED" ? "Cancelled" : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClassCard;
