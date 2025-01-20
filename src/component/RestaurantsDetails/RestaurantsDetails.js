
import { useParams } from "react-router";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import './RestaurantsDetails.css'; // Import the CSS file

const RestaurantsDetails = () => {
  const {resId}= useParams();
  const restroInfo = useRestaurantMenu(resId)
  const name = restroInfo?.cards[2]?.card?.card?.info?.name;
  const cuisines = restroInfo?.cards[2]?.card?.card?.info?.cuisines;
  const areaName = restroInfo?.cards[2]?.card?.card?.info?.areaName;
  const avgRating = restroInfo?.cards[2]?.card?.card?.info?.avgRating;
  const totalRatings = restroInfo?.cards[2]?.card?.card?.info?.totalRatings;


  return(
    <div className="restaurant-details-container">
    {/* Breadcrumb */}
    <div className="breadcrumb">
      <span>Home / Nashik / </span>
      <span className="breadcrumb-highlight">{name}</span>
    </div>

    {/* Restaurant Info Card */}
    <div className="restaurant-card">
      <h1 className="restaurant-name">{name}</h1>
      <div className="restaurant-info">
        <div className="restaurant-info-left">
          <div className="restaurant-rating">
            ⭐ <span>{avgRating}</span> <span className="rating-count">({totalRatings/1000}k ratings)</span>
            <span className="separator">·</span> ₹400 for two
          </div>
          <div className="restaurant-cuisines">
            <a href="/" className="cuisine-link">{cuisines?.join(',')}</a>
          </div>
        </div>
        <div className="restaurant-outlet">
          <div className="outlet-title">Outlet</div>
          <div className="outlet-location">{areaName}</div>
        </div>
      </div>
      <div className="restaurant-time">
        <span>25-30 mins</span>
      </div>
    </div>

    {/* Deals Section */}
    <h2 className="deals-title">Deals for you</h2>
    <div className="deals-container">
      <div className="deal-card">
        <div className="deal-icon">%</div>
        <div>
          <div className="deal-text">30% Off Upto ₹75</div>
          <div className="deal-code">USE TRYNEW</div>
        </div>
      </div>
      <div className="deal-card">
        <div className="deal-icon">%</div>
        <div>
          <div className="deal-text">Flat ₹125 Off</div>
          <div className="deal-code">USE FLATDEAL</div>
        </div>
      </div>
    </div>

    {/* Menu Button */}
    <div className="menu-button-container">
      <button className="menu-button">MENU</button>
    </div>
  </div>
  )
};

export default RestaurantsDetails;