import React,{useState, useEffect} from 'react'
import "./Navbar.css"
function Nav(){
 const [show, handleShow] = useState(false);
 useEffect(()=>{
   window.addEventListener("scroll",()=>{
     if(window.scrollY>150){
          handleShow(true)
     }else handleShow(false)
   });
   return()=>{
     window.removeEventListener("scroll");
   }
 },[]);

  return(
    <div className={`nav ${show && "nav_black"}`}>
     <img
      className="nav_logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      alt="NETFLIX logo"
      />

    </div>
  )
}
export default Nav
