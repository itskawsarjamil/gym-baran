import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(!open);
        console.log(open);
    }
    return (

        // md:bg-gradient-to-r md:from-[#d388ff41] md:via-white md:to-white

        <div className="w-full bg-white md:bg-transparent flex items-center justify-between  ">
            <div className='flex justify-between items-center w-full md:w-auto px-5 py-6'>
                <div className="flex items-center font-Headline text-[#6765F0] justify-start">

                    <Link href="/">
                        <button className="bg-[#6765F0] text-white py-2 px-3 rounded-[10px] shadow-[0px_20px_80px_rgba(51, 78, 123, 0.3)] mr-1 btn">Gym</button>
                    </Link>
                    <p>
                        baran
                    </p>
                </div>

                <button onClick={handleOpen} className="md:hidden px-2 btn btn-sm">
                    {
                        open ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                            class="w-5 h-5"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg> : <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    }

                </button>
            </div>


            <div className="hidden space-x-1 md:inline-flex gap-4 justify-center items-center font-All">
                <Link href="/" className="btn btn-sm btn-link">Home</Link>
                <Link href="#" className="btn btn-sm btn-link">Program</Link>
                <Link href="#" className="btn btn-sm btn-link">Blog</Link>
                <Link href="#" className="btn btn-sm btn-link">About Us</Link>
                <Link href="#" className="btn btn-sm bg-[#264373] text-white shadow-[0px_20px_80px_rgba(51, 78, 123, 0.3)] rounded-[10px] py-3 px-8">Log in</Link>
            </div>

            {
                !open && <div className="absolute top-10 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 mt-16 space-y-3 bg-white rounded shadow" >

                    <Link href="/" className="btn btn-sm btn-link">Home</Link>
                    <Link href="#" className="btn btn-sm btn-link">Program</Link>
                    <Link href="#" className="btn btn-sm btn-link">Blog</Link>
                    <Link href="#" className="btn btn-sm btn-link">About Us</Link>
                    <Link href="#" className="btn btn-sm bg-[#264373] text-white shadow-[0px_20px_80px_rgba(51, 78, 123, 0.3)] rounded-[10px] py-3 px-8">Log in</Link>
                </div>
            }
        </div >
    );
};

export default Header;