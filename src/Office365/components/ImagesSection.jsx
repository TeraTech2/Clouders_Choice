import React from 'react';
import Images from '../imgs/Images/1.webp'
import Image2 from '../imgs/Image2/2.webp'
import Image3 from '../imgs/Image3/3.webp'

const ImagesSection = () => {
  return (
    <div className="container images_section">
        <img src={Images} className="img-fluid" alt="migration" />

        <h1 className="text-center mt-5 fw-bold">How We Do It</h1>

        <img src={Image2} className="img-fluid mt-5" alt="migration process" />

        <img src={Image3} className="img-fluid mt-5" alt="migration services" />
      </div>
  )
}

export default ImagesSection