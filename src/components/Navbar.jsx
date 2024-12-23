import React from 'react'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">SVS <span>Technology</span></div>
        <div className="nav_elements">
           <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact"><button>Contact Us Now</button></a></li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar