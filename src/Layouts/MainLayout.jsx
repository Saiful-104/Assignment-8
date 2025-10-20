import React from "react";

import Nav from "../component/Nav";

import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Nav />

      <div className=" max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12  py-4 md:py-8 lg:py-12 flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
