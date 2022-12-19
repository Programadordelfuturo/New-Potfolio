import React from 'react';
import RickMorty from '../assets/Proyecto-RickMorty.png';
import BoxShadow from '../assets/ProyectoBoxShadow.png'
import Ppokemon from '../assets/P-pokemon.png';
import Pwelcome from '../assets/P-welcome.png';
import Pclima from '../assets/P-clima.png';
import Pquotes from '../assets/P-Quotes.png';

const Portfolio = () => {
  return (
    <div className='Projects'>
      <h1>Portfolio Projects</h1>
      <div>
        <a href="https://dazzling-liger-d9e01c.netlify.app" target='_blank'><img src={Pclima} alt="image" /></a>
        <a href="https://dazzling-florentine-1b687f.netlify.app" target='_blank'><img src={BoxShadow} alt="image" /></a>
        <a href="https://steady-nougat-633108.netlify.app" target='_blank'><img src={Ppokemon} alt="image" /></a>
        <a href="https://sweet-malasada-784f81.netlify.app" target='_blank'><img src={Pwelcome} alt="image" /></a>
        <a href="https://helpful-piroshki-e74e4c.netlify.app" target='_blank'><img src={RickMorty} alt="image" /></a>
        <a href="https://lovely-halva-a54879.netlify.app" target='_blank'><img src={Pquotes} alt="image" /></a>
      </div>
    </div>
  );
};

export default Portfolio;