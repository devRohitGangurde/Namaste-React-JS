import React from "react";
import "./RestorantCard.css";

const RestorantCard = (props,index) => {
  const{restroData} = props;
  return (
    <div className="restaurant-card">
    <img
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restroData?.card?.card?.restaurant?.info?.cloudinaryImageId}
      alt={restroData?.card?.card?.restaurant?.info?.name}
      className="restaurant-image"
    />
    {restroData?.card?.card?.restaurant?.info.offer && <div className="offer-tag">{restroData?.card?.card?.restaurant?.info.offer}</div>}
    <h3>{restroData?.card?.card?.restaurant?.info?.name}</h3>
    <p className="restaurant-details">
      ⭐ {restroData?.card?.card?.restaurant?.info?.avgRating} • {restroData?.card?.card?.restaurant?.info?.sla.deliveryTime+ " min"}
    </p>
    <p className="restaurant-cuisine">{restroData?.card?.card?.restaurant?.info?.cuisines?.join(' ')}</p>
    <p className="restaurant-location">{restroData?.card?.card?.restaurant?.info?.locality}</p>
  </div>
  );
};

export default RestorantCard;
