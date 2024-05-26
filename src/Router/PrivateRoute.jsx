/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Component/Shared/LoadingSpinner";

const PrivateRoute = ({children}) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (!user) {
    return <Navigate to={"login"} state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
