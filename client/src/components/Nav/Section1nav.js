import { Fragment, useEffect, useState  } from 'react';
import logo from '../../images/new_logo-25ab65dd.svg'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import './style-section-nav.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Section1nav = () => {
//   useEffect(()=>{
//     axios.get(`http://localhost:5000/api/products/search?search=${}`).then((res)=>setproduct(res.data.data[0])).catch((err)=>console.log(err))
// })
  const [scroll,setscroll]=useState(false);
  window.addEventListener('scroll',()=>{
    let sc=window.scrollY
    sc >=60 ? setscroll(true) :setscroll(false)
  })
  const [user ,setuser]=useState({
    name:''})
  return (
    
   <Fragment>
    <nav   className={ scroll ? 'navdown1' :'nav'}>
        <header>
    
     <section className='search'>
     <img src={logo} alt=''/>  
     <div class="InputContainer">
  <input placeholder="Search.." id="input" className="input" name="text" type="text" value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})}/> 
</div>
 <button className='b5' onClick={()=> {}}>  <Link  to={`/product/${user.name}`} >Shop Now  </Link></button>
     </section>
<section className='icons-nav'>
<FaRegUser size={28} />
<MdOutlineShoppingBag  size={28}/>
</section>
        </header>
    </nav>
   </Fragment>
  )
}

export default Section1nav