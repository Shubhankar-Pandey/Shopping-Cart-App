import { MenClothsData } from "../Data/MenClothsData";
import MenClothCard from "../Components/Cards/MenClothCard";
import CategorySection from "../Components/CategorySection";

function MenClothPage() {
  return (
    <div className="min-h-screen w-full
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      {/* Category Bar */}
      <CategorySection />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Grid of Cards */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {MenClothsData.map((cloth) => (
            <MenClothCard key={cloth.id} cloth={cloth} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default MenClothPage;
