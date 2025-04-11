import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogoClicked = () => {
     navigate('./');
  }

    return (

      <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <a><img src="/images/logo.png" alt="Logo" onClick={handleLogoClicked}/></a>
      </div>
      
      {/* Navigation Links */}
      <div className="nav-links">
       <ul>
                 <li>
                   <Link to="./">Home</Link>
                   </li>
                   <li>
                   <Link to="/About">About</Link>
                   </li>
                   <li>
                   <Link to="/Contact">Contact</Link>
                   </li>
               </ul>
      </div>
    </nav>
    );
  };
  
  export default Navbar;

