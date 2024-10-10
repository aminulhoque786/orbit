import React, { useState, useRef } from "react";
import Container from "./Container";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import imo from "../assets/bag2.png";
const Shop = () => {
  let [show, setshow] = useState(false);

  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="mt-8">
              <div
                className="flex justify-between  "
                onClick={() => setshow(!show)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans  ">
                  Shop by category
                </h2>
                {show ? <FaMinusCircle /> : <FaPlusCircle />}
              </div>
              {show && (
                <ul>
                  <li>Category</li>
                  <li>Category</li>
                  <li>Category</li>
                  <li>Category</li>
                  <li>Category</li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5">
            <div className="pt-8 flex justify-end items-center gap-x-4">
              <div className="">
                <label className="pr-3" htmlFor="">
                  Sort By :
                </label>
                <select
                  classNamE="W-[60px] h-[40px] border-[1px] border-black "
                  id=""
                >
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
              <div className="">
                <label className="pr-3" htmlFor="">
                  Show :
                </label>
                <select
                  classNamE="W-[60px] h-[40px] border-[1px] border-black"
                  id=""
                >
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
       <div className="flex justify-end">
       <div className="w-4/5 flex ">
          <div className="!w-[97%] mx-3">
            <div className="">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={imo} alt="" />
                  <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                    <li className="py-2">
                      Add to Wish List <FaHeart className="inline-block" />
                    </li>
                    <li className="py-2">
                      Compare <IoGitCompare className="inline-block" />
                    </li>
                    <li className="py-2">
                      Add to Cart <FaCartPlus className="inline-block" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                    t
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                    t
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[16px] font-sans">
                  $00
                </p>
              </div>
            </div>
          </div>
          <div className="!w-[97%] mx-3">
            <div className="">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={imo} alt="" />
                  <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                    <li className="py-2">
                      Add to Wish List <FaHeart className="inline-block" />
                    </li>
                    <li className="py-2">
                      Compare <IoGitCompare className="inline-block" />
                    </li>
                    <li className="py-2">
                      Add to Cart <FaCartPlus className="inline-block" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                    t
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                    t
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[16px] font-sans">
                  $00
                </p>
              </div>
            </div>
          </div>
          <div className="!w-[97%] mx-3">
            <div className="">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={imo} alt="" />
                  <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                    <li className="py-2">
                      Add to Wish List <FaHeart className="inline-block" />
                    </li>
                    <li className="py-2">
                      Compare <IoGitCompare className="inline-block" />
                    </li>
                    <li className="py-2">
                      Add to Cart <FaCartPlus className="inline-block" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                    t
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                    t
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[16px] font-sans">
                  $00
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </Container>
    </section>
  );
};

export default Shop;
