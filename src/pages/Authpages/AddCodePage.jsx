import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/Axios";

export default function AddCodePage() {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post('/users/verify-code', { code });
            toast.success("Code verified successfully!");
            navigate('/login'); // Redirect to login after successful verification
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Invalid code");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Verify Your Code
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please enter the verification code sent to your email.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="code" className="sr-only">
                                Verification Code
                            </label>
                            <input
                                id="code"
                                name="code"
                                type="text"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-mainColor focus:border-mainColor focus:z-10 sm:text-sm"
                                placeholder="Enter 6-digit code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                maxLength={6}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent cursor-pointer text-sm font-medium rounded-md text-white bg-mainColor hover:bg-mainColor/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}