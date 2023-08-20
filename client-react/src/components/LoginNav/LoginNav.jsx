import React from "react";
import logo from "../../assets/login-logo.svg";
import menus from "../../data";
import LoginMenuItems from "./LoginMenuItems";
import { toast } from "react-toastify";
import { LoginAPI } from "../../api/Authapi";
import { useNavigate } from "react-router-dom";
const LoginNav = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  return (
    <div className="main__container w-full h-[10vh] px-[100px] py-[17px] flex justify-between items-center">
      {/* left */}
      <div className="logo">
        <img src={logo} alt="logo" className="w-[100px]" />
      </div>
      {/* right */}
      <div className="right__container flex justify-between text-[#5b5b5b] items-center gap-10">
        <nav className="flex justify-between items-center">
          <ul className="flex justify-center items-center gap-10">
            {menus.map((item, index) => {
              return <LoginMenuItems name={item.title} Icon={item.logo} />;
            })}
          </ul>
        </nav>
        <div className="vertical-line w-[1px] h-6 bg-black"></div>
        <p className="text-black capitalize text-[12px] cursor-pointer">
          <a href="#">join now</a>
        </p>
        <button
          className="signin__btn bg-transparent p-[0.40rem] text-[#4188cf] text-[12px] hover:bg-[#82d9fb] duration-500 transition-all ease-in-out px-4 rounded-3xl border border-[#4188cf]"
          onClick={login}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginNav;
