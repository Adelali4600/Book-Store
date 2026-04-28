import { Link } from "react-router-dom";
import { FaHome, FaBookOpen } from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center px-6 text-center">
            {/* 404 Visual */}
            <div className="relative mb-6">
                <h1 className="text-[130px] md:text-[200px] font-black text-transparent bg-clip-text bg-linear-to-br from-frameColor to-mainColor leading-none select-none drop-shadow-sm">
                    404
                </h1>
            </div>

            <h2 className="text-[28px] md:text-[40px] font-bold text-frameColor mb-5 tracking-tight">
                Page Not Found
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[17px] max-w-md mx-auto mb-10 leading-relaxed font-light">
                Oops! It seems the chapter you're looking for has been torn out. Let's get you back to browsing our library.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-sm sm:max-w-none">
                <Link to="/" className="w-full sm:w-auto px-10 py-4 bg-mainColor text-white font-medium rounded-xl shadow-[0px_4px_20px_rgba(232,43,97,0.2)] hover:-translate-y-1 hover:shadow-[0px_6px_25px_rgba(232,43,97,0.3)] transition-all duration-300 flex items-center justify-center gap-3">
                    <FaHome size={18} />
                    Back to Home
                </Link>
                <Link to="/books" className="w-full sm:w-auto px-10 py-4 bg-white text-frameColor font-medium rounded-xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0px_6px_25px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-center gap-3">
                    <FaBookOpen size={18} />
                    Browse Books
                </Link>
            </div>
        </div>
    );
}
