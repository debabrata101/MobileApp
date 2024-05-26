import { Link, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen ">
      <div className="col-span-2 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6">
        <ul className="space-y-4">
          <li className="p-4 bg-blue-200 font-bold text-black rounded hover:bg-gradient-to-r from-green-300 to-blue-400 transition duration-200">
            <Link to="/dashboard" className="block w-full h-full">
              Dashboard
            </Link>
          </li>
          <li className="p-4 bg-blue-200 font-bold text-black rounded hover:bg-gradient-to-r from-green-300 to-blue-400 transition duration-200">
            <Link to="manageProduct" className="block w-full h-full">
              Manage Product
            </Link>
          </li>
          <li className="p-4 bg-blue-200 font-bold text-black rounded hover:bg-gradient-to-r from-green-300 to-blue-400transition duration-200">
            <Link to="addProduct" className="block w-full h-full">
              Add Product
            </Link>
          </li>
          <li className="p-4 bg-blue-200 font-bold text-black rounded hover:bg-gradient-to-r from-green-300 to-blue-400 transition duration-200">
            <Link to="/" className="block w-full h-full">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
