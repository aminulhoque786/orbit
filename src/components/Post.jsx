import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./slice/productSlice";

const Post = ({ allPage, activeGrid, categoryFilter,priceShow }) => {
  let { info, loading } = useContext(ApiData);
  let [filterShow, setFilterShow] = useState([]);
  let [count, setCount] = useState(true);
  let dispatch = useDispatch()

  
  

  useEffect(() => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
  }, [categoryFilter]);

  let handleSee = () => {
    setFilterShow(categoryFilter);
    setCount(false);
  };
  let handleSeeless = () => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
    setCount(true);
  };

  let handleCartProduct = (item) =>{
    dispatch(addToCart({...item, qun:1}))
  }

  return (
    <>
      {filterShow.length > 0 ? (
        <>
          <div className="flex flex-wrap">
            {filterShow.map((item) => (
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <Link to={`/shop/${item.id}`}>
                      <img className="w-full" src={item.thumbnail} alt="" />
                    </Link>
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
                      {item.title}
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      {item.brand}
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {count
              ? categoryFilter.length > 5 && (
                  <div onClick={handleSee} className="">
                    <h2>See more</h2>
                  </div>
                )
              : categoryFilter.length > 5 && (
                  <div onClick={handleSeeless} className="">
                    <h2>See Less</h2>
                  </div>
                )}
          </div>
        </>
      ) : (
        <div
          className={`${
            activeGrid == "active" ? "w-[100%]" : "flex flex-wrap"
          }`}
        >
          {allPage.map((item) => (
            <div className="w-[32%]">
              <div className="">
                <div className="relative group overflow-hidden">
                  <Link to={`/shop/${item.id}`}>
                    <img className="w-full" src={item.thumbnail} alt="" />
                  </Link>
                  <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                    <li className="py-2">
                      Add to Wish List <FaHeart className="inline-block" />
                    </li>
                    <li className="py-2">
                      Compare <IoGitCompare className="inline-block" />
                    </li>
                    <li onClick={()=>handleCartProduct(item)} className="py-2 cursor-pointer">
                      Add to Cart <FaCartPlus className="inline-block" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="">
                  <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                    {item.title}
                  </h3>
                  <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                    {item.brand}
                  </h5>
                </div>
                <p className="text-[#262626] font-bold text-[16px] font-sans">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Post;