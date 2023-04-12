import React from 'react';
import { FaSun } from 'react-icons/fa';

const DarkMode = () => {
  
  const activeDark = () => {
    const active = document.querySelector('#A')      
    
    if (active.classList.contains('active')){
      active.classList.remove('active');
      document.body.style = 'background: var(--five-color); background-size: cover; color: var(--four-color);';
    }
      else {
      active.classList.add('active');
      document.body.style = 'background: var(--ten-color); background-size: cover; color: var(--five-color);';
    }
  }

  return (
    <>
      <div className='btn-dark-mode'>
        <div id='A' className='active' onClick={()=>activeDark()}><FaSun/></div>
      </div>
    </>
  );
};

export default DarkMode;