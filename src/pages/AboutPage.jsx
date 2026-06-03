import { assets } from '../assets/images/assets';
import { FaArrowRight, FaUser, FaEnvelope, FaPen, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import BenefitCompo from '../components/BenefitCompo';
import toast from 'react-hot-toast';

export default function AboutPage() {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call 
        toast.success("Thank you! Your message has been safely delivered.");
        e.target.reset(); // clear the inputs
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* ================= Hero Section ================= */}
            <div className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                {/* Fallback to online image if assets.libImg fails, though it should exist based on ProfileHero */}
                <img
                    src={assets.libImg ? assets.libImg : "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop"}
                    alt="Library"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-white px-4 max-w-[700px] flex flex-col gap-5 mt-10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About <i className='text-shadow-md text-mainColor'>Bookshop</i></h1>
                    <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed mx-auto max-w-lg font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                    </p>
                </div>
            </div>

            {/* ================= Our Mission ================= */}
            <div className="bg-[#F6F7F9] py-24 px-4 md:px-10 lg:px-20 border-b border-gray-100">
                <div className="max-w-[1240px] mx-auto text-center flex flex-col gap-14">
                    <h2 className="text-[26px] md:text-3xl font-extrabold text-frameColor">Our Mission</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {['Quality Selection', 'Exceptional Service', 'Set Up Stores'].map((title, idx) => (
                            <div key={idx} className="bg-white p-8 md:p-10 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="font-bold text-gray-800 text-[16px]">{title}</h3>
                                <p className="text-gray-400 text-[13px] leading-loose mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                                </p>
                                <button className="flex items-center gap-2 text-mainColor font-medium text-[13px] hover:text-mainColor/80 mt-auto cursor-pointer transition-colors">
                                    View More <FaArrowRight size={10} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= Contact Form Section ================= */}
            <div className="bg-frameColor py-24 px-4 md:px-10 lg:px-20 relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">

                    {/* ================= Left: Form ================= */}
                    <div className="flex flex-col gap-6 w-full max-w-[550px]">
                        <h2 className="text-[34px] font-bold text-white leading-[1.3] mb-2 font-Inter">Have a Questions? <br /> Get in Touch</h2>
                        <p className="text-[#a09aa6] text-[14px] leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                        </p>

                        <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={11} />
                                    <input type="text" placeholder="Name" className="w-full bg-[#463a56]/50 border border-white/10 rounded-lg py-3.5 pl-10 pr-4 text-white text-[13px] outline-none focus:border-mainColor transition-colors placeholder:text-gray-400" />
                                </div>
                                <div className="relative flex-1">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={11} />
                                    <input type="email" placeholder="Email Address" className="w-full bg-[#463a56]/50 border border-white/10 rounded-lg py-3.5 pl-10 pr-4 text-white text-[13px] outline-none focus:border-mainColor transition-colors placeholder:text-gray-400" />
                                </div>
                            </div>

                            <div className="relative">
                                <FaPen className="absolute left-4 top-[18px] text-gray-400" size={11} />
                                <textarea rows="5" placeholder="Your Message" className="w-full bg-[#463a56]/50 border border-white/10 rounded-lg py-3.5 pl-10 pr-4 text-white text-[13px] outline-none focus:border-mainColor transition-colors placeholder:text-gray-400 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-fit bg-mainColor hover:bg-mainColor/90 text-white font-medium py-3 px-10 rounded-lg text-[14px] mt-4 shadow-md transition-colors cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* ================= Right: Contact Details ================= */}
                    <div className="flex flex-col justify-center gap-10 lg:pl-16">
                        <div className="flex items-center gap-5">
                            <div className="w-[50px] h-[50px] rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg border border-pink-50 hover:scale-105 transition-transform">
                                <FaPhoneAlt className="text-mainColor" size={16} />
                            </div>
                            <span className="text-white text-[14px]">01123456789</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-[50px] h-[50px] rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg border border-pink-50 hover:scale-105 transition-transform">
                                <FaEnvelope className="text-mainColor" size={16} />
                            </div>
                            <span className="text-white text-[14px]">Example@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-[50px] h-[50px] rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg border border-pink-50 hover:scale-105 transition-transform">
                                <FaMapMarkerAlt className="text-mainColor" size={16} />
                            </div>
                            <span className="text-[#e2e1e4] text-[13px] max-w-[280px] leading-relaxed">
                                adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Bottom Features ================= */}
            <BenefitCompo />

        </div>
    );
}
