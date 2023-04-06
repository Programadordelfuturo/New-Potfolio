import React, { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import I from '../assets/photo.jpeg';
import { useDispatch } from 'react-redux';
import { upLoadingThunk } from '../store/slices/isLoading.slice';
import { data } from '../utils/image';


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
              <strong id='NAME'>
                Luis Enrique Saravia Tornero
              </strong>
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
        <p className='present'>
          <strong>
            Contactame
          </strong>
        </p>
        <div id='flecha'><div></div></div>
      </a>
      <p className='Title'>
        <strong>
          TECNOLOGIAS
        </strong>
      </p>
      <div className='Technologies'>
        {
          data.map((element) => (
            <img key={element.id} src={element.src} alt={element.alt} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;