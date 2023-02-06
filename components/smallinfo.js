import React from 'react';

const Smallinfo = () => {
    // bg-gradient-to-r from-white via-[#d388ff15] to-white
    return (
        <div className='flex gap-5 p-5  py-16 flex-col md:flex-row'>
            <div className='text-5xl font-Headline md:w-1/2'>
                <h1>Healthy in side<br />fresh out side</h1>
            </div>
            <div className='md:w-1/2 text-gray-500 font-All'>
                <p>
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day
                </p>
            </div>
        </div>
    );
};

export default Smallinfo;