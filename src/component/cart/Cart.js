import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import emptyCart from "../assets/emptyCart.webp";
// import { Link } from "react-router-dom";
// import { addItems, removeItems, clearCart } from "../Utils/cartSlice";
// import Success from "./Success";
// import { RES_CARD_IMG_CDN_URL } from "../helpers/Constant";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  //   const dispatch = useDispatch();
  //   const cartDetails = useSelector((store) => store.cart.cartItems);
  //   const locDetails = useSelector((store) => store.location.locationDetails);
  //   const time = cartDetails[0]?.resDetailsData?.slaString;
  //   const deliveryFee = (
  //     cartDetails[0]?.resDetailsData?.deliveryFee / 100
  //   ).toFixed(0);
  //   const distance = cartDetails[0]?.resDetailsData?.lastMileTravelString;
  //   const [area, setArea] = useState("");
  //   const [cityName, setCityName] = useState("");
  //   const [state, setState] = useState("");
  //   const [suggestionText, setSuggestionText] = useState("");
  //   const [isChecked, setIsChecked] = useState("");
  //   const [confirmAddress, setConfirmAddress] = useState(false);
  //   const [confirmPayment, setConfirmPayment] = useState(false);
  //   const [orderSuccess, setOrderSuccess] = useState(false);
  //   const handleConfirmAddress = () => {
  //     setConfirmAddress(!confirmAddress);
  //     setConfirmPayment(!confirmPayment);
  //   };
  //   const handleClearCart = () => {
  //     setOrderSuccess(false);
  //     dispatch(clearCart());
  //   };
  //   const handleIncreaseQuantity = (x) => {
  //     dispatch(addItems(x));
  //   };
  //   const handleDecreaseQuantity = (x) => {
  //     dispatch(removeItems(x));
  //   };
  //   useEffect(() => {
  //     if (locDetails[0]) {
  //       setArea(locDetails[0].area);
  //       setCityName(locDetails[0].district);
  //       setState(locDetails[0].state);
  //     }
  //   }, [locDetails]);
  //   useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }, []);
  //   useEffect(() => {
  //     if (orderSuccess) {
  //       const timeoutId = setTimeout(() => {
  //         handleClearCart();
  //       }, 2500);
  //       return () => clearTimeout(timeoutId);
  //     }
  //   }, [orderSuccess]);
  //   const itemTotal = cartDetails.reduce((accumulator, currentItem) => {
  //     const itemPrice =
  //       ((currentItem.price || currentItem.defaultPrice) / 100) *
  //       currentItem.quantity;
  //     return accumulator + itemPrice;
  //   }, 0);
  // console.log(distance);
  return (
    <div
      key={1}
      className="flex items-center border-b border-gray-300 py-4"
    >
      <img
        src={'https://fastly.picsum.photos/id/32/200/300.jpg?hmac=rNLw7Y7-RK2isGxXfSq90mzxSpKSXsRuOkvkGdEGK9c'}
        alt={"name"}
        className="w-20 h-20 rounded-full mr-4"
      />
      <div className="flex">
        <h2 className="text-lg font-bold mx-4">{"Name"}</h2>
        <div
          className="bg-yellow-500 w-20 justify-between flex text-white text-base font-bold px-1 py-2 mx-4 rounded cursor-pointer border-none hover:bg-yellow-600"
          data-testid="add-btn"
        >
          <button onClick={() => dispatch(removeItem(item))}>-</button>
          <div>{1}</div>
          <button onClick={() => dispatch(addItem(item))}>+</button>
        </div>
        <h3 className="text-base font-semibold">
          Price: Rs.
          {(1).toFixed(2) * 1}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
