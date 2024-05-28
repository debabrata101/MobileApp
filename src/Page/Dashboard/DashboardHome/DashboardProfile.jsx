import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.config";

const DashboardProfile = () => {
    const[user] = useAuthState(auth)
  return (
    <div>
      <div className="text-center">
      <img
        src={user?.photoURL}
        alt="Profile"
        className="mx-auto rounded-full h-24 w-24 mb-4"
      />
        <h2 className="text-2xl font-bold">{user?.displayName||"https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1716668382~exp=1716671982~hmac=ce68d241a8adffe9b53b6a16d7f67a81ea62060729024bd94c95514a0d5674cd&w=740"}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
};

export default DashboardProfile;
