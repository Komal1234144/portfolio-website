import React from 'react'
import {skills} from '../../data';
import './__skills.scss';
import {Memory , Verified} from '@mui/icons-material';

const Skills = () => {
  return (
    <div className='skills' id="skills">
    <div className='skills__header'>
    <Memory className='skillsIcon'/>
    <p>Skills and Technologies</p>
    </div>
     <div className='skillsList'>
       {skills.map((skill, i)=>{
    return <div key={i} className='skill'>
               <Verified className='verified'/> {skill}       
           </div>
       })}
       </div>
    </div>
  )
}

export default Skills