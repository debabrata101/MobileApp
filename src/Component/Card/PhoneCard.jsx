import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const { id, title, brand, price, image } = phone;

  return (
    <div className="mb-5">
      <div className="card w-96 bg-base-100 shadow-xl p-4 bg-gradient-to-r from-green-300 to-blue-400 m-2">
        <img className="w-4/5 rounded mx-auto block" src={image} alt={title} />
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {price}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {brand}
            </span>
            <Link
              to={`/productDetails/${id}`}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
