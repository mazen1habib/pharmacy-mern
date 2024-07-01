import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import './css/style-section3.css'
import img1 from '../../images/1-drugs.png'
import img2 from '../../images/2-baby-care.png'
import img3 from '../../images/3-man-care.png'
import img4 from '../../images/4-woman-care.png'
import img5 from '../../images/Gomla update .png'
import img6 from '../../images/Home Care (1).png'
import img7 from '../../images/Makeup & Accessories (1).png'
import img8 from '../../images/Fitness & Nutrition (1).png'
import img9 from '../../images/Flashoffer.jpg'
import img10 from '../../images/11-hair-care.png'
import img11 from '../../images/18-oragnic-products.png'
import img12 from '../../images/14-oral-care.png'
import img13 from '../../images/19-medical-supplies.png'
import img14 from '../../images/12-skin-care.png'
import img15 from '../../images/Eva.png'
import img16 from '../../images/L’Oreal.png'
import img17 from '../../images/Garnier.png'
import img18 from '../../images/Palmers.png'
import img19 from '../../images/unilever.jpg'
import img20 from '../../images/20-personal-protection.png'
import { NavLink } from 'react-router-dom';
const Section3 = () => {
  return (
    <Fragment>
    <div className="consec6furn">
   
<Swiper 
        loop={true}
       centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
         slidesPerView={5} className="mySwipersec6furn">
        
         <SwiperSlide className="mo" ><img src={img1} alt="" /> <NavLink to={'/Drags'}>  <h3>Drugs</h3> </NavLink>  </SwiperSlide> 
        <SwiperSlide className="mo" ><img src={img2} alt="" /> <NavLink to={'/babycare'}> <h3>Baby Care</h3></NavLink></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img3} alt="" /> <h3>Men Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img4} alt="" /> <h3>Women Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img5} alt="" /> <h3>Gomla</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img6} alt="" /> <h3>Home Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img7} alt="" /> <h3>Makeup & Accessories</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img8} alt="" /> <h3>Fitness & Nutrition</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img9} alt="" /> <h3>Flash Offer</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img10} alt="" /> <h3>Hair Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img11} alt="" /> <h3>Oragnic & Herbal Products</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img12} alt="" /> <h3>oral Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img20} alt="" /> <h3>personal Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img13} alt="" /> <h3>Medical Supplies</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img14} alt="" /> <h3>Skin Care</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img15} alt="" /> <h3>Eva</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img16} alt="" /> <h3>L’Oreal</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img17} alt="" /> <h3>Garnier</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img18} alt="" /> <h3>Palmers</h3></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img19} alt="" /> <h3>Unilever</h3></SwiperSlide>
      </Swiper>
      </div>
    </Fragment>
  )
}

export default Section3