import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderPlacedPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 p-6">

      {/* Success Card */}
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl px-12 py-10
        border border-white/30 flex flex-col justify-center items-center gap-6
        transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.35)]">

        {/* Success icon */}
        <FaCheckCircle className="text-white text-[90px] drop-shadow-lg animate-bounce" />

        {/* Message */}
        <h1 className="text-4xl font-extrabold text-white tracking-wider text-center">
          Order Placed Successfully!
        </h1>

        <p className="text-lg text-white/90 text-center max-w-md">
          Thank you for shopping with us! Your order is being processed and we will notify you
          once it is shipped.
        </p>

        {/* Home button */}
        <NavLink to="/">
          <button className="mt-4 bg-yellow-400 text-gray-900 font-extrabold px-10 py-3 
            rounded-full text-xl hover:bg-yellow-300 hover:scale-105 duration-300 shadow-xl">
            Go to Home Page
          </button>
        </NavLink>

      </div>
    </div>
  );
}

export default OrderPlacedPage;
