import React, { useState } from "react";
import "../index.css";
import { LoginAPI } from "../api/Authapi";
import LinkedinLogo from "../assets/login-hero.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginNav from "./LoginNav/LoginNav";
import { GoogleButton } from "react-google-button";
const Logincomponent = () => {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
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
    <div className="login-wrapper h-[110vh]">
      <LoginNav />

      <div className="main__login  px-[100px] h-[100vh] flex justify-between items-center">
        {/* left */}
        <div className="left flex flex-col justify-start items-start gap-5">
          <h4 className="w-[400px]  text-4xl font-light text-[#834a3a]">
            Welcome to your professional community
          </h4>
          <div className="form__container">
            {/* form */}
            <form className="flex flex-col justify-start items-start gap-[10px]">
              {/* input for email */}
              <div className="field flex flex-col justify-start items-start gap-1">
                <label htmlFor="email" className="text-[10px]">
                  Email or Phone
                </label>
                <input
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      email: event.target.value,
                    })
                  }
                  type="email"
                  className="common-input p-2 border w-[320px] rounded-[0.185rem] border-black"
                  placeholder="Email or Phone"
                />
              </div>

              {/* input for password */}
              <div className="field flex flex-col justify-start items-start gap-1">
                <label htmlFor="email" className="text-[10px]">
                  Password
                </label>
                <input
                  onChange={(event) =>
                    setCredentials({
                      ...credentails,
                      password: event.target.value,
                    })
                  }
                  type="password"
                  className="common-input p-2 border w-[320px] rounded-sm border-black"
                  placeholder="Password"
                />
              </div>

              {/* forget password */}
              <p className="text-[#4877e4] text-[12px] text-start">
                Forget password?
              </p>
              {/* forget password end */}

              {/* button */}
              <button
                // onClick={login}
                className="w-[320px] bg-blue-600 rounded-2xl text-[12px] p-1 py-2 font-bold text-white"
              >
                Sign in
              </button>
              {/* button end*/}
            </form>
          </div>

          {/* other login option section */}

          <div className="or__container w-[320px] text-[#717070] flex justify-between items-center">
            <div className="line__css w-[100px] h-[0.5px]  bg-[#717070]"></div>
            <p>or</p>
            <div className="line__css w-[100px] h-[0.5px]  bg-[#717070]"></div>
          </div>

          <div className="buttons__container flex flex-col justify-start items-start gap-1 w-[320px]">
            <button className="w-full p-2 bg-white cursor-pointer hover:bg-slate-200 rounded-full text-[12px] border border-[#8c8b8b]">
              Sign in with google
            </button>
            {/* <div className="signin_with_google_btn w-[320px] ">
              <GoogleButton className="google_btn  text-[10px] p-0" />
            </div> */}
            <button className="w-full p-2 bg-white cursor-pointer hover:bg-slate-200 rounded-full text-[12px] font-[500] border border-[#8c8b8b]">
              New To LinkedIn ? Join Now
            </button>
          </div>
          {/* other login option section ends*/}
        </div>

        {/* right */}
        <div className="right flex justify-end items-center">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="login-right-img"
            className="login-right-img w-[75%] h-[75%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Logincomponent;
