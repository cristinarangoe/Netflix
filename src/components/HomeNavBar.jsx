import { useState } from "react";
import "./navbar.css";

const HomeNavbar = () => {
  
  return (
    <div className="navbar">
 
          <img className = "netflixLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className = "navbarContent">
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
      </div>
     
 
    </div>
  );
};

export default HomeNavbar;