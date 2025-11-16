import SkinCareCard from "../Components/Cards/SkinCareCard";
import { SkinCareData } from "../Data/SkinCareData";
import CategorySection from "../Components/CategorySection";

function SkinCarePage() {
  return (
    <div className="min-h-screen w-full
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      {/* Category Bar */}
      <CategorySection />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Card Grid */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {SkinCareData.map((item) => (
            <SkinCareCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default SkinCarePage;
