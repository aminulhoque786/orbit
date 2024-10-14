import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import ShopImg from "../assets/ket.png";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import ShopImgs from "../assets/jhuri.jpg"
import shopimgd from "../assets/yui.png"
import ShopImgsi from "../assets/sunglass.png"
const ProductDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
  };

  const [showFeatures, setShowFeatures] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  let productId = useParams();
  let [show, setShow] = useState(false);
  let [singleProduct, setSingleProduct] = useState({});
  let getSingleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <Container>
      <h2 className="text-[#262626] font-normal text-[20px] font-sans pt-8">
        <Link to="/">Home</Link> &#62; <Link to="/shop">Products</Link>
      </h2>
      <Flex className="justify-between pt-8">
        <div className="w-[48%]">
          <img className="w-full" src={ShopImg} alt="" />
        </div>
        <div className="w-[48%]">
          <img className="w-full" src={ShopImgs} alt="" />
        </div>
        
      </Flex>
      <Flex className="justify-between pt-8">
      <div className="w-[48%]">
          <img className="w-full" src={shopimgd} alt="" />
        </div>
        <div className="w-[48%]">
          <img className="w-full" src={ShopImgsi} alt="" />
        </div>
        
      </Flex>
      <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
        Product
      </h3>
      <div className="">
        <div className="flex gap-x-2 items-center">
          <FaStar />
          <FaRegStarHalfStroke />
          <FaRegStar /> |<span>Review</span>
        </div>
      </div>
      <div className="">
        <h2>00</h2>
      </div>
      <h3>STATUS:</h3>
      <div className="flex flex-wrap md:flex-nowrap my-5">
        <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
          Add to Wish List
        </button>
        <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
          Add to Cart
        </button>
      </div>

      <div>
        <div className="w-[90%] py-10 border-b">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowFeatures(!showFeatures)}
          >
            <h3 className="font-bold">FEATURES & DETAILS</h3>
            <span className="ml-auto font-bold text-3xl">
              {showFeatures ? "-" : "+"}
            </span>
          </div>
          {showFeatures && (
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sint earum eveniet, cum quis illo. Itaque alias iure corrupti
              aspernatur repudiandae assumenda fuga natus in. Modi ipsum,
              necessitatibus fugiat dolorum a velit qui, ducimus libero porro
              culpa expedita commodi sequi.
            </p>
          )}
        </div>

        <div className="w-[90%] py-10 border-b">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowShipping(!showShipping)}
          >
            <h3 className="font-bold">SHIPPING & RETURNS</h3>
            <span className="ml-auto font-bold text-3xl">
              {showShipping ? "-" : "+"}
            </span>
          </div>
          {showShipping && (
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sint earum eveniet, cum quis illo. Itaque alias iure corrupti
              aspernatur repudiandae assumenda fuga natus in. Modi ipsum,
              necessitatibus fugiat dolorum a velit qui, ducimus libero porro
              culpa expedita commodi sequi.
            </p>
          )}
        </div>
      </div>

      <div className="w-[40%] flex justify-between pt-32">
        <div className="">
          <h2 className="font-bold text-[20px text-gray-500">Description</h2>
        </div>
        <div className="">
          <h2 className="font-bold text-[20px">Reviews(1)</h2>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="text-gray-500">1 review for Product</h2>
      </div>
      <div className="w-[20%] flex justify-between items-center">

      <div className="pt-10">
      <h3 className="text-gray-600 font-bold text-[18px]">John Ford  </h3>
      </div>
      
      <div  className="pt-10 flex text-yellow-500">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      
      </div>
      
      </div>
      <div className="text-gray-500 pt-10 py-10 border-b">
<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</h2>
      </div>


      <div className="text-[30px]n font-bold">
<h2 className="text-[25px] font-bold" >Add a Review</h2>
      </div>
      <div>
      <form onSubmit={handleSubmit} className="pt-20 w-[30%]">
  <div className="mb-4">
    <label htmlFor="name" className="block text-black font-bold text-[25px]">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your name Here"
      className="w-full py-2 focus:outline-none"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-black font-bold text-[25px]">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your email Here"
      className="w-full py-2 focus:outline-none"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="review" className="block text-black font-bold text-[25px]">Review</label>
    <textarea
      id="review"
      name="review"
      value={formData.review}
      onChange={handleChange}
      placeholder="Your review Here"
      className="w-full py-2 focus:outline-none"
    ></textarea>
  </div>
</form>

<div className="pt-5 pr-10">
              <button className="bg-black hover:text-black hover:bg-[#979797] font-dm text-white font-bold py-2 px-3 lg:py-3 lg:px-10">
                post
              </button>
            </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
