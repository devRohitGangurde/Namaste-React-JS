import React, { useState,useEffect } from "react";
import RestorantCard from "../Card/RestorantCard";
import Searchbar from "../SearchBar/Searchbar";
import "./Body.css";
import Shimmer from "../Shimmer";

const Body = () => {
  const [restroData, setRestroData] = useState();
  const [searchText, setSearchText] = useState();
  const [restroDataMain, setRestroDataMain] = useState();



  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () =>{
    const restorantResponse = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=11.01420&lng=76.99410&str=Biryani&trackingId=32f61ce5-07f9-8d52-8e27-754807660a27&submitAction=ENTER&queryUniqueId=7e0677ac-7cc2-9bac-92bf-9511eebfe7e8")
    const data = await restorantResponse.json();
    const myData=data.data.cards[1].groupedCard.cardGroupMap.DISH.cards
    setRestroData(myData)
    setRestroDataMain(myData)
  }
  
  if (restroData?.length===0){
    return<h1>Loading...........</h1>
  }

  return (
    <div>
       
      <Searchbar onSearchBtnPress={(search)=>{
        console.log(search)
        setSearchText(search)
        if(search.length===0){
          setRestroData(restroDataMain)
        }
      }}/>
      <button
        className="top-rated-resto"
        onClick={() => {

          const filterData = restroDataMain?.filter((item) => {
            return (
              typeof item?.card?.card?.restaurant?.info?.name === "string" &&
              item?.card?.card?.restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
          });
          setRestroData(filterData);

        }}
      >
       Search 
      </button>
      {/* <button
        className="top-rated-resto"
        onClick={() => {
          const topRatedHotel = restroData.filter((res) => {
            return res.rating > 4;
          });
          setRestroData(topRatedHotel);
        }}
      >
        Top rated Hotel
      </button> */}
      {restroData?.length>0 ?
      <div className="restaurant-grid">
        {restroData?.map((item) => {
          return <RestorantCard restroData={item} />;
        })}
      </div>
      :<Shimmer/>}
    </div>
  );
};

export default Body;
