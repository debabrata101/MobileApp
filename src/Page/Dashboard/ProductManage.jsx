import axios from "axios";
import { useEffect, useState } from "react";
import PhoneRow from "../../Component/Card/PhoneRow";

const ProductManage = () => {
  const [phone, setPhone] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/phone");
      if (data?.status === 200) {
        setPhone(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="overflow-x-auto w-full px-6 mt-10">
      <h1 className="text-3xl mb-4">Manage All Products</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Brand
            </th>
            <th
              scope="col"
              className="relative px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {phone?.map((phone) => (
            <PhoneRow key={phone.id} phone={phone} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManage;
