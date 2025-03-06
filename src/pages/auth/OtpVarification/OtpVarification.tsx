import { useState, ChangeEvent } from "react";
import { MdInfo } from "react-icons/md";
import AuthHeader from "../authheader/AuthHeader";

const OtpVerification: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

    const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!/^\d*$/.test(value)) return; // Only allow numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <div>
            <AuthHeader />
            <div className="h-96 flex items-center justify-center p-5">

                <div className="text-sm grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden mt-10 max-w-4xl w-full h-96">
                    {/* Left Side - Illustration */}
                    <div className="hidden md:flex items-center justify-center bg-gray-50 h-96 p-1">
                        <img
                            src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                            alt="Illustration"
                            className="max-w-full"
                        />
                    </div>
                    {/* Right Side - OTP Form */}
                    <div className="flex flex-col items-center justify-center h-96 bg-gray-50 p-">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                                OTP Verification
                            </h2>
                            <p className="text-black text-center mb-6">
                                Enter the 6-digit verification code received on your Email ID.
                            </p>
                            <div className="flex justify-center space-x-2 mb-4">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(index, e)}
                                        className="w-12 h-12 border rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    />
                                ))}
                            </div>
                            <div className=" text-gray-600 mb-4">
                                <button className="ml- text-blue-600 cursor-pointer">Resend OTP</button>
                                <MdInfo className="inline-block mr-5 ml-2 mb-1 text-gray-800" />
                                <span>2:54</span>
                            </div>
                            <button className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 cursor-pointer">
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;



