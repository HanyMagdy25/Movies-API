import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiCameraMovie} from 'react-icons/bi';
import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' >
            <BiCameraMovie className='logo-mov'/> 
            Movix
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click? "nav-menu active" : "nav-menu" }>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/movies' className='nav-links' onClick={handleClick}>
                Movies
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/trending' className='nav-links' onClick={handleClick}>
                Trending
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/top' className='nav-links' onClick={handleClick}>
                Top
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/watchlist' className='nav-links' onClick={handleClick}>
                WatchList
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links' onClick={handleClick}>
                Sign Up
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
    )
}

export default Navbar
