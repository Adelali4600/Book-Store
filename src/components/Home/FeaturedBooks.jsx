import { useNavigate } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { assets } from "../../assets/images/assets";
import Button from "../ui/Button";

export default function FeaturedBooks() {
    const navigate = useNavigate();

    return (
        <section className="px-5 py-10 md:px-[60px] md:py-[80px] border-t border-gray-100 flex flex-col gap-10 md:gap-14 bg-white">
            <div className="container mx-auto flex flex-col gap-4 justify-between items-center md:items-start">
                <h1 className="text-[26px] md:text-4xl font-bold text-gray-900">Recommended For You</h1>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                {/* ======================= Card 1 ======================= */}
                <div className="max-w-[648px] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 p-5 md:p-10 bg-[#FFFFFF] w-full rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    {/* ======================= Image of Card ======================= */}
                    <div className="shrink-0">
                        <img className="min-w-[176px] h-[264px] object-cover rounded shadow-sm" src={assets.richDad} alt={"richDad"} />
                    </div>
                    {/* ======================= Content of Card ======================= */}
                    <div className="flex flex-col gap-6 w-full">
                        {/* ======================= Title and Author ======================= */}
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold text-[22px] text-[#222222]">Rich Dad Poor Dad</h1>
                                <h3 className="text-[16px] text-[#22222280]">Author: <span className="font-semibold text-[#222222]">Robert Kiyosaki</span></h3>
                            </div>
                            <div className="max-w-2xl">
                                <p className="text-[14px] leading-[160%] text-[#22222280] text-pretty">
                                    The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.
                                </p>
                            </div>
                        </div>
                        {/* ======================= Price and Button ======================= */}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    {/* ======================= Stars and Reviews ======================= */}
                                    <div className="flex gap-2">
                                        {/* ======================= Stars ======================= */}
                                        <div className="flex">
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#22222233]" />
                                        </div>
                                        {/* ======================= Num of Reviews ======================= */}
                                        <p className="text-[#22222280] font-semibold text-[12px]">(<span>180</span> Review)</p>
                                    </div>
                                    {/* ======================= Rating ======================= */}
                                    <div className="flex gap-1 text-[14px] text-center">
                                        <p className="text-[#22222280] font-normal">Rate:</p>
                                        <span className="text-[#222222] font-semibold">4.2</span>
                                    </div>
                                </div>
                                <span className="text-[#222222] text-[26px] font-semibold text-center">$30.00</span>
                            </div>
                            {/* ======================= Add To Cart and Add To Wishlist ======================= */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <Button onClick={() => navigate('/cart')} isMainBtn={true} className={`grow cursor-pointer flex justify-center items-center gap-2.5 font-semibold`}>
                                    Add To Cart
                                    {/* ======================= Cart Icon ======================= */}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13816_1878)">
                                            <path d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z" fill="currentColor" />
                                            <path d="M5.83341 20.0001C6.75389 20.0001 7.50008 19.2539 7.50008 18.3334C7.50008 17.4129 6.75389 16.6667 5.83341 16.6667C4.91294 16.6667 4.16675 17.4129 4.16675 18.3334C4.16675 19.2539 4.91294 20.0001 5.83341 20.0001Z" fill="currentColor" />
                                            <path d="M14.1667 20.0001C15.0871 20.0001 15.8333 19.2539 15.8333 18.3334C15.8333 17.4129 15.0871 16.6667 14.1667 16.6667C13.2462 16.6667 12.5 17.4129 12.5 18.3334C12.5 19.2539 13.2462 20.0001 14.1667 20.0001Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13816_1878">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Button>
                                <Button onClick={() => navigate('/wishlist')} isMainBtn={false} className={`p-3 border hover:border-gray-200 rounded-md transition-all duration-300`}>
                                    <FaRegHeart size={24} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======================= Card 2 ======================= */}
                <div className="max-w-[648px] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 p-5 md:p-10 bg-[#FFFFFF] w-full rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    {/* ======================= Image of Card ======================= */}
                    <div className="shrink-0">
                        <img className="min-w-[176px] h-[264px] object-cover rounded shadow-sm" src={assets.richDad} alt={"richDad"} />
                    </div>
                    {/* ======================= Content of Card ======================= */}
                    <div className="flex flex-col gap-6 w-full">
                        {/* ======================= Title and Author ======================= */}
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold text-[22px] text-[#222222]">Rich Dad Poor Dad</h1>
                                <h3 className="text-[16px] text-[#22222280]">Author: <span className="font-semibold text-[#222222]">Robert Kiyosaki</span></h3>
                            </div>
                            <div className="max-w-2xl">
                                <p className="text-[14px] leading-[160%] text-[#22222280] text-pretty">
                                    The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.
                                </p>
                            </div>
                        </div>
                        {/* ======================= Price and Button ======================= */}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    {/* ======================= Stars and Reviews ======================= */}
                                    <div className="flex gap-2">
                                        {/* ======================= Stars ======================= */}
                                        <div className="flex">
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#EBC305]" />
                                            <GrStar size={16} className="text-[#22222233]" />
                                        </div>
                                        {/* ======================= Num of Reviews ======================= */}
                                        <p className="text-[#22222280] font-semibold text-[12px]">(<span>180</span> Review)</p>
                                    </div>
                                    {/* ======================= Rating ======================= */}
                                    <div className="flex gap-1 text-[14px] text-center">
                                        <p className="text-[#22222280] font-normal">Rate:</p>
                                        <span className="text-[#222222] font-semibold">4.2</span>
                                    </div>
                                </div>
                                <span className="text-[#222222] text-[26px] font-semibold text-center">$30.00</span>
                            </div>
                            {/* ======================= Add To Cart and Add To Wishlist ======================= */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <Button onClick={() => navigate('/cart')} isMainBtn={true} className={`grow cursor-pointer flex justify-center items-center gap-2.5 font-semibold`}>
                                    Add To Cart
                                    {/* ======================= Cart Icon ======================= */}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13816_1879)">
                                            <path d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z" fill="currentColor" />
                                            <path d="M5.83341 20.0001C6.75389 20.0001 7.50008 19.2539 7.50008 18.3334C7.50008 17.4129 6.75389 16.6667 5.83341 16.6667C4.91294 16.6667 4.16675 17.4129 4.16675 18.3334C4.16675 19.2539 4.91294 20.0001 5.83341 20.0001Z" fill="currentColor" />
                                            <path d="M14.1667 20.0001C15.0871 20.0001 15.8333 19.2539 15.8333 18.3334C15.8333 17.4129 15.0871 16.6667 14.1667 16.6667C13.2462 16.6667 12.5 17.4129 12.5 18.3334C12.5 19.2539 13.2462 20.0001 14.1667 20.0001Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13816_1879">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Button>
                                <Button onClick={() => navigate('/wishlist')} isMainBtn={false} className={`p-3 border hover:border-gray-200 rounded-md transition-all duration-300`}>
                                    <FaRegHeart size={24} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
