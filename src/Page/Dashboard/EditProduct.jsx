import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../../Component/Shared/LoadingSpinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/phone/${id}`).then((response) => {
      // Fetching data for a single product using the ID
      setProduct(response.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProductData = {
      id: product.id,
      title: form.title.value,
      price: form.price.value,
      brand: form.brand.value,
      description: form.description.value,
      image: form.image.value,
    };

    await axios.patch(`http://localhost:3000/phone/${id}`, updatedProductData);
    alert("Product updated successfully!");
    toast.success("Product updated successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (!product) {
    return (
      <div className="text-center mt-8">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg bg-gradient-to-t from-green-400 to-blue-500">
      <h1 className="text-2xl text-center font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={product.title}
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
            defaultValue={product.price}
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
            defaultValue={product.brand}
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
            defaultValue={product.description}
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
            defaultValue={product.image}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className=" bg-blue-500 text-center hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          <button type="submit">Update Product</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
