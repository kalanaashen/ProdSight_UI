import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { Header } from "../components/Header";
import React from "react";

export const AdminLayout = () => {
  const location = useLocation();
  return (
    <div>
      {!(location.pathname != "/login" || location.pathname != "/register") ? (
        <div>
          <Header />
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <Outlet />
      </div>
    </div>
  );
};
