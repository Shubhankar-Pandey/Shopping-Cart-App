import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, increase, decrease } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(cartItem.id));
    toast.error("Removed from cart");
  }

  function increaseHandler() {
    dispatch(increase(cartItem.id));
  }

  function decreaseHandler() {
    dispatch(decrease(cartItem.id));
  }

  return (
    <div className="flex w-full bg-white p-5 rounded-xl border border-gray-300 shadow-sm
      hover:shadow-md transition duration-200">

      {/* LEFT: IMAGE */}
      <div className="w-1/3 flex justify-center items-center">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div className="w-2/3 flex flex-col justify-between">

        {/* TITLE + PRICE */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 leading-snug">
            {cartItem.title}
          </h2>

          <p className="text-green-600 font-bold text-2xl mt-1">
            ₹ {cartItem.price.toLocaleString()}
          </p>
        </div>

        {/* QUANTITY + REMOVE BUTTON */}
        <div className="flex items-center justify-between mt-4">

          {/* QUANTITY CONTROLS */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-1">
            {/* DECREASE */}
            <button
              onClick={decreaseHandler}
              className="w-8 h-8 flex items-center justify-center text-gray-700 
              border-r border-gray-300 font-bold text-lg hover:text-blue-600"
            >
              -
            </button>

            {/* QUANTITY */}
            <span className="w-6 text-center font-semibold">
              {cartItem.quantity}
            </span>

            {/* INCREASE */}
            <button
              onClick={increaseHandler}
              className="w-8 h-8 flex items-center justify-center text-gray-700 
              border-l border-gray-300 font-bold text-lg hover:text-blue-600"
            >
              +
            </button>
          </div>

          {/* REMOVE BUTTON */}
          <button
            onClick={removeFromCart}
            className="flex items-center gap-1 text-red-600 font-semibold 
            hover:text-red-700"
          >
            <MdDelete className="text-2xl" />
            Remove
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartItem;
