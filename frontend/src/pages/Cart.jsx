import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../store/cartSlice";

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  console.log("====================================");
  console.log(cartItems);
  console.log("====================================");
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <p className="text-3xl text-gray-500">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="px-4 pt-[100px] grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <h2 className="lg:text-[30px] md:text-[25px] text-[20px] font-bold mb-8">
          Shopping Cart ({totalQuantity} items)
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[150px] h-[250px] object-contain rounded"
            />

            <div className="flex-1">
              <h4 className="lg:text-[22px] text-[16px] font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="md:text-[18px] text-[14px] text-gray-500 mb-2">
                by {item.author}
              </p>
              <div className="md:hidden my-4">
                <p className="lg:text-[22px] text-[16px] font-semibold text-gray-900 dark:text-white">
                  ₹ {item.price * item.quantity}
                </p>
                <p className="md:text-[18px] text-[14px] text-gray-500">
                  ₹{item.price} each
                </p>
              </div>
              {/* Quantity Controls */}
              <div className="flex items-center gap-5 mt-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  −
                </button>

                <span className="font-medium">{item.quantity}</span>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-5 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>

            {/* Price */}
            <div className="text-right hidden md:block">
              <p className="lg:text-[22px] text-[16px] font-semibold text-gray-900 dark:text-white">
                ₹ {item.price * item.quantity}
              </p>
              <p className="md:text-[18px] text-[14px] text-gray-500">
                ₹{item.price} each
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: Summary */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-fit lg:mt-[75px]">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between mb-2 space-y-2">
          <span>Items</span>
          <span>{totalQuantity}</span>
        </div>

        <div className="flex justify-between mb-4 space-y-2">
          <span>Total Price</span>
          <span className="font-semibold">₹{totalPrice}</span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium mt-5">
          Proceed to Checkout
        </button>

        <button
          onClick={() => dispatch(clearCart())}
          className="w-full mt-5 text-sm text-red-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
