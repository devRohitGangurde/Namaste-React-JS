import React from "react";
import "./RestorantCard.css";

const RestorantCard = (props) => {
  const{restroData} = props;
  const {name,areaName,imgUrl} = restroData;
  console.log(props)
  return (
    <div className="resto-card">
      <img
        className="image-style"
        src={imgUrl}
        alt="User Icon"
      />
      <div className="resto-content">
        <h2> {name}</h2>
        <h3> {areaName}</h3>
      </div>
    </div>
  );
};

export default RestorantCard;
