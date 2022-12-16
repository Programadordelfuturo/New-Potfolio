import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const time = () => {

      const dates = new Date();
      const hour = dates.getHours() < 10 ? '0' + dates.getHours() : dates.getHours();;
      const updateMinute = dates.getMinutes() < 10 ? '0' + dates.getMinutes() : dates.getMinutes();
      const updateSeconds = dates.getSeconds() < 10 ? '0' + dates.getSeconds() : dates.getSeconds()
      
      const showTime = document.querySelector('#Time');
      showTime.innerHTML = ""
      showTime?.append(document.createTextNode(hour + ':' + updateMinute + ':' + updateSeconds))
    }
    setInterval(time, 1000)

  return (
    <nav className='Navbar'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
      </ul>
      <strong>🕒Tiempo: <p id='Time'></p></strong>
    </nav>
  );
};

export default Navbar;