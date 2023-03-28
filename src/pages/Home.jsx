import React, { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import I from '../assets/photo.jpeg';
import html from '../assets/Logo-HTML.png';
import CSS from '../assets/Logo-CSS3.png';
import JS from '../assets/Logo-JS.png';
import react from '../assets/Logo-React.png';
import Redux from '../assets/Logo-Redux.png';
import GIT from '../assets/Logo-GIT.png';
import reactRouter from '../assets/Logo-React-Router.png';
import Express from '../assets/Express.png';
import nodeJS from '../assets/nodeJS.png';
import Postgres from '../assets/PostgresSQL.png';
import Sequelize from '../assets/Sequelize.png';
import EEUU from '../assets/Americana.png'
import { useDispatch } from 'react-redux';
import { upLoadingThunk } from '../store/slices/isLoading.slice';


const Home = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(upLoadingThunk()) 
  },[])

  return (
    <div className='container-Home'>
      <div>
        <div id='Home'>
          <img src={I} alt="image" />
          <div>
            <p>
              <strong id='NAME'>Luis Enrique Saravia Tornero</strong>
            </p>
            <p>
              <strong>
                Desarrollador Full Stack Developer ReactJS, NodeJS, Express, MongoDB, PostgreSQL, 
                Sequelize, TailWindCSS, React Hooks, Axios, Redux, NextJS, Python, TypeScript
              </strong>
            </p>
          </div>
          <div id='icons-social'>
            <a href="https://github.com/Programadordelfuturo" target='_blank' ><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/luis-enrique-saravia-tornero-1150b8253/" target='_blank' ><AiFillLinkedin/></a>
            <a href="https://twitter.com/saravia_tornero" target='_blank' ><AiOutlineTwitter/></a>
          </div>
        </div>
      </div>
      <a href='http://www.linktr.ee/enriquesaravia' target='_blank' className='container-button'>
        <div id='circle'></div>
        <p className='present'><strong>Contactame</strong></p>
        <div id='flecha'><div></div></div>
      </a>
      <p className='Title'><strong>TECNOLOGIAS</strong></p>
      <div className='Technologies'>
        <img src={html} alt="html" />
        <img src={CSS} alt="CSS3" />
        <img src={JS} alt="JS" />
        <img src={react} alt="React" />
        <img src={Redux} alt="Redux" />
        <img src={GIT} alt="GIT" />
        <img src={reactRouter} alt="React-Router"/>
        <img src={nodeJS} alt="nodeJS"/>
        <img src={Express} alt="Express"/>
        <img src={Postgres} alt="Postgres"/>
        <img src={Sequelize} alt="Sequelize"/>
      </div>
    </div>
  );
};

export default Home;