
export const getAllRestaurantAPI = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

export const getMenuAPIURL = (lat, lng, resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

export const cardIconUrl = "https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png";

export const SEARCH_IMG_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png";

export const MENU_IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/w_144,h_180/";
