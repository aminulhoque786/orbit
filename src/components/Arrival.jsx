import { useContext } from "react";
import { ApiData } from "./ContextApi";
import Container from "./Container";
import Slider from "react-slick";
import { GoArrowRight,GoArrowLeft } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick,className } = props;
  return (
    <div
      className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] cursor-pointer left-0 top-[50%] bg-[gray] leading-[40px] text-center"
      onClick={onClick}
    > <GoArrowLeft className='inline-block'/></div>
  );
}
function SamplePrevArrow(props) {
  const { onClick,className } = props;
  return (
    <div
      className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] z-10 cursor-pointer right-0 top-[50%] bg-[gray] leading-[40px] text-center"
      onClick={onClick}
    ><GoArrowRight className='inline-block z-10'/></div>
  );
}
const Arrival = () => {
  let data = useContext(ApiData);
  
  // Slick slider settings
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,  // Add custom next arrow
    prevArrow: <SamplePrevArrow />,  // Add custom previous arrow
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

  return (
    <Container className="pt-10">
      <div className="!w-[97%] mx-3">
      <h2 className='font-dm text-[24px] sm:text-[30px] font-bold'>New Arrivals</h2>
        <Slider {...settings}>
          {data.map((item,index) => (
            <div key={item.id} className="px-2">
              <Link to="/shop" key={index}>
              <div className="relative group overflow-hidden">
                <img className="w-full h-auto max-h-[300px] sm:max-h-[200px]" src={item.thumbnail} alt={item.title} />

                <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                  <li className="py-2 text-sm md:text-base">
                    Add to Wish List <FaHeart className="inline-block" />
                  </li>
                  <li className="py-2 text-sm md:text-base">
                    Compare <IoGitCompare className="inline-block" />
                  </li>
                  <li className="py-2 text-sm md:text-base">
                    Add to Cart <FaCartPlus className="inline-block" />
                  </li>
                </ul>
              </div>

              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="text-[#262626] font-bold text-[14px] md:text-[16px] font-sans">
                    {item.title}
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[12px] md:text-[16px] font-sans">
                    {item.brand}
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[14px] md:text-[16px] font-sans">
                  ${item.price}
                </p>
              </div>
          </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Arrival;
