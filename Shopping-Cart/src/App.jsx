import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";
import Shopnow from "./Pages/Shopnow";
import CategoryPage from "./Pages/CategoryPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  const[IsLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="relative w-screen h-screen bg-richblack-800">
      <div className="bg-slate-900 fixed top-0 z-[100] w-screen ">
        <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div>
        {/* <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink> */}

        <Routes>
          <Route path="/" element={<Shopnow IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/home" element={
                      <PrivateRoute IsLoggedIn={IsLoggedIn}>
                         <Home/>
                      </PrivateRoute>
                   }/>
          <Route path="/cart" element={
                      <PrivateRoute IsLoggedIn={IsLoggedIn}>
                         <Cart/>
                      </PrivateRoute>
                   }/>
          <Route path="/category/:category" element={
                      <PrivateRoute IsLoggedIn={IsLoggedIn}>
                         <CategoryPage/>
                      </PrivateRoute>
                   }/>

        </Routes>
      </div>
    </div>
  );
};

export default App;