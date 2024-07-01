import React, { Fragment, useState } from 'react'
import img1 from '../../images/shipped.png'
import img2 from '../../images/save-money.png'
import img3 from '../../images/24-hours.png'
import './css/style-section7-home.css'
import { FaAngleDown } from "react-icons/fa6";
const Section7 = () => {
    const [x,setx] = useState(true)
    const [y,sety] = useState(true)
    const [z,setz] = useState(true)
  return (
    <Fragment>
    <div className='consec7'>
    <div className='condata'>
     <img style ={ x ? {marginLeft:'60px' ,paddingTop:'20px'} :   undefined } className='ig1' src={img1} alt=''/>
     <div>
     <h3>FAST & FREE SHIPPING <span> <FaAngleDown  style={{cursor:'pointer'}}size={15}  onClick={()=>setx(!x)}/></span></h3>
   
     <p  style={x ? {display:'none'} : undefined}>Get your order delivered same day or next day <br/> according to your location  in Cairo & Giza. We <br/> also offer  Pharmacy Marts super saver delivery <br/>within 2-3 business days in Cairo & Giza. <br/> In other locations you will <br/> receive your order within 2-7 business days.</p>
     </div>
    </div>
    <div className='line'></div>
    <div className='condata'>
     <img style ={ y ? {marginLeft:'100px'} :   undefined } className='ig2' src={img2} alt=''/>
     <div>
     <h3 className='h3-2'>  DISCOUNTS & 30 Day Return <span> <FaAngleDown  style={{cursor:'pointer'}}size={15}  onClick={()=>sety(!y)}/></span></h3>
     <p  style={y ? {display:'none'} : undefined}>Pharmacy Marts keeps running different  <br/> promotions on its website and stores where <br/> you can benefit from discounts being offered on <br/>a wide variety of items.  On the basis of the <br/> relevant promotion,  the discount may be applied <br/>  automatically or a coupon code may have to be used to <br/> avail of the discount.</p>
     </div>
    </div>
    <div className='line'></div>
    <div className='condata'>
     <img style ={ z ? {marginLeft:'60px' ,paddingTop:'35px'} :   undefined } className='ig3' src={img3} alt=''/>
     <div>
     <h3 className='h3-3'>CUSTOMER SUPPORT  <span> <FaAngleDown  style={{cursor:'pointer'}}size={15}  onClick={()=>setz(!z)}/></span></h3>
     <p  style={z ? {display:'none'} : undefined}>We’re here to help, so please find the most <br/> relevant way to get in touch, please <br/>  contact our Customer Service by <br/> email at customersupport@bloompharmacy.com or <br/> call us on 19199 (from 10am to 6pm).</p>
    </div>
    </div>
   </div>
   </Fragment>
  )
}

export default Section7