import { useState, useEffect } from "react";
import { MdInfo } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerification: React.FC = () => {
    const [resendTimer, setResendTimer] = useState(180);

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    const formik = useFormik({
        initialValues: { otp: "" },
        validationSchema: Yup.object({
            otp: Yup.string()
                .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
                .required("OTP is required"),
        }),
        onSubmit: (values) => {
            console.log("OTP Submitted:", values.otp);
            toast.success("OTP Verified Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        },
    });

    return (
        <div className=" flex flex-col items-center justify-center">
            <ToastContainer />
            <div className="flex flex-col items-center flex-grow">
                <div className="text-sm grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
                    <div className="hidden md:flex items-center justify-center bg-gray-50">
                        <img
                            src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                            alt="Illustration"
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-6 w-full">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                                OTP Verification
                            </h2>
                            <p className="text-black text-center mb-4">
                                Enter the 6-digit verification code received on your Email ID.
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <label className="ml-1">Enter OTP</label>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter your OTP"
                                    value={formik.values.otp}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full p-2 mt-1 mb-1 rounded-md focus:outline-none shadow ${formik.touched.otp && formik.errors.otp
                                        ? "border-red-500"
                                        : "hover:bg-gray-200"
                                        }`}
                                />
                                {formik.touched.otp && formik.errors.otp && (
                                    <p className="text-red-500 text-sm mb-2">{formik.errors.otp}</p>
                                )}
                                <div className="text-gray-600 mb-4">
                                    <button
                                        type="button"
                                        className="text-blue-600 cursor-pointer"
                                        disabled={resendTimer > 0}
                                        onClick={() => setResendTimer(180)}
                                    >
                                        Resend OTP
                                    </button>
                                    <MdInfo className="inline-block mr-5 ml-2 mb-1 text-gray-800" />
                                    <span>
                                        {Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, "0")}
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 cursor-pointer"
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
