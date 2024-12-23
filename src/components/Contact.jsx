import React from 'react'
import { FiPhone } from "react-icons/fi";
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className="contact_left">
            <h1>Feel Free To Send Us a Message</h1>
            <h1> About Your Website Needs</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio maxime aliquid 
                ab sapiente, praesentium voluptatum doloribus debitis at et.</p>
            <h2>For any enquiry, Call Us: </h2>
            <h3><FiPhone id='icon'/> <span>+91 8767675645</span></h3>

        </div>
        <div className="contact_right">
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Phone' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Message' />
                <button>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact