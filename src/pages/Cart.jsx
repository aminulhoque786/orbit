import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { productIncrement } from '../components/slice/productSlice';
import { productDecrement } from '../components/slice/productSlice';

const Cart = () => {
  let cartInfo = useSelector((state) => state.product.CartItem);
  let dispatch = useDispatch();

  let handleIncrement = (id) => {
    dispatch(productIncrement(id));
  };
  let handleDecrement = (id) => {
    dispatch(productDecrement(id));
  };
  return (
    <section className="py-[55px]">
      <Container>
        <div className="my-2">
          <h3 className="font-sans text-[49px] font-bold text-[#262626]">
            Cart
          </h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/shop">Shop</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676]">
              <Link to="/myaccount">Cart</Link>
            </h2>
          </div>
        </div>
        <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626]">
              Product
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626]">
              Price
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626]">
              Quantity
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626]">
              Total
            </h4>
          </div>
        </div>
        {cartInfo.map((item) => (
          <div className="my-4" key={item.id}>
            <div className="flex items-center py-[32px] pl-3 border">
              <div className="w-1/4">
                <div className="">
                  <div className="flex justify-between items-center">
                    <div className="w-[10%]">
                      <button className="">
                        <ImCross />
                      </button>
                    </div>
                    <div className="w-[25%]">
                      <img src={item.thumbnail} alt="" className="w-full" />
                    </div>
                    <div className="w-[50%]">
                      <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">
                  ${item.price}
                </h4>
              </div>
              <div className="w-1/4">
                <div className="inline-block border">
                  <button   onClick={() => handleDecrement(item.id)}

                  className="px-5 py-1 border-none"
                  >  
                   -
                  </button>
                  <span className="px-4">{item.qun}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-5 py-1 border-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-1/4">
                <h4 className="font-sans font-bold text-[16px] text-[#262626]">
                  ${(item.price * item.qun).toFixed(2)}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Cart;
