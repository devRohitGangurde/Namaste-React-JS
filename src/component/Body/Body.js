import React, { useState, useEffect } from "react";
import RestorantCard from "../Card/RestorantCard";
import Searchbar from "../SearchBar/Searchbar";
import "./Body.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router";
import { getAllRestaurantAPI } from "../../utils/constants";
import useInternetStatus from "../../utils/useInternetStatus";
import { toast } from 'react-toastify';

const Body = () => {
  const [restroData, setRestroData] = useState();
  const [searchText, setSearchText] = useState();
  const [restroDataMain, setRestroDataMain] = useState();

  const isOnline = useInternetStatus()


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
  };

  if (restroData?.length === 0) {
    return <h1>Loading...........</h1>;
  }

  if (!isOnline) {
    toast('No internet connection')
    return <h1>No internet connection...........</h1>;
  }
  return (
    <div>
       
      <Searchbar
        onSearchBtnPress={(search) => {
          setSearchText(search);
          if (search.length === 0) {
            setRestroData(restroDataMain);
          }
        }}
      />
      <button
        className="top-rated-resto"
        onClick={() => {
          const filterData = restroDataMain?.filter((item) => {
            console.log("Filter",item)
            return (
              typeof item?.info.name === "string" &&
              item?.info.name 
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );
          });
          setRestroData(filterData);
        }}
      >
        Search
      </button>
      {restroData?.length > 0 ? (
        <div className="restaurant-grid">
          {restroData?.map((item) => {
            return (
              <Link style={{ color: '#000' }} key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
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

export default Body;
