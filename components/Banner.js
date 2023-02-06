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
                    <button className='flex  justify-between items-center gap-4 lg:w-[246px] bg-[#264373] text-white p-2 rounded'>
                        Get Started
                        <MdKeyboardArrowRight className='bg-white text-black text-lg rounded-lg'></MdKeyboardArrowRight>
                    </button>
                    <button className='flex  justify-center gap-4 items-center lg:w-[174px] bg-white text-black p-2 rounded shadow-[0px_20px_80px_rgba(51, 78, 123, 0.3)]'>

                        <BiRightArrow className='bg-white text-black text-lg rounded-lg'></BiRightArrow>
                        Learn more
                    </button>
                </div>
                <div>
                    <p className='fontt-All'>Brands:</p>
                    <div className='flex text-black gap-5'>
                        <Image className='w-12' src={nike} alt='' />
                        <Image className='w-12' src={adidas} alt="" />
                        <Image className='w-12' src={puma} alt="" />
                        <Image className='w-12' src={reebok} alt="" />
                    </div>
                </div>
            </div>
            
                <BannerImg></BannerImg>
            
        </div>
    );
};

export default Banner;