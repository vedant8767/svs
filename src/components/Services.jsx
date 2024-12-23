import React from 'react'
import serviceicon from '../assets/service-icon-01.png'
import ved from '../assets/ved.jpg'
import sushant from '../assets/sushant.webp'
import '../css/Services.css'

function Services() {
  return (
    <div className='services' id='service'>
        <h1>OUR SERVICES</h1>
        <div className="services_card">
            <div className="each_service_card">
                <h1>Website Development</h1>
                <img src={serviceicon} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Deleniti vel non magni esse nihil laudantium.</p>
            </div>
            <div className="each_service_card">
                <h1>Website Development</h1>
                <img src={serviceicon} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Deleniti vel non magni esse nihil laudantium.</p>
            </div>
            <div className="each_service_card">
                <h1>Website Development</h1>
                <img src={serviceicon} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Deleniti vel non magni esse nihil laudantium.</p>
            </div>
        </div>
        <div className='team'>
            <h1>Meet Our Team</h1>
            <div className="team_cards">
                <div class="card">
                    <img src={ved} alt="Card Image" />
                    <div class="overlay">
                    <div class="content">
                        <h3>Vedant Bhadkamkar</h3>
                        <p>Website Developer</p>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg" alt="Card Image" />
                    <div class="overlay">
                    <div class="content">
                        <h3>Suraj Tavare</h3>
                        <p>Application Developer</p>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img src={sushant} alt="Card Image" />
                    <div class="overlay">
                    <div class="content">
                        <h3>Sushant Patil</h3>
                        <p>Desingner</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services