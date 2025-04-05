import React from "react";
import { MENU_IMAGE_BASE_URL } from "../../utils/constants";

const ItemList = ({ itemData }) => {
  return (
    <div>
      {itemData?.map((item) => {
        return (
          <div>
            <div key={item?.card?.info?.imageId} className="flex justify-between py-5 items-center">
              <div>
                <div className="flex">
                  {item?.card?.info?.isVeg && (
                    <h1 className="text-x font-semibold text-green-600">
                      {"Veg"}
                    </h1>
                  )}
                  <h1 style={{ 
                    color: item?.card?.info?.ribbon?.bottomBackgroundColor, 
                    background: `linear-gradient(to bottom, ${item?.card?.info?.ribbon?.textColor}, ${item?.card?.info?.ribbon?.textColor})`, // Gradient backgroun
                   }}  className="text-x font-semibold">
                    {item?.card?.info?.ribbon?.text || " "}
                  </h1>
                </div>

                <h3 className="text-x font-semibold">
                  {item?.card?.info?.name}
                </h3>

                <h3 className="text-x font-medium">
                  ₹
                  {item?.card?.info?.price ||
                    item?.card?.info?.defaultPrice / 100}
                </h3>

                <div className="flex items-center  mt-2 ">
                  <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                    ⭐
                  </div>
                  <div className="text-sm">
                    {item?.card?.info?.ratings?.aggregatedRating?.rating ||
                      5 + " • "}{" "}
                  </div>
                  <div className="text-sm ml-1">
                    {" ("}
                    {item?.card?.info?.ratings?.aggregatedRating?.rating
                      ?.ratingCountV2 || 5}
                    {")"}
                  </div>
                </div>

                <div className="text-sm font-normal mt-4 w-[450]">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="relative">
              <img
                src={MENU_IMAGE_BASE_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.imageId}
                className="w-[156] h-[144] object-fill rounded-t-lg rounded-b-lg"
              />
              <div className=" bg-white border px-4 py-1 rounded-lg absolute bottom-0 right-0 text-center left-1/2 transform -translate-x-1/2">
               <h1 className="text-x font-semibold text-green-600 align-middle ">
                      {"ADD"}
                    </h1>
                    </div>
                    </div>
            </div>
            <hr className="border-t border-gray-300 w-full" />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
