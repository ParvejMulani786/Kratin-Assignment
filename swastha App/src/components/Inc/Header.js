import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.png';

export default function Header(){

    return(
      <nav  style={{paddingLeft:"2rem"}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#"> <img style={{ width:"3rem" , height:"2.5rem" }} src={logo}/><b> Swastha App</b></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{paddingLeft:"30rem"}}className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/registration">Register Now</a>
          </li>

          <li  className="nav-item">
            <a className="nav-link" href="/logIn">Log In</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/liveNews">Live News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.healthline.com/health/flu/seniors-guide-to-staying-healthy">Health Care</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#aboutUs">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactUs">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </nav>
    )
}