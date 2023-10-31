import React from 'react';
import image from '/assets/socials/img2.png'
const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                    {/* text */}
                    <div className="text-white">
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold text-3xl md:text-5xl my-4'>Addilynn Lewis</h1>
                        <p>Freelance UI designer, Front-End developer, & Data Miner. I create seamless web experiences for end-users.</p>
                        {/* button  */}
                        <div className='mt-5'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary
                            transition-all duration-500 '>About me</button>
                            <button className='btn outline px-6 py-1.5 rounded border-none text-white ml-5'>Projects</button>
                        </div>
                    </div>
                    {/* image */}
                    <div className='order-first md:order-last ms-40 circle-profile'>
                            <img src={image} alt="" />
                    </div>
                </div>
                {/* divider */}
                <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'></div>
            </div>
        </div>
    );
};

export default Home;