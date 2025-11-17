import {mobileData} from "../Data/mobileData"
import { LaptopsData } from "../Data/LaptopsData";
import { ShoesData } from "../Data/ShoesData";
import { MenClothsData } from "../Data/MenClothsData";
import { SkinCareData } from "../Data/SkinCareData";
import { WomenClothsData } from "../Data/WomenClothsData";
import WomenClothCard from "../Components/Cards/WomenClothCard";
import SkinCareCard from "../Components/Cards/SkinCareCard";
import MenClothCard from "../Components/Cards/MenClothCard";
import MobileCard from "../Components/Cards/MobileCard"
import LaptopCard from "../Components/Cards/LaptopCard";
import ShoeCard from "../Components/Cards/ShoeCard";
import HeroSection from "../Components/HeroSection";
import CategorySection from "../Components/CategorySection";
import Footer from "../Components/Footer";


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

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    LaptopsData.map((laptop) => (
                        <LaptopCard key={laptop.id} laptop = {laptop}></LaptopCard>
                    ))
                }
            </div>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    MenClothsData.map((cloth) => (
                        <MenClothCard key={cloth.id} cloth = {cloth}></MenClothCard>
                    ))
                }
            </div>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    SkinCareData.map((item) => (
                        <SkinCareCard key={item.id} item = {item}></SkinCareCard>
                    ))
                }
            </div>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4">
                {
                    WomenClothsData.map((cloth) => (
                        <WomenClothCard key={cloth.id} cloth = {cloth}></WomenClothCard>
                    ))
                }
            </div>

            <Footer/>

        </div>
    )
}

export default HomePage;