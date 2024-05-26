import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllItem = () => {
    const data = useLoaderData();
  return (
    <div>
      <Product data={data}/>
    </div>
  );
};

export default AllItem;
