import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const [ day, setDay ] = useState(false)

    const time = () => {

      const dates = new Date();
      const hour = dates.getHours() < 10 ? '0' + dates.getHours() : dates.getHours();;
      const updateMinute = dates.getMinutes() < 10 ? '0' + dates.getMinutes() : dates.getMinutes();
      const updateSeconds = dates.getSeconds() < 10 ? '0' + dates.getSeconds() : dates.getSeconds()
      
      const showTime = document.querySelector('#Time');
      showTime.innerHTML = ""
      showTime?.append(document.createTextNode(hour + ':' + updateMinute + ':' + updateSeconds))
    }
    setInterval(time, 1000);


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
    <nav className='Navbar'>
      <ul>
        <GiHamburgerMenu onClick={() => setDay(!day) }/>
        {day && <div className='options'>
          <Link to='/'>Principal</Link>
          <Link to='/portfolio'>Portafolio</Link>
          <Link to='/aboutme'>Sobre mí</Link>
        </div>
        }
        {!day && <div className='btn-dark-mode'>
          <div id='A' className='active' onClick={()=>activeDark()}><FaSun/></div>
        </div>
        }
      </ul>
      <strong>🕒Tiempo: <p id='Time'></p></strong>
    </nav>
  );
};

export default Navbar;