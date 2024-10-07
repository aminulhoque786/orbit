import React, { useRef } from 'react';
import Container from './Container';
import Slider from "react-slick";
import ket from "../assets/dal.png";
import bag2 from "../assets/yui.png";
import bag from "../assets/guh.png";
import sunglass from "../assets/sunglass.png";

const Offers = () => {
  const sliderRef = useRef(null); 

  const settings = {
    
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
   
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); 
  };

  return (
    <Container className=" mb-10 overflow-hidden">
      <div>
        <h2 className='font-dm text-[30px] font-bold'>Special Ofeers</h2>
      </div>

    
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        >
          &#10094; 
        </button>

        <Slider ref={sliderRef} {...settings}>
          {[ket, bag, bag2, sunglass].map((image, index) => (
            <div key={index} className='p-2 relative outline-none'>
              <img src={image} alt="" className="outline-none" />
              <div className='absolute top-2 left-3 pt-3'>
                <h5 className='text-[10px] hover:bg-purple-700 hover:text-white px-2 py-1 lg:text-[18px] lg:px-6 lg:py-1 bg-black text-white'>New</h5>
              </div>
              <div className='flex flex-col sm:flex-row font-dm items-start justify-between'>
                <div className='flex-1 mb-1'>
                  <h2 className='text-[14px] sm:text-[16px] font-bold'>Basic crew neck tee</h2>
                  <p className='text-gray-400 text-[12px] sm:text-[14px]'>$44.00</p>
                </div>
                <div className='flex-1 mb-1 sm:text-right'>
                  <h5 className='text-[12px] sm:text-[14px]'>Black</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        >
          &#10095; 
        </button>
      </div>
    </Container>
  );
}

export default Offers;
