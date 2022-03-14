import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to Drum Pad App</h5>
        <h1>This app was made in order to practise React.js</h1>
        <h5 className='text-light'>Just test it!</h5>
        <HeaderSocials/>

      </div>
      <a href='#footer' className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header