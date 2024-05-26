/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;

    const id = from.id.value;
    const title = from.title.value;
    const price = from.price.value;
    const brand = from.brand.value;
    const image = from.image.value;
    const description = from.description.value;
    const productData = {
      id,
      price,
      title,
      brand,
      description,
      image,
    };
    await axios.post("http://localhost:3000/phone", productData);
    alert("Product added  successfully!");
    toast.success("Product added successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    from.reset();
  };
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg bg-gradient-to-t from-green-400 to-blue-500">
      <h1 className="text-2xl text-center font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block font-bold">
            ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="border border-gray-300  rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-bold">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block font-bold">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-bold">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block font-bold">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className=" bg-blue-500 text-center hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          <button type="submit"> Add Product</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
