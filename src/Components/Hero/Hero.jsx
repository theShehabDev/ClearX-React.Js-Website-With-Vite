import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div>
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Your trusted window cleaning service</h1>
                <p>At ClearX, we offer a range of professional window cleaning services tailored to meet your needs. Our experienced team ensures that your windows are spotless and streak-free, 
                    enhancing the beauty of your home or business.</p>
                <Link to='about' smooth={true} offset={-340} duration={500} className='btn'>Explore More <img src={dark_arrow} alt='arrow' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero