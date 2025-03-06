import { FaKey, FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthHeader from "../authheader/AuthHeader";

const SignUP: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm Password is required"),
            phoneNumber: Yup.string()
                .matches(/^\d{10}$/, "Phone number must be 10 digits")
                .required("Phone number is required"),
        }),
        onSubmit: (values) => {
            console.log("Form Values:", values);
            alert("Signup Successful!");
        },
    });

    return (
        <div>
            <AuthHeader />
            <div className="h-screen flex items-center justify-center bg-gray-100 p-1">
                <div className="text-sm grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
                    <div className="hidden md:flex items-center justify-center bg-gray-50 p-5">
                        <img
                            src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                            alt="Illustration"
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex flex-col p-8 bg-gray-50">
                        <div className="bg-white p-8 rounded shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">SignUp</h2>
                            <hr className="mb-5" />
                            <form onSubmit={formik.handleSubmit}>
                                {[
                                    { name: "fullName", type: "text", placeholder: "Full Name", icon: <FaUserTie /> },
                                    { name: "email", type: "email", placeholder: "Email", icon: <MdEmail /> },
                                    { name: "password", type: "password", placeholder: "Password", icon: <FaKey /> },
                                    { name: "confirmPassword", type: "password", placeholder: "Confirm Password", icon: <GiConfirmed /> },
                                    { name: "phoneNumber", type: "text", placeholder: "Phone Number", icon: <FaPhone /> },
                                ].map(({ name, type, placeholder, icon }) => (
                                    <div key={name} className="mb-4 relative">
                                        <span className="absolute left-3 top-3 text-gray-800">{icon}</span>
                                        <input
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            className="w-full pl-10 p-2 rounded-md hover:bg-gray-200 focus:outline-none shadow"
                                            value={formik.values[name as keyof typeof formik.values]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched[name as keyof typeof formik.values] &&
                                            formik.errors[name as keyof typeof formik.values] && (
                                                <p className="text-red-500 text-sm mt-1">{formik.errors[name as keyof typeof formik.values]}</p>
                                            )}
                                    </div>
                                ))}
                                <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-500 cursor-pointer">
                                    SignUp
                                </button>
                            </form>
                            <p className="mt-4 text-center text-black-600">
                                Have an account? <Link to="/auth" className="text-indigo-600">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;