import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import {logout} from "../Redux/Slices/AuthSlice";
import {clearCart} from "../Redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

function Navbar() {
  const cart = useSelector((state) => state.cart); 
  const auth = useSelector((state) => state.auth); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler(){
    if(auth === true){
      dispatch(logout());
      dispatch(clearCart());
      navigate("/");
    }
    else{
      toast.error("Not login yet");
    }
  }

  return (
    <nav className="w-full shadow-lg sticky top-0 z-50
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/">
          <h1 className="text-3xl font-extrabold text-white tracking-tight hover:text-yellow-300 transition">
            Shopify
          </h1>
        </NavLink>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-10">

          {/* Home */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-lg 
            hover:text-yellow-300 transition"
          >
            <FaHome className="text-xl" />
            Home
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative flex items-center gap-2 text-white font-semibold text-lg
            hover:text-yellow-300 transition"
          >
            <FaCartShopping className="text-2xl" />
            Cart

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold
               w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <NavLink to="/loginPage">
            <button className="px-4 py-1.5 border border-white text-white font-semibold rounded-full
              hover:bg-white hover:text-slate-900 transition duration-300">
              Login
            </button>
          </NavLink>

          {/* Sign Up */}
          <NavLink to="/signUpPage">
            <button className="px-4 py-1.5 bg-yellow-400 text-black font-semibold rounded-full
              hover:bg-yellow-500 transition duration-300">
              Sign Up
            </button>
          </NavLink>

          {/* Logout */}
          <button 
          onClick={logOutHandler}
          className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white text-red-600
            font-semibold rounded-full hover:bg-red-600 hover:text-white transition">
            <CiLogout className="text-lg" />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
