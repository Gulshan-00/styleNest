import React from 'react'
import './Navbar.css'
// import navlogo from '../Assets/nav-logo.svg'
// import navprofileIcon from '../Assets/nav-profile.svg'
import profile_pic_ from "../Assets/profile_pic_.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={navlogo} className='nav-logo' alt="" /> */}
      {/* <img src={} className='nav-logo' alt="" /> */}
      <h1 className="nav-logo">StyleNest</h1>
      <img src={profile_pic_} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar;
