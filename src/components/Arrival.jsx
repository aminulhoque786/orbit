import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const Arrival = ({ item }) => {
  return (                                                                                                                           
    <div className="!w-[97%] mx-3">
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="">
          <div className="relative group overflow-hidden">
            <img className="w-full" src={item.thumbnail} alt={item.title} />
            <ul className="bg-gray-400 absolute left-0 h-[122px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
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
           
          </div>
          <p className="text-[#262626] font-bold text-[16px] font-sans">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Arrival;
