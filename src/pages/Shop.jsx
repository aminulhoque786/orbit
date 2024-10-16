import React, { useContext, useState } from "react";
import Container from "../components/Container";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Post from "../components/Post";
import { ApiData } from "../components/ContextApi";
import Pagination from "../components/Pagination";

const Shop = () => {
  let {info, loading} = useContext(ApiData)
  let [show, setShow] = useState(false);
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)

  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)

  let pageNumber = []

  for(let i = 0; i < Math.ceil(info.length / perPage); i++){
    pageNumber.push(i)
  }

  console.log(pageNumber);
  
  
  


  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center"
                onClick={() => setShow(!show)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Shop by Category
                </h2>

                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5">
            <div className="pt-8 flex justify-end items-center gap-x-10">
              <div className="">
                <label className="pr-3" htmlFor="">
                  Sort By :
                </label>
                <select
                  className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                  name=""
                  id=""
                >
                  <option value="">one</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div className="">
                <label className="pr-3" htmlFor="">
                  Show:
                </label>
                <select
                  className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                  name=""
                  id=""
                >
                  <option value="">one</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between flex-wrap">
              <Post allPage={allPage} />
              <div className="py-10 flex justify-center w-full">
              <Pagination pageNumber={pageNumber}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;