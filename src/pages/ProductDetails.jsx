import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Rate } from "antd";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
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

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <FaStar className="text-[gold]" />
    ) : singleProduct.rating > number ? (
      <FaRegStarHalfStroke className="text-[gold]" />
    ) : (
      <FaRegStar className="text-[gold]" />
    );
  });

  let discount = (singleProduct.price * singleProduct.discountPercentage) / 100;

  let newPrice = singleProduct.price - discount;

  return (
    <>
      <Container>
        <h2 className="text-[#262626] font-normal text-[20px] font-sans pt-8">
          <Link to="/">Home</Link> &#62; <Link to="/shop">Products</Link>
        </h2>

        <Flex className="justify-between pt-8">
          <div className="w-[48%]">
            <img className="w-full" src={singleProduct.thumbnail} alt="" />
          </div>
        </Flex>
        <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
          Product
        </h3>
        <div className="">
          <div className="flex gap-x-2 items-center">
            {clientRating}
        
          </div>
        </div>
        <div className="">
          <h2>Price</h2>
          <del className="font-bold">${singleProduct.price}</del>
          <p className="font-bold">${newPrice.toFixed(2)}</p>
        </div>
        <h3>STATUS: {singleProduct.stock}</h3>
        <div className="flex flex-wrap md:flex-nowrap my-5">
          <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Wish List
          </button>
          <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Cart
          </button>
        </div>
        <div className="w-[50%] py-10">
          <div
            className="flex items-center justify-between"
            onClick={() => setShow(!show)}
          >
            <h3>FEATURES & DETAILS</h3>
            {show ? <span>-</span> : <span>+</span>}
          </div>
          {show && <p>{singleProduct.description}</p>}
        </div>

        {singleProduct && <Rate disabled value={singleProduct.rating} />}
      </Container>
    </>
  );
};

export default ProductDetails;
