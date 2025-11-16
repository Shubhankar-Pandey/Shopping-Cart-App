import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Slices/AuthSlice";
import { FaCheckCircle } from "react-icons/fa";
import {toast} from "react-hot-toast"

function LoginPage() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  

  function loginClickHandler(event) {
    event.preventDefault();
    navigate("/");
    setTimeout(() => dispatch(login()), 50);
    toast.success("Login Successfully");    
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center
    bg-gradient-to-br from-indigo-600 via-blue-500 to-emerald-500 p-5">

      {auth === true ? (
        // ============== ALREADY LOGGED IN UI ==================
        <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl 
          border border-white/20 max-w-lg w-full text-center animate-fadeIn">

          <FaCheckCircle className="text-green-300 text-6xl mx-auto mb-4 drop-shadow-xl" />

          <h2 className="text-4xl font-extrabold text-white tracking-wide mb-3">
            You’re Already Logged In!
          </h2>

          <p className="text-white/80 text-lg mb-6 leading-relaxed">
            You are already signed in to your account.  
            Continue exploring amazing products tailored just for you!
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold
            text-lg hover:bg-yellow-300 hover:scale-105 transition shadow-xl"
          >
            Go to Home
          </button>
        </div>
      ) : (
        // ============== LOGIN FORM UI ==================
        <form
          className="w-[90%] max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl 
          border border-white/30 flex flex-col gap-6 transition-all duration-300
          hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-fadeIn"
        >
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-center text-white tracking-wide">
            Customer Login
          </h2>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-white">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your registered email"
              className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
              focus:ring-2 focus:ring-blue-600 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-white">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
              focus:ring-2 focus:ring-blue-600 outline-none transition"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={loginClickHandler}
            className="mt-2 bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-full
            hover:bg-yellow-300 hover:scale-[1.02] transition-all duration-300 text-lg shadow-xl"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
