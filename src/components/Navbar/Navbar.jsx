import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">
          <span >MoBooking</span>
        </Link>
        <div className="navItems">
          <span className='currency'>NGN</span>
          <div className="flag">
            <img src="https://media.istockphoto.com/photos/nigerian-flag-picture-id182790719?k=20&m=182790719&s=612x612&w=0&h=FLs9ZrF7cXyDLQ7oex-kwmfiPx-0E6W87L7aNghhMPI=" alt="flag"/>
          </div>
          <div className="buttons">
            <button className="list">List Your Property</button>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar