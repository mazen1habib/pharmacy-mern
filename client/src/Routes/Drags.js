import React, { Fragment, useEffect, useState } from 'react'
import Section1Drags from '../components/Drags/Section1Drags'
import Section1nav from '../components/Nav/Section1nav'
import Section3 from '../components/Home/Section3'
import Section2Drags from '../components/Drags/Section2Drags'
import Section3Drags from '../components/Drags/Section3Drags'
import Footer from '../components/Footer/Footer';
import Scroll from './Scroll'
const Drags = () => {
  const [looding1 ,setlooding] =useState(false)
  useEffect(()=>{
    setlooding(true)
    setTimeout(()=>{
      setlooding(false)
    },5000)
  } ,[])
  return (
    <Fragment> {
       looding1 ? <div className='loader1' ><div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div> </div>  : <Fragment>
    <Section1nav/>
    <Section1Drags/>
    <Section2Drags/>
   <Section3/>
   <Section3Drags/>
   <Scroll/>
 <Footer/>
 </Fragment> 
 }
    </Fragment>
  )
}

export default Drags