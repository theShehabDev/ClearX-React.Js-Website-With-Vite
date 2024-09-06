import React from 'react'
import './About.css'
import aboutIMG from '../../assets/About_US.jpg'
// import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={aboutIMG} alt="" className='aboutIMG' />
        {/* <img src={play_icon} alt="" className='play_icon' /> */}
        </div>
        <div className='about-right'>
            <p>We are a team of dedicated professionals with years of experience in providing high-quality window cleaning services for both residential and commercial properties.</p>
            <p>We use only the best equipment. Our tools include DI tanks which deionize the water to leave them streak free and keep them clean for 6 months. We also use a resin that acts as a water repellant, so when it does rain your windows stay squeaky clean! We offer hard water stain removal for no extra cost, and make sure your fully satisfied with the job before you pay.</p>
            <p>We take pride in using environmentally friendly products and state-of-the-art equipment to ensure that we deliver exceptional results without harming the environment. Our team is fully trained and insured, so you can have peace of mind knowing that your windows are in good hands.</p>
            <p>Customer satisfaction is our top priority, and we strive to build long-lasting relationships with each client by delivering impeccable service every time. Trust us to make your windows sparkling clean!</p>
            <p>Whether you need a one-time deep cleaning or regular maintenance, we can tailor our services to meet your specific needs. We are committed to providing reliable, efficient, and affordable window cleaning solutions that exceed our customers' expectations. </p>
        </div>
    </div>
  )
}
export default About