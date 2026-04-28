import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import api from '../../api/Axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function ForgetPasswordPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleForgetPassword = (values) => {
        setLoading(true);
        api.post("/auth/forgot-password", { email: values.email })
            .then(res => {
                console.log(res);
                toast.success("Password reset link sent to your email!");
                navigate("/add-code"); // Adjust if the API actually sends an email vs returning a code
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response?.data?.error?.message || "Something went wrong failed to send reset link");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const forgetPasswordSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
    });

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
            <section className="custom-section-auth">
                <Formik initialValues={{ email: "" }} onSubmit={handleForgetPassword} validationSchema={forgetPasswordSchema}>
                    <Form className="flex flex-col gap-8 w-[576px] max-w-2xl">
                        <div className="flex flex-col gap-8">
                            <h1 className='text-[2rem] font-semibold leading-[21.75px] text-center text-mainColor'>
                                Forget Password
                            </h1>
                            <p className="text-center text-sm text-[#222222]">
                                Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                            </p>

                            {/* Email */}
                            <div className="grid gap-2 relative">
                                <label className="block text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-sm"
                                />
                                <ErrorMessage name="email" component={'p'} className="absolute top-0 right-0 text-red-500" />
                            </div>

                            {/* Reset Button */}
                            <button type='submit' disabled={loading} className="w-full btn hover:scale-105 transition-all duration-300 ease-out bg-mainColor hover:bg-mainColor/90 text-white py-3 px-4 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                                {loading ? 'Sending...' : 'Send reset code'}
                            </button>
                        </div>
                        {/* Login Link */}
                        <p className="text-center text-sm text-[#222222]">
                            Remembered your password?{' '}
                            <Link to="/login" className="text-[#E91E8C] hover:underline font-medium">
                                Log in
                            </Link>
                        </p>
                    </Form>
                </Formik>
            </section>
        </div>
    );
}