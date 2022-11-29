import React from "react";
import logo from '../assets/img/logo.png'
export const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
      <img className="logo" src={logo}/>
        <a className="navbar-brand text-uppercase" href="/">
         {brand}
        </a>
      </div>
    </nav>
  );
};
