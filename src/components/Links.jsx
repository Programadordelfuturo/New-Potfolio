import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Links = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)
  
  return (
    <>
      <Link to='/'>{valueLanguaje ? 'Principal' : 'Home'}</Link>
      <Link to='/portfolio'>{valueLanguaje ? 'Portafolio' : 'Portfolio'}</Link>
      <Link to='/aboutme'>{valueLanguaje ? 'Sobre mí' : 'About me'}</Link>
    </>
  );
};

export default Links;