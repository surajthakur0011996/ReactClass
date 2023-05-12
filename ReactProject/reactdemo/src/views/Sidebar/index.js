 

import React from "react";
import { Link, useNavigate } from 'react-router-dom';
 

const Sidebar = () => {
    const navigate=useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');   
        navigate('/login');
      }
    return (
       
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<button onClick={handleLogout}>Logout</button> 

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
<Link className="nav-link" to='/dashboard'>  
  
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

 


 


<hr className="sidebar-divider"/>


<div className="sidebar-heading">
    Addons
</div>

 

<li className="nav-item">
   <Link className="nav-link" to='/table'>     
        <i className="fas fa-fw fa-table"></i>
        <span>Table</span>
        </Link>    
</li>


<hr className="sidebar-divider d-none d-md-block"/>


<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>


<div className="sidebar-card d-none d-lg-flex">
    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>

</ul>
 
    )
}

export default Sidebar