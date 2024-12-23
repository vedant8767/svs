import React from 'react'
import HomeImage from '../assets/banner-right-image.png'
import '../css/Home.css'

function Home() {
  return (
    <div className='home' id='home'>
        <div className="left_home">
            <h3>WELCOME TO SVS TECHNOLOGY</h3>
            <h1>Innovation, Precision, <span>and Passion </span></h1>
            <h1>in <span>Every</span> <span id='seo'>Line of</span></h1>
            <h1>Code</h1>
            <p>we specialize in delivering tailored digital solutions that help businesses grow. Whether it’s building responsive websites, developing intuitive mobile apps, or boosting visibility through SEO, our team is committed to creating high-quality results. We focus on innovation, user experience, and performance to ensure your digital presence stands out.</p>
        </div>
        <div className="right_home">
            <img src={HomeImage} alt="" />
        </div>
    </div>
  )
}

export default Home