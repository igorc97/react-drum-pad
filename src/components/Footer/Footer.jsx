import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Check my socials!</a>

    

      <div className="footer__socials">
        <a href='https://facebook.com/igor.ceglarz' target='_blank'><BsFacebook/></a>
        <a href='https://github.com/igorc97' target='_blank'><BsGithub/></a>
        <a href='https://twitter.com/Iggyy997' target='_blank'><BsTwitter/></a>
        <a href='https://reddit.com/user/darkpinknecromancer' target='_blank'><BsReddit/></a>
        </div>  

      <div className="footer__copyright">
        <small>&copy; There should be proper license. :) </small>
        </div>
    </footer>
  )
}

export default Footer