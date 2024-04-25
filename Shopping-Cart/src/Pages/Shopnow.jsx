import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/image.png";
import "./Shopnow.css";
const Shopnow = (props) => {
  let isLoggedIn = props.IsLoggedIn;
  

  return (
    <div
      className="bg-cover bg-center flex justify-center  h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, paddingTop: '200px', paddingLeft: ' 290px' }}
    >
      {!isLoggedIn && (
        <div className="text-left text-black ml-10">
          <p  style={{
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '1.125rem',
            margin: '0 0 0 500px'
          }}>Fashion, Tips, Trends  & Celebrity Style</p>
          <h1 className="text-4xl mb-8  font-bold font-serif " style={{
            fontSize: '3.75rem',
            textTransform: 'uppercase',
            fontWeight: '900',
            margin: '20px 0 0 379px'
          }}>Welcome to Ecomzy !!</h1>
          <div className="div" style={{ textAlign: "center", marginLeft:"220px" }}>
            <Link to="/login" > {/*bg-green-700 text-white px-6 py-3 rounded-md mt-8 ml-20 */}
            <button class="pink-button mt-8 ml-20">
                       Shop Now
           </button>




            </Link>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Shopnow;
