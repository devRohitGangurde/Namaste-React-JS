import React from "react";
import RestorantCard from "../Card/RestorantCard";
import Searchbar from "../SearchBar/Searchbar";
import "./Body.css";
import RestroData from "../../mockdata/RestorantMock.json";
 
const Body = () => {
  return (
    <div>
      <Searchbar />
      <div className="body-container">
        {RestroData.map((item) => {
          return <RestorantCard restroData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
