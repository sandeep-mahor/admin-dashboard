import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUP: React.FC = () => {

    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 p-1 ">
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex items-center justify-center bg-gray-50 p-5">
                    <img
                        src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                        alt="Illustration"
                        className="max-w-full"
                    />
                </div>
                {/* Right Side - Login Form */}
                <div className="flex flex-col p-8 bg-gray-50 ">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            <span className="text-indigo-600">SignUp</span>
                        </h2>

                        <div className="mb-4 relative">
                            <FaUserTie className="absolute left-3 top-3 text-gray-800" />
                            <input
                                type="email"
                                placeholder="FullName"
                                className="w-full pl-10 p-2 hover:bg-gray-200 rounded-md focus:outline-none shadow"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <MdEmail className="absolute left-3 top-3 text-gray-800" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 p-2 hover:bg-gray-200 rounded-md focus:outline-none shadow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <FaKey className="absolute left-3 top-3 text-gray-800" />
                            <input
                                type={"password"}
                                placeholder="Password"
                                className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                         
                        </div>
                        <div className="mb-4 relative">
                            <GiConfirmed className="absolute left-3 top-3 text-gray-800" />
                            <input
                                type={"password"}
                                placeholder="Confirm Password"
                                className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow "
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <FaPhone className="absolute left-3 top-3 text-gray-800" />
                            <input
                                type={"numbers"}
                                placeholder="Phone Number"
                                className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow "
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <button className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-500 cursor-pointer">
                            Signup
                        </button>
                        <p className="mt-4 text-center text-black-600">
                            Have an account? <Link to="/auth" className="text-indigo-600">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUP
