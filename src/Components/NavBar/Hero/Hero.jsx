import React from 'react'
import './Hero.css';
import My_Img from '../../../assets/My_Img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleClick = ()=> {
    window.open("https://drive.google.com/file/d/109fXLopI_jjA4uF4hdRe5BYAD3VO8fFW/view?usp=sharing", "_blank");
  }
  return (
    <div id="Hero" className= "Hero"> 
    <img src = {My_Img} alt = "" />
    <h1><span>I'm Bhavana,</span> Software developer based in bangalore,India</h1>
    <p>I am a seasoned software engineer with 2+ years of experience in Honeywell technology solutions private lmt,Bangalore</p>
    <div className = "hero-action">
        <div className = "hero-connect"><AnchorLink className='anchor-link' offset={50} href="#Contact">Connect with me</AnchorLink></div>
        {/* <div className = "hero-resume"><AnchorLink className='anchor-link' offset={50} href="#about">My resume</AnchorLink></div> */}
        <div className = "hero-resume" onClick={handleClick}>My resume</div>
    </div>
    </div>
  )
}

export default Hero
