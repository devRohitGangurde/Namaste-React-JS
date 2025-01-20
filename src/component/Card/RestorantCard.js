import React from "react";
import "./RestorantCard.css";

const RestorantCard = (props,index) => {
  const{restroData} = props;
  return (
    <div className="restaurant-card">
    <img
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restroData?.info?.cloudinaryImageId}
      alt={restroData?.info.name}
      className="restaurant-image"
    />
    <h3>{restroData?.info.name}</h3>
    <p className="restaurant-details">
      ⭐ {restroData?.info.avgRating} • {restroData?.info?.sla.deliveryTime+ " min"}
    </p>
    <p className="restaurant-cuisine">{restroData?.info?.cuisines?.join(' ')}</p>
    <p className="restaurant-location">{restroData?.info?.locality}</p>
  </div>
  );
};

export default RestorantCard;
