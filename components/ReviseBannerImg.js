import React from 'react';
import stretching from '../public/img/vector/stretching.png';
import kick from '../public/img/vector/kick.png';
import lr from '../public/img/vector/lr.png';
import sideimg from '../public/img/people/sideimg.png';
import ziczac from '../public/img/ziczac.png';
import baloon from '../public/img/baloon.png';
import circle from '../public/img/circle.png';
import Image from 'next/image';
const ReviseBannerImg = () => {
    // bg-[#6765f004]
    return (
        <div className='w-full h-full relative flex items-center justify-center flex-col  '>
            <Image src={circle} className=' absolute z-10 w-1/2 lg:w-72 md:right-32 right-16' alt=''></Image>
            <Image src={ziczac} className=' absolute z-20 w-72 top-8' alt=''></Image>
            <Image src={sideimg} className=' z-40 w-1/2 -right-20' alt=''></Image>

            <div className='flex gap-2 z-50 text-black p-3 py-2 bg-white rounded-md shadow-md absolute bottom-8 lg:bottom-16 left-10 lg:left-28'>
                <Image src={lr} className=' bg-[#5478EF]  rounded-full p-2 ' alt=''></Image>
                <div className=''>
                    <h2 className='font-bold '>800 kall</h2>
                    <p className='text-xs '>Burn fat</p>
                </div>
            </div>

            <div className='rounded-full z-50 bg-[#DD69C7] absolute top-8 md:top-16 left-24 md:left-44'>
                <Image src={kick} alt='' className='m-3 mx-3'></Image>

            </div>
          

            <div className='rounded-full z-50 bg-[#4BACE1] absolute top-20 right-10 lg:right-28 lg:top-32 h-12 justify-center flex items-center w-12 shadow-lg'>
                <Image src={stretching} alt='' className='m-2 mx-3'></Image>

            </div>

            <div className='absolute z-30 bottom-0 left-20 lg:left-36 w-1/2'>
                <Image src={baloon} alt=''></Image>
            </div>
        </div>
    );
};

export default ReviseBannerImg;