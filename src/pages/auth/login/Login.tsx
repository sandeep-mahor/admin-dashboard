import { useState } from "react";
import { FaFacebookF, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
        }),
        onSubmit: values => {
            console.log("Form values", values);
        }
    });

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
                <div className="hidden md:flex items-center justify-center bg-gray-50 ">
                    <img
                        src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                        alt="Illustration"
                        className="max-w-full"
                    />
                </div>
                <div className="flex flex-col p-8 bg-gray-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
                            <span className="text-gray-800">Login</span>
                        </h2>
                        <hr className="mb-5" />
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
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3 relative">
                                <MdEmail className="absolute left-3 top-3 text-gray-800" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 p-2 hover:bg-gray-200 rounded-md focus:outline-none shadow"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="mb-3 relative">
                                <FaKey className="absolute left-3 top-3 text-gray-800" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow"
                                    {...formik.getFieldProps("password")}
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer text-black-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </span>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-2 cursor-pointer" /> Remember me
                                </label>
                                <Link to="/auth/forgot-password" className="text-indigo-600">Forgot Password</Link>
                            </div>
                            <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-500 cursor-pointer">
                                Login
                            </button>
                        </form>
                        <p className="mt-2 text-center text-black-600">
                            Don't have an account? <Link to="/auth/signup" className="text-indigo-600">SignUp</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


