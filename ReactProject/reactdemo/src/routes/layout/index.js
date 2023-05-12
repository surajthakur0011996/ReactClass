import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../views/header";
import Sidebar from "../../views/Sidebar";



const AppLayout = () => {
  const token = localStorage.getItem("token")
  useEffect(()=>{
console.log("tokne")
  },[token])
  return (
    <>   
      <div id="wrapper" className={token && ""}>
       {token && <Sidebar />} 
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {token && <Header/>}
              <Outlet />
          </div>
        </div>
       </div>        
    </>
  );
};
export default AppLayout;
