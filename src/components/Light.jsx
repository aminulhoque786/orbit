import React, { useEffect } from "react";
import Container from "./Container";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Light = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000, 
      once: true, 
    });
  }, []);

  return (
    <Container className="pt-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Main Phone Sales Section */}
        <div
          className="w-full lg:w-4/5 h-[520px] bg-bg-3 bg-cover bg-center bg-no-repeat m-1"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="font-dm lg:pt-[150px] pt-[180px] gap-4 lg:pt-30 pl-5 translate-y-1/2">
            <h2 className="text-[20px] lg:text-[30px] font-bold text-[#262626]">
              Phone Sales
            </h2>
            <div>
              <p className="p-1">
                <span className="text-sm sm:text-base text-[#979797]">up to</span>
                <span className="font-bold text-[28px] lg:text-[40px] font-sans mx-1">30%</span>
                <span className="text-sm sm:text-base text-[#979797]">sale for all phones</span>
              </p>
            </div>
            <div className="pt-5 pr-10">
              <button className="bg-black hover:text-black hover:bg-[#979797] font-dm text-white font-bold py-2 px-6 lg:py-3 lg:px-10">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Sales Sections for Electronics and Furniture */}
        <div className="w-full lg:pl-3 flex flex-col gap-5">
          {/* Electronic Sale Section */}
          <div
            className="p-3 bg-bg-2 bg-center bg-cover bg-no-repeat h-[200px] lg:h-[240px]"
            data-aos="fade-up" 
            data-aos-duration="2500"
          >
            <div>
              <h2 className="text-[20px] lg:text-[32px] font-bold mb-4 pt-3 text-[#262626] font-dm">
                Electronic Sale
              </h2>
              <div className="p-3">
                <p className="items-center">
                  <span className="text-sm sm:text-base text-[#979797]">up to</span>
                  <span className="font-bold text-[28px] lg:text-[40px] font-sans mx-1">70%</span>
                  <span className="text-sm sm:text-base text-[#979797]">sale for all phones</span>
                </p>
              </div>
              <div className="pr-10">
                <button className="bg-black hover:text-black hover:bg-[#979797] font-dm text-white font-bold py-2 px-6 lg:py-3 lg:px-10">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Furniture Offer Section */}
          <div
            className="bg-bg-4 bg-cover bg-center bg-no-repeat h-[240px] lg:h-[260px] p-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <h2 className="text-[20px] lg:text-[32px] font-bold mb-4 pt-3 text-[#262626] font-dm">
                Furniture Offer
              </h2>
              <div className="p-1">
                <p className="items-center">
                  <span className="text-sm sm:text-base text-[#979797]">up to</span>
                  <span className="font-bold text-[28px] lg:text-[40px] font-sans mx-1">50%</span>
                  <span className="text-sm sm:text-base text-[#979797]">sale for all phones</span>
                </p>
              </div>
              <div className="pr-10">
                <button className="bg-black hover:text-black hover:bg-[#979797] font-dm text-white font-bold py-2 px-6 lg:py-3 lg:px-10">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Light;
