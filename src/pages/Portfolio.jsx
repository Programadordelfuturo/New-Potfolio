import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { upLoadingThunk } from '../store/slices/isLoading.slice';
import { containerProjects } from '../utils/projects';

const Portfolio = () => {

  return (
    <div className='Projects'>
      <h1>Portafolio<br/>Proyectos</h1>
      <div>
        {
          containerProjects.map((project) => (
            <div key={project.id}>
              <a href={project.referencia} target='_blank'>
                <img src={project.img} alt={"image" + project.id} />
              </a>
              <p>
                <strong>{project.title}</strong>
                {project.texto}
              </p>
              <div id='fraemworks'>
              {
                project.tecnologies.map((tecnology) => (
                  <span>{tecnology}</span>
                ))
              }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Portfolio;

  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   dispatch(upLoadingThunk()) 
  // },[])