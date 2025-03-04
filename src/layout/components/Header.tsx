import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
            <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-800" size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="shadow-md pl-10 pr-4 py-2 rounded-md w-80 focus:outline-none bg-white text-black"
                />
            </div>
            <div className="flex items-center gap-8">
                <Bell size={24} className="text-white cursor-pointer" />
                <div className="flex items-center gap-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/9187/9187604.png"
                        alt="User"
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <span className="text-white font-semibold">Avnish Tomar</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
