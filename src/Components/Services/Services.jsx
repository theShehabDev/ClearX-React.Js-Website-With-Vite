import React from 'react'
import './Services.css'
import service1 from '../../assets/Cleaning.jpeg'
import service2 from '../../assets/NormalWindow.jpeg'
import service3 from '../../assets/GutterCleaning.png'
import service4 from '../../assets/Hardstained.jpg'
import service_icon1 from '../../assets/res_icon.png'
import service_icon2 from '../../assets/com_icon.png'
import service_icon3 from '../../assets/gutter_icon.png'
import service_icon4 from '../../assets/hardstained_icon.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service1} />
        <div className='caption'>
          <img src={service_icon1} />
          <p>Residential Window Cleaning</p>
        </div>
        {/* <p>We provide thorough residential window cleaning services, ensuring your home shines bright. Our team uses eco-friendly products to protect your family and the environment.</p> */}
      </div>
      <div className="service">
        <img src={service2} />
        <div className='caption'>
          <img src={service_icon2} />
          <p>Commercial Window Cleaning</p>
        </div>
        {/* <p>Make a great first impression with our commercial window cleaning services. We cater to businesses of all sizes, ensuring your storefront looks its best.</p> */}
      </div>
      <div className="service">
        <img src={service3} />
        <div className='caption'>
          <img src={service_icon3} />
          <p>Gutter Cleaning</p>
        </div>
        {/* <p>Prevent water damage with our professional gutter cleaning services. We remove debris and ensure your gutters are functioning properly, protecting your property.</p> */}
      </div>
      <div className="service">
        <img src={service4} />
        <div className='caption'>
          <img src={service_icon4} />
          <p>Hardstain Water Removal</p>
        </div>
        {/* <p>Hardstain Water Removal eliminates tough water stains, mineral deposits, and soap scum from glass, tiles, and fixtures. Easy to use, it restores surfaces to a streak-free shine.</p> */}
      </div>
    </div>
  )
}

export default Services