import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img className='logo' src={logo} alt='Logo' />
            <ul>
                <li>Home</li>
                <li>Tv/Film</li>
                <li>My List</li>
            </ul>
        </div>

        <div className='navbar-right'>
            <img className='icons' src={search_icon} alt='search icon'/>
            <div className='navbar-profile'>
                <img className='profile' src={profile_img} alt='profile image'/>
                <img src={caret_icon} />
                <div className="dropdown">
                    <p>Sign out of DraMies</p>
                </div>
            </div>
        </div>
        {/*}
        <div>
            <ul>
                <li>Home</li>
                <li>Tv/Film</li>
                <li>My List</li>
            </ul>
            <img src={banner} alt='SweetHome Banierre' />
        </div>
        */}
    </div>

  )
}

export default Navbar
