import React from 'react';
import Container from './Container';
import Slider from "react-slick";
import ket from "../assets/ket.png";
import bag2 from "../assets/bag2.png";
import bag from "../assets/jhuri.jpg";
import sunglass from "../assets/sunglass.png";

const Shop = () => {
  const settings = {
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Container className="pt-10 overflow-hidden">
      <div className=''>
        <h2 className='font-dm text-[30px] font-bold'>Our Best Sellers</h2>
      </div>

      <Slider {...settings}>
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

</div>

          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Shop;
