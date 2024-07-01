import React, { Fragment } from 'react'
import img1 from  '../../images/Three standing pharmacists together.jpg'
import './css/style-section6-home.css'
const Section6 = () => {
  return (
    <Fragment>
        <div className='con-sec6-home'>
        <div className='data-sec6-home'>
            <h1>Pharmacy care built around you</h1>
            <p>Our pharmacists work with your doctor on your behalf to help you <br/>save money on your medications, discuss treatments options, <br/>and more.</p>
            </div>
            <img src={img1} alt=''/>
        </div>
    </Fragment>
  )
}

export default Section6