import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-gray-800 shadow px-6 py-4 grid grid-cols-3 items-center">
            <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="shadow-md pl-10 pr-4 py-2 rounded-md w-80 focus:outline-none bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="text-center text-white font-semibold text-lg">Dashboard</div>
            <div className="flex justify-end items-center gap-8">
                <Bell size={24} className="text-white cursor-pointer hover:text-gray-300 transition" />
                <div className="relative">
                    <div
                        className="grid grid-cols-[auto_1fr] items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-lg transition"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/9187/9187604.png"
                            alt="User"
                            className="w-10 h-10 rounded-full border-2 border-gray-500"
                        />
                        <span className="text-white font-semibold text-sm">Avnish Tomar</span>
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition">Profile</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition">Settings</a>
                            <Link to="/auth/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition border-t border-gray-300">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
