import { useSelector } from "react-redux";
import BuyNowPageItem from "../Components/BuyNowPageItem";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

function BuyNowPage() {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [addressSaved, setAddressSaved] = useState(false);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function cartHandler() {
    if (!addressSaved) {
      toast.error("Please save delivery address first!");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment option");
      return;
    }

    dispatch(clearCart());
    toast.success("Order Placed Successfully!");
    navigate("/orderPlacedPage");
    setAddressSaved(false);
  }



  function addressSaveHandler(e) {
      e.preventDefault();    // prevents refresh
      setAddressSaved(true);
      toast.success("Address saved!");
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 py-10
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      <div className="flex flex-col lg:flex-row w-[90%] gap-10">

        {/* ✅ LEFT SIDE (Address → Products) */}
        
        <div className="flex flex-col w-full lg:w-[65%] gap-10">
            <form onSubmit={addressSaveHandler}>
          {/* ✅ Delivery Address (glassmorphism like login/signup) */}
            <div className="w-full rounded-2xl p-8 bg-white/10 backdrop-blur-xl shadow-2xl 
                border border-white/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.35)]">

                <h2 className="text-3xl font-extrabold text-center text-gray-800 tracking-wide mb-6">
                    Delivery Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input type="text" placeholder="Full Name" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="number" placeholder="Mobile Number" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="email" placeholder="Email Address" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="text" placeholder="Address Line 1" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="text" placeholder="Address Line 2 (optional)"
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="text" placeholder="City" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="text" placeholder="State" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />

                    <input type="number" placeholder="Pincode" required
                    className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
                        focus:ring-2 focus:ring-blue-600 outline-none transition" />
                        
                </div>

                {/* ✅ Save Address button */}
                <div className="flex justify-center mt-6">

                  {
                    addressSaved ? 
                    (
                      <button
                      type="submit"
                      className="w-[60%] py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-full text-xl
                      hover:bg-yellow-300 hover:scale-[1.03] duration-300 shadow-xl">
                      Address Saved
                      </button>
                    ) :
                    (
                      <button
                      type="submit"
                      className="w-[60%] py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-full text-xl
                      hover:bg-yellow-300 hover:scale-[1.03] duration-300 shadow-xl">
                      Save Address
                      </button>
                    )
                  }

                    
                </div>

            </div>
        </form>



          {/* ✅ Products List */}
          <div className="flex flex-col gap-6">
            {cart.map((cartItem) => (
              <BuyNowPageItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

        </div>

        {/* ✅ RIGHT SIDE (Sticky Summary + Payment) */}
        <div className="flex flex-col gap-6 lg:w-[35%] sticky top-16 h-fit">

          {/* ✅ Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-6">

            <h2 className="text-3xl font-extrabold text-gray-800 text-center">Order Summary</h2>

            <div className="text-lg font-semibold space-y-3 mt-5">
              <p>Total Items: <span className="text-blue-600">{cart.length}</span></p>
              <p>Total Amount:
                <span className="text-green-600 font-bold"> ₹ {totalAmount.toLocaleString()} </span>
              </p>
            </div>
          </div>

          {/* ✅ Payment Section (ALSO STICKY BELOW SUMMARY) */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Method</h2>

            <div className="flex flex-col gap-3 text-lg font-semibold">
              <label>
                <input type="radio" name="payment" value="upi"
                  onChange={(e) => setPaymentMethod(e.target.value)} /> UPI (GPay / PhonePe / Paytm)
              </label>

              <label>
                <input type="radio" name="payment" value="cod"
                  onChange={(e) => setPaymentMethod(e.target.value)} /> Cash on Delivery
              </label>

              <label>
                <input type="radio" name="payment" value="card"
                  onChange={(e) => setPaymentMethod(e.target.value)} /> Credit / Debit Card
              </label>

              <label>
                <input type="radio" name="payment" value="netbanking"
                  onChange={(e) => setPaymentMethod(e.target.value)} /> Net Banking
              </label>
            </div>
            
            
                <button 
                    onClick={cartHandler}
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-xl transition"
                    >
                    Place Order
                </button>
            
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default BuyNowPage;
