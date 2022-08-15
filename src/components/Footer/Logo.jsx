import React from 'react'
import logo from '../../assets/logo-dark.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="dark-logo">
      <a href="#home">
        <img src={logo} alt="" />
      </a>
    </div>
  )
}

export default Logo
