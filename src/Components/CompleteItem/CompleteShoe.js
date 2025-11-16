import { useLocation } from "react-router-dom";
import { add, remove } from "../../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { FaStar } from "react-icons/fa";
import { FaTag, FaPalette, FaBox, FaShoppingBag } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

function CompleteShoe() {
  const location = useLocation();
  const shoe = location.state?.shoe; // ✅ Safe access

  const cart = useSelector((state) => state.cart); // ✅ Correct selector
  const dispatch = useDispatch();

  // ❗ Prevent crash on refresh or direct URL access
  if (!shoe) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">
          Shoe details not found!
        </h1>
      </div>
    );
  }

  function addToCart() {
    dispatch(add(shoe));
    toast.success("Added to cart");
  }

  function removeFromCart() {
    dispatch(remove(shoe.id));
    toast.error("Removed from cart");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-8 bg-gray-100">

      <div className="bg-white shadow-xl w-full max-w-5xl rounded-3xl p-10 
        flex flex-col md:flex-row gap-12">

        {/* LEFT — Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full flex justify-center">
            <img
              src={shoe.image}
              alt={shoe.title}
              className="w-80 h-80 object-contain transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* ADD / REMOVE BUTTON */}
          {cart.some((p) => p.id === shoe.id) ? (
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

        {/* RIGHT — Details */}
        <div className="w-full md:w-1/2">

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800">{shoe.title}</h1>

          {/* Price */}
          <p className="text-3xl text-green-600 font-extrabold mt-3">
            ₹{shoe.price.toLocaleString()}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-500 text-xl" />
            <span className="font-semibold text-gray-700">
              {shoe.rating} / 5
            </span>
          </div>

          {/* Shoe Specs */}
          <ul className="mt-8 space-y-4 text-gray-700 text-[1.05rem] font-medium">

            <li className="flex items-center gap-3">
              <FaTag className="text-blue-600 text-2xl" />
              Brand:
              <span className="font-semibold ml-1">{shoe.brand}</span>
            </li>

            <li className="flex items-center gap-3">
              <FaShoppingBag className="text-indigo-600 text-2xl" />
              Category:
              <span className="font-semibold ml-1">{shoe.category}</span>
            </li>

            <li className="flex items-center gap-3">
              <FaBox className="text-purple-600 text-2xl" />
              Material:
              <span className="font-semibold ml-1">{shoe.material}</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPalette className="text-rose-600 text-2xl" />
              Color:
              <span className="font-semibold ml-1">{shoe.color}</span>
            </li>

            <li className="flex items-center gap-3">
              <IoMdFlash className="text-orange-600 text-2xl" />
              Purchases:
              <span className="font-semibold ml-1">
                {shoe.purchases.toLocaleString()}+
              </span>
            </li>

          </ul>

          {/* Review */}
          <div className="mt-8 bg-gray-100 border border-gray-300 rounded-xl p-5">
            <h3 className="text-xl font-bold text-gray-800">Customer Review</h3>
            <p className="italic text-gray-600 mt-1">{shoe.review}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CompleteShoe;
