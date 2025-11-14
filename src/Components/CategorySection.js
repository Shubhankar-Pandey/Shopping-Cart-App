function CategorySection() {
  const categories = [
    "Mobile",
    "Laptop",
    "Shoes",
    "Skincare",
    "Men Clothes",
    "Women Clothes",
  ];

  return (
    <div className="w-full py-2
    bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
    flex justify-center items-center">
      
      <div className="max-w-6xl mx-auto flex gap-4 overflow-x-auto px-5 scrollbar-none">

        {categories.map((cat, index) => (
          <button
            key={index}
            className="whitespace-nowrap px-4 py-0.5 rounded-full text-white font-semibold 
            bg-white/20 backdrop-blur-md border border-white/30
            hover:bg-white hover:text-slate-900 duration-300 shadow-md"
          >
            {cat}
          </button>
        ))}

      </div>

    </div>
  );
}

export default CategorySection;
