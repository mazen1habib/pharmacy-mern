import React, { Fragment, useEffect } from 'react'
import './css/style-section2-home.css'
import img1 from '../../images/m1.webp'
import img2 from '../../images/m2.webp'
import axios from 'axios'

const Section2 = () => {
  useEffect(()=>{
    axios.get(`http://localhost:3003/api/products`).then((res)=>console.log(res)).catch((err)=>console.log(err))
},[])
  return (
    <Fragment>
        <section className='sec2'>
            <div className='sec2-home-1'>
              <div className='data-sec2'><h3>Home Medical Supplies</h3>
              <h1>Medicine Product</h1>
              <h2>$1.00-$55.00</h2>
              <button className='b5'> Shop Now </button>
              </div>
              <div className='img1-sec2'>
                <img src={img1} alt=''/>
              </div>
            </div>
            <div className='sec2-home-2'>
            <div className='data-sec2'><h3>Home Medical Supplies</h3>
              <h1>Medicine Product</h1>
              <h2>$1.00-$55.00</h2>
              <button className='b5'> Shop Now </button>
              </div>
            <div className='img2-sec2'>
            <img src={img2} alt=''/>
            </div>
            </div>
        </section>
        <section>

        </section>
    </Fragment>
  )
}

export default Section2