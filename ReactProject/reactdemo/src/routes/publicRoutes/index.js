import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({children}) => {
    const auth = localStorage.getItem('token');
    if(auth){
      return   <Navigate to="/dashboard" replace/>
    }
    return children
}

export default PublicRoutes