import { useLocation } from "react-router-dom";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { FaStar } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";
import { GiHeartBottle } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";

function CompleteSkinCare() {
  const location = useLocation();
  const item = location.state?.item; // Safe access

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Prevent crash on page reload
  if (!item) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">
          Skin care item details not found!
        </h1>
      </div>
    );
  }

  function addToCart() {
    dispatch(add(item));
    toast.success("Added to cart!");
  }

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Removed from cart");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-8 bg-gray-100">

      <div className="bg-white shadow-xl w-full max-w-5xl rounded-3xl p-10 
        flex flex-col md:flex-row gap-12">

        {/* LEFT — Image + Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-80 h-80 object-contain transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* ADD / REMOVE BUTTON */}
          {cart.some((p) => p.id === item.id) ? (
            <button
              onClick={removeFromCart}
              className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl
              shadow-md hover:bg-red-700 transition duration-300"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl
              shadow-md hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          )}

        </div>

        {/* RIGHT — Details Section */}
        <div className="w-full md:w-1/2">

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800">{item.title}</h1>

          {/* Price */}
          <p className="text-3xl text-green-600 font-extrabold mt-3">
            ₹{item.price.toLocaleString()}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-500 text-xl" />
            <span className="font-semibold text-gray-700">{item.rating} / 5</span>
          </div>

          {/* Specs List */}
          <ul className="mt-8 space-y-4 text-gray-700 text-[1.05rem] font-medium">

            <li className="flex items-center gap-3">
              <GiHeartBottle className="text-pink-600 text-2xl" />
              Quantity:
              <span className="font-semibold ml-1">{item.quantity}</span>
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineScience className="text-blue-600 text-2xl" />
              Skin Type:
              <span className="font-semibold ml-1">{item.skinType}</span>
            </li>

            <li className="flex items-center gap-3">
              <IoMdFlash className="text-orange-600 text-2xl" />
              Purchases:
              <span className="font-semibold ml-1">
                {item.purchases.toLocaleString()}+
              </span>
            </li>

          </ul>

          {/* Review Section */}
          <div className="mt-8 bg-gray-100 border border-gray-300 rounded-xl p-5">
            <h3 className="text-xl font-bold text-gray-800">Customer Review</h3>
            <p className="italic text-gray-600 mt-1">{item.review}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CompleteSkinCare;
