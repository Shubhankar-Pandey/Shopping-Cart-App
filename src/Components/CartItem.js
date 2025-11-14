import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(cartItem.id));
    toast.error("Removed from cart");
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5
      rounded-2xl w-full bg-white shadow-lg border border-gray-200
      hover:shadow-xl hover:-translate-y-1 duration-300">

      {/* IMAGE + TEXT */}
      <div className="flex items-center gap-6">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="w-32 h-32 object-contain rounded-xl"
        />

        <div>
          <p className="text-xl font-bold tracking-wide">{cartItem.title}</p>
        </div>
      </div>

      {/* PRICE + DELETE BTN */}
      <div className="flex flex-col items-center gap-3 mt-4 sm:mt-0">
        <h2 className="text-2xl font-extrabold text-green-600">
          ₹ {cartItem.price.toLocaleString()}
        </h2>

        <button
          onClick={removeFromCart}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 
          text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md duration-200"
        >
          <MdDelete className="text-2xl" />
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
