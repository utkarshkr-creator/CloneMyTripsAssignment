import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export const Dashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const access_token = cookies.get('access_token');
    if (access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error, "Invalid Token");
          cookies.remove('access_token')
          navigate('/')
        });
    }
  }, []);


  return (
    <div className="flex flex-col bg-slate-500 min-h-screen text-white">
      <Header />
      {user && (
        <div className="m-4 flex flex-col md:flex-row text-2xl">
          <img src={user.picture} alt="hello" className="rounded-full w-1/2 h-1/2 md:w-1/4 md:h-1/4" />
          <div className="flex flex-col px-5 m-4">
            <h1>Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
          </div>
        </div>
      )
      }
    </div >
  )
}
