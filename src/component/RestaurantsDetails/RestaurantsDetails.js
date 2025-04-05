import { useParams } from "react-router";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import MenuCard from "../MenuCard";
import RestaurantMenuCard from "../restaurantMenuCard/RestaurantMenuCard";
import { useState } from "react";
import Shimmer from "../Shimmer";

const RestaurantsDetails = () => {
  const { resId } = useParams();
  const restroInfo = useRestaurantMenu(resId);
  const name = restroInfo?.cards[2]?.card?.card?.info?.name;
  const cuisines = restroInfo?.cards[2]?.card?.card?.info?.cuisines;
  const areaName = restroInfo?.cards[2]?.card?.card?.info?.areaName;
  const avgRating = restroInfo?.cards[2]?.card?.card?.info?.avgRating;
  const totalRatings = restroInfo?.cards[2]?.card?.card?.info?.totalRatings;
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories =
    restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return restroInfo ? (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <div className="text-xs text-gray-400 mb-4">
        <span>Home / Nashik / </span>
        <span className="font-bold text-gray-800">{name}</span>
      </div>

      {/* Restaurant Info Card */}
      <div className="font-bold text-2xl my-6 ml-4">{name}</div>
      <div className=" bg-white rounded-br-3xl  rounded-bl-[32] px-5 pt-0 pb-5 bg-gradient-to-t from-[#dddde5] to-transparent">
        <div className="  border-black border bg-white rounded-2xl shadow-2xl p-5">
          <div className="flex justify-between">
            <div className="restaurant-info-left">
              <div className="font-bold">
                ⭐ <span>{avgRating}</span>{" "}
                <span className="rating-count">
                  ({totalRatings / 1000}k ratings)
                </span>
                <span className="separator">·</span> ₹400 for two
              </div>
              <div className="my-2">
                <a href="/" className="text-orange-600 font-bold">
                  {cuisines?.join(",")}
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="font-bold mr-5">Outlet</div>
            <div className="outlet-location">{areaName}</div>
          </div>
          <div className="flex">
            <span className="font-bold mt-2">25-30 mins</span>
          </div>
        </div>
      </div>

      {/* MENU HEADER STARTED */}
      <div className="font-light text-2xl my-6 ml-4 text-center">
        {"⚜️ MENU ⚜️"}
      </div>

      {categories?.map((item, index) => {
        return (
          <RestaurantMenuCard
            data={item?.card?.card}
            showItem={index === currentIndex ? true : false}
            handleClick={() => {
              setCurrentIndex(index);
            }}
          />
        );
      })}
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantsDetails;
