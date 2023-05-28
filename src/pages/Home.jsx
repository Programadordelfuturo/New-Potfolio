import React from 'react';
import I from '../assets/photo.jpeg';
import { useSelector } from 'react-redux';
import changeLanguaje from "../utils/languaje";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Layout from './Layout';
import ContactMe from './ContactMe';
import Bold from './Bold';

const Home = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish);

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
            <Bold value={valueLanguaje} textSpanish={changeLanguaje[0].spanish} textEnglish={changeLanguaje[0].english } />
          </div>
          <div id='icons-social'>
            <a href="https://github.com/Programadordelfuturo" target='_blank' ><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/luis-enrique-saravia-tornero-1150b8253/" target='_blank' ><AiFillLinkedin/></a>
            <a href="https://twitter.com/saravia_tornero" target='_blank' ><AiOutlineTwitter/></a>
          </div>
        </div>
      </div>
      <ContactMe/>
      <Bold className='Title' value={valueLanguaje} textSpanish={'TECNOLOGIAS'} textEnglish={'TECNOLOGIES'}/>
      <Layout/>
    </div>
  );
};

export default Home;