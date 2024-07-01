import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './css/style-section4.css'
import { Link } from 'react-router-dom';
function Section4() {
   
    const [product ,setproduct]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products`).then((res)=>setproduct(res.data.data)).catch((err)=>console.log(err))
    },[])
  return (
    <Fragment>
<div className='con'>
<h1>FEATURED PRODUCTS</h1>
      <Swiper loop={true} watchSlidesProgress={true} slidesPerView={3} className="mySwiper containerproductc">
        {
            product.map((e)=>(
              <SwiperSlide  className='productc' >
              <Link to={`/products/${e._id}`}>   <div className='image-mean-sec4'> 
               <img src={ e.imagemean} alt=''/>
              </div>
              </Link>  
              <h4>{e.productName}</h4>
              <div data-tooltip= { "EGP " + e.productPrice} class="button">
            <div class="button-wrapper">
 
  <div class="text">Buy Now</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>

</div>
           
            </SwiperSlide>
        ))
        }
        </Swiper>
        </div>
    </Fragment>
  )
}

export default Section4