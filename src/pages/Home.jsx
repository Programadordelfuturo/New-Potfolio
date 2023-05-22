import React from 'react';
import I from '../assets/photo.jpeg';
import { useSelector } from 'react-redux';
import changeLanguaje from "../utils/languaje";
import Icons from './icons';
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
          <Icons/>
        </div>
      </div>
      <ContactMe/>
      <Bold className='Title' value={valueLanguaje} textSpanish={'TECNOLOGIAS'} textEnglish={'TECNOLOGIES'}/>
      <Layout/>
    </div>
  );
};

export default Home;