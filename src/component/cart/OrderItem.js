import { MENU_IMAGE_BASE_URL } from "../../utils/constants";

const OrderItem = ({ name, quantity, price, minusQty, plusQty, imageId,id }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-200 ">
    <img
      src={MENU_IMAGE_BASE_URL + imageId}
      alt={imageId}
      className="w-20 h-20  mr-5"
    />
    <div className="flex-1">
      <p className="font-small w-50  ">{name}</p>
      <p className="text-sm text-orange-500 cursor-pointer">Customize</p>
    </div>
    <div className="flex items-center space-x-2 flex-1">
      <button
        className="border border-gray-300 rounded px-2"
        onClick={minusQty}
      >
        −
      </button>
      <span className="text-green-600 font-semibold">{quantity}</span>
      <button className="border border-gray-300 rounded px-2" onClick={plusQty}>
        +
      </button>
    </div>
    <p className="text-right font-medium">₹{price}</p>
  </div>
);

export default OrderItem;
