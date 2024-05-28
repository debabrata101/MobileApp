import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Component/Authentication/GoogleLogin";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config";
import GithubLogin from "../Component/Authentication/GithubLogin";

const Login = () => {
  const navigate = useNavigate();
  const[user,loading] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      await signInWithEmailAndPassword(email, password);
  
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, loading, from]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-indigo-400 text-white hover:bg-indigo-500"
              type="submit"
              value="Login"
            />
          </div>
          <div className="mt-6">
            <GoogleLogin />
          </div>
          <div className="mt-6">
            <GithubLogin />
          </div>
          <div className="mt-6">
            <p>
              New here?{""}
              <Link to="/register" className="text-indigo-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
