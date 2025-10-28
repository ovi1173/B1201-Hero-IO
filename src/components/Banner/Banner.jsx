import React from 'react';
import appStore from '../../assets/appstore.png';
import playStore from '../../assets/playstore.png';
import heroImg from '../../assets/hero.png';
const Banner = () => {
    return (
        <div>
            <div>
                <h1 className='font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 inter'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '> <br /> Productive</span> Apps</h1>
                <p className='font-normal text-sm sm:text-base md:text-lg lg:text-base inter opacity-70'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='mt-8 sm:mt-12 mb-12 flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-4'>
                <button onClick={() => window.open('https://play.google.com/store/apps?hl=en')} className='border-2 border-[#D2D2D2] rounded-[4px] px-[24px] py-[12px] text-xl font-semibold cursor-pointer flex gap-1 justify-center  items-center'><img src={playStore} alt="" />Google Play</button>
                <button onClick={() => window.open('https://www.apple.com/app-store/')} className='border-2 border-[#D2D2D2] rounded-[4px] px-[24px] py-[12px] text-xl font-semibold cursor-pointer flex gap-1 justify-center items-center'><img src={appStore} alt="" />App Store</button>
            </div>
            <div className='w-full flex justify-center'>
                <img className='w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto object-contain' src={heroImg} alt="" />
            </div>
            <div className='h-auto bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20'>
                <h1 className='text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter mb-6 sm:mb-8 lg:mb-10 text-center lg:text-center'>Trusted by Millions, Built for You</h1>
                <div className='text-white'>
                    <div className='text-white flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-12 lg:gap-20'>
                        <div>
                            <p className='mb-2 text-[12px] inter'>Total Download</p>
                            <h2 className='mb-2 text-6xl inter font-bold'>28.8M</h2>
                            <p className='text-[12px] inter'>25% More Than Last Month </p>
                        </div>
                        <div>
                            <p className='mb-2 text-[12px] inter'>Total Review</p>
                            <h2 className='mb-2 text-6xl inter font-bold'>980K</h2>
                            <p className='text-[12px] inter'>35% More Than Last Month </p>
                        </div>
                        <div>
                            <p className='mb-2 text-[12px] inter'>Active Apps</p>
                            <h2 className='mb-2 text-6xl inter font-bold'>132+</h2>
                            <p className='text-[12px] inter'>32 More Will Launch </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;