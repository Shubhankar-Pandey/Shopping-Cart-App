function Footer() {
  return (
    <footer className="w-full mt-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">

      {/* Glass Card */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row justify-between gap-10">

          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">ShopX</h2>
            <p className="text-white/80 mt-2 max-w-sm">
              Your one-stop destination for mobiles, shoes, fashion and premium products.
              Shopping made simple, smarter, and faster.
            </p>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-xl font-bold mb-3">Policies</h3>
            <ul className="space-y-2 text-white/90">
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-8 text-center text-white/80 border-t border-white/30 pt-4">
          © {new Date().getFullYear()} ShopX — All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}

export default Footer;
