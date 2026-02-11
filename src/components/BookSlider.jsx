import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
// استيراد الأيقونات من react-icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaStar, FaRegStar, FaCartPlus } from 'react-icons/fa';

import 'swiper/css';
// import { books } from '../assets/images/assets';

export default function BookCarousel() {
    const swiperRef = useRef(null);

    const books = [1, 2, 3, 4, 5];

    return (
        <div className="relative w-full max-w-7xl mx-auto px-16 py-10">
            <Swiper
                onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Autoplay, EffectCoverflow]}
                grabCursor={true}
                centeredSlides={false} // جعلناها false ليظهر البطاقتان بشكل متوازن
                slidesPerView={1}      // للجوال بطاقة واحدة
                breakpoints={{
                    1024: { slidesPerView: 2 }, // للشاشة الكبيرة بطاقتان
                }}
                spaceBetween={30}
                loop={true}
                coverflowEffect={{
                    rotate: 0,    // درجة ميلان خفيفة
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false, // عطلناها ليكون التصميم نظيفاً كالصورة
                }}
                className="pb-14"
            >
                {books.map((_, index) => (
                    <SwiperSlide key={index}>
                        {/* بطاقة الكتاب الداكنة */}
                        <div className="bg-frameColor rounded-[2.5rem] p-6 flex gap-5 text-white shadow-2xl relative min-h-[300px] border border-white/5">
                            <div className="w-2/5 shrink-0">
                                <img
                                    src="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg"
                                    alt="Book"
                                    className="rounded-2xl w-full h-full object-cover shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex flex-col flex-1 py-2">
                                <h3 className="text-xl font-bold mb-1">Rich Dad Poor Dad</h3>
                                <p className="text-gray-400 text-xs mb-3">Author: Robert T. Kiyosaki</p>

                                <div className="flex text-yellow-500 mb-4 scale-90 -ml-2">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                                </div>

                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-gray-500 line-through text-xs font-light">$45.00</span>
                                    <span className="text-2xl font-black text-white">$30.00</span>
                                </div>

                                {/* شريط التقدم */}
                                <div className="mt-auto relative">
                                    <div className="w-full bg-white/10 h-1.5 rounded-full">
                                        <div className="bg-linear-to-r from-orange-400 to-orange-600 h-full w-[70%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wider">4 Books Remaining</p>
                                </div>

                                <button className="cursor-pointer absolute bottom-6 right-6 bg-[#E91E63] hover:bg-[#c2185b] text-white p-4 rounded-2xl transition-all shadow-lg active:scale-95">
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
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* الأزرار الدائرية الجانبية */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-black transition-all border border-gray-50"
            >
                <IoIosArrowBack size={24} />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-black transition-all border border-gray-50"
            >
                <IoIosArrowForward size={24} />
            </button>
        </div>
    );
};

BookCarousel;