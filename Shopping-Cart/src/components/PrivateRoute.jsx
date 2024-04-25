import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute=({IsLoggedIn,children})=>{

    if(IsLoggedIn){
        return children;
    }
    else{
         return  <Navigate to="/login" /> ;
    }

}

export default PrivateRoute;