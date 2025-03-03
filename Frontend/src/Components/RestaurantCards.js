import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
  const { slaString } = resData.info.sla;

  return (
    <div className="m-4 p-6 w-[260px] bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="rounded-lg overflow-hidden">
        <img
          className="w-full h-[150px] object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="res-card-info mt-4 text-center">
        <h3 className="font-semibold text-xl text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm mt-2">
          {cuisines.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 text-lg font-bold">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600 text-sm">{slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
