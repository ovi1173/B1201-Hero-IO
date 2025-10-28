import React, { useEffect, useState } from 'react';
import { Download, StarIcon } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromDb } from '../../utility/addToDb';
import { toast } from 'react-toastify';

const Installation = () => {
    const data = useLoaderData();
    const [myStore, setMystore] = useState([]);
    const [sort, setSort] = useState('');
    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map((id) => parseInt(id));
        const myStoredApps = data.filter((app) => convertedStoredApps.includes(app.id));
        setMystore(myStoredApps);
    }, [data]);

    const handleUninstall = (id, title) => {
        removeFromDb(id);
        setMystore((prev) => prev.filter((app) => app.id !== id));
        toast.info(`${title} uninstalled successfully!`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            theme: 'colored',
        });
    };

    const handleSort = (type) => {
        setSort(type);
        if (type === 'hl') {
            const sortedByHL = [...myStore].sort((a, b) => b.size - a.size);
            setMystore(sortedByHL);
        }
        if (type === 'lh') {
            const sortedByHL = [...myStore].sort((a, b) => a.size - b.size);
            setMystore(sortedByHL);
        }

    }

    return (
        <div>
            <h2 className='font-bold text-5xl mx-auto inter mb-2 mt-8'>
                Your Installed Apps
            </h2>
            <p className='inter text-base opacity-60 mb-10'>
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className='flex justify-between items-center'>
                <h2 className='font-extrabold text-base inter'>
                    (<span>{myStore.length}</span>) Apps Found
                </h2>

                <div className='dropdown dropdown-bottom'>
                    <div tabIndex={0} role='button' className='btn m-1'>
                        Sort By Size ▼
                    </div>
                    <ul
                        tabIndex='-1'
                        className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
                    >
                        <li><a onClick={() => handleSort('hl')}>High -- Low</a></li>
                        <li><a onClick={() => handleSort('lh')}>Low -- High</a></li>
                    </ul>
                </div>
            </div>

            {/* ✅ Loop through installed apps */}
            <div className='mt-6 space-y-4'>
                {myStore.length > 0 ? (
                    myStore.map((app) => (
                        <div
                            key={app.id}
                            className='mb-4 border border-b-amber-100 p-3 flex justify-between items-center rounded-md'
                        >
                            <div className='flex gap-8'>
                                <img
                                    className='w-20 h-20 rounded-[6px]'
                                    src={app.image}
                                    alt={app.title}
                                />
                                <div>
                                    <h1 className='text-left font-bold text-2xl'>{app.title}</h1>

                                    <div className='flex gap-3 mt-2'>
                                        <div className='flex gap-1 items-center justify-start'>
                                            <Download className='text-[#00827A]' />
                                            <h2 className='text-base font-bold inter'>
                                                {app.downloads}
                                            </h2>
                                        </div>

                                        <div className='flex gap-1 items-start justify-start inter'>
                                            <StarIcon className='text-yellow-400' />
                                            <h2 className='text-base font-bold inter'>
                                                {app.ratingAvg}
                                            </h2>
                                        </div>

                                        <div>
                                            <h2 className='inter opacity-70'>{app.size}MB</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => handleUninstall(app.id, app.title)} className='text-white bg-[#00D390] px-[20px] py-[10px] font-medium inter rounded-[6px] cursor-pointer'>
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500 mt-6'>No installed apps found.</p>
                )}
            </div>
        </div>
    );
};

export default Installation;
