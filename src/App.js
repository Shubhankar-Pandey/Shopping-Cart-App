import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import CompleteItem from "./Components/CompleteMobile";
import BuyNowPage from "./Pages/BuyNowPage";
import OrderPlacedPage from "./Pages/OrderPlacedPage";


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
