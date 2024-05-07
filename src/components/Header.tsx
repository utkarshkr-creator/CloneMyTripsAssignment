import { googleLogout } from "@react-oauth/google";
import { Cookies } from "react-cookie";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  async function handleButtonClick() {
    cookies.remove('access_token');
    googleLogout();
    navigate('/')
  }
  return (
    <div className="flex items-center text-white bg-cyan-800 p-4">
      <h1 className="text-4xl font-bold w-full">CloneMyTrips</h1>
      <button
        className="px-4 text-2xl cursor-pointer font-bold flex items-center"
        onClick={handleButtonClick}
      >
        <p className="px-2">Logout</p><IoLogOut />
      </button>
    </div>
  )
}
