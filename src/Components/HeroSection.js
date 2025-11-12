function HeroSection() {
  return (
    <div
      className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/Images/heroSectionImage.jpg')" }} // ✅ Background image
    >

      {/* ✅ Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/70 via-blue-600/70 to-emerald-500/60"></div>

      {/* ✅ Overlay Glow Circles */}
      <div className="absolute -top-28 -left-28 w-[380px] h-[380px] bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-yellow-400/30 rounded-full blur-2xl"></div>

      {/* ✅ Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-10 max-w-4xl mx-auto">

        <h1 className="text-6xl font-extrabold leading-tight drop-shadow-xl text-white">
          Your One-Stop Destination for<br />
          <span className="text-yellow-300">Shopping Everything</span>
        </h1>

        <p className="text-lg font-medium text-gray-200 tracking-wide mt-6 max-w-2xl">
          Discover an amazing collection of electronics, fashion, shoes, accessories, and much more —
          all at unbeatable price and fast doorstep delivery.
        </p>

      </div>
    </div>
  );
}

export default HeroSection;
