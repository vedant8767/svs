import React from 'react'
import serviceicon from '../assets/service-icon-01.png'
import ved from '../assets/ved.jpg'
import sushant from '../assets/sushant.webp'
import '../css/Services.css'
import market from '../assets/google.png'
import web from '../assets/app-development.png'
import app from '../assets/mobile-app.png'

function Services() {
  return (
    <div className='services' id='service'>
        <h1>OUR SERVICES</h1>
        <div className="services_card">
            <div className="each_service_card">
                <h1>Website Development</h1>
                <img src={web} alt="" />
                <p>Transform your online presence with our custom website development services. We design and build visually appealing, responsive, and user-friendly websites that deliver an exceptional experience across all devices.</p>
            </div>
            <div className="each_service_card">
                <h1>Application Development</h1>
                <img src={app} alt="" />
                <p>Our app development team creates robust and scalable mobile applications tailored to your business needs. Whether it's iOS or Android, we focus on delivering seamless functionality and engaging user experiences for your audience.</p>
            </div>
            <div className="each_service_card">
                <h1>SEO Audits</h1>
                <img src={market} alt="" />
                <p>Boost your online visibility with our expert SEO services.
                     We optimize your website to rank higher on search engines,
                      drive organic traffic, and improve your site's performance, ensuring you reach the right audience effectively.</p>
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