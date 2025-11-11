import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="w-full shadow-lg sticky top-0 z-50
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* ✅ Logo or Brand Name */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold tracking-wide text-white hover:text-yellow-300 duration-200">
            ShopX
          </h1>
        </NavLink>

        {/* ✅ Right Side Navigation Elements */}
        <div className="flex items-center gap-8">

            {/* Cart */}
            <NavLink
                to="/cart"
                className="relative flex items-center gap-2 text-white
                hover:text-yellow-300 duration-200">
              
                <FaCartShopping className="text-3xl" />
                <span className="font-semibold text-xl">Cart</span>

                {/* Cart Count Badge */}
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold 
                  w-5 h-5 flex justify-center items-center rounded-full">
                    {cart.length}
                  </span>
                )}
            </NavLink>

            {/* ✅ Auth buttons */}
            <div className="hidden sm:flex gap-4">
                <NavLink to="/loginPage">
                  <button className="px-4 py-2 text-sm font-semibold text-white bg-transparent border
                   border-white rounded-full hover:bg-white hover:text-slate-900 duration-300">
                    Login
                  </button>
                </NavLink>
                
                <NavLink to="/signUpPage">
                  <button className="px-4 py-2 text-sm font-semibold text-slate-900
                  bg-yellow-400 rounded-full hover:bg-yellow-500 duration-300">
                    Sign Up
                  </button>
                </NavLink>
            </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
