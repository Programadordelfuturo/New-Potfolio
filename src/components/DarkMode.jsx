import React from 'react';
import { FaSun } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';

const DarkMode = () => {
  
  // const isDarkMode = useSelector(state => state.isDarkMode);
  // const dispatch = useDispatch;

  // const active = () => {
  //   dispatch(isDarkMode(!is))
  // }
  
  const activeDark = () => {
    const active = document.querySelector('#A')

    // active.classList.contains('active')
    if (active.classList.contains('active')){
      active.classList.remove('active');
      document.body.style = 'background: var(--three-url); background-size: auto; color: var(--four-color);';
    }
      else {
      active.classList.add('active');
      document.body.style = 'background: var(--four-url); background-size: cover; background-position: center; color: var(--five-color);';
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