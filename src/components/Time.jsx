import React from 'react';
import { useSelector } from 'react-redux';

const Time = () => {

  const valueLanguaje = useSelector(state => state.spanishOrEnglish)
  
  const time = () => {

    const dates = new Date();
    const hour = dates.getHours() < 10 ? '0' + dates.getHours() : dates.getHours();
    const updateMinute = dates.getMinutes() < 10 ? '0' + dates.getMinutes() : dates.getMinutes();
    const updateSeconds = dates.getSeconds() < 10 ? '0' + dates.getSeconds() : dates.getSeconds();
    
    const time = document.querySelector('#Time')
    time.textContent = hour + ':' + updateMinute + ':' + updateSeconds
  }
  
  setInterval(time, 1000);

  return (
    <>
      <strong>🕒{valueLanguaje ? 'Tiempo' : 'Time'}: <p id='Time'></p></strong>
    </>
  );
};

export default Time;