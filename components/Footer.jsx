import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Sony All rights reserverd</p>
      <p className='icon'>
        <AiFillInstagram/>
        <AiFillTwitterCircle/>
      </p>
    </div>
  )
}

export default Footer