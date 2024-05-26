import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-bold">
                <Link to={"about"}>About Us</Link>
              </li>
              <li className="font-bold">
                <Link to={"allProducts"}>All Products</Link>
              </li>
              <li className="font-bold">
                <Link to={"contact"}>Contact</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to={"login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"register"}>Register</Link>
                  </li>
                </>
              )}
              {user && (
                <li>
                  <Link to={user?"/dashboard":"login"}>Dashboard</Link>
                </li>
              )}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="#home">
            MobileShop
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-bold">
              <Link to={"about"}>About Us</Link>
            </li>
            <li className="font-bold">
              <Link to={"allProducts"}>All Products</Link>
            </li>
            <li className="font-bold">
              <Link to={"contact"}>Contact</Link>
            </li>
              <li className="font-bold">
                <Link to={user?"/dashboard":"login"}>Dashboard</Link>
              </li>
           
          </ul>
        </div>
        <div className="navbar-end space-x-2 ">
          {!user && (
            <>
              <div className="font-bold ">
                <Link to={"/login"}>Login</Link>
              </div>
              <div className="font-bold">
                <Link to={"/register"}>Register</Link>
              </div>
            </>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white hidden lg:block"
            >
              Logout
            </button>
          )}
          {user && (
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-black">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1716668382~exp=1716671982~hmac=ce68d241a8adffe9b53b6a16d7f67a81ea62060729024bd94c95514a0d5674cd&w=740"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
