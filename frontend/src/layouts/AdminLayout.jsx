import { Outlet } from "react-router";

import { Header } from "../components/Header";
import React from "react";

export const AdminLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
