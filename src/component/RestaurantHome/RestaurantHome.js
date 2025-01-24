import React, { useState, useEffect, useRef } from "react";
import RestorantCard from "../Card/RestorantCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router";
import { getAllRestaurantAPI } from "../../utils/constants";
import useInternetStatus from "../../utils/useInternetStatus";
import { toast } from "react-toastify";
import leftIcon from "../../img/left.png";
import rightIcon from "../../img/right.png";
import MenuCard from "../MenuCard";

const RestaurantHome = () => {
  const [restroData, setRestroData] = useState();
  const [menuData, setMenuData] = useState();

  const [searchText, setSearchText] = useState();
  const [restroDataMain, setRestroDataMain] = useState();

  const isOnline = useInternetStatus();
  const scrollRef = useRef(null);
  const scrollMenuRef = useRef(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restorantResponse = await fetch(
      getAllRestaurantAPI("19.9974533", "73.78980229999999")
    );
    const jsonData = await restorantResponse.json();
    const restaurantData =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestroData(restaurantData);
    setRestroDataMain(restaurantData);

    const menuData =
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    console.log(menuData);

    setMenuData(menuData);
  };

  if (restroData?.length === 0) {
    return <h1>Loading...........</h1>;
  }

  if (!isOnline) {
    toast("No internet connection");
    return <h1>No internet connection...........</h1>;
  }
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" }); // Scroll left by one card width
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" }); // Scroll right by one card width
    }
  };
  const scrollMenuLeft = () => {
    if (scrollMenuRef.current) {
      scrollMenuRef.current.scrollBy({ left: -280, behavior: "smooth" }); // Scroll left by one card width
    }
  };

  const scrollMenuRight = () => {
    if (scrollMenuRef.current) {
      scrollMenuRef.current.scrollBy({ left: 280, behavior: "smooth" }); // Scroll right by one card width
    }
  };

  const TopRestaurant = () => {
    return (
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-black-200 pb-5">
            Top restaurant chains in Nashik
          </h1>
          <div className="flex">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 me-2 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <img src={leftIcon} alt="Logo" className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className=" w-8 h-8 rounded-full bg-gray-300  flex justify-center items-center"
            >
              <img src={rightIcon} alt="Logo" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {restroData?.length > 0 ? (
          <div
            className="flex overflow-x-auto overflow-y-scroll no-scrollbar"
            ref={scrollRef}
          >
            {restroData?.map((item) => {
              return (
                <Link
                  style={{ color: "#000" }}
                  key={item?.info?.id}
                  to={"/restaurant/" + item?.info?.id}
                >
                  <RestorantCard restroData={item} />
                </Link>
              );
            })}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    );
  };

  const MenuSlider = () => {
    return (
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-black-200 pb-5">
            What's on your mind?
          </h1>
          <div className="flex">
            <button
              onClick={scrollMenuLeft}
              className="w-8 h-8 me-2 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <img src={leftIcon} alt="Logo" className="w-4 h-4" />
            </button>
            <button
              onClick={scrollMenuRight}
              className=" w-8 h-8 rounded-full bg-gray-300  flex justify-center items-center"
            >
              <img src={rightIcon} alt="Logo" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {restroData?.length > 0 ? (
          <div
            className="flex overflow-x-auto overflow-y-scroll no-scrollbar"
            ref={scrollMenuRef}
          >
            {menuData?.map((item) => {
              return (
                <Link
                  style={{ color: "#000" }}
                  key={item?.info?.id}
                  to={"/restaurant/" + item?.info?.id}
                >
                  <MenuCard menuData={item} />
                </Link>
              );
            })}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 border-2 pt-5 pr-[170] pl-[170]">
      <MenuSlider />
      <div className="mt-10"></div>
      <TopRestaurant />
    </div>
  );
};

export default RestaurantHome;
