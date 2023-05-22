import React from 'react';
import { data } from '../utils/image';

const Layout = () => {
  return (
    <div className='Technologies'>
      {
        data.map((element) => (
          <img key={element.id} src={element.src} alt={element.alt} />
        ))
      }
    </div>
  );
};

export default Layout;