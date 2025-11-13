import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Item({ mobile }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart() {
    dispatch(add(mobile));
    toast.success("Added to Cart!");
  }

  function removeFromCart() {
    dispatch(remove(mobile.id));
    toast.error("Removed from Cart");
  }

  function itemClickHandler() {
    const title = mobile.title.toLowerCase().replace(/\s+/g, "");
    navigate(`/mobile/${title}`, { state: { mobile } });
  }

  return (
    <div
      className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-4 w-[330px] min-h-[420px]
      border border-gray-200 hover:shadow-2xl hover:-translate-y-1 duration-300"
    >
      {/* Image */}
      <div
        onClick={itemClickHandler}
        className="cursor-pointer w-full h-[220px] flex justify-center items-center rounded-xl bg-gray-100 hover:bg-gray-200 duration-300"
      >
        <img
          src={mobile.image}
          className="object-contain w-[70%] h-[90%] transition-transform hover:scale-105"
          alt="mobile"
        />
      </div>

      {/* Title + Price */}
      <div className="mt-3 flex justify-between items-center">
        <h2 className="font-bold text-xl tracking-wide">{mobile.title}</h2>
        <p className="font-bold text-green-600 text-2xl">₹{mobile.price}</p>
      </div>

      {/* Specs without icons */}
      <ul className="mt-3 text-gray-700 text-sm space-y-1 font-semibold">
        <li>Processor: {mobile.processor}</li>
        <li>Storage: {mobile.space} GB</li>
        <li>Main Camera: {mobile.mainCamera}</li>
      </ul>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={itemClickHandler}
          className="w-[45%] px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-600 text-white font-semibold duration-200"
        >
          View Details
        </button>

        {cart.some((p) => p.id === mobile.id) ? (
          <button
            onClick={removeFromCart}
            className="w-[45%] px-3 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold duration-200"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-[45%] px-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
