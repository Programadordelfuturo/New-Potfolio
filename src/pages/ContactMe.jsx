import React from 'react';
import { useSelector } from 'react-redux';

const ContactMe = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)

  return (
    <a href='http://www.linktr.ee/enriquesaravia' target='_blank' className='container-button'>
      <div id='circle'></div>
      <p className='present'>
        <strong>
          { valueLanguaje ? 'Contactame' : 'Contact me' }
        </strong>
      </p>
      <div id='flecha'><div></div></div>
    </a>
  );
};

export default ContactMe;