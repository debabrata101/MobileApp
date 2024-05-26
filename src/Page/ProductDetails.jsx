/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Component/Shared/LoadingSpinner";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null);

  useEffect( () => {
   axios.get(`http://localhost:3000/phone/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);
  if (!product) {
    return (
      <div className="text-center mt-8">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-slate-400 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.title}
              </h1>
              <p className="mt-2  font-bold text-gray-800">Price: {product.price}</p>
              <p className=" mt-2 font-bold text-gray-800">Details :</p>
              <p className="text-gray-00 mt-2">{product.description}</p>
              <div className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300 mt-6 text-center">
              <Link to={"/"} >
                Add to Cart
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
