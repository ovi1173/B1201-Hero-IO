import React from 'react';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';
const CompleteApp = ({ app }) => {
    const {id, image, title, downloads, ratingAvg } = app;
    return (
        <Link to={`/apps/appDetails/${id}`}>
            <div className=" p-6 rounded-box bg-base-200 w-full shadow-sm cursor-pointer">
                <figure>
                    <img className='mx-auto'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="card-title mt-2">
                        {title}

                    </h2>

                    <div className="card-actions justify-between mt-5">
                        <div className="text-[#00D390] flex items-center gap-1">
                            <Download></Download>{downloads}</div>
                        <div className="text-[#FF8811] flex items-center gap-1"><Star></Star>{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CompleteApp;