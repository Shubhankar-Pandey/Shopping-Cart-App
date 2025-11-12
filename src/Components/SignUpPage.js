import { useNavigate } from "react-router-dom";

function SignUpPage() {

  const navigate = useNavigate();

  function submitHandler() {
    navigate('/');
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center
    bg-gradient-to-br from-indigo-600 via-blue-500 to-emerald-500">

      <form
        onSubmit={submitHandler}
        className="w-[90%] max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl 
        border border-white/30 flex flex-col gap-6 transition-all duration-300
         hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] my-16"
      >

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-white tracking-wide">
          Create Account
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
            focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Mobile Number</label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
            focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
            focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
            focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-lg bg-white/80
            focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        </div>

        {/* Button */}
        <button
          className="mt-2 bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-full
          hover:bg-yellow-300 hover:scale-[1.02] transition-all duration-300 text-lg shadow-xl"
        >
          Sign Up
        </button>

      </form>
    </div>
  );
}

export default SignUpPage;
