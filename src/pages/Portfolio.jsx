import React, { useState } from 'react';
import { containerProjects, containerProjectsEnglish } from '../utils/projects';
import { useSelector } from 'react-redux';

const Portfolio = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)
  const languajePortfolio = valueLanguaje ? containerProjects : containerProjectsEnglish;

  const [ page, setPage ] = useState(1)
  const projectsPerPage = 6
  const lastPage = Math.ceil(containerProjects.length/projectsPerPage)
  const finalIndex = page*projectsPerPage
  const firstIndex = (page - 1)*projectsPerPage;
  
  const paginated = languajePortfolio.slice(firstIndex, finalIndex);


  return (
    <div className='Projects'>
      <h1>{ valueLanguaje ? 'Proyectos' : 'Portfolio'}<br/>{ valueLanguaje ? 'Portafolio' : 'Projects'}</h1>
      <div className='button-paginated'>
      <button id='previus' onClick={() => setPage(page - 1)} disabled = {page == 1} >{ valueLanguaje ?'Anterior' : 'Previus'}</button>
        <button id='next' onClick={() => setPage(page + 1)} disabled = {page == lastPage} >{ valueLanguaje ? 'Siguiente' : 'Next'}</button>
        <button id='reset' onClick={() => setPage(1)} disabled = {page == 1} >{ valueLanguaje ? 'Inicio' : 'Init' }</button>
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
        <button id='previus' onClick={() => setPage(page - 1)} disabled = {page == 1} >{ valueLanguaje ?'Anterior' : 'Previus'}</button>
        <button id='next' onClick={() => setPage(page + 1)} disabled = {page == lastPage} >{ valueLanguaje ? 'Siguiente' : 'Next'}</button>
        <button id='reset' onClick={() => setPage(1)}>{ valueLanguaje ? 'Inicio' : 'Init' }</button>
      </div>
    </div>
  );
};

export default Portfolio;