import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div className='mt-8'>
          
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;