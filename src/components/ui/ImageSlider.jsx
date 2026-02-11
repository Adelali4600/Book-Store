import { Autoplay, HashNavigation, Pagination, Thumbs } from "swiper/modules";
import { slidersImages } from "../../assets/images/assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function ImageSlider() {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-8">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={3000}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 0,              // 0 تعني عدم وجود وقفات بين الحركات
                        disableOnInteraction: false,
                        reverseDirection: false, // لجعل الحركة ناحية اليمين
                    }}
                    // هذا الجزء لجعل الحركة "خطية" ناعمة جداً دون تسارع أو تباطؤ
                    allowTouchMove={false}   // اختيارياً: لمنع المستخدم من مقاطعة الحركة
                    className=""
                >
                    {slidersImages.map((item, index) => (
                        <SwiperSlide>
                            <img
                                key={index}
                                src={item.image}
                                alt={`Slide ${index}`}
                                className="w-[173px] h-[260px] object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}   