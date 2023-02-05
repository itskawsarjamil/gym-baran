import React from 'react';
import pushup from '../public/img/vector/pushup.png';
import gallery from '../public/img/vector/gallery.png';
import kick from '../public/img/vector/kick.png';
import wave from '../public/img/vector/wave.png';
import frontview from '../public/img/people/frontview.png';
import ziczac from '../public/img/ziczac.png';
import water from '../public/img/water.png';
import circle from '../public/img/circle.png';
import Image from 'next/image';
const BannerImg = () => {
    return (
        <div className=' w-full h-full relative flex items-center justify-center flex-col bg-[#6765f004] '>
            <Image src={circle} className=' absolute z-10 w-72 md:left-32 left-22' alt=''></Image>
            <Image src={ziczac} className=' absolute z-20 w-72 top-8' alt=''></Image>
            <Image src={frontview} className=' z-40 w-1/2 -right-20' alt=''></Image>

            <div className='flex gap-2 z-50 text-black p-3 py-2 bg-white rounded-md shadow-md absolute top-16 left-0 lg:left-28'>
                <Image src={kick} className=' bg-yellow-400  rounded-full p-2 ' alt=''></Image>
                <div className=''>
                    <h2 className='font-bold '>150+</h2>
                    <p className='text-xs '>Members</p>
                </div>
            </div>
            <div className='rounded-full z-50 bg-blue-400 absolute top-14 right-16'>
                <Image src={wave} alt='' className='m-3 mx-5'></Image>

            </div>

            <div className='rounded-full z-50 bg-blue-400 absolute bottom-20 left-10 lg:left-28 h-16 justify-center flex items-center w-16 shadow-lg'>
                <Image src={pushup} alt='' className='m-2 mx-3'></Image>

            </div>
            <div className='absolute  p-4 z-50 bg-white flex flex-col justify-center items-center bottom-8 md:bottom-12 right-8 rounded-lg shadow-lg'>
                <div className='h-5 w-5 lg:h-10 lg:w-10 rounded-full bg-[#6765F0] flex justify-center items-center'>
                    <Image src={gallery}></Image>
                </div>
                <div className='text-black  flex flex-col justify-center items-center'>
                    <h2 className='font-bold '>Zaqky Simorang</h2>
                    <p>Trainer</p>
                </div>
            </div>
            <div className='absolute z-30 bottom-0 right-14'>
                <Image src={water} alt=''></Image>
            </div>
        </div>
    );
};

export default BannerImg;