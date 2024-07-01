import React, { Fragment } from 'react'
import imglogo from '../../images/new_logo-25ab65dd.svg'
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGmail } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { TfiInstagram } from "react-icons/tfi";
import { Link, NavLink } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import img1 from '../../images/visa.png'
import img2 from '../../images/discover.png'
import img3 from '../../images/master_card.png'
import img4 from '../../images/paypal.png'
import img5 from '../../images/amarican_express.png'
import './Footer.css'
const Footer = () => {
  return (
  <Fragment>
  <footer>
  <div className='confooterup'>
  <div className='footerslide1'>
  <img src={imglogo} alt=''/>
  <div className='datap'>
  <p> If you are going to use of Lorem  <br/>Ipsum need to be sure there isn't <br/> hidden of text</p>
  </div>
  <div className='iconsmedia'>
  <FaFacebookF />
  <SlSocialTwitter />
  <SiGmail />
  <CiYoutube />
  <TfiInstagram />
  </div>
  </div>
  <div className='footerslide2'>
  <h3>Useful Links</h3>
  <ul>
    <NavLink to={'/aboutus'}><li>About Us</li></NavLink>
    <NavLink to={'/faq'}><li>FAQ</li></NavLink>
    <NavLink ><li>Location</li></NavLink>
    <NavLink><li>Affiliates</li></NavLink>
    <NavLink to={'contactus'}><li>Contact</li></NavLink>
  </ul>
  </div>
  <div className='footerslide3'>
  <h3>Category</h3>
  <ul>
    <NavLink to={'/shop'}><li>Men</li></NavLink>
    <NavLink to={'/shop'}><li>Woman</li></NavLink>
    <NavLink to={'/shop'}><li>Kids</li></NavLink>
    <NavLink to={'/shop'}><li>Best Saller</li></NavLink>
    <NavLink to={'/shop'}><li>New Arrivals</li></NavLink>
  </ul>
  </div>
  <div className='footerslide4'>
  <h3>My Account</h3>
  <ul>
  <NavLink><li>My Account</li></NavLink>
  <NavLink><li> Discount</li></NavLink>
  <NavLink><li>Returns</li></NavLink>
  <NavLink><li>Orders History</li></NavLink>
  <NavLink><li>Order Tracking</li></NavLink>
  </ul>
    
  </div>
  <div className='footerslide5'>
  <h2> Contact Info</h2>
    <h4> <IoLocationOutline />  123 Street, Old Trafford, New South London , UK</h4>
    <h4> <MdOutlineMail /> <NavLink> info@sitename.com</NavLink></h4>
    <h4> <IoPhonePortraitOutline/> 02-3325455-46</h4>
  </div>
  </div>
  <div className='linefooter'>

  </div>
  <div className='footerdown'>
    <h3>© 2024 All Rights Reserved by Mazen Habeb</h3>
    <ul>
        <li><Link ><img src={img1} alt=''/></Link></li>
        <li><Link ><img src={img2} alt=''/></Link></li>
        <li><Link ><img src={img3} alt=''/></Link></li>
        <li><Link ><img src={img4} alt=''/></Link></li>
        <li><Link ><img src={img5} alt=''/></Link></li>
    </ul>
  </div>
  </footer>
  </Fragment>
  )
}

export default Footer