import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { FaMinus, FaPlus } from "react-icons/fa";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import { ApiData } from "../components/ContextApi";
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

const Shop = () => {
  let [low, setLow] = useState("");
  let [high, setHigh] = useState("");
  let [priceShow, setPriceShow] = useState([]);
  let { info, loading } = useContext(ApiData);
  let [show, setShow] = useState(false);
  let [showPrice, setShowPrice] = useState(false); // New state for price dropdown
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let [activeGrid, setActiveGrid] = useState("");
  let [category, setCategory] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);
  let pageNumber = [];
  for (
    let i = 0;
    i <
    Math.ceil(
      categoryFilter.length > 0 ? categoryFilter : info.length / perPage
    );
    i++
  ) {
    pageNumber.push(i);
  }

  let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  let handleMulti = () => {
    setActiveGrid("active");
  };

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
  }, [info]);

  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);
    setCategoryFilter(filterItem);
  };

  let handlechange = (e) => {
    setPerPage(e.target.value);
  };

  let handleAll = () => {
    setCategoryFilter("");
  };

  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let priceRange = info.filter(
      (item) => item.price > value.low && item.price < value.high
    );
    if (priceRange.length > 0) {
      setCategoryFilter(priceRange);
    } else {
      setCategoryFilter("");
    }
  };

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
                  <li
                    onClick={handleAll}
                    className="capitalize text-[#262626] font-mono font-bold text-[20px] py-1"
                  >
                    All Product
                  </li>
                  {category.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                      className="capitalize text-[#262626] font-mono font-bold  text-[20px]  py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-10">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowPrice(!showPrice)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Show Price
                </h2>
                {showPrice ? <FaMinus /> : <FaPlus />}
              </div>
              {showPrice && (
                <ul>
                  <li onClick={() => handlePrice({ low: 0, high: 5 })}>
                    $0 - $05
                  </li>
                  <li onClick={() => handlePrice({ low: 6, high: 10 })}>
                    $6 - $10
                  </li>
                  <li onClick={() => handlePrice({ low: 11, high: 15 })}>
                    $11 - $15
                  </li>
                  <li onClick={() => handlePrice({ low: 16, high: 25 })}>
                    $16 - $20
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-x-4">
                  <div
                    onClick={() => setActiveGrid("")}
                    className="p-3 hover:bg-[gray] text-[#222]"
                  >
                    <IoGrid />
                  </div>
                  <div
                    onClick={handleMulti}
                    className="p-3 hover:bg-[gray] text-[#222]"
                  >
                    <FaList />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-10">
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Sort By :
                  </label>
                  <select
                    onChange={handlechange}
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
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
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <Post
                allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
                priceShow={priceShow}
              />
              <div className="py-10 flex justify-center w-full">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
