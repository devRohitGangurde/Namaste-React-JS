import React from "react";
import { MENU_IMAGE_BASE_URL } from "../utils/constants";

const MenuCard = (props, index) => {
  const { menuData } = props;
  console.log(menuData?.imageId)
  return (
    <div className="pr-6 w-[144]">
      <div>
        <img
          src={
            MENU_IMAGE_BASE_URL+menuData?.imageId
          }
          alt={menuData?.imageId}
          className="w-144 h-180"
        />

      </div>
      
    </div>
  );
};

export default MenuCard;
