import React, { useEffect, useState } from 'react';
import { containerProjects } from '../utils/projects';

const Portfolio = () => {

  const [ page, setPage ] = useState(1)
  const projectsPerPage = 6
  const lastPage = Math.ceil(containerProjects.length/projectsPerPage)
  const finalIndex = page*projectsPerPage
  const firstIndex = (page - 1)*projectsPerPage;
  
  const paginated = containerProjects.slice(firstIndex, finalIndex);

  return (
    <div className='Projects'>
      <h1>Portafolio<br/>Proyectos</h1>
      <div className='button-paginated'>
        <button id='previus' onClick={() => setPage(page - 1)} disabled = {page == 1} >Anterior</button>
        <button id='next' onClick={() => setPage(page + 1)} disabled = {page == lastPage} >Siguiente</button>
        <button id='reset' onClick={() => setPage(1)}>Inicio</button>
      </div>
      <div className='container-projects'>
        {
          paginated.map((project) => (
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
      <div className='button-paginated'>
        <button id='previus' onClick={() => setPage(page - 1)} disabled = {page == 1} >Anterior</button>
        <button id='next' onClick={() => setPage(page + 1)} disabled = {page == lastPage} >Siguiente</button>
        <button id='reset' onClick={() => setPage(1)}>Inicio</button>
      </div>
    </div>
  );
};

export default Portfolio;