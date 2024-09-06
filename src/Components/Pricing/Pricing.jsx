import React from 'react'
import './Pricing.css'
import pricing1 from '../../assets/res_icon.png'
import pricing2 from '../../assets/com_icon.png'
import pricing3 from '../../assets/gutter_icon.png'
import pricing4 from '../../assets/hardstained_icon.png'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className="pricing-item">
        <div className='icon-container'>
          <img src={pricing1} alt="Residential" />
        </div>
        <h3>Residential Window Cleaning</h3>
        <p>Professional cleaning for your home windows, ensuring crystal-clear views.</p>
        <p className="price">$9 per external window</p>
        <p className="price">$8 per internal window</p>
      </div>
      <div className="pricing-item">
        <div className='icon-container'>
          <img src={pricing2} alt="Commercial" />
        </div>
        <h3>Commercial Window Cleaning</h3>
        <p>Enhance your business's appearance with our expert commercial cleaning services.</p>
        <p className="price">$12 per window</p>
      </div>
      <div className="pricing-item">
        <div className='icon-container'>
          <img src={pricing3} alt="Gutter Cleaning" />
        </div>
        <h3>Gutter Cleaning</h3>
        <p>Prevent water damage with our thorough gutter cleaning service.</p>
        <p className="price">$100 base fee</p>
      </div>
      <div className="pricing-item">
        <div className='icon-container'>
          <img src={pricing4} alt="Hardstain Water Removal" />
        </div>
        <h3>Hardstain Water Removal</h3>
        <p>Specialized cleaning to remove tough water stains and mineral deposits.</p>
        <p className="price">$10 per window</p>
      </div>
    </div>
  )
}

export default Pricing