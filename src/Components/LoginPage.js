import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();   // prevents page reload
    navigate("/");
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center
    bg-gradient-to-br from-indigo-600 via-blue-500 to-emerald-500">

      <form
        onSubmit={submitHandler}
        className="w-[90%] max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl 
        border border-white/30 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
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
          className="mt-2 bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-full
          hover:bg-yellow-300 hover:scale-[1.02] transition-all duration-300 text-lg shadow-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
