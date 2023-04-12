import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguaje } from '../store/slices/lenguaje.slice';


const ToggleLanguaje = () => {

  const dispatch = useDispatch()

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)
  const change = () => dispatch(changeLanguaje(!valueLanguaje))

  const idioma = () => {
    const languaje = document.querySelector('#languaje')      
    
    if (languaje.classList.contains('change')){
      languaje.classList.remove('change');
    }
      else {
      languaje.classList.add('change');
    }
  }

  return (
    <>
      <button id='languaje' onClick={() => { 
        idioma();
        change()
        }}
        >
      </button>
    </>
  );
};

export default ToggleLanguaje;