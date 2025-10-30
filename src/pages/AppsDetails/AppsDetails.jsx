// AppsDetails.jsx
import { Download, MessageCircleIcon, StarIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import RatingChart from "../../components/RatingChart/RatingChart";
import { toast } from "react-toastify";
// import Installation from "../Installation/Installation";
import { AppContext } from "../../components/Context";
import { addToDb } from "../../utility/addToDb";

const AppsDetails = () => {
    const data = useLoaderData(); // expects an array from loader
    const { id } = useParams();
    const app_id = parseInt(id);
    const app = data.find(app => app.id === app_id)
    // const navigate = useNavigate();
    const { setSelectedApp } = useContext(AppContext);
    const [installed, setInstalled] = useState(false);
    const handleLocalStorage = (id) => {
        addToDb(id);

    }
    const handleInstall = () => {
        setSelectedApp(app);
        setInstalled(true);
        handleLocalStorage(app.id);
        toast.success(`${app.title} installed successfully!`);

    }

    return (
        // <div className="mt-10 p-4 w-full">

        //     <div className="flex justify-start items-center gap-20 mb-10 w-full">
        //         <img
        //             src={app.image}
        //             alt={app.title}
        //             className="w-74 h-72 rounded-md mb-6 object-cover"
        //         />
        //         <div className="flex flex-col justify-start items-start w-full">
        //             <div className="text-left">
        //                 <h2 className="text-3xl inter font-bold  mb-4">{app.title}</h2>
        //                 <p className="opacity-70">
        //                     Developed By{" "}
        //                     <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
        //                         Productive.io
        //                     </span>
        //                 </p>
        //             </div>

        //             <div className="w-full border-t border-gray-300 my-6"></div>

        //             <div className="flex justify-start gap-30 w-full">
        //                 <div className="flex flex-col items-start justify-center">
        //                     <Download className="text-[#00827A]" />
        //                     <p>Download</p>
        //                     <h2 className="text-5xl font-extrabold inter">{app.downloads}</h2>
        //                 </div>

        //                 <div className="flex flex-col items-start justify-center inter">
        //                     <StarIcon className="text-yellow-400" />
        //                     <p>Average Ratings</p>
        //                     <h2 className="text-5xl font-extrabold inter">{app.ratingAvg}</h2>
        //                 </div>

        //                 <div className="flex flex-col items-start justify-center">
        //                     <MessageCircleIcon />
        //                     <p>Reviews</p>
        //                     <h2 className="text-5xl font-extrabold inter">{app.reviews}</h2>
        //                 </div>
        //             </div>

        //             <button onClick={handleInstall} disabled={installed} className={`mt-10 text-white bg-[#00D390] px-[20px] py-[10px] font-medium inter rounded-[6px] cursor-pointer
        //                 ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] hover:bg-[#00b37a]"}
        //                 `}>
        //                 {installed ? "Installed" : `Install Now (${app.size} MB)`}

        //             </button>
        //         </div>
        //     </div>

        //     <div className="w-full border-t border-gray-300"></div>
        //     <div>
        //         <h2 className="mt-6 text-3xl font-semibold inter text-left">Ratings</h2>
        //         <RatingChart key={app.id} data={app.ratings}></RatingChart>
        //     </div>
        //     <div className="w-full border-t border-gray-400 my-2"></div>
        //     <div>
        //         <h2 className="text-3xl font-semibold inter text-left mt-4 mb-2">Description</h2>
        //         <p className="text-left">{app.description}</p>
        //     </div>

        // </div>
        <div className="mt-10 p-4 w-full overflow-x-hidden">

            <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-10 lg:gap-20 mb-10 w-full">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-56 h-56 sm:w-64 sm:h-64 lg:w-74 lg:h-72 rounded-md mb-6 object-cover flex-shrink-0"
                />

                <div className="flex flex-col justify-start items-start w-full">
                    <div className="text-left">
                        <h2 className="text-2xl sm:text-3xl inter font-bold mb-4">{app.title}</h2>
                        <p className="opacity-70 text-sm sm:text-base">
                            Developed By{" "}
                            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Productive.io
                            </span>
                        </p>
                    </div>

                    <div className="w-full border-t border-gray-300 my-6"></div>

                    {/* FIXED ROW SECTION */}
                    <div className="flex flex-row  justify-center sm:justify-start items-center gap-3 sm:gap-6 w-full text-center sm:text-left">
                        <div className="flex flex-col items-center sm:items-start justify-center flex-1 min-w-[100px]">
                            <Download className="text-[#00827A]" />
                            <p className="text-sm sm:text-base">Download</p>
                            <h2 className="text-3xl sm:text-5xl font-extrabold inter">{app.downloads}</h2>
                        </div>

                        <div className="flex flex-col items-center sm:items-start justify-center flex-1 min-w-[100px]">
                            <StarIcon className="text-yellow-400" />
                            <p className="text-sm sm:text-base">Average Ratings</p>
                            <h2 className="text-3xl sm:text-5xl font-extrabold inter">{app.ratingAvg}</h2>
                        </div>

                        <div className="flex flex-col items-center sm:items-start justify-center flex-1 min-w-[100px]">
                            <MessageCircleIcon />
                            <p className="text-sm sm:text-base">Reviews</p>
                            <h2 className="text-3xl sm:text-5xl font-extrabold inter">{app.reviews}</h2>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-8 sm:mt-10 text-white px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] font-medium inter rounded-[6px] cursor-pointer transition-all duration-200
          ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] hover:bg-[#00b37a]"}`}
                    >
                        {installed ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            <div className="w-full border-t border-gray-300"></div>

            <div>
                <h2 className="mt-6 text-2xl sm:text-3xl font-semibold inter text-left">Ratings</h2>
                <RatingChart key={app.id} data={app.ratings}></RatingChart>
            </div>

            <div className="w-full border-t border-gray-400 my-2"></div>

            <div>
                <h2 className="text-2xl sm:text-3xl font-semibold inter text-left mt-4 mb-2">Description</h2>
                <p className="text-left text-sm sm:text-base">{app.description}</p>
            </div>

        </div>


    );
};

export default AppsDetails;
