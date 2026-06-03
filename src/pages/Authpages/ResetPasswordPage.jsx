import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import api from '../../api/Axios';

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (values) => {
        setLoading(true);
        api.post("/auth/reset-password", {
            code: values.code, // Pass code if present
            password: values.password,
            passwordConfirmation: values.confirmPassword,
        })
            .then(res => {
                console.log(res);
                toast.success("Password reset successfully");
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response?.data?.error?.message || "Failed to reset password");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const resetSchema = Yup.object({
        code: Yup.string(),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required"),
    });

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
            <section className="custom-section-auth">
                <Formik
                    initialValues={{ code: "", password: "", confirmPassword: "" }}
                    onSubmit={handleResetPassword}
                    validationSchema={resetSchema}
                >
                    <Form className="flex flex-col gap-8 w-[576px] max-w-2xl">
                        <div className="flex flex-col gap-8">
                            <h1 className='text-[2rem] font-semibold leading-[21.75px] text-center text-mainColor'>
                                Reset Password
                            </h1>
                            <p className="text-center text-sm text-[#222222]">
                                Enter your new password below to reset your account credentials.
                            </p>

                            {/* ================= Password ================= */}
                            <div className='grid gap-2 relative'>
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    New Password
                                </label>
                                <div className="relative">
                                    <Field
                                        name='password'
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter new password"
                                        className="w-full p-4 border border-[#22222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <FaEyeSlash size={14} className="text-[#878A99]" /> : <FaEye size={14} className="text-[#878A99]" />}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component={'p'} className="absolute top-0 right-0 text-red-500 text-sm" />
                            </div>

                            {/* ================= Confirm Password ================= */}
                            <div className='grid gap-2 relative'>
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Confirm New Password
                                </label>
                                <div className="relative">
                                    <Field
                                        name='confirmPassword'
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm new password"
                                        className="w-full p-4 border border-[#22222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={14} className="text-[#878A99]" /> : <FaEye size={14} className="text-[#878A99]" />}
                                    </button>
                                </div>
                                <ErrorMessage name="confirmPassword" component={'p'} className="absolute top-0 right-0 text-red-500 text-sm" />
                            </div>

                            {/* ================= Reset Button ================= */}
                            <button type='submit' disabled={loading} className="w-full btn hover:scale-105 transition-all duration-300 ease-out bg-mainColor hover:bg-mainColor/90 text-white py-3 px-4 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                                {loading ? 'Resetting...' : 'Reset Password'}
                            </button>
                        </div>
                    </Form>
                </Formik>
            </section>
        </div>
    );
}