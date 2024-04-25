import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/loginlogo2.png";

function  Login({setIsLoggedIn}){
    return(
       <Template
           title="Welcome Back"
           desc1="Manage your Shopping efficiently on Ecomzy"
           desc2="Secure Shopping Hub: Log in for Seamless Access! "
           image={loginImg}
           formtype="Login"
           setIsLoggedIn={setIsLoggedIn}  
       />
    )
    }
    
export default Login;
