import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiMiniBars2 } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import CartImg from "../assets/jhuri.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "./slice/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { ApiData } from "./ContextApi";

const Navbar = () => {
  let data = useSelector((state)=> state.product.cartItem)
  let { info, loading } = useContext(ApiData);
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let [search, setSearch] = useState("")
  let [searchFilter, setSearchFilter] = useState([])
  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();
  let showcartRef = useRef()
  let [isCateNav, setisCateNav] = useState(false);
  let [isAcc, setisAcc] = useState(false);
  let [isCart, setIsCart] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setisCateNav(!isCateNav);
      } else {
        setisCateNav(false);
      }
      if (accRef.current.contains(e.target)) {
        setisAcc(!isAcc);
      } else {
        setisAcc(false);
      }
      if (cartRef.current.contains(e.target)) {
        setIsCart(!isCart);
      } else {
        setIsCart(false);
      }
      if(showcartRef.current.contains(e.target)){
        setIsCart(true)
      }
    });
  }, [isCateNav, isAcc, isCart]);

  let handleCartPage = () =>{
    navigate("/cart")
    setIsCart(false)
  }

  let handleCheckout = ()=>{
    navigate("/checkout")
    setIsCart(false)
  }

  let handleChange = (e) =>{
    setSearch(e.target.value);
    if(e.target.value == ""){
      setSearchFilter([])
    }else{
      let searchOneByOne = info.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchFilter(searchOneByOne)
    }
  }

  let handleSearchId = (id) =>{
   navigate(`/shop/${id}`)
   setSearchFilter([])
   setSearch("")
  }
  

  return (
    <section className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className="items-center">
          <div className="w-1/4 relative">
            <div ref={cateRef} className="flex items-center gap-x-2">
              <HiMiniBars2 />
              <h3>Shop by Category</h3>
            </div>
            {isCateNav && (
              <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[1]">
                <ul className="py-3">
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Accesories
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Furniture
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Electronics
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Clothes
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Bags
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/2">
            <div className="relative">
              <input onChange={handleChange}
                type="search"
                className="py-3 pl-2 w-full rounded-sm outline-none"
                placeholder="Search.."
                value={search}
              />
              <ImSearch className="absolute top-[50%] translate-y-[-50%] right-4" />
              {searchFilter.length > 0 &&
              <div className="absolute left-0 top-[50px] mt-2 w-[560px] h-[400px] overflow-y-scroll bg-[rgba(233,230,230,0.9)] z-[1]">
                  {searchFilter.map((item, i)=>(
              
                  <div onClick={()=>handleSearchId(item.id)} className="flex items-center bg-white py-4 px-5 cursor-pointer">
                    <div>
                      <img
                        className="w-[80px] md:w-[150px]"
                        src={item.thumbnail}
                        alt="Cart item"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="font-DM font-bold text-[14px] ml-3">
                        <h3>{item.title}</h3>
                      </div>
                     
                    </div>
                    
                  </div>
                  
           
                  ))}
                  
                </div>
            }
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-6 relative">
              <div ref={accRef} className="flex items-center cursor-pointer">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <div className="cursor-pointer relative" ref={cartRef}>
               
                {data.length > 0 &&
                <div className="absolute left-[9px] top-[-7px] h-[15px] w-[15px] bg-[red] rounded-full text-white text-center leading-[15px] text-[12px]">
                {data.length}
                </div>
                }
                <IoCart />
              </div>
              {isAcc && (
                <div className="bg-[#262626] w-[200px] absolute left-[138px] top-[60px] z-[1]">
                  <ul className="py-3">
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                      Account
                    </li>
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                      LogOut
                    </li>
                  </ul>
                </div>
              )}
              <div className="" ref={showcartRef}>
              {isCart && (
                <div className="absolute right-0 top-full mt-2 w-full md:w-[360px] bg-[rgba(233,230,230,0.9)] z-[1]">
                  {data.map((item, i)=>(
                  <div className="">
                  <div className="flex items-center bg-white py-4 px-5">
                    <div>
                      <img
                        className="w-[80px] md:w-[150px]"
                        src={item.thumbnail}
                        alt="Cart item"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="font-DM font-bold text-[14px] ml-3">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="font-DM font-bold text-[14px] ml-3">
                        <h3>${item.price}</h3>
                      </div>
                    </div>
                    <div onClick={()=>dispatch(removeProduct(i))} className="ms-auto text-[20px] cursor-pointer">
                      <RxCross2 />
                    </div>
                  </div>
                  
                  </div>
                  ))}
                  <div className="bg-white py-4 px-5">
                    <div className="flex flex-wrap md:flex-nowrap my-5">
                     
                      <button onClick={handleCartPage} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        View Cart
                      </button>
                      
                  
                      <button onClick={handleCheckout} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        Check Out
                      </button>
                      
                    </div>
                  </div>
                </div>
                
              )}
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;