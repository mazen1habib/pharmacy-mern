import React, { Fragment, useEffect, useState } from 'react'
import Section1nav from '../components/Nav/Section1nav'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Search = () => {
      const  params =useParams((e)=>e  )
    //   console.log(params);
      const [product ,setproduct]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/product/search?search=${params.search}`).then((res)=>setproduct(res.data.data[0])).catch((err)=>console.log(err))
    })
    
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

export default Search