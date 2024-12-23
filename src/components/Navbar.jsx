// import React from 'react'
// import '../css/Navbar.css'

// function Navbar() {
//   return (
//     <div className='navbar'>
//         <div className="logo">SVS <span>Technology</span></div>
//         <div className="nav_elements">
//            <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#service">Services</a></li>
//             <li><a href="#project">Projects</a></li>
//             <li><a href="#contact"><button>Contact Us Now</button></a></li>
//            </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import '../css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">SVS <span>Technology</span></div>
      <div className={`nav_elements ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#service" onClick={closeMenu}>Services</a></li>
          <li><a href="#project" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}><button>Contact Us Now</button></a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </div>
    </div>
  );
}

export default Navbar;

