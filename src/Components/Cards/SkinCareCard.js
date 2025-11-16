import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SkinCareCard({ item }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart() {
    dispatch(add(item));
    toast.success("Added to Cart!");
  }

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Removed from Cart");
  }

  function itemClickHandler() {
    const title = item.title.toLowerCase().replace(/\s+/g, "");
    navigate(`/skincare/${title}`, { state: { item } });
  }

  return (
    <div
      className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-4 w-[330px] min-h-[420px]
      border border-gray-200 hover:shadow-2xl hover:-translate-y-1 duration-300"
    >
      {/* Image */}
      <div
        onClick={itemClickHandler}
        className="cursor-pointer w-full h-[220px] flex justify-center items-center 
        rounded-xl bg-gray-100 hover:bg-gray-200 duration-300"
      >
        <img
          src={item.image}
          alt={item.title}
          className="object-contain w-[75%] h-[90%] transition-transform hover:scale-105"
        />
      </div>

      {/* Title + Price */}
      <div className="mt-3 flex justify-between items-center">
        <h2 className="font-bold text-xl tracking-wide">{item.title}</h2>
        <p className="font-bold text-green-600 text-2xl">₹{item.price}</p>
      </div>

      {/* Short Specs */}
      <ul className="mt-3 text-gray-700 text-sm space-y-1 font-semibold">
        <li>Quantity: {item.quantity}</li>
        <li>Skin Type: {item.skinType}</li>
      </ul>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={itemClickHandler}
          className="w-[45%] px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-600 
          text-white font-semibold duration-200"
        >
          View Details
        </button>

        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={removeFromCart}
            className="w-[45%] px-3 py-2 rounded-full bg-red-500 hover:bg-red-600 
            text-white font-semibold duration-200"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-[45%] px-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 
            text-black font-semibold duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SkinCareCard;
