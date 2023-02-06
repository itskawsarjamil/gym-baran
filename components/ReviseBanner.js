import React from 'react';

import { AiOutlineArrowRight } from "react-icons/ai";
import BannerImg from './BannerImg';
import ReviseBannerImg from './ReviseBannerImg';
const ReviseBanner = () => {
    return (
        <div className=' p-5 pt-10 pb-0 flex justify-between items-center gap-8 flex-col md:flex-row-reverse '>
            <div className='gap-5 flex flex-col p-4  '>
                <h1 className='text-5xl font-Headline leading-normal '>Best full body <br /> workout to lose fat</h1>
                <p className='font-All text-[#26252463] '>
                    Exercise is a very important need for our body. Health and fitness<br></br>will be obtained if you can do regular exercise and run a healthy<br></br>routine.Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                </p>
                <button className='flex justify-between items-center w-min  whitespace-nowrap lg:w-[246px] bg-[#264373] text-white p-3 rounded-xl custom-shadow'>
                    Get Started
                    <AiOutlineArrowRight className='text-white ml-4 text-2xl font-bold'></AiOutlineArrowRight>
                </button>
               

            </div>

            <ReviseBannerImg></ReviseBannerImg>

        </div>
    );
};

export default ReviseBanner;