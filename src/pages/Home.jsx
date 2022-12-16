import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import I from '../assets/photo.jpeg'
import html from '../assets/Logo-HTML.png'
import CSS from '../assets/Logo-CSS3.png'
import JS from '../assets/Logo-JS.png'
import react from '../assets/Logo-React.png'
import Redux from '../assets/Logo-Redux.png'
import GIT from '../assets/Logo-GIT.png'
import reactRouter from '../assets/Logo-React-Router.png'


const Home = () => {
  return (
    <div>
      <div>
        <div id='Home'>
          <img src={I} alt="image" />
          <div>
            <p><strong>Luis Enrique Saravia Tornero</strong></p>
            <p>Vivo actualmente en Lima,Perú e ingrese al mundo de la programación por como saber como funciona un Smart Contract, investigando cada vez más me encanto la lógica y el alcance de desarrollo que puedo obtener con esta carrera</p>
            <span><strong><a href="https://docs.google.com/document/d/1OYLuovdPnCAFbclqVW-vBuDAUJsc7DhKwQVKyFMHhoM/edit?usp=share_link" target='_blank'>Descargar CV</a></strong></span>
          </div>
          <div>
            <a href="https://github.com/Programadordelfuturo" target='_blank'><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/luis-enrique-saravia-tornero-1150b8253/" target='_blank'><AiFillLinkedin/></a>
            <a href="https://twitter.com/saravia_tornero" target='_blank'><AiOutlineTwitter/></a>
          </div>
        </div>
      </div>
      <div className='container-button'>
        <a href='http://www.linktr.ee/enriquesaravia' className='present' onClick={e =>{console.log(e.target.innerHTML); }} target='_blank'><strong>Contactme</strong></a>
        <div id='flecha'><div></div></div>
      </div>
      <p className='Title'><strong>TECNOLOGIAS</strong></p>
      <div className='Technologies'>
        <img src={html} alt="html" />
        <img src={CSS} alt="CSS3" />
        <img src={JS} alt="JS" />
        <img src={react} alt="React" />
        <img src={Redux} alt="Redux" />
        <img src={GIT} alt="GIT" />
        <img src={reactRouter} alt="GIT" />
      </div>
    </div>
  );
};

// ".\src\assets\Logo-HTML.png"
// ".\src\assets\Logo-CSS3.png"
// ".\src\assets\Logo-JS.png"
// ".\src\assets\Logo-React.png"
// ".\src\assets\Logo-Redux.png"
// ".\src\assets\Logo-GIT.png"
// ".\src\assets\Logo-React-Router.png"
export default Home;