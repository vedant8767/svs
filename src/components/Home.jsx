import React from 'react'
import HomeImage from '../assets/banner-right-image.png'
import '../css/Home.css'

function Home() {
  return (
    <div className='home' id='home'>
        <div className="left_home">
            <h3>WELCOME TO SVS TECHNOLOGY</h3>
            <h1>We Make <span>Digital</span></h1>
            <h1><span>Ideas</span> & <span id='seo'>SEO</span></h1>
            <h1>Marketing</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Atque, voluptas sunt amet voluptatem neque ipsum ut soluta? 
                 Minima vitae tenetur perspiciatis voluptatum quod, 
                ipsa praesentium doloribus ea eos? Similique, quae.</p>
        </div>
        <div className="right_home">
            <img src={HomeImage} alt="" />
        </div>
    </div>
  )
}

export default Home