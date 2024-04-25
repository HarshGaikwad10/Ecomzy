import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = (props) => {
  const [showCategories, setShowCategories] = useState(false);
  let isLoggedIn = props.IsLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const { cart } = useSelector((state) => state);

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center text-slate-200 h-20 max-w-6xl md:mx-auto mx-6">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} className="w-48" alt="logo" />
          </div>
        </NavLink>

 <div className="flex justify-center items-center gap-x-2 font-bold text-slate-100 mr-5 space-x-6">
          {isLoggedIn && (
            <div className="flex items-center hover:text-green-600 font-bold transition-0.8s">
              <NavLink to="/home">
                <div>
                  <p>Home</p>
                </div>
              </NavLink>
            </div>
          )}

        {isLoggedIn && (
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="focus:outline-none hover:text-green-600 font-bold transition-0.8s"
                >
                  <p>Categories</p>
                </button>
                {showCategories && (
                  <div className="absolute top-full left-0 mt-2 bg-richblack-800 rounded-lg shadow-lg w-48">
                    <NavLink to="/category/electronics">
                      <div className="px-4 py-2 hover:bg-richblack-900">
                        <p>Electronics</p>
                      </div>
                    </NavLink>
                    <NavLink to="/category/women's%20clothing">
                      <div className="px-4 py-2 hover:bg-richblack-900">
                        <p>Women's Clothing</p>
                      </div>
                    </NavLink>
                    <NavLink to="/category/men's%20clothinxg">
                      <div className="px-4 py-2 hover:bg-richblack-900">
                        <p>Men's Clothing</p>
                      </div>
                    </NavLink>
                    <NavLink to="/category/jewelery">
                      <div className="px-4 py-2 hover:bg-richblack-900">
                        <p>jewelery</p>
                      </div>
                    </NavLink>
                    {/* Add more categories as needed */}
                  </div>
                )}
               </div>
        )}
            
  </div>   
  <div className="flex items-center  gap-x-4">
          {isLoggedIn ? (
            <>
              <NavLink to="/cart" className="relative">
                <div>
                  <FaShoppingCart className="text-3xl" />
                  {cart?.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                      {cart?.length}
                    </span>
                  )}
                </div>
              </NavLink>
              <Link to="/">
              <button
                onClick={() => {
                                 setIsLoggedIn(false);
                                 toast.success("Logged Out");
                                }}
                className="nav-button"
              >
                            Logout
              </button>

              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="nav-button">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="nav-button">
                  Sign up
                </button>
              </Link>
            </>
          )}
       
       </div> 

      </nav>
    </div>
  );
};

export default Navbar;
