import "./App.css";
import { Route, Routes } from "react-router-dom";

import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import BuyNowPage from "./Pages/BuyNowPage";
import OrderPlacedPage from "./Pages/OrderPlacedPage";

import Navbar from "./Components/Navbar";

import CompleteMobile from "./Components/CompleteItem/CompleteMobile";
import CompleteShoe from "./Components/CompleteItem/CompleteShoe";
import CompleteLaptop from "./Components/CompleteItem/CompleteLaptop";
import CompleteMenCloth from "./Components/CompleteItem/CompleteMenCloth";
import CompleteSkinCare from "./Components/CompleteItem/CompleteSkinCare";
import CompleteWomenCloth from "./Components/CompleteItem/CompleteWomenCloth";

import MobilePage from "./Pages/MobilePage";
import LaptopPage from "./Pages/LaptopPage";
import MenClothPage from "./Pages/MenClothPage";
import WomenClothPage from "./Pages/WomenClothPage";
import ShoesPage from "./Pages/ShoesPage";
import SkinCarePage from "./Pages/SkinCarePage";

import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";



function App() {

  const cart = useSelector((state) => state.cart);

  return (
    <div>

       <Toaster position="top-center" />
      
      <Navbar/>  

      <Routes>

          <Route path='/' element = {<HomePage/>}></Route>
          <Route path='/cart' element = {<CartPage/>}></Route>

          <Route path='/shoes/:title' element={<CompleteShoe />} /> 
          <Route path='/mobile/:title' element={<CompleteMobile />} /> 
          <Route path='/laptop/:title' element={<CompleteLaptop />} /> 
          <Route path='/mencloth/:title' element={<CompleteMenCloth />} />
          <Route path='/skincare/:title' element={<CompleteSkinCare />} /> 
          <Route path='/womencloth/:title' element={<CompleteWomenCloth />} /> 

          <Route path="/loginPage" element = {<LoginPage></LoginPage>}></Route>
          <Route path="/signUpPage" element = {<SignUpPage></SignUpPage>}></Route>
          <Route path="/buyNowPage" element = {<BuyNowPage></BuyNowPage>}></Route>
          <Route path="/orderPlacedPage" element = {<OrderPlacedPage></OrderPlacedPage>}></Route>

          <Route path="/mobilePage" element = {<MobilePage/>} ></Route>
          <Route path="/laptopPage" element = {<LaptopPage/>} ></Route>
          <Route path="/shoesPage" element = {<ShoesPage/>} ></Route>
          <Route path="/skinCarePage" element = {<SkinCarePage/>} ></Route>
          <Route path="/menClothPage" element = {<MenClothPage/>} ></Route>
          <Route path="/womenClothPage" element = {<WomenClothPage/>} ></Route>

      </Routes>

    </div>

  );
}

export default App;
