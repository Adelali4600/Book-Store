import { useNavigate } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";

export default function BestSellers() {
    const navigate = useNavigate();

    return (
        <section className="flex justify-center bg-[#2C2638] items-center py-16 md:py-[100px] border-b border-gray-800">
            <div className="flex flex-col items-center bg-transparent gap-10 md:gap-14 w-full px-5 md:px-0 container max-w-[1300px]">
                <div className="w-full flex flex-col items-center gap-10">
                    <div className="w-full md:max-w-3xl flex flex-col items-center gap-4 text-center">
                        <h1 className="font-bold text-3xl md:text-4xl text-white tracking-wide">Best Seller</h1>
                        <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed max-w-2xl px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                        </p>
                    </div>
                    <div className="w-full relative mt-4">
                        <ImageSlider />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 mt-4">
                    <button onClick={() => navigate('/books')} className="cursor-pointer btn border-none bg-mainColor text-white px-10 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-sm">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}
