import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import I from '../assets/photo.jpeg';
import { useSelector } from 'react-redux';
import { data } from '../utils/image';
import changeLanguaje from "../utils/languaje";

const Home = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)

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
                { valueLanguaje ? changeLanguaje[0].spanish : changeLanguaje[0].english }
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
            { valueLanguaje ? 'Contactame' : 'Contact me' }
          </strong>
        </p>
        <div id='flecha'><div></div></div>
      </a>
      <p className='Title'>
        <strong>
          { valueLanguaje ? 'TECNOLOGIAS' : 'TECNOLOGIES'}
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