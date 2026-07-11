import { Activity, AppWindow, Globe, LogOut, Users } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Activity", to: "/activity", icon: Activity },
  { name: "Employees", to: "/employee", icon: Users },
  { name: "Web Usage", to: "/web", icon: Globe },
  { name: "App Usage", to: "/app", icon: AppWindow },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-900 p-4 text-white">
      <h1 className="text-xl font-bold mb-6">ProdSight</h1>

      <nav className="flex-1 space-y-2">
        {navItems.map(({ name, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded px-4 py-2 transition hover:bg-slate-700 ${
                isActive ? "bg-slate-800 text-blue-300" : "text-slate-200"
              }`
            }
            to={to}
          >
            <Icon size={18} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-6 flex w-full items-center gap-3 rounded px-4 py-2 text-left text-slate-200 transition hover:bg-red-500/20 hover:text-red-200"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
