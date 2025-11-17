import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function BuyNowPage() {

  const cart = useSelector((state) => state.cart);   // ✅ Correct selector
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);
  const [addressSaved, setAddressSaved] = useState(false);

  // ✅ Controlled form data
  const [formData, setFormData] = useState({
    fullname: "",
    mobileNo: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });

  // ✅ Update form data
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  // ✅ Correct cart total calculation
  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0)
    );
  }, [cart]);

  // ✅ Save address button
  function addressSaveHandler(e) {
    e.preventDefault();
    setAddressSaved(true);
    toast.success("Address saved successfully!");
  }

  // ✅ Proceed to payment
  function cartHandler() {
    if (!addressSaved) {
      toast.error("Please save delivery address first!");
      return;
    }

    dispatch(clearCart());
    toast.success("Order Placed Successfully!");
    navigate("/paymentPage", { state: { address: formData } });
    setAddressSaved(false);
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 py-10
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      <div className="flex flex-col lg:flex-row w-[90%] gap-10">

        {/* LEFT SIDE — Address Form */}
        <div className="flex flex-col w-full lg:w-[65%] gap-10">
          <form onSubmit={addressSaveHandler}>
            <div className="w-full rounded-2xl p-8 bg-white/10 backdrop-blur-xl shadow-2xl 
              border border-white/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.35)]">

              <h2 className="text-3xl font-extrabold text-center text-gray-800 tracking-wide mb-6">
                Delivery Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={changeHandler}
                  placeholder="Full Name"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="number"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={changeHandler}
                  placeholder="Mobile Number"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Email Address"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={changeHandler}
                  placeholder="Address Line 1"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={changeHandler}
                  placeholder="Address Line 2 (optional)"
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={changeHandler}
                  placeholder="City"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={changeHandler}
                  placeholder="State"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={changeHandler}
                  placeholder="Pincode"
                  required
                  className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

              </div>

              {/* Save Address Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-[60%] py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-full text-xl
                  hover:bg-yellow-300 hover:scale-[1.03] duration-300 shadow-xl"
                >
                  {addressSaved ? "Address Saved" : "Save Address"}
                </button>
              </div>

            </div>
          </form>
        </div>

        {/* RIGHT SIDE — Order Summary */}
        <div className="flex flex-col gap-6 lg:w-[35%] sticky top-16 h-fit">

          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Order Summary
            </h2>

            <div className="text-lg font-semibold space-y-3 mt-5">
              <p>Total Items: <span className="text-blue-600">{cart.length}</span></p>

              <p>Total Amount:
                <span className="text-green-600 font-bold">
                  ₹ {totalAmount.toLocaleString()}
                </span>
              </p>
            </div>

            <button
              onClick={cartHandler}
              className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white
              font-bold rounded-full text-xl transition">
              Proceed to payment
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default BuyNowPage;
