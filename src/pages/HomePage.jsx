import BenefitCompo from "../components/BenefitCompo";
import BestSellers from "../components/Home/BestSellers";
import FeaturedBooks from "../components/Home/FeaturedBooks";
import TimerComp from "../components/ui/TimerComp";
import BookSlider from "../components/ui/BookSlider";
import AuthorSection from "../components/Home/AuthorSection";
import HomeHero from "../components/HeroSection/HomeHero";

export default function HomePage() {
   return (
      <>
         <HomeHero />

         <BenefitCompo />

         {/* ======================= Best Seller Books ======================= */}
         <BestSellers />

         {/* ======================= Recommended For You ======================= */}
         <FeaturedBooks />

         {/* ======================= Flash Sale Book Carousel ======================= */}
         <section className="px-5 py-10 md:px-[60px] md:py-[80px] border-t border-gray-100 flex flex-col gap-10 md:gap-14 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center">
               <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                  <h1 className="text-[26px] md:text-4xl font-bold text-gray-900">Flash Sale</h1>
                  <p className="text-sm md:text-base font-medium text-gray-500 max-w-[516px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
               </div>

               <div className="flex justify-center items-center rounded-full border-4 shadow-sm md:border-4 h-28 w-28 md:h-40 md:w-40 bg-white border-mainColor shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100 pointer-events-none -z-10"></div>
                  <TimerComp />
               </div>
            </div>

            <div className="w-full max-w-[1300px] mx-auto">
               <BookSlider />
            </div>
         </section>
      </>
   )
};