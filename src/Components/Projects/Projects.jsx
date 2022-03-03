import React from 'react'
import { projects } from '../../data'
import {DeveloperMode , DoneSharp , GitHub, Language} from '@mui/icons-material';
import './__projects.scss';

const Projects = () => {
  return (
    <div className='projects' id="projects">
      <div className='projects__heading'>
       <DeveloperMode className='codeIcon'/>
       <p>Projects I've Built</p>
      </div>
      
        {projects.map((project)=>{
         return <div key={project.id} className='projects__project'>
                <img className='image' src={project.gif} alt="project-gifs"/>

            <div className='details'>
               <h3>{project.title}</h3>
               <p>{project.description}</p>
               <p className='madewith'>Made with :</p>
               <ul>
                 {project.skills.map((skill, i)=>{
                     return <li key={i}><DoneSharp/>{ skill}</li>
                 })}
               </ul>
               <span>
                 <button className='github'><GitHub/><a href={project.github} target='_blank' rel="noreferrer">github</a></button>
                 <button className='website'><Language/><a href={project.website} target='_blank' rel="noreferrer">website</a></button>
               </span>
            </div>
         </div>
        })}
      
    </div>
  )
}

export default Projects