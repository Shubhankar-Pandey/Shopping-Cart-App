import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import CompleteItem from "./Components/CompleteItem";
import BuyNowPage from "./Components/BuyNowPage";
import OrderPlacedPage from "./Components/OrderPlacedPage";


import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";



function App() {

  const {cart} = useSelector((state) => state);

  return (
    <div>

       <Toaster position="top-center" />
      
      <Navbar/>

      <Routes>
          <Route path='/' element = {<HomePage/>}></Route>
          <Route path='/cart' element = {<CartPage/>}></Route>
          <Route path='/mobile/:title' element={<CompleteItem />} /> 
          <Route path="/loginPage" element = {<LoginPage></LoginPage>}></Route>
          <Route path="/signUpPage" element = {<SignUpPage></SignUpPage>}></Route>
          <Route path="/buyNowPage" element = {<BuyNowPage></BuyNowPage>}></Route>
          <Route path="/orderPlacedPage" element = {<OrderPlacedPage></OrderPlacedPage>}></Route>
      </Routes>

    </div>

  );
}

export default App;
