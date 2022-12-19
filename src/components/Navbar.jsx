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
      const navbarA = document.querySelectorAll('.Navbar a')
      const Home = document.querySelector('#Home')
      
      
      if (active.classList.contains('active')){
        active.classList.remove('active');
        document.body.style = 'background: var(--second-url); background-size: cover; color: var(--four-color);';
        navbarA.forEach(navbar =>
        navbar.style = 'color: var(--four-color)');
        Home.style = 'background: var(--eight-color); color: var(--four-color)';
        // active.style = 'border: 4px solid var(--eleven-color); border-left: 4px solid var(--eight-color);'
        // setDay(false)
      }
       else {
       active.classList.add('active');
       document.body.style = 'background: var(--primary-url); background-size: cover; color: var(--five-color);';
       navbarA.forEach(navbar =>
       navbar.style = 'color: var(--five-color)');
       Home.style = 'background: var(--seven-color);'
       // active.style = 'border: 4px solid var(--ten-color); border-left: 4px solid var(--eleven-color);'
       // setDay(true)
      }
    }

  return (
    <nav className='Navbar'>
      <ul>
        <GiHamburgerMenu onClick={(e)=>{console.log(e); setDay(!day)}}/>
        {day && <div className='options'>
          <Link to='/'>Home</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/aboutme'>About me</Link>
        </div>}
        <div className='btn-dark-mode'>
          <div id='A' className='active' onClick={()=>activeDark()}><FaSun/></div>
        </div>
      </ul>
      <strong>🕒Tiempo: <p id='Time'></p></strong>
    </nav>
  );
};

export default Navbar;