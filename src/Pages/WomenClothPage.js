import WomenClothCard from "../Components/Cards/WomenClothCard";
import { WomenClothsData } from "../Data/WomenClothsData";
import CategorySection from "../Components/CategorySection";

function WomenClothPage() {
  return (
    <div className="min-h-screen w-full 
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      
      {/* Category Bar */}
      <CategorySection />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Card Grid */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {WomenClothsData.map((cloth) => (
            <WomenClothCard key={cloth.id} cloth={cloth} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default WomenClothPage;
