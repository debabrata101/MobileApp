import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { FaGithub } from "react-icons/fa6";
import { auth } from "../../Firebase/firebase.config";

const GithubLogin = () => {
    const [signInWithGithub] = useSignInWithGithub(auth);
    const handleSignIn = async () => {
   
        await signInWithGithub();
      
     
    };
    return (
        <button onClick={handleSignIn} className="btn w-full">
        <div className="flex items-center gap-2">
          <FaGithub size={24} />
          <p>Google</p>
        </div>
      </button>
    );
};

export default GithubLogin;