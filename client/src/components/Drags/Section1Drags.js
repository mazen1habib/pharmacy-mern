import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import './Css/section1-style.css'
const Section1Drags = () => {
  return (
    <Fragment>
        <div className='con1-sec1-drags'>
        <Link to={'/'}><h2>Home </h2> </Link>
        <FaAngleRight size={20}  />
        <h2> Drags</h2> 
        </div>
    </Fragment>
  )
}

export default Section1Drags