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
        if (searchItem.trim() === '') {
            setFilteredApps(allApps);
            setLoading(false);
            return;
        }

        setLoading(true);

        const delayDebounce = setTimeout(() => {
            const results = allApps.filter((app) =>
                app.title.toLowerCase().includes(searchItem.toLowerCase())
            );
            setFilteredApps(results);
            setLoading(false);
        }, 200);

        return () => clearTimeout(delayDebounce);
    }, [searchItem, allApps]);
    return (
        <div className='mt-8'>
            <h2 className='font-bold text-5xl mx-auto inter mb-2'> Our All Applications</h2>
            <p className='inter text-base opacity-60 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="font-extrabold text-base inter">
                    (<span>{filteredApps.length}</span>) Apps Found
                </h2>
                <label className="input flex w-full sm:w-auto">
                    <svg
                        className="h-5 w-5 opacity-50 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                        type="search"
                        className="grow border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:border-transparent"
                        placeholder="Search Apps"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </label>
            </div>


            {
                loading ? (
                    <div className=' mx-auto my-0'>
                        <Spinner></Spinner>
                    </div>
                ) : filteredApps.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-8'>
                        {filteredApps.map((app) => (
                            <CompleteApp key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <p className='text-center text-gray-600 font-bold text-4xl mt-10'>🚫 No App Found</p>
                )
            }


        </div>
    );
};

export default Apps;