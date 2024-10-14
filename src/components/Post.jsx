import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Post = () => {
  let { info, loading } = useContext(ApiData);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex flex-wrap justify-between">
      {info.map((item) => (
        <div className="w-full sm:w-[48%] md:w-[32%] mb-6" key={item.id}>
       
          <div className="">
            <div className="relative group overflow-hidden">
              <Link to={`/shop/${item.id}`}>
                <img className="w-full" src={item.thumbnail} alt={item.title} />
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
  );
};

export default Post;
