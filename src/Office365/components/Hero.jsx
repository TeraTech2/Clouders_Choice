import React from 'react';
import { FaHome } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero">
        <h1 className='text-light'>Microsoft 365</h1>
        
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <a href="#" className='text-decoration-none text-light mx-1 fs-6'>
            <FaHome /> Home &gt;
          </a>

          <a href="#" className='text-decoration-none text-light mx-1 fs-6'>
            Microsoft Modern Work place &gt;
          </a>

          <a href="#" className='text-decoration-none text-light fs-6'>
            Consulting and Modern Services
          </a>
        </div>
      </div>
  )
}

export default Hero