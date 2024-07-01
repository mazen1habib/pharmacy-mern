import React, { Fragment, useState } from 'react'
// import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import './css/scroll.css'
const Scroll = () => {
const [scroll,setscroll]=useState(false);
    window.addEventListener('scroll',()=>{
        let sc=window.scrollY
        sc >=351 ? setscroll(true) :setscroll(false)
      })
  return (
    <Fragment>
    {
        scroll ? <div className='scrollup'><button class="button" onClick={()=>{
         window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
    }}>
  <svg class="svgIcon" viewBox="0 0 384 512">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    > </path>
  </svg>
</button></div>
    :undefined
    }
    
    </Fragment>
  )
}

export default Scroll








//   {/*  ( <div className='scrollup'>
//         <button class="button" onClick={()=>{
//          window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
//     }}>
//   <svg class="svgIcon" viewBox="0 0 384 512">
//     <path
//       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//     ></path>
//   </svg>
// </button>

//     <MdOutlineKeyboardDoubleArrowUp size={30} style={{color:'white'}} onClick={()=>{
//          window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
//     }} />
//     </div>)  */}