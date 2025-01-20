import { useState, useEffect } from "react";
import { getMenuAPIURL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(getMenuAPIURL('19.9974533', '73.78980229999999',resId));

    const restaurantData = await data.json();

    setRestaurantInfo(restaurantData?.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
