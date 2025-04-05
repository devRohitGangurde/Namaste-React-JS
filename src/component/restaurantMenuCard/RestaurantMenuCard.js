import { useState } from "react"
import ItemList from "../itemList/ItemList"

export default  RestaurantMenuCard = ({data,showItem,handleClick})=> {
    return(
        <div>
      <div className="h-5 bg-gray-200"></div>
      <div className=" mx-auto my-4 px-4 bg-white ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemList  itemData={data?.itemCards}/>}
      </div>
    </div>
    )
}

