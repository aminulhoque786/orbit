import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banimg from "../assets/banners.jpg"
import "./banner.css"
const Banner = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div 
        style={{
          
          borderRadius: "10px",
          position:"absolute",
          top:"50%",
          left:"100px",
          padding: "10px 0",
          transform: "translateY(-50%)",
        }}
      >
        <ul className='one'   style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          
          width: "25px",
          color: "blue",
          borderRight: "transparent",
          color:"transparent"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <div>
 <Slider {...settings}>
  <div className=''>
    <img className='w-full' src={banimg} alt="" />
  </div>
  <div className=''>
    <img className='w-full' src={banimg} alt="" />
  </div>
  <div className=''>
    <img className='w-full' src={banimg} alt="" />
  </div>
 </Slider>
    </div>
  )
}

export default Banner