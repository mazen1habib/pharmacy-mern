import { Fragment , useEffect, useState } from 'react';
import Section1 from '../components/Home/Section1';
import Section1nav from '../components/Nav/Section1nav';
import '../components/loading.css'
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Section5 from '../components/Home/Section5';
import Footer from '../components/Footer/Footer';
import Section6 from '../components/Home/Section6';
import Section7 from '../components/Home/Section7';
import Scroll from './Scroll';
const Home = () => {
    const [looding1 ,setlooding] =useState(false)
    useEffect(()=>{
      setlooding(true)
      setTimeout(()=>{
        setlooding(false)
      },5000)
    } ,[])
  return (
    <Fragment>{
        looding1 ? <div className='loader1' ><div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div> </div> :<Fragment>
<Section1nav/>

    <Section5/>
    <Section3/>
    <Section2/>
    <Section1/>
  
    <Section6/>
    <Section4/>
   <Section7/>
    <Footer/>
    <Scroll/>
</Fragment>
	  }  </Fragment>
  )
}

export default Home