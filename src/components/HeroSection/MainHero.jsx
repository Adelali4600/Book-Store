import { assets } from '../../assets/images/assets'

export default function MainHero() {
    return (
        <>
            <main className="relative h-[13vh] overflow-hidden">
                {/* ================= Overlay ================= */}
                <div className="absolute bg-black/60 z-10 h-full w-full flex justify-center items-center px-4 sm:px-6 md:px-8"></div>
                <img
                    src={assets.libImg}
                    alt="Library"
                    className="w-full h-full object-cover mask-no-repeat rotate-y-180 bg-position-[center_center] z-0"
                />
            </main>
        </>
    )
}
