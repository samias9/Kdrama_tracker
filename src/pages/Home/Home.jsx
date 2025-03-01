import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner2.png'
import info from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img className="banner" src={banner} alt='SweetHome Banierre' />
        <div className="hero-caption">
          <h1 className="hero-title">Doctor Slump</h1>
          <p >A drama about the growth and love of two main characters who quit their jobs as doctors and live in a rooftop house.</p>
          <div className='hero-buttons'>
            <button  className="btn">
              <img src={play_icon} alt='play button'/>
              Trailor
            </button>
            <button className="btn info-btn">
              <img src={info} alt='info button'/>
              learn more
            </button>
          </div>

        </div>
      </div>
      <TitleCards/>
    </div>
  )
}

export default Home
