import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, User, FileText, BarChart2, Table } from 'lucide-react';
import { ConstRoute } from '../utils/Constant';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const location = useLocation();

  return (
    <div
      className={`${sidebarOpen ? "w-60" : "w-20"} bg-gray-200 text-gray-900 shadow transition-all duration-300 flex flex-col p-4`}
    >
      <div className="flex items-center justify-between ml-2">
        <h1 className="text-2xl font-bold text-black uppercase tracking-wide cursor-pointer">
          {sidebarOpen && "Avnish"}
        </h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded hover:bg-gray-800 hover:text-white cursor-pointer">
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-10 flex flex-col ml-2 gap-3 text-sm">
        {[
          { to: "/", label: "Dashboard", icon: <Home size={24} /> },
          { to: ConstRoute.profile, label: "Profile", icon: <User size={24} /> },
          { to: ConstRoute.forms, label: "Forms", icon: <FileText size={24} /> },
          { to: ConstRoute.charts, label: "Charts", icon: <BarChart2 size={24} /> },
          { to: ConstRoute.tables, label: "Tables", icon: <Table size={24} /> },
        ].map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 font-medium px-2 py-2 rounded-md transition ${location.pathname === to ? "bg-gray-800 text-white" : "text-gray-700 hover:text-white hover:bg-gray-800"
              }`}
          >
            {icon} {sidebarOpen && label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
