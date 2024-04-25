import React from "react";
import SignupImg from "../assets/Signuplogo2.png";
import Template from "../components/Template";

function  Signup({setIsLoggedIn}){
    return(
        <Template
           title="Create an Ecomzy Profile"
           desc1="React to Savings: Shop Smarter, Sign Up Now!"
           desc2=" Join Our Shopping Experience Today!"
           image={SignupImg}
           formtype="signup"
           setIsLoggedIn={setIsLoggedIn}  
       />
    )
    }
    
    export default Signup;