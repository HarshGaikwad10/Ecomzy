import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const SignupForm=({setIsLoggedIn})=>{
    const [formData, setFormData] = useState({
        account_type:"Shopper",
        name: "",
        email: "",
        message: "",
        phone:"",
        company:""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/signup", {
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
    
        setTimeout(() => {
        //   Progress(100); // Update progress to 100 just before reloading
          // setShowNavbar(true); // Set showNavbar to true before reloading
          window.location.reload();
        }, 2000);
    
      };
    const[formdata,setFormdata]=useState(
        {   account_type:"",
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            c_Password:""
        }
     )
     
const[showPassword,setShowPassword] = useState(false);
const[showConfirmPassword,setShowConfirmPassword] = useState(false);
const[account_type,setAccountType]=useState("shopper");

    function changeHandler(event){
        handleChange(event);
         
        setFormdata( (prevData)=>(
           
            {

                 ...prevData, [event.target.name]:event.target.value
            }

        ))       
          
  }
  const Navigate=useNavigate();  
        
        function submitHandler(event){
                    event.preventDefault();
                    if(formdata.password !== formdata.c_Password){
                          toast.error("Passwords does not match");
                          return;
                    }
                    setIsLoggedIn(true);
                    toast.success("Account Created");
                    const accountData={
                       ...formdata
                    };

                    const finalData={
                           ...accountData,account_type
                    }

                    console.log("Printing Final Account data");
                    console.log(finalData);
                    Navigate("/home");
        }
        const handleFormSubmit = (event) => {
            submitHandler(event);
            handleSubmit(event);
          }

    return(
  
          <div className="overflow-y-auto">  
                   {/* student instructor tab  */}
                <div className="flex bg-richblack-700 p-1 gap-x-1 my-6 rounded-full max-w-max">
                     
                     <button 
                            className={
                            `${account_type === "shopper"
                                ? "bg-richblack-900 text-richblack-5 "
                                : "bg-transparent text-richblack-200" 
                            } py-2 px-5 rounded-full transition-all duration-200`}
                            onClick={()=>setAccountType("shopper")}>
                                Shopper
                     </button>
                 
                     <button 
                       className={
                        `${account_type === "vendor"
                            ? "bg-richblack-900 text-richblack-5 "
                            : "bg-transparent text-richblack-200" 
                        } py-2 px-5 rounded-full transition-all duration-200`}
                       onClick={()=>setAccountType("vendor")}>
                          Vendor
                     </button>

                </div>

                <form onSubmit={handleFormSubmit}>
                    {/* firstname and lastname container */}
                    <div className="flex gap-x-4 mt-[20px]">
                            <label className="w-full ">
                                
                                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">First Name 
                                <sup className="text-pink-200">*</sup></p>
                            

                                <input 
                                    required
                                    type="text"
                                    name="firstName"
                                    onChange={changeHandler}
                                    placeholder="Enter First Name"
                                    value={formdata.firstName}
                                    className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                                />
                    
                            </label>
                            <label className="w-full ">
                                
                                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Last Name 
                                 <sup className="text-pink-200">*</sup></p>
                            

                                <input 
                                    required
                                    type="text"
                                    name="lastName"
                                    onChange={changeHandler}
                                    placeholder="Enter Last Name"
                                    value={formdata.lastName}
                                    className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                                />
                    
                            </label>
                    </div>

                    {/* Email address */}

                    <div className="mt-[20px]">
                            <label className="w-full ">
                                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Email Address 
                                    <sup className="text-pink-200">*</sup></p>
                    
                                    <input 
                                        required
                                        type="email" 
                                        value ={formdata.email}
                                        onChange={changeHandler}
                                        placeholder="Enter Email Address"
                                        name="email"
                                        className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"  
                                    /> 
                            </label>
                    </div>
                 
                    {/* create Password and confirm Password */}

                    <div className="flex gap-x-4 mt-[20px]">
                            
                            
                        <label className="w-full relative">
                                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Create Password 
                                 <sup className="text-pink-200">*</sup>
                                </p>
                            
                                <input 
                                    required
                                    type={showPassword ? ("text") : ("password") }
                                    name="password"
                                    onChange={changeHandler}
                                    placeholder="Enter Password"
                                    value={formdata.password}
                                    className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                                />
                    {/* if previous value of showPassword is true make it false and if prev value of showPassword is false then make it true */}
                                <span className="absolute right-3 top-[38px] cursor-pointer "
                                 onClick={()=>setShowPassword( (prev) => !prev )}>
                    {/* if showPassword is true then show invisible eye icon else show visible eye icon */}
                                     {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                                </span>
                    {/* if clicked on forgot password then stay on same page and do nothing  */}
                               <Link to="#">
                                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                               </Link>
                    
                        </label>
                        
                        <label className="w-full relative">
                                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                                    Confirm Password <sup className="text-pink-200">*</sup></p>
                            
                                <input 
                                    required
                                    type={showConfirmPassword ? ("text") : ("password") }
                                    name="c_Password"
                                    onChange={changeHandler}
                                    placeholder="Confirm Password"
                                    value={formdata.c_Password}
                                    className="bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 

                                />

                    {/* if previous value of showPassword is true make it false and if prev value of showPassword is false then make it true */}
                                <span  className="absolute right-3 top-[38px] cursor-pointer "
                                   onClick={()=>setShowConfirmPassword( (prev) => !prev )}>
                    {/* if showPassword is true then show invisible eye icon else show visible eye icon */}
                                     {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                                </span>
                    {/* if clicked on forgot password then stay on same page and do nothing  */}
                               <Link to="#">
                                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                               </Link>
                    
                        </label>



                    </div>

                    <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                         Create Account
                    </button>

                     
                </form>


          </div>   




   )

}

export default SignupForm;