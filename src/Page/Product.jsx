/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import PhoneCard from "../Component/Card/PhoneCard";

const Product = ({ data }) => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <div>
      {isHomeRoute && (
        <div>
          <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
          <div className="flex gap-2 justify-center flex-wrap">
            {data.slice(0, 9).map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      )}
      {!isHomeRoute && (
        <div>
          <h1 className="my-8 text-2xl font-bold text-center">All Products</h1>
          <div className="flex gap-2 justify-center flex-wrap">
            {data.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
