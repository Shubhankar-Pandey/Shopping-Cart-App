import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.address;

  // ❗ No default selection
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Handle page refresh
  if (!formData) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Payment info missing!
        </h1>
        <button
          onClick={() => navigate("/buyNowPage")}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full"
        >
          Go Back
        </button>
      </div>
    );
  }

  function confirmPayment() {
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }

    navigate("/orderPlacedPage", { state: { address: formData } });
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-10 
      bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500">

      <div className="w-[90%] max-w-6xl flex flex-col lg:flex-row gap-10">

        {/* LEFT — PAYMENT OPTIONS */}
        <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl w-full lg:w-[60%]
          shadow-2xl border border-white/30">

          <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-md">
            Choose Payment Method
          </h1>

          {/* Payment Options */}
          <div className="flex flex-col gap-6">

            {/* ========== UPI ========== */}
            <div
              onClick={() => setPaymentMethod("UPI")}
              className={`p-5 rounded-xl cursor-pointer border duration-300 backdrop-blur-xl
              ${paymentMethod === "UPI"
                ? "bg-white text-black border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              }`}
            >
              <h2 className="text-xl font-bold mb-3">UPI Payment</h2>

              {paymentMethod === "UPI" && (
                <div className="flex flex-col gap-3 mt-3">

                  <input
                    type="text"
                    placeholder="Enter UPI ID (example@upi)"
                    className="p-3 rounded-lg bg-white/90 border outline-none text-black"
                  />

                  <div className="flex gap-3">
                    <img src="/Images/payments/gpay.png" className="w-20 opacity-90" alt="" />
                    <img src="/Images/payments/phonepe.png" className="w-20 opacity-90" alt="" />
                    <img src="/Images/payments/paytm.png" className="w-20 opacity-90" alt="" />
                  </div>

                </div>
              )}
            </div>

            {/* ========== CARD PAYMENT ========== */}
            <div
              onClick={() => setPaymentMethod("CARD")}
              className={`p-5 rounded-xl cursor-pointer border duration-300 backdrop-blur-xl
              ${paymentMethod === "CARD"
                ? "bg-white text-black border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              }`}
            >
              <h2 className="text-xl font-bold mb-3">Credit / Debit Card</h2>

              {paymentMethod === "CARD" && (
                <div className="flex flex-col gap-3 mt-3">

                  <input
                    type="text"
                    placeholder="Card Number"
                    maxLength="16"
                    className="p-3 rounded-lg bg-white/90 border outline-none text-black"
                  />

                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Expiry MM/YY"
                      className="p-3 rounded-lg bg-white/90 border outline-none w-1/2 text-black"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength="3"
                      className="p-3 rounded-lg bg-white/90 border outline-none w-1/2 text-black"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="p-3 rounded-lg bg-white/90 border outline-none text-black"
                  />

                </div>
              )}
            </div>

            {/* ========== CASH ON DELIVERY (COD) ========== */}
            <div
              onClick={() => setPaymentMethod("COD")}
              className={`p-5 rounded-xl cursor-pointer border duration-300 backdrop-blur-xl
              ${paymentMethod === "COD"
                ? "bg-white text-black border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              }`}
            >
              <h2 className="text-xl font-bold mb-2">Cash on Delivery (COD)</h2>

              {paymentMethod === "COD" && (
                <p className="text-gray-700 mt-2">
                  Pay in cash at the time of delivery.
                </p>
              )}
            </div>

          </div>

          {/* Confirm Payment */}
          <button
            onClick={confirmPayment}
            className="w-full mt-8 py-3 bg-yellow-400 text-black font-extrabold text-xl rounded-full
            hover:bg-yellow-300 hover:scale-105 duration-300 shadow-xl"
          >
            Confirm & Pay
          </button>

        </div>

        {/* RIGHT — DELIVERY ADDRESS */}
        <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl w-full lg:w-[40%]
          shadow-2xl border border-white/30 h-fit">
          
          <h1 className="text-3xl font-extrabold text-white mb-6">Delivery Address</h1>

          <div className="text-white text-lg space-y-1 bg-white/10 p-6 rounded-xl border border-white/20">
            <p><b>Name:</b> {formData.fullname}</p>
            <p><b>Mobile:</b> {formData.mobileNo}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>Address:</b> {formData.address1}, {formData.address2}</p>
            <p><b>City:</b> {formData.city}</p>
            <p><b>State:</b> {formData.state}</p>
            <p><b>Pincode:</b> {formData.pincode}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PaymentPage;
