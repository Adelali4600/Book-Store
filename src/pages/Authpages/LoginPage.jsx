import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import api from '../../api/Axios';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [checkGray, setCheckGray] = useState(false);
    // const login = useAuthStore(state => state.login);

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
            // login(token);
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = (values) => {
        api.post("/auth/local", values)
            .then(res => {
                // login(res.data.jwt);
                values.rememberMe ? localStorage.setItem("token", res.data.jwt) : sessionStorage.setItem("token", res.data.jwt);
                navigate("/");
                toast.success("Login successful");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response?.data?.error?.message);
            });
    }
    const loginSchema = Yup.object({
        identifier: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">

            {/* Form Section */}
            <section className="custom-section-auth">
                <Formik initialValues={{ identifier: "", password: "", rememberMe: false }} onSubmit={handleLogin} validationSchema={loginSchema}>
                    <Form className="flex flex-col w-[576px] max-w-2xl">
                        <div className="flex flex-col gap-6">
                            <h1 className='text-[2rem] font-semibold leading-[21.75px] text-center text-mainColor'>
                                Welcome Back!
                            </h1>
                            {/* Email */}
                            <div className="grid gap-2">
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Email
                                </label>
                                <Field
                                    name="identifier"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm"
                                />
                                <ErrorMessage name="identifier" component={'p'} className="text-red-500 text-sm" />
                            </div>

                            {/* Password */}
                            <div className='grid gap-2'>
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Field
                                        name='password'
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
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
                                <ErrorMessage name="password" component={'p'} className="text-red-500 text-sm" />
                            </div>

                            {/* Remember Checkbox */}
                            <div className="flex justify-between items-center gap-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Field
                                        name='rememberMe'
                                        id="rememberMe"
                                        type="checkbox"
                                        onClick={() => setCheckGray(!checkGray)}
                                        className={`checkbox w-4 h-4 ${checkGray ? "text-mainColor text-[16px] border-mainColor" : "border-[#22222280]"} rounded cursor-pointer`}
                                    />
                                    <span htmlFor='rememberMe' className="text-sm font-normal text-[#222222]">
                                        Remember me
                                    </span>
                                </label>
                                <Link to="/forget-password" className="text-[1rem] font-normal text-mainColor hover:underline">
                                    Forget Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button type='submit' className="w-full btn hover:scale-105 transition-all duration-300 ease-out bg-mainColor hover:bg-mainColor/90 text-white py-3 px-4 rounded-md font-semibold mb-4">
                                Log in
                            </button>
                        </div>
                        {/* Login Link */}
                        <p className="text-center text-sm text-[#222222] mb-6">
                            Don’t have an account?{' '}
                            <Link to="/signup" className="text-[#E91E8C] hover:underline font-medium">
                                Sign Up
                            </Link>
                        </p>
                        <div>
                            {/* Divider */}
                            <div className="mb-6">
                                <div className="flex justify-center text-sm">
                                    <span className="px-4 text-[#00000080]">or</span>
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="space-y-3 grid gap-3">
                                <Link to="/login" className="w-full flex items-center justify-center gap-3 py-2.5 border border-transparent rounded-md bg-[#FFFFFF] transition-all duration-300 ease-out hover:scale-105 shadow-[0px_1px_3px_0px_#6161610D,0px_5px_5px_0px_#6161610D,0px_11px_6px_0px_#61616108,0px_19px_8px_0px_#61616103,0px_30px_8px_0px_#61616100]">
                                    <FcGoogle size={20} />
                                    <span className="text-sm font-normal text-[#222222]">Login with Google</span>
                                </Link>

                                {/* Icon Facebook */}
                                <Link to="/login" className="w-full flex items-center justify-center gap-3 py-2.5 border border-transparent bg-[#FFFFFF] rounded-md hover:scale-105 transition-all duration-300 ease-out shadow-[0px_1px_3px_0px_#6161610D,0px_5px_5px_0px_#6161610D,0px_11px_6px_0px_#61616108,0px_19px_8px_0px_#61616103,0px_30px_8px_0px_#61616100]">
                                    <FaFacebook size={20} className="text-[#1877F2]" />
                                    <span className="text-sm font-normal text-[#222222]">Login with Facebook</span>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </section>
        </div >
    );
}