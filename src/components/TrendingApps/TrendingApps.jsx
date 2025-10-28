import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AppCard from '../AppCard/AppCard';

const TrendingApps = () => {
    const trendApps = useLoaderData();
    const navigate = useNavigate();
    const handleClick =()=>{
       navigate("/apps");
    };
    return (
        <div className='mt-15 mb-10'>
            <h2 className='font-bold text-5xl mx-auto inter mb-2'> Trending Apps</h2>
            <p className='inter text-base opacity-60 mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 gap-4 mb-8'>
                 {
                    trendApps.map(trendApp =><AppCard key={trendApp.id} trendApp={trendApp}></AppCard> )
                   
                }
            </div>
            <button onClick={handleClick} className='rounded-[4px] flex items-center gap-2 cursor-pointer px-[16px] pt-[10px] pb-[12px] font-medium bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]
                 text-white mx-auto'>
                    Show All
            </button>

        </div>
    );
};

export default TrendingApps;