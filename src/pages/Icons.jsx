import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Icons = () => {
  return (
    <div id='icons-social'>
      <a href="https://github.com/Programadordelfuturo" target='_blank' ><AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/luis-enrique-saravia-tornero-1150b8253/" target='_blank' ><AiFillLinkedin/></a>
      <a href="https://twitter.com/saravia_tornero" target='_blank' ><AiOutlineTwitter/></a>
    </div>
  );
};

export default Icons;