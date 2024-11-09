import React from 'react'
import Container from "../components/Container";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <section>
        <Container>
        <div className="w-full">
        <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Contacts</h2>
                            <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                                <Link to="/">Home</Link>
                                <li><IoIosArrowForward /></li>
                                <Link to="/shop">Shop</Link>
                            </ul>
        </div>

        <div className="">
        <div className="w-[50%]">
    <h2 className='text-[39px] font-DMs font-bold text-[#262626] py-10'>Fill up a Form</h2>
    <div className="mt-4">
        <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Name</h4>
        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Your name here' />
    </div>
    <div className="mt-4">
        <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Email</h4>
        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Your email here' />
    </div>
    <div className="mt-4">
        <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Message</h4>
        <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Your message here' />
    </div>
</div>
<div className="pt-[30px]">
         <button type="submit" className="px-10 py-4 border border-black  bg-black text-white">
         Contact
          </button>
         </div>
<div className="w-full py-20">
<div className="">
        <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939404.5534059372!2d90.44495495051393!3d23.113598590657695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1730646285350!5m2!1sen!2sbd" 
          width="100%" 
          height="450" 
          className="border-0"
        ></iframe>
      </div>
</div>

        </div>
        </Container>
    </section>
  )
}

export default Contact