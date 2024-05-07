import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { BiError } from "react-icons/bi";


import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const cookies = new Cookies();
  const navigate = useNavigate()
  const [error, setError] = useState<any>("");

  //Check if user is already LoggedIn 
  useEffect(() => {
    const user = cookies.get('access_token');
    if (user) {
      navigate("/dashboard")
    }
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      cookies.set('access_token', codeResponse.access_token);
      navigate('/dashboard')
    },
    onError: () => setError("Login Failed")
  });

  return <div className="flex h-screen flex-col md:flex-row text-white">
    <div className="md:w-1/2 hidden md:flex justify-center items-center bg-cyan-900">
      <h1 className="text-4xl font-extrabold">CloneMyTrips</h1>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center h-screen bg-cyan-700">
      <div className="bg-cyan-800  flex flex-col items-center content-between justify-center rounded-lg p-3">

        {error && <div className="text-red-800 text-2xl flex items-center"><BiError />{error}</div>}
        <button
          type="button"
          className="flex justify-center items-center cursor-pointer outline-none font-bold"
          onClick={() => login()}
        >
          <FcGoogle className="mr-4" />
          Sign in with Google
        </button>
      </div>
    </div>

  </div>
}
