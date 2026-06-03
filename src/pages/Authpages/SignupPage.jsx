import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import api from '../../api/Axios';
import toast from 'react-hot-toast';
import { getToken, setAuth, setUser } from '../../utils/authStorage';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            navigate('/');
        }
    }, [navigate]);
    const handleSignup = (values) => {
        // 1. بيانات التسجيل الأساسية (التي يقبلها Strapi في الـ Auth)
        const registerData = {
            username: values.email,
            email: values.email,
            password: values.password,
        };

        console.log("البيانات المرسلة للتسجيل:", registerData);

        // الطلب الأول: إنشاء الحساب
        api.post('/auth/local/register', registerData)
            .then(async (res) => {
                if (!res.data?.jwt) return;

                const jwt = res.data.jwt;
                const { id, email, username } = res.data.user;

                setAuth(jwt, { id, email, username }, true);

                await api.put(`/users/${id}`, {
                    firstName: values.firstName,
                    lastName: values.lastName,
                });

                setUser({
                    id,
                    email,
                    username,
                    firstName: values.firstName,
                    lastName: values.lastName,
                }, true);

                toast.success("Signup successful!");
                navigate("/");
            })
            .catch((err) => {
                // معالجة أخطاء الطلب الأول أو الثاني
                console.error("Full Error Object:", err);

                // استخراج رسالة الخطأ بدقة من Strapi
                const errorMessage = err.response?.data?.error?.message || err.message || "Signup failed";
                toast.error(errorMessage);
            });
    };

    const signupSchema = Yup.object({
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required('required'),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().required("Confirm Password is required"),
        conditionPolicy: Yup.boolean().required("You must accept the terms and conditions").oneOf([true], "You must accept the terms and conditions"),
    });

    return (
        <div className="min-h-screen flex flex-col">

            {/* Form Section */}
            <section className="custom-section-auth">
                <Formik initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", conditionPolicy: true }} validationSchema={signupSchema} onSubmit={handleSignup}>
                    <Form className="flex flex-col gap-8 w-[576px] max-w-2xl">
                        <div className="flex flex-col gap-6">
                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-2 gap-4 h-[16%]">
                                <div className="relative grid gap-2">
                                    <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                        First Name
                                    </label>
                                    <Field
                                        name='firstName'
                                        type="text"
                                        placeholder={"John"}
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm"
                                    />
                                    <ErrorMessage name="firstName" component={'p'} className="absolute top-0 right-0 text-red-500" />
                                </div>
                                <div className="relative grid gap-2">
                                    <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                        Last Name
                                    </label>
                                    <Field
                                        name='lastName'
                                        type="text"
                                        placeholder="Smith"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm"
                                    />
                                    <ErrorMessage name="lastName" component={'p'} className="absolute top-0 right-0 text-red-500" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="grid gap-2 h-[16%] relative">
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Email
                                </label>
                                <Field
                                    name='email'
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm"
                                />
                                <ErrorMessage name="email" component={'p'} className="absolute top-0 right-0 text-red-500" />
                            </div>

                            {/* Password */}
                            <div className='grid gap-2 h-[16%] relative'>
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
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <FaEyeSlash size={14} className="text-[#878A99]" /> : <FaEye size={14} className="text-[#878A99]" />}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component={'p'} className="absolute top-0 right-0 text-red-500" />
                            </div>

                            {/* Confirm Password */}
                            <div className='grid gap-2 h-[16%] relative'>
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Confirm password
                                </label>
                                <div className="relative">
                                    <Field
                                        name='confirmPassword'
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={14} className="text-[#878A99]" /> : <FaEye size={14} className="text-[#878A99]" />}
                                    </button>
                                </div>
                                <ErrorMessage name="confirmPassword" component={'p'} className="absolute top-0 right-0 text-red-500" />
                            </div>

                            {/* Terms Checkbox */}
                            <div className="grid gap-2 h-[16%]">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Field
                                        name='conditionPolicy'
                                        type="checkbox"
                                        className="w-4 h-4 text-[#E91E8C] border-gray-300 rounded cursor-pointer"
                                    />
                                    <span className="text-sm text-gray-600">
                                        Agree with{' '}
                                        <Link to="/terms" className="text-[#E91E8C] hover:underline font-medium">
                                            terms & conditions
                                        </Link>
                                    </span>
                                </label>
                            </div>

                            {/* Sign Up Button */}
                            <button type='submit' className="cursor-pointer w-full h-[16%] hover:scale-105 transition-all duration-300 ease-out bg-mainColor hover:bg-mainColor/90 text-white py-3 px-4 rounded-md font-semibold">
                                Sign Up
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#E91E8C] hover:underline font-medium">
                                Login
                            </Link>
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Divider */}
                            <div className="flex justify-center text-sm">
                                <span className="px-4 text-gray-500">or</span>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="flex flex-col gap-4">
                                <Link to="/login" className="cursor-pointer w-full flex items-center justify-center gap-3 py-2.5 border border-transparent rounded-md bg-[#FFFFFF] transition-all duration-300 ease-out hover:scale-105 shadow-[0px_1px_3px_0px_#6161610D,0px_5px_5px_0px_#6161610D,0px_11px_6px_0px_#61616108,0px_19px_8px_0px_#61616103,0px_30px_8px_0px_#61616100]">
                                    <FcGoogle size={20} />
                                    <span className="text-sm font-normal text-gray-700">Sign up with Google</span>
                                </Link>

                                {/* Icon Facebook */}
                                <Link to="/login" className="w-full flex items-center justify-center gap-3 py-2.5 border border-transparent bg-[#FFFFFF] rounded-md hover:scale-105 transition-all duration-300 ease-out shadow-[0px_1px_3px_0px_#6161610D,0px_5px_5px_0px_#6161610D,0px_11px_6px_0px_#61616108,0px_19px_8px_0px_#61616103,0px_30px_8px_0px_#61616100]">
                                    <FaFacebook size={20} className="text-[#1877F2]" />
                                    <span className="text-sm font-normal text-gray-700">Sign up with Facebook</span>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </section>
        </div>
    );
}