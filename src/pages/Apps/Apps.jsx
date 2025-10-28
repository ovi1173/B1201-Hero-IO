import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import CompleteApp from '../../components/CompleteApp/CompleteApp';
import Spinner from '../../components/Spinner/Spinner';


const Apps = () => {
    const allApps = useLoaderData()
    const [searchItem, setSearchItem] = useState('');
    const [filteredApps, setFilteredApps] = useState(allApps);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchItem.trim() === '') {
                setFilteredApps(allApps);
                setLoading(false);
            } else {
                setLoading(true);
                const results = allApps.filter((app) =>
                    app.title.toLowerCase().includes(searchItem.toLowerCase())
                );
                setFilteredApps(results);
                setLoading(false);
            }
        }, 300); // debounce delay

        return () => clearTimeout(delayDebounce);
    }, [searchItem, allApps]);
    return (
        <div className='mt-8'>
            <h2 className='font-bold text-5xl mx-auto inter mb-2'> Our All Applications</h2>
            <p className='inter text-base opacity-60 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center'>
                <h2 className='font-extrabold text-base inter'>(<span>{filteredApps.length}</span>) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search Apps" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />

                </label>

            </div>

            {
                loading ? (
                    <div className='flex justify-center mt-10'>
                        <Spinner></Spinner>
                    </div>
                ) : filteredApps.length > 0 ? (
                    <div className='grid grid-cols-4 gap-4 mt-8 mb-8'>
                        {filteredApps.map((app) => (
                            <CompleteApp key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <p className='text-center text-gray-500 text-2xl mt-10'>🚫 No App Found</p>
                )
            }


        </div>
    );
};

export default Apps;