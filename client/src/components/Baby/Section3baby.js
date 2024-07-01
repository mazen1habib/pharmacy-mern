import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import '../Drags/Css/section3-drags.css'
const Section3baby= () => {
  
    const [product ,setproduct]=useState([])
    const [x ,setx]=useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products`).then((res)=>setproduct(res.data.data)).catch((err)=>console.log(err))
    },[])
  return (
    <Fragment>
    <div className='con-sec3-drags'>
    <div className='data-sec3-drags'>
        {
          
            product.map((e,idx)=>(
                (e.productCategory === 'baby care' && (
                    ( idx <= 32 &&   <div className='product-sec3-drags'key={idx} >
                <div className='images'>
                <img src={e.imagemean} alt=''/></div>
                <h4> {e.productName}</h4>
                <h3> { "EGP " + e.productPrice} </h3> 
                <button className="button12"> </button>

</div>)
               )  )     
            ))
        }
        { x  ?(  
          
          product.map((o,idx)=>(
              (o.productCategory === 'baby care' && (
                  ( idx > 32  && (idx <= 46 &&  <div className='product-sec3-drags'key={idx} >
              <div className='images'>
              <img src={o.imagemean} alt=''/></div>
              <h4> {o.productName}</h4>
              <h3> { "EGP " + o.productPrice} </h3>
               <button className="button12"> </button>
              
              </div>)  )
             )  )     
          ))
       )
           :  undefined}
       
        <button style={x? {display:'none'} : undefined} onClick={()=>setx(true) }  class="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Shop More</span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

        </div>
        </div>
    </Fragment>
  )
}

export default Section3baby