import React from 'react'
import { assets } from '../../assets/images/assets'

export default function ProfileHero() {
    return (
        <>
            <main className="relative h-[25vh] overflow-hidden">
                {/* ================= Overlay ================= */}
                <div className="absolute bg-black/60 z-10 h-full w-full flex justify-center items-center px-4 sm:px-6 md:px-8"></div>
                <img
                    src={assets.libImg}
                    alt="Library"
                    className="w-full h-full object-cover"
                />
            </main>
        </>
    )
}
