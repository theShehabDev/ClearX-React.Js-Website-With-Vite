import React, { useRef } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Reviews = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
    }


  return (
    <div className='reviews'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Olivia A.</h3>
                                <span>Utah, USA</span>
                            </div>
                        </div>
                        <p>I couldn't be happier with the residential window cleaning service! The team was prompt, 
                            professional, and left my windows sparkling clean.
                             They even managed to remove some hard water stains that I thought were permanent.
                              I've already recommended them to my neighbors. Excellent job!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Michael T.</h3>
                                <span>Utah, USA</span>
                            </div>
                        </div>
                        <p>Exceptional service! I contacted them for hard stain water removal from my windows,
                             and they delivered beyond my expectations. The stains are completely gone, 
                            and the windows look brand new. The technicians were professional and courteous. Will definitely use their services again in the future.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Emily R.</h3>
                                <span>Utah, USA</span>
                            </div>
                        </div>
                        <p>I hired this company for commercial window cleaning at my office building, 
                            and the results were outstanding. They were efficient, thorough, and very respectful of our workspace.
                             The difference in our windows is like night and day. Their attention to detail is commendable, and I'll definitely use their services again.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John K.</h3>
                                <span>Utah, USA</span>
                            </div>
                        </div>
                        <p>I had my gutters cleaned and windows done by this company, 
                            and they exceeded my expectations. The team was friendly, hardworking, and left no mess behind. The gutter cleaning was thorough
                            , and my windows look clearer than ever. I highly recommend their services for both residential and commercial needs.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Reviews