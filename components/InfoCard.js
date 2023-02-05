import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import lr from "../public/img/vector/lr.png";
import dancing from "../public/img/vector/dancing.png";
import kick from "../public/img/vector/kick.png";
const InfoCard = () => {
    return (
        <div className='bg-gradient-to-r from-[#6462F0] to-[#9190E9] p-10 md:p-20 rounded-xl flex flex-col md:flex-row md:justify-between justify-center items-center gap-10 m-5'>
            <div className='flex gap-4 '>
                <div className='p-3 rounded-lg border pb-0 justify-center items-center bg-[#9190E9] pt-8'>
                    <Image alt='' src={lr} className=''></Image>

                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-All text-white font-bold '>Get that 11 line<br></br>in 30 days</h2>
                    <p className='flex gap-2 text-gray-300  items-center'>Learn more <AiOutlineArrowRight></AiOutlineArrowRight></p>
                </div>
            </div>
            <div className='flex gap-4 '>
                <div className='p-3 rounded-lg border pb-0 justify-center items-center bg-[#9190E9] pt-8'>
                    <Image alt='' src={dancing} className=''></Image>

                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-All text-white font-bold '>14 Days<br></br>
                        sherd challenge</h2>
                    <p className='flex gap-2 text-gray-300  items-center'>Learn more <AiOutlineArrowRight></AiOutlineArrowRight></p>
                </div>
            </div>
            <div className='flex gap-4 '>
                <div className='p-3 rounded-lg border pb-0 justify-center items-center bg-[#9190E9] pt-8'>

                    <Image alt='' src={kick} className=''></Image>

                </div>
                <div className='flex flex-col gap-4'>

                    <h2 className='text-xl font-All text-white font-bold '>Get flat belly<br></br>in 30 days</h2>
                    <p className='flex gap-2 text-gray-300  items-center'>Learn more <AiOutlineArrowRight></AiOutlineArrowRight></p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;