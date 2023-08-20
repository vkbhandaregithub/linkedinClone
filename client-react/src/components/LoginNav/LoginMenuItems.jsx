import React from "react";

const LoginMenuItems = ({ name, Icon }) => {
  return (
    <div className="menu__container flex justify-center cursor-pointer items-center flex-col text-[#585858]">
      <Icon className=" text-[20px]" />
      <h5 className="capitalize text-[10px] tracking-[.8px]">{name}</h5>
    </div>
  );
};

export default LoginMenuItems;
