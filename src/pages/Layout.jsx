import React from 'react';
import { data, dataBackend } from '../utils/image';

const Layout = () => {
  return (
    <div className='Technologies'>
      <p><strong>FrontEnd</strong></p>
      <div id="tec-Front">
        {
          data.map((element) => (
            <img key={element.id} src={element.src} alt={element.alt} />
          ))
        }
      </div>
      <p><strong>Backend</strong></p>
      <div id='tec-Backend'>
        {
          dataBackend.map((element) => (
            <img key={element.id} src={element.src} alt={element.alt} />
          ))
        }
      </div>
    </div>
  );
};

export default Layout;