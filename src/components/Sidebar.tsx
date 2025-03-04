import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, User, FileText, BarChart2, Table } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  return (
    <div
      className={`${sidebarOpen ? "w-60" : "w-20"} bg-gray-200 text-gray-900 shadow transition-all duration-300 flex flex-col p-4`}
    >
      <div className="flex items-center justify-between ml-2">
        <h1 className="text-2xl font-bold text-black uppercase tracking-wide cursor-pointer">
          {sidebarOpen && "Avnish"}
        </h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded hover:bg-gray-800 cursor-pointer">
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-10 flex flex-col gap-6 ml-2">
        <Link to="/" className="flex items-center gap-3 text-indigo-600 font-semibold hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
          <Home size={24} /> {sidebarOpen && "Dashboard"}
        </Link>
        <Link to="/profile" className="flex items-center gap-3 text-gray-700 font-medium hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
          <User size={24} /> {sidebarOpen && "Profile"}
        </Link>
        <Link to="/forms" className="flex items-center gap-3 text-gray-700 font-medium hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
          <FileText size={24} /> {sidebarOpen && "Forms"}
        </Link>
        <Link to="/charts" className="flex items-center gap-3 text-gray-700 font-medium hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
          <BarChart2 size={24} /> {sidebarOpen && "Charts"}
        </Link>
        <Link to="/tables" className="flex items-center gap-3 text-gray-700 font-medium hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
          <Table size={24} /> {sidebarOpen && "Tables"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
