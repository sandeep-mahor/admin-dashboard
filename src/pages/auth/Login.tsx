import { useState } from "react";
import { FaFacebookF, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-100 rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
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
                            Welcome to <span className="text-indigo-600">Login</span>
                        </h2>
                        <button className="flex items-center justify-center w-full p-2 mb-3 shadow rounded-md text-black-600 hover:bg-gray-200 cursor-pointer">
                            <FcGoogle className="mr-2" /> Login with Google
                        </button>
                        <button className="flex items-center justify-center w-full p-2 mb-3 shadow rounded-md text-black-600 hover:bg-gray-200 cursor-pointer">
                            <FaFacebookF className="mr-2 text-blue-600" /> Login with Facebook
                        </button>
                        <div className="relative flex items-center my-4">
                            <div className="flex-grow border-t border-black-300"></div>
                            <span className="mx-4 text-black-500">OR</span>
                            <div className="flex-grow border-t border-black-300"></div>
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
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-black-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-2 cursor-pointer" /> Remember me
                            </label>
                            <a href="#" className="text-indigo-600 text-sm">Forgot Password?</a>
                        </div>
                        <button className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-500 cursor-pointer">
                            Login
                        </button>
                        <p className="mt-4 text-center text-black-600">
                            Don't have an account? <Link to="/signup" className="text-indigo-600">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;


