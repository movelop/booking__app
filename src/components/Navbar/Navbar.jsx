import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">
          <span >MoBooking</span>
        </Link>
        <div className="navItems">
          { user && (
            <>
              <span className='currency'>{user.username}</span>
              <div className="flag">
                <img src={user.img || "https://media.istockphoto.com/photos/nigerian-flag-picture-id182790719?k=20&m=182790719&s=612x612&w=0&h=FLs9ZrF7cXyDLQ7oex-kwmfiPx-0E6W87L7aNghhMPI="} alt="flag"/>
              </div>
            </>
            )}
          <div className="buttons">
            <button className="list">List Your Property</button>
            {!user ? (
              <>
                <button className="navButton">Register</button>
                <button className="navButton" onClick = {()=> navigate('/login')}>Login</button>  
              </>
            ): (
              <button className="navButton" onClick = {handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar