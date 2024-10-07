import React, { useRef } from 'react';
import Container from './Container';
import Slider from "react-slick";
import ket from "../assets/ghori.jpg";
import bag2 from "../assets/yik.jpg";
import bag from "../assets/bilai.jpg";
import sunglass from "../assets/bag.png";

const New = () => {
  const sliderRef = useRef(null);

  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container className="pt-8 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Title Section */}
      <div className="mb-6 ">
        <h2 className='font-dm text-[24px] sm:text-[30px] font-bold'>New Arrivals</h2>
      </div>

      {/* Slider Section */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition ease-in-out"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &#10094;
        </button>

        {/* Slick Slider Component */}
        <Slider ref={sliderRef} {...settings}>
          {[ket, bag, bag2, sunglass].map((image, index) => (
            <div key={index} className='p-4 relative group outline-none'>
              <img src={image} alt="" className="rounded-lg outline-none w-full h-[300px] object-cover sm:h-[350px] lg:h-[400px] transition-all duration-300 transform group-hover:scale-105" />

              {/* "New" label */}
              <div className='absolute top-3 left-3'>
                <span className='text-xs sm:text-sm lg:text-base bg-black text-white px-2 py-1 rounded hover:bg-purple-700 transition ease-in-out'>New</span>
              </div>

              {/* Add to Cart and Favourite Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out rounded-b-lg">
                <div className="flex flex-col items-start space-y-2 p-4 transform translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <button className="text-white text-sm sm:text-base hover:text-purple-500">Add to Cart</button>
                  <button className="text-white text-sm sm:text-base hover:text-purple-500">Add to Favourite</button>
                </div>
              </div>

              {/* Product Details */}
              <div className='flex flex-col sm:flex-row font-dm items-start justify-between mt-4'>
                <div className='flex-1'>
                  <h2 className='text-[14px] sm:text-[16px] font-bold'>Basic crew neck tee</h2>
                  <p className='text-gray-500 text-[12px] sm:text-[14px]'>$44.00</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition ease-in-out"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &#10095;
        </button>
      </div>
    </Container>
  );
};

export default New;
