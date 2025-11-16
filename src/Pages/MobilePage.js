import MobileCard from "../Components/Cards/MobileCard";
import { mobileData } from "../Data/mobileData";
import CategorySection from "../Components/CategorySection";

function MobilePage() {
  return (
    <div className="min-h-screen w-full
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      {/* Category Bar */}
      <CategorySection />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Grid of Cards */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {mobileData.map((mobile) => (
            <MobileCard key={mobile.id} mobile={mobile} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default MobilePage;
