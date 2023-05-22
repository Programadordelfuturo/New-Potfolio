import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import changeLanguaje from '../utils/languaje';
import aboutLanguaje from '../utils/aboutLanguaje'
import { imagePerson } from '../utils/image';

const Aboutme = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)
  
  const [ page, setPage ] = useState(1)

  const imgPerPage = 3;
  const lastPage = Math.ceil(aboutLanguaje.length/imgPerPage)
  const finalIndex = page*imgPerPage
  const initialIndex = (page - 1)*imgPerPage
  const corte = aboutLanguaje.slice(initialIndex, finalIndex)


  return (
    <div className='container-about'>
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
      <div className='logro'>
        <strong>Datos Adicionales</strong>
        <p>
          {
            valueLanguaje ? changeLanguaje[2].spanish : changeLanguaje[2].english
          }
        </p>
        <img src={imagePerson[0].src} alt={imagePerson[0].alt} />
      </div>
    </div>
  );
};

export default Aboutme;