import React from 'react'
import './__header.scss';
import {Link} from 'react-scroll';
import {Menu , Close} from '@mui/icons-material';
import { useContext } from 'react';
import {Context} from '../../Context';


const Header = () => {
  const {open , setOpen} = useContext(Context);
  const width  = window.innerWidth;
  

  return (
    <div className='header' id="header">
       <h1><Link to="intro" spy={true} smooth={true} offset={-80}>PORTFOLIO</Link></h1>
        <Menu className='menubar' 
        onClick={()=>setOpen(!open)}
        style={{display : (!open && width <= 780) && 'block'}}/>
        <Close className='closebar' 
        onClick={()=>setOpen(!open)}
        style={{display : (open && width <= 780) && 'block'}}/>
       <div className='header__items' open={open}>
         <p><Link to="projects" spy={true} smooth={true} offset={-80}>Projects</Link></p>
         <p><Link to="skills" spy={true} smooth={true} offset={-80}>Skills</Link></p>
         <p><Link to="contact" spy={true} smooth={true} offset={-80}>Contact</Link></p>
       </div>
       <div className='drawer' style={{width : open && '40vw'}}>
       <p><Link to="projects" spy={true} smooth={true} offset={-80} onClick={()=>setOpen(!open)}>Projects</Link></p>
       <p><Link to="skills" spy={true} smooth={true} offset={-80} onClick={()=>setOpen(!open)}>Skills</Link></p>
       <p><Link to="contact" spy={true} smooth={true} offset={-80} onClick={()=>setOpen(!open)}>Contact</Link></p>
       </div>
    </div>
  )
}

export default Header