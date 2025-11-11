import React from "react";
import { useLocation } from "react-router-dom";

// Icons
import { FaMicrochip, FaCamera, FaBatteryFull, FaStar } from "react-icons/fa";
import { MdPhoneIphone, MdStorage } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";

function CompleteItem() {
  const location = useLocation();
  const mobile = location.state.mobile;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br 
      from-indigo-600 via-blue-500 to-emerald-500 p-6">

      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 
        max-w-4xl w-full flex flex-col md:flex-row gap-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.35)]">

        {/* ==== Left Image Section ==== */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={mobile.image}
            alt={mobile.title}
            className="w-72 h-72 object-contain drop-shadow-2xl rounded-xl hover:scale-105 duration-300"
          />
        </div>

        {/* ==== Right Content Section ==== */}
        <div className="w-full md:w-1/2">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            {mobile.title}
          </h2>

          {/* Price */}
          <p className="text-green-600 font-extrabold text-3xl mt-2">
            ₹{mobile.price.toLocaleString()}
          </p>

          {/* Stars */}
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500 text-xl" />
            <p className="text-lg font-semibold">{mobile.rating} / 5</p>
          </div>

          {/* Spec list */}
          <ul className="mt-6 space-y-4 text-gray-700 text-[1.05rem] font-medium">

            <li className="flex items-center gap-3">
              <FaMicrochip className="text-blue-700 text-2xl" />
              Processor: <span className="font-semibold">{mobile.processor}</span>
            </li>

            <li className="flex items-center gap-3">
              <MdStorage className="text-indigo-700 text-2xl" />
              Storage: <span className="font-semibold">{mobile.space} GB</span>
            </li>

            <li className="flex items-center gap-3">
              <FaCamera className="text-pink-600 text-2xl" />
              Front Camera: <span className="font-semibold">{mobile.frontCamera}</span>
            </li>

            <li className="flex items-center gap-3">
              <FaCamera className="text-purple-600 text-2xl" />
              Rear Camera: <span className="font-semibold">{mobile.rearCamera}</span>
            </li>

            <li className="flex items-center gap-3">
              <MdPhoneIphone className="text-rose-600 text-2xl" />
              Main Camera: <span className="font-semibold">{mobile.mainCamera}</span>
            </li>

            <li className="flex items-center gap-3">
              <FaBatteryFull className="text-green-700 text-2xl" />
              Battery: <span className="font-semibold">{mobile.battery}</span>
            </li>

            <li className="flex items-center gap-3">
              <IoMdFlash className="text-orange-600 text-2xl" />
              Purchases:{" "}
              <span className="font-semibold">{mobile.purchases.toLocaleString()}+</span>
            </li>
          </ul>

          {/* Review Box */}
          <div className="mt-6 bg-gray-100 border border-gray-300 rounded-xl p-4 shadow-inner">
            <h3 className="text-xl font-semibold mb-1">Customer Review</h3>
            <p className="italic text-gray-700">{mobile.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteItem;
