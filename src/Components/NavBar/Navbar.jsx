import React,{useState,useRef} from 'react'
import "./Navbar.css"; 
import logo from "../../assets/logo.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const[menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
    const closeMenu = () => {
      menuRef.current.style.right = "-350px";
  }
  

  return (
    <div className="navbar">
     {/* <img src = {logo} alt = ""/>    */}
     <div className="logo"><h1>BR</h1></div>
     
     <img src = {menu_open} onClick = {openMenu} alt = "" className='nav-mob-open'/>   
     
     <ul ref= {menuRef} className= "nav-menu">
     <img src = {menu_close} onClick = {closeMenu} alt = "" className='nav-mob-close'/>   
        <li><AnchorLink className='anchor-link'  href="#Hero"><p onClick = {()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt = ''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick = {()=>setMenu("About Me")}>About Me</p></AnchorLink>{menu==="About Me"?<img src={underline} alt = ''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick = {()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt = ''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick = {()=>setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu==="Portfolio"?<img src={underline} alt = ''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#Contact"><p onClick = {()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={underline} alt = ''/>:<></>}</li>
     </ul>
     <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#Contact">
        Connect with me</AnchorLink>
     </div>
    </div>
  )
}

export default Navbar