import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm=({setIsLoggedIn})=>{
    const [formData, setFormData] = useState({
        
        email: "",
        password: ""
      
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          
          if (response.ok) {
            console.log("Form submitted successfully!");
            toast.success("Form submitted successfully!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeButton: false,
              draggable: false,
              pauseOnHover: false,
              className: "large-toast",
            });
            // Optionally, reset form fields
            setFormData({ name: "", email: "", message: "" });
          } else {
            console.error("Form submission failed!");
            toast.error("Form submission failed!",{
                position: "top-center",
                autoClose: 2000,
              hideProgressBar: true,
              closeButton: false,
              draggable: false,
              pauseOnHover: false,
              className: "large-toast"
            });
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Error submitting form. Please try again later.");
        }
    
    
    
      };

  const Navigate=useNavigate();  
  
  const[formdata,setFormdata]=useState(
     {
         email:"", password:""
     }
  )
  
  const[showPassword,setShowPassword] = useState(false);
 

  function changeHandler(event){
    handleChange(event);
        setFormdata( (prevData)=>(
           
            {

                 ...prevData, [event.target.name]:event.target.value
            }

        ))       
          
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing the form data");
    console.log(formdata);
    Navigate("/home");
}

  const handleFormSubmit = (event) => {
    submitHandler(event);
    handleSubmit(event);
  }

   return(

        <form onSubmit={ handleFormSubmit} className="flex flex-col w-full gap-y-4 mt-6">
              <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                        Email Address
                       <sup className="text-pink-200">*</sup>
                    </p>
              
                            <input 
                                required
                                type="email" 
                                value ={formdata.email}
                                onChange={changeHandler}
                                placeholder="Enter email address"
                                name="email"
                                className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                            /> 
                    </label>

             <label className="w-full relative">
                   <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                       Password<sup className="text-pink-200">*</sup>
                   </p>
                     
                   <input
                       required 
                // if showPassword is true then input type is text else it is password
                       type={showPassword ? ("text") : ("password") }
                       value={formdata.password}
                       onChange={changeHandler}
                       placeholder="Enter Password" 
                       name="password"
                       className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                   />
      {/* if previous value of showPassword is true make it false and if prev value of showPassword is false then make it true */}
                   <span 
                    className="absolute right-3 top-[38px] cursor-pointer "
                    onClick={()=>setShowPassword( (prev) => !prev )}>
      {/* if showPassword is true then show invisible eye icon else show visible eye icon */}
                       {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                   </span>
    {/* if clicked on forgot password then stay on same page and do nothing  */}
                   <Link to="#">
                      <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                   </Link>

             </label>
       
         <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            Sign In
        </button>

        </form>


   )

}

export default LoginForm;