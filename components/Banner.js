import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import nike from "../public/img/brand/nike.png";
import adidas from "../public/img/brand/adidas.png";
import puma from "../public/img/brand/puma.png";
import reebok from "../public/img/brand/reebok.png";
import Image from 'next/image';
import BannerImg from './BannerImg';
const Banner = () => {
    // bg-gradient-to-r from-[#d388ff41] via-white to-white
    return (
        <div className=' p-5 pt-10 pb-0  flex justify-between items-center gap-4 flex-col md:flex-row '>
            <div className='gap-5 flex flex-col p-4  '>
                <h1 className='text-5xl font-Headline leading-normal '>Healthy in side <span className='text-[#8382EB] '>fresh</span> out side</h1>
                <p className='font-All text-[#26252463] '>
                    Exercise is a very important need for our body. Health and <br></br>fitness will be obtained if you can do regular exercise and <br></br>run a healthy routine.
                </p>
                <div className='flex gap-4 '>
                    <button className='flex  justify-evenly  items-center gap-4 lg:w-[246px] bg-[#264373] text-white px-3 lg:px-2 py-3 rounded-xl custom-shadow'>
                        Get Started
                        <MdKeyboardArrowRight className='bg-white text-black h-7 w-7 p-1  text-lg rounded-full'></MdKeyboardArrowRight>
                    </button>
                    <button className='flex  justify-center gap-4 items-center lg:w-[174px] bg-white text-black px-3 lg:px-1 py-3 rounded-xl custom-shadow'>

                        <BiRightArrow className='bg-black text-white h-6 lg:h-7 w-6 lg:w-7 p-1  text-lg rounded-full'></BiRightArrow>
                        Learn more
                    </button>
                </div>
                <div>
                    <p className='font-All mt-5 text-gray-600'>Brands:</p>
                    <div className='flex text-black gap-10 mt-4'>
                        <Image className='w-auto h-6 lg:h-10' src={nike} alt='' />
                        <Image className='w-auto h-6 lg:h-10' src={adidas} alt="" />
                        <Image className='w-auto h-6 lg:h-10' src={puma} alt="" />
                        <Image className='w-auto h-6 lg:h-10' src={reebok} alt="" />
                    </div>
                </div>
            </div>
            
                <BannerImg></BannerImg>
            
        </div>
    );
};

export default Banner;