import { assets } from '../../assets/images/assets'
import { IoSearchOutline } from 'react-icons/io5'
import { GrMicrophone } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function HomeHero() {
    const navigate = useNavigate()
    return (
        <>
            <main className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
                {/* Overlay */}
                <div className="absolute bg-black/60 z-10 h-full w-full flex justify-center items-center px-4 sm:px-6 md:px-8">
                    {/* Search Section */}
                    <div className="flex border border-[#22222233] w-full max-w-[536px] rounded-[50px]">
                        <div className='flex items-center grow bg-[#FFFFFF] rounded-l-[50px] relative pr-2 sm:pr-4 border border-[#22222233]'>
                            <input
                                type="search"
                                placeholder='Search'
                                id="search"
                                className="w-full h-full placeholder:text-[#22222280] text-[#22222280] pl-4 sm:pl-6 py-3 text-sm sm:text-base outline-0 rounded-l-[50px]"
                            />
                            <GrMicrophone size={18} className='hidden sm:block absolute right-2 sm:right-4 text-[#22222280] cursor-pointer' />
                        </div>
                        <label
                            onClick={() => navigate('/books')}
                            htmlFor="search"
                            className="text-white text-lg sm:text-2xl font-bold flex justify-center items-center px-4 sm:px-6 py-3 rounded-r-[50px] bg-mainColor hover:bg-mainColor/80 transition-all duration-500 ease-out cursor-pointer"
                        >
                            <IoSearchOutline size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </label>
                    </div>
                </div>
                <img
                    src={assets.libImg}
                    alt="Library"
                    className="w-full h-full object-cover mask-no-repeat rotate-y-180 bg-position-[center_center] z-0"
                />
            </main>
        </>
    )
}
