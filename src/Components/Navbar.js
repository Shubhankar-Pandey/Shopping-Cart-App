import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { logout } from "../Redux/Slices/AuthSlice";
import { clearCart } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cart.reduce((acc, curr) => acc + (curr.quantity || 1), 0));
  }, [cart]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler() {
    if (auth) {
      dispatch(logout());
      dispatch(clearCart());
      navigate("/");
      toast.success("Logged out successfully");
    } else {
      toast.error("Not logged in yet");
    }
  }

  return (
    <nav className="w-full sticky top-0 z-50 shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <NavLink to="/" className="flex items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition">
            ShopX
          </h1>
        </NavLink>

        {/* CENTER — SEARCH BAR */}
        <div className="hidden md:flex items-center w-[45%]">
          <div className="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 w-full shadow-lg">
            <FaSearch className="text-white text-lg" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-3 bg-transparent outline-none text-white placeholder-white/70 w-full"
            />
          </div>
        </div>

        {/* RIGHT — BUTTONS */}
        <div className="flex items-center gap-6">

          {/* Home */}
          <NavLink
            to="/"
            className="hidden sm:flex items-center gap-2 text-white font-semibold text-lg hover:text-yellow-300 transition"
          >
            <FaHome className="text-xl" />
            Home
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative flex items-center gap-2 text-white font-semibold text-lg hover:text-yellow-300 transition"
          >
            <FaCartShopping className="text-2xl" />
            Cart

            {quantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                {quantity}
              </span>
            )}
          </NavLink>

          {/* LOGIN + SIGNUP when not logged in */}
          {!auth && (
            <>
              <NavLink to="/loginPage">
                <button className="px-5 py-2 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-md">
                  Login
                </button>
              </NavLink>

              <NavLink to="/signUpPage">
                <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-md">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}

          {/* LOGOUT when logged in */}
          {auth && (
            <button
              onClick={logOutHandler}
              className="flex items-center gap-2 px-5 py-2 bg-white text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
            >
              <CiLogout className="text-lg" />
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
