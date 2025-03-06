import { HiUserGroup } from "react-icons/hi";
import React from 'react'

const AuthHeader: React.FC = () => {
    return (
        <div>
            <header className="bg-gray-100 shadow px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img
                        src="https://t3.ftcdn.net/jpg/01/82/65/98/360_F_182659898_bnFNvyxiwxUWDnPr1Km6GRw2egOYa4K2.jpg"
                        alt="User"
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <span className="text-gray-800 font-semibold">Avnish Tomar</span>
                </div>
                <div className="flex items-center gap-">
                    <HiUserGroup size={24} className="text-gray-800 cursor-pointer" />
                </div>
            </header>
        </div>
    )
}

export default AuthHeader
