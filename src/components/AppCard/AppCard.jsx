import React from "react";
import { Link } from "react-router";
import { Download, Star } from "lucide-react";

const AppCard = ({ trendApp }) => {
  const { id, image, title, downloads, ratingAvg } = trendApp;

  return (
    <Link to={`/appDetails/${id}`}>
      <div className="p-6 rounded-box bg-base-200 w-full h-72 shadow-sm cursor-pointer">
        <figure>
          <img src={image} alt={title} className="w-fit mx-auto h-40 object-cover rounded-md" />
        </figure>
        <div>
          <h2 className="card-title mt-2">{title}</h2>

          <div className="card-actions justify-between mt-5">
            <div className="text-[#00D390] flex items-center gap-1">
              <Download />{downloads}
            </div>
            <div className="text-[#FF8811] flex items-center gap-1">
              <Star />{ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
