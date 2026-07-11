import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import {Header} from "../components/Header";
import { Outlet } from "react-router-dom";
export const AdminLayout = () => {
  const location = useLocation();
  const publicRoutes = ["/", "/login", "/register"];
  const showDashboardLayout = !publicRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex">
      {showDashboardLayout && <SideBar />}

      <div className="flex-1">
        {showDashboardLayout && <Header />}

        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
