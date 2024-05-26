import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import About from "../Page/About";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Contact from "../Page/Contact";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashboardHome from "../Page/Dashboard/DashboardHome";
import AddProduct from "../Page/Dashboard/AddProduct";
import ProductManage from "../Page/Dashboard/ProductManage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/ErrorPage";
import AllItem from "../Page/AllItem";
import ProductDetails from "../Page/ProductDetails";
import EditProduct from "../Page/Dashboard/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/phone"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "allProducts",
        element: <AllItem />,
        loader: () => fetch("http://localhost:3000/phone"),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manageProduct",
        element: <ProductManage />,
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "editProduct/:id",
        element: (
          <PrivateRoute>
            <EditProduct/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
