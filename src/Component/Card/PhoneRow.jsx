/* eslint-disable react/prop-types */

import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PhoneRow = ({ phone }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/phone/${phone?.id}`);

    alert("Product deleted successfully!");
    toast.success("Product deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <tr className="bg-white hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">{phone?.id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phone?.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phone?.price}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phone?.brand}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex gap-4">
          <Link
            to={`/dashboard/editProduct/${phone?.id}`}
            className="btn  btn-xs flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"
          >
            <FaRegEdit />
          </Link>
          <button
            onClick={handleDelete}
            className="btn  btn-xs btn-error flex items-center justify-center  w-10 h-10 rounded-full hover:bg-red-200"
          >
            <MdDeleteForever />
            <ToastContainer />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PhoneRow;
