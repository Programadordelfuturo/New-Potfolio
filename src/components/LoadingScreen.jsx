import React from 'react';
// import { useSelector } from 'react-redux';

const LoadingScreen = () => {

  // const isLoading = useSelector(state => state.isLoading);

  // if(isLoading) {body.style.background = rgba(0, 0, 0, 0.6)}
  
  return (
    <div id='LoadingScreen'>
      <strong>Loading</strong>
      <div id='video-Loading'>
        <div id='VL1'></div>
      </div>
    </div>
  );
};

export default LoadingScreen;