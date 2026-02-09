import { Autoplay } from "swiper/modules";
import { slidersImages } from "../../assets/images/assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function ImageSlider() {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-8">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}              // يجعل الحركة لانهائية
                    slidesPerView={7}        // عدد السلايدات الظاهرة
                    speed={3000}             // سرعة الحركة (5 ثوانٍ للانتقال الواحدة)
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