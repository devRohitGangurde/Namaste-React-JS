import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { clearCart } from "../../store/slice/CartSlice";
import { toast, Bounce } from "react-toastify";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slice/CartSlice";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);


  const dispatch = useDispatch();

  const minusQty = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const plusQty = (id) => {
    dispatch(increaseQuantity(id));
  };

  const onClearCart = () => {
    dispatch(clearCart());

    toast.success("Cart item cleared", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const itemTotal = cartList.reduce((accumulator, currentItem) => {
    const itemPrice =
      (currentItem.price || currentItem.defaultPrice) * currentItem.quantity;
    return accumulator + itemPrice;
   

  }, 0);

  return (
    <>
      <div className="flex items-center justify-center content-center p-5 flex-col">
        <h2 className="text-xl font-bold">Cart Page</h2>
        {cartList?.length !== 0 && (
          <button
            className="border border-gray-300 rounded px-2 mt-5"
            onClick={onClearCart}
          >
            CLEAR CART
          </button>
        )}
      </div>

      {/* <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/35217c67-8a64-45cf-a802-f2eb77bd23d6_966947.jpg"
            alt="Pizza"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-bold">Pizza Hut</h2>
            <p className="text-sm text-gray-600">Pathardi Phata</p>
          </div>
        </div> */}

      {cartList?.length === 0 ? (
        <h1 className="justify-center flex"> No cart item found </h1>
      ) : (
        cartList?.map((item) => {
          return (
            <div className="max-w-md mx-auto shadow-lg rounded-lg p-4 m-5">
              {" "}
              <OrderItem
                name={item.name}
                imageId={item.imageId}
                quantity={item.quantity}
                price={itemTotal}
                minusQty={() => minusQty(item.id)}
                plusQty={() => plusQty(item.id)}
              />
            </div>
          );
        })
      )}
    
    </>
  );
};

export default Cart;
