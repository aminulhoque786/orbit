import React, { useState, useRef } from "react";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Post from "../components/Post";
import Container from "../components/Container";

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
                <ul className="">
                  <li className="font-sans text-[14px] text-black  pl-3 pt-3 border-b-[1px] border-blue-600 font-semibold hover:pl-6 duration-300 ease-in-out">
                    category-1
                  </li>
                  <li className="font-sans text-[14px] text-black  pl-3 pt-3  border-b-[1px] border-blue-600 font-semibold hover:pl-6 duration-300 ease-in-out">
                    category-2
                  </li>

                  <li className="font-sans text-[14px] text-black  pl-3 pt-3  border-b-[1px] border-blue-600 font-semibold hover:pl-6 duration-300 ease-in-out">
                    category-4
                  </li>
                  <li className="font-sans text-[14px] text-black  pl-3 pt-3  hover:pl-6 font-semibold  duration-300 ease-in-out">
                    category-3
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5">
            <div className="pt-8 flex justify-end items-center gap-x-4">
              <div className="">
                <label className="pr-3 font-semibold" htmlFor="">
                  Sort By :
                </label>
                <select
                  classNamE="W-[60px] h-[40px] border-[1px] font-bold border-black "
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
                <label className="pr-3 font-semibold" htmlFor="">
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
            <Post />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
