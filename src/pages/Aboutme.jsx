import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import changeLanguaje from '../utils/languaje';

const Aboutme = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)

  return (
    <div className='aboutme'>
      <div>
        <strong>{ valueLanguaje ? 'Acerca de mí' : 'About me' }</strong>
        <p>
          {
             valueLanguaje ? changeLanguaje[1].spanish : changeLanguaje[1].english
          }
        </p>
      </div>
    </div>
  );
};

export default Aboutme;