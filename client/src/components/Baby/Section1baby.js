
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import '../Drags/Css/section1-style.css'
const Section1baby = () => {
  return (
    <Fragment>
    <div className='con1-sec1-drags'>
    <Link to={'/'}><h2>Home </h2> </Link>
    <FaAngleRight size={20}  />
    <h2> Baby Care</h2> 
    </div>
</Fragment>
  )
}

export default Section1baby