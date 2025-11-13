import {mobileData} from "../mobileData"
import Item from "../Components/MobileCard"
import HeroSection from "../Components/HeroSection";

function HomePage(){
    return (
        <div>

            <HeroSection/>

            <div className="flex gap-2 flex-wrap items-center justify-evenly p-4
            bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                {
                    mobileData.map((mobile) => (
                        <Item key={mobile.id} mobile = {mobile}></Item>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;