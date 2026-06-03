import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/Axios";

export default function AddCodePage() {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (code.length !== 6) {
            toast.error("Please enter a valid 6-digit code.");
            return;
        }

        setLoading(true);

        try {
            await api.post('/users/verify-code', { code });
            toast.success("Code verified successfully!");
            navigate('/reset-password');
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Invalid code");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
            <section className="custom-section-auth">
                <form className="flex flex-col gap-8 w-[576px] max-w-2xl" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-8">
                        <h1 className='text-[2rem] font-semibold leading-[21.75px] text-center text-mainColor'>
                            Verify Your Code
                        </h1>
                        <p className="text-center text-sm text-[#222222]">
                            Please enter the 6-digit verification code sent to your email.
                        </p>

                        <div className="grid gap-2 relative">
                            <label className="flex justify-center text-[1.5rem] leading-[100%] font-semibold text-gray-700">
                                Verification Code
                            </label>
                            <input
                                name="code"
                                type="text"
                                maxLength={6}
                                placeholder="------"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="w-full tracking-[1rem] text-center p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:border-transparent text-[1.5rem] font-bold"
                            />
                        </div>

                        {/* ================= Verify Button ================= */}
                        <button type='submit' disabled={loading} className="w-full btn hover:scale-105 transition-all duration-300 ease-out bg-mainColor hover:bg-mainColor/90 text-white py-3 px-4 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </button>
                    </div>

                    <p className="text-center text-sm text-[#222222]">
                        Didn't receive code?{' '}
                        <button type="button" onClick={() => toast("Resend code functionality")} className="text-[#E91E8C] hover:underline font-medium cursor-pointer bg-transparent border-none p-0">
                            Resend code
                        </button>
                    </p>
                </form>
            </section>
        </div>
    );
}