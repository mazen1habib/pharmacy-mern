import React, { Fragment, useEffect, useState } from 'react'
import Section1nav from '../components/Nav/Section1nav'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
      const  params =useParams((e)=>e  )
      const [product ,setproduct]=useState([])
      console.log(params.id);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products/${params.id}`).then((res)=>setproduct(res.data.data[0])).catch((err)=>console.log(err))
    } ,[])
  return (
   <Fragment>
    <Section1nav/>
    {
        <div> 
        <img  src={product.imagemean} alt=''/>
        </div>
    }


    <Footer/>
   </Fragment>
  )
}

export default Singleproduct