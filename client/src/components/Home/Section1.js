import React, { Fragment } from 'react'
import './css/style-section1-home.css'
import img1 from '../../images/medical.webp'
const Section1 = () => {
  return (
  <Fragment>
   <section className='sec1-home'>
   <div className='pd-home'>
   <div className='pd-old'>
    <h2>Home Medical Supplies</h2>
    <h1>Fast Reading Digital <br/> Thermometer for <br/> Ear & Forehead</h1> 
    <p>But I must explain to you how all this <br/> mistaken idea of
    denouncing pleasure <br/> and praising pain.</p>
    <div className='pd-main'>
    <button className='b1'> 
    <span>SHOP</span>
    </button> 
    <button className='b2'>
    <span>ABOUT US</span>
    </button>
    </div>
    </div>
    </div>
    <img src={img1} alt=''/>
    </section>
  </Fragment>
  )
}

export default Section1