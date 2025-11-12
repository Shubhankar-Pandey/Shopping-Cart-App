import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CartPage() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function buyNowHandler(){
    navigate("/buyNowPage")
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-10
      bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row w-[90%] gap-10">

          {/* LEFT — CART ITEMS */}
          <div className="flex flex-col w-full lg:w-[65%] gap-6">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          {/* RIGHT — SUMMARY BOX */}
          <div className="lg:w-[35%] sticky top-20 h-fit p-6 rounded-2xl
            bg-white/80 backdrop-blur-lg shadow-xl border border-gray-300 flex flex-col gap-6">

            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Cart Summary
            </h2>

            <div className="text-lg font-semibold space-y-3">
              <p>Total Items: <span className="text-blue-600">{cart.length}</span></p>
              <p>Total Amount: <span className="text-green-600 font-bold">
                ₹ {totalAmount.toLocaleString()}
              </span></p>
            </div>

            <button onClick={buyNowHandler} className="w-full py-3 bg-green-500 hover:bg-green-600 text-white
              font-bold rounded-full text-xl">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        // ✅ Empty cart state
        <div className="w-full flex flex-col justify-center items-center">
          <div className="rounded-full p-8 flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl text-white"> Cart is Empty</h1>
              <NavLink to="/">
                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 font-bold px-10 py-3
                    rounded-full text-xl">
                  Shop Now
                </button>
              </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
