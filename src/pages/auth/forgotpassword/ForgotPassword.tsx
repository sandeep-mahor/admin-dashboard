import React from 'react';
import AuthHeader from '../authheader/AuthHeader';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgotPassword: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        onSubmit: (values) => {
            console.log('Email submitted:', values.email);
        },
    });

    return (
        <div>
            <AuthHeader />
            <div className="h-96 flex items-center justify-center p-5">
                <div className="text-sm grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden mt-10 max-w-4xl w-full h-96">
                    {/* Left Side - Illustration */}
                    <div className="hidden md:flex items-center justify-center bg-gray-50 h-96 p-5">
                        <img
                            src="https://cdni.iconscout.com/illustration/free/thumb/free-sales-team-illustration-download-in-svg-png-gif-file-formats--business-pack-illustrations-1730192.png"
                            alt="Illustration"
                            className="max-w-full"
                        />
                    </div>
                    {/* Right Side - OTP Form */}
                    <div className="flex flex-col items-center justify-center h-96 bg-gray-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Forgot Your Password</h2>
                            <p className="text-black mb-6">
                                Please enter the email address you'd like your password reset information sent to.
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <label >Enter email address</label>
                                <div className="flex flex-col mb-4 mt-2">
                                    <input
                                        type="text"
                                        placeholder="Email Address..."
                                        {...formik.getFieldProps('email')}
                                        className="w-full pl-4 p-2 hover:bg-gray-200 rounded-md focus:outline-none shadow"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white p-2 mt-2 rounded-md hover:bg-gray-600 cursor-pointer"
                                >
                                    Verify OTP
                                </button>
                            </form>
                            <p className="mt-3 text-center text-black-600">
                                Back to <Link to="/auth" className="text-indigo-800">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
