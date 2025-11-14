import {mobileData} from "../Data/mobileData"
import { ShoesData } from "../Data/ShoesData";
import MobileCard from "../Components/MobileCard"
import ShoeCard from "../Components/ShoeCard";
import HeroSection from "../Components/HeroSection";
import CategorySection from "../Components/CategorySection";


function HomePage(){
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

            <CategorySection/>

            <HeroSection/>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    mobileData.map((mobile) => (
                        <MobileCard key={mobile.id} mobile = {mobile}></MobileCard>
                    ))
                }
            </div>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    ShoesData.map((shoe) => (
                        <ShoeCard key={shoe.id} shoe = {shoe}></ShoeCard>
                    ))
                }
            </div>

        </div>
    )
}

export default HomePage;