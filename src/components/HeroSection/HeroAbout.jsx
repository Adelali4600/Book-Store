import { assets } from '../../assets/images/assets'

export default function HeroAbout() {
    return (
        <main className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Overlay */}
            <div className="absolute bg-[#000000CC] z-10 h-full w-full flex justify-center items-center px-4 sm:px-6 md:px-8">
                {/* ======================= About Bookshop ======================= */}
                <div className="w-full max-w-[652px] md:w-3/4 lg:w-1/2 flex flex-col items-center gap-4">
                    <h1 className="font-bold text-[26px] md:text-[32px] lg:text-[48px] text-mainWhite leading-[100%]">About <span className="italic text-thirdColor">Bookshop</span></h1>
                    <p className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-center text-mainWhite/80 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
            </div>
            <img
                src={assets.libImg}
                alt="Library"
                className="w-full h-full object-cover mask-no-repeat rotate-y-180 bg-position-[center_center] z-0"
            />
        </main>
    )
}
