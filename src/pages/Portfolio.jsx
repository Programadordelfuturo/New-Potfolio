import React from 'react';
import RickMorty from '../assets/Proyecto-RickMorty.png';
import BoxShadow from '../assets/ProyectoBoxShadow.png'
import Ppokemon from '../assets/P-pokemon.png';
import Pwelcome from '../assets/P-welcome.png';

const Portfolio = () => {
  return (
    <div className='Projects'>
      <h1>Portfolio Projects</h1>
      <div>
        <img src={RickMorty} alt="image" />
        <img src={BoxShadow} alt="image" />
        <img src={Ppokemon} alt="image" />
        <img src={Pwelcome} alt="image" />
        <img src={RickMorty} alt="image" />
        <img src={RickMorty} alt="image" />
        <img src={RickMorty} alt="image" />
        <img src={RickMorty} alt="image" />
      </div>
      <p>asdasdasd</p>
    </div>
  );
};

export default Portfolio;