import { NavLink } from "react-router-dom";

function CategorySection() {

  const categories = [
    "Mobile",
    "Laptop",
    "Shoes",
    "Skincare",
    "Men Clothes",
    "Women Clothes",
  ];

  // Mapping categories to routes
  const categoryRoutes = {
    "Mobile": "/mobilePage",
    "Laptop": "/laptopPage",
    "Shoes": "/shoesPage",
    "Skincare": "/skinCarePage",
    "Men Clothes": "/menClothPage",
    "Women Clothes": "/womenClothPage",
  };

  return (
    <div
      className="w-full py-2 sticky top-16 z-40
      bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
      flex justify-center items-center shadow-md"
    >
      <div className="max-w-6xl mx-auto flex gap-4 overflow-x-auto px-5 scrollbar-none">
        
        {categories.map((cat, index) => (
          <NavLink key={index} to={categoryRoutes[cat]}>
            <button
              className="whitespace-nowrap px-4 py-1 rounded-full text-white font-semibold 
              bg-white/20 backdrop-blur-md border border-white/30
              hover:bg-white hover:text-slate-900 duration-300 shadow-md"
            >
              {cat}
            </button>
          </NavLink>
        ))}

      </div>
    </div>
  );
}

export default CategorySection;
