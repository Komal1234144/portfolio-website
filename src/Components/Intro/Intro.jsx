import React, { useEffect } from 'react'
import { useRef } from 'react'
import {init} from 'ityped';
import {Link} from 'react-scroll';
import './__intro.scss'
const Intro = () => {

const textRef =  useRef()
useEffect(()=>{
    init(textRef.current, 
        { showCursor: true,
         strings: ['Front-end Developer' , 'React Developer'],
         backDelay : 1500,
         backSpeed : 60
         })
},[])

  return (
    <div className='intro' id="intro">
      <div className='intro__img'>
        <img src="./assets/profile.png" alt="" />
      </div>
      <div className='intro__info'>
        <p>
          Hi There! I'm Komal Tolambia <br/>
          <span className="intro__info_skill" ref={textRef}></span>
        </p>
        <button><Link to="contact" spy={true} smooth={true} offset={-80}>Contact Me</Link></button>
      </div>
    </div>
  )
}

export default Intro
