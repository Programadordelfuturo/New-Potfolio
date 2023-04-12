import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Links from './Links';
import DarkMode from './DarkMode';
import ToggleLanguaje from './ToggleLanguaje';
import Time from './Time';


const Navbar = () => {

  const [ day, setDay ] = useState(false); 
  
  return (
    <nav className='Navbar'>
      <ul>
        <GiHamburgerMenu onClick={() => setDay(!day) }/>        
          {day && <div className='options'>
            <Links/>
          </div>}
      </ul>
      <DarkMode/>
      <ToggleLanguaje />
      <Time/>
    </nav>
  );
};

export default Navbar;