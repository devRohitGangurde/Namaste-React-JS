import React from "react";
import "./RestorantCard.css";

const RestorantCard = (props, index) => {
  const { restroData } = props;
  return (
    <div className="pr-6 w-72">
      <div className="relative">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restroData?.info?.cloudinaryImageId
          }
          alt={restroData?.info.name}
          className="w-full h-48 object-cover rounded-t-lg rounded-b-lg"
        />

        <div className="h-15 absolute text-white font-bold text-lg px-4 py-2 rounded-b-lg w-full bottom-0 bg-gradient-to-t from-black to-transparent">
          {"20% OFF ABOVE RS 1799"}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{restroData?.info.name}</h3>
        <div className="flex items-center  mt-2 ">
          <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
          ⭐ 
          </div>
          <div className="text-sm">{restroData?.info.avgRating+" • "} </div>
          <div className="text-sm ml-1"> {restroData?.info?.sla.deliveryTime +" mins"}</div>
        </div>
        <p className="text-gray-500 text-sm mt-1">{restroData?.info?.cuisines?.join(" ")}</p>
        <p className="text-gray-400 text-sm">{restroData?.info?.locality}</p>
      </div>
      
    </div>
  );
};

export default RestorantCard;
