import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css';
// import { GrStar } from 'react-icons/gr';
import RatingStars from './RatingStars';
// import { books } from '../assets/images/assets';

export default function BookCarousel() {
    const swiperRef = useRef(null);

    const books = [1, 2, 3, 4, 5];

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-16 py-10">
            <Swiper
                onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Autoplay, EffectCoverflow]}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                spaceBetween={20}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="pb-14"
            >
                {books.map((index) => (
                    <SwiperSlide key={index} className="h-full">
                        {/* ======================= Card ======================= */}
                        <div className="bg-frameColor rounded-[8px] p-4 md:p-6 flex flex-col sm:flex-row gap-6 text-white shadow-2xl relative min-h-[200px] md:min-h-[300px] border border-white/5 h-full">
                            {/* Image of Card */}
                            <div className="w-full sm:w-2/5 shrink-0 flex justify-center sm:block">
                                <img
                                    src="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg"
                                    alt="Book"
                                    className="rounded-[4px] max-w-[176px] w-full min-h-[150px] sm:h-full object-cover"
                                />
                            </div>

                            {/* ======================= Book Details ======================= */}
                            <div className="flex flex-col grow gap-6 justify-between">
                                {/* ======================= Book Info ======================= */}
                                <div className="flex flex-col gap-[17px]">
                                    <div className="flex flex-col gap-4">
                                        {/* Book About */}
                                        <div className="flex flex-col gap-1">
                                            <h1 className="font-bold text-[16px] text-mainWhite">Rich Dad Poor Dad</h1>
                                            <h3 className="text-[12px] text-normal text-mainWhite/50">Author: <span className="font-semibold text-mainWhite">Robert Kiyosaki</span></h3>
                                        </div>

                                        {/* ======================= Stars and Reviews ======================= */}
                                        <div className="flex flex-col gap-2">
                                            <div className="flex gap-2">
                                                <div className="flex gap-0.5">
                                                    <RatingStars />
                                                </div>
                                                {/* ======================= Num of Reviews ======================= */}
                                                <p className="text-mainWhite/50 font-semibold text-[12px]">(<span>180</span> Review)</p>
                                            </div>
                                            {/* ======================= Rating ======================= */}
                                            <div className="flex gap-1 text-[14px] text-center">
                                                <p className="text-mainWhite/50 font-normal">Rate:</p>
                                                <span className="text-mainWhite font-semibold">4.2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* ======================= Price ======================= */}
                                        <div className="flex items-baseline gap-2 font-OpenSans font-semibold">
                                            <span className="text-[#FFFFFF4D] text-[16px] font-normal">$45.00</span>
                                            <span className="text-[22px] text-mainWhite">$30.00</span>
                                        </div>

                                        {/* ======================= Progress Bar ======================= */}
                                        <div className="relative w-full pr-14 sm:pr-0 flex flex-col gap-2">
                                            <div className="w-full bg-[#FFFFFF1A] h-2.5 rounded-full">
                                                <div className="bg-thirdColor h-full w-[70%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                                            </div>
                                            <p className="text-[12px] text-mainWhite/50 font-normal">4 books left</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ======================= Add to Cart Button ======================= */}
                                <button className="cursor-pointer bg-mainColor hover:bg-mainColor/80 text-white px-4 self-end py-3 rounded-[8px] transition-all duration-200 active:scale-95">
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

            {/* ======================= swiper translate buttons ======================= */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-mainBackground rounded-full shadow-xl flex items-center justify-center text-[#0000001A] hover:text-secondColor transition-all border border-[#0000001A]"
            >
                <IoIosArrowBack size={24} className="md:w-6 md:h-6" />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-mainBackground rounded-full shadow-xl flex items-center justify-center text-[#0000001A] hover:text-secondColor transition-all border border-[#0000001A]"
            >
                <IoIosArrowForward size={24} className="md:w-6 md:h-6" />
            </button>
        </div>
    );
};
