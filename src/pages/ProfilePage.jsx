import { assets } from "../assets/images/assets";

export default function ProfilePage() {
    return (
        <>
            <div className="bg-[#F5F5F5] min-h-screen pb-24 flex flex-col items-center">

                {/* ======================= Profile Avatar overlapping MainHero ======================= */}
                <div className="relative -mt-[70px] z-10 mb-8 flex justify-center">
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden bg-white shadow-sm">
                        <img
                            src={assets.group8}
                            alt={assets.group8}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* ======================= Edit Icon Badge ======================= */}
                    <button className="absolute bottom-2 right-1 w-9 h-9 rounded-full bg-mainColor text-white flex items-center justify-center border-[3px] border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_150_1952)">
                                <path d="M16.0009 2.30667C15.9675 1.62 15.6409 0.980001 15.1075 0.546667C14.1542 -0.233333 12.7009 -0.126666 11.7875 0.786667L10.6742 1.9C10.1342 1.54 9.49419 1.34 8.82753 1.34C7.93419 1.34 7.10086 1.68667 6.46753 2.31333L4.44753 4.33333C4.18753 4.59333 4.18753 5.01333 4.44753 5.27333C4.70753 5.53333 5.12753 5.53333 5.38753 5.27333L7.40753 3.25333C8.00086 2.66 8.94086 2.53333 9.68753 2.87333L1.38086 11.1933C0.920859 11.6533 0.667526 12.26 0.667526 12.9067C0.667526 13.3267 0.774193 13.7267 0.974193 14.0867L0.200859 14.86C-0.0591406 15.12 -0.0591406 15.54 0.200859 15.8C0.334193 15.9333 0.500859 15.9933 0.674193 15.9933C0.847526 15.9933 1.01419 15.9267 1.14753 15.8L1.92086 15.0267C2.27419 15.2267 2.68086 15.3333 3.10086 15.3333C3.74753 15.3333 4.36086 15.08 4.81419 14.62L15.2875 4.14C15.7742 3.65333 16.0275 2.98667 15.9942 2.3L16.0009 2.30667ZM3.86753 13.68C3.45419 14.0933 2.73419 14.0933 2.32086 13.68C2.11419 13.4733 2.00086 13.2 2.00086 12.9067C2.00086 12.6133 2.11419 12.34 2.32086 12.1333L10.7209 3.74L12.2675 5.28667L3.86753 13.68ZM14.3475 3.2L13.2075 4.34L11.6609 2.79333L12.7275 1.72667C12.9742 1.48 13.2942 1.35333 13.6075 1.35333C13.8475 1.35333 14.0742 1.42667 14.2609 1.58C14.5075 1.78 14.6475 2.06 14.6675 2.37333C14.6809 2.68 14.5675 2.98667 14.3475 3.2Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_150_1952">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                {/* ======================= General Information Card ======================= */}
                <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 max-w-[700px] w-full px-6 py-10 sm:px-12 sm:py-10 mx-4">
                    <h2 className="text-center text-[20px] font-bold text-gray-800 mb-10">General information</h2>

                    <form className="flex flex-col gap-6">
                        {/* ======================= First & Last Name ======================= */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-[13px] text-gray-400 font-medium ml-1">First Name</label>
                                <input
                                    type="text"
                                    defaultValue="John"
                                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 outline-none focus:border-mainColor text-gray-700 bg-transparent transition-colors text-[14px]"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-[13px] text-gray-400 font-medium ml-1">Last Name</label>
                                <input
                                    type="text"
                                    defaultValue="Smith"
                                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 outline-none focus:border-mainColor text-gray-700 bg-transparent transition-colors text-[14px]"
                                />
                            </div>
                        </div>

                        {/* ======================= Email ======================= */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] text-gray-400 font-medium ml-1">Email</label>
                            <input
                                type="email"
                                defaultValue="johnsmith@gmail.com"
                                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 outline-none focus:border-mainColor text-gray-700 bg-transparent transition-colors text-[14px]"
                            />
                        </div>

                        {/* ======================= Phone number ======================= */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] text-gray-400 font-medium ml-1">Phone number</label>
                            <input
                                type="tel"
                                defaultValue="123456789"
                                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 outline-none focus:border-mainColor text-gray-700 bg-transparent transition-colors text-[14px]"
                            />
                        </div>

                        {/* ======================= Address ======================= */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] text-gray-400 font-medium ml-1">Address</label>
                            <input
                                type="text"
                                defaultValue="Maadi, Cairo, Egypt."
                                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 outline-none focus:border-mainColor text-gray-700 bg-transparent transition-colors text-[14px]"
                            />
                        </div>
                    </form>
                </div>

                {/* ======================= Update Button ======================= */}
                <button className="mt-8 bg-mainColor hover:bg-mainColor/90 text-white font-medium py-3.5 px-12 rounded-lg transition-colors text-[15px] shadow-sm cursor-pointer">
                    Update information
                </button>

            </div>
        </>
    )
}
