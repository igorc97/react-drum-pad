import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithubSquare} from 'react-icons/fa'
import{FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" targer="_blank"><BsLinkedin/></a>
        <a href="https://github.com" targer="_blank"><FaGithubSquare/></a>
        <a href="https://facebook.com" targer="_blank"><FaFacebookSquare/></a>
        </div>
  )
}

export default HeaderSocials