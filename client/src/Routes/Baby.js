import React, { Fragment, useEffect, useState } from 'react'
import Section1nav from '../components/Nav/Section1nav'
import Section1baby from '../components/Baby/Section1baby'
import Section3 from '../components/Home/Section3'
import Section3baby from '../components/Baby/Section3baby'
import Section2baby from '../components/Baby/Section2baby'
import Footer from '../components/Footer/Footer'
import Scroll from './Scroll'

const Baby = () => {

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
</div> </div>  :
    <Fragment>
        <Section1nav/>
        <Section1baby/>
        <Section2baby/>
        <Section3/>
        <Section3baby/>
        <Scroll/>
        <Footer/>
        </Fragment>
    }
    </Fragment>
  )
}

export default Baby