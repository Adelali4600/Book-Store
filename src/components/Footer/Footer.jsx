import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaEarthAmericas, FaXTwitter } from 'react-icons/fa6'
import NavbarLogo from '../Navbar/NavbarLogo'
import LinkItem from '../ui/LinkItem'

export default function Footer() {
    return (
        <footer className="bg-[#2C2640] flex justify-center text-white py-32 px-16" >
            <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                    {/* Logo & Navigation */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <NavbarLogo />
                        </div>
                        <nav className="flex gap-6 text-[18px] font-semibold">
                            <LinkItem to="/" className="hover:text-gray-300 transition">Home</LinkItem>
                            <LinkItem to="/books" className="hover:text-gray-300 transition">Books</LinkItem>
                            <LinkItem to="/about" className="hover:text-gray-300 transition">About Us</LinkItem>
                        </nav>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-300 transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <FaYoutube size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition">
                            <FaXTwitter size={24} />
                        </a>
                    </div>
                </div>

                {/* Copyright & Language */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-600">
                    <p className="text-sm text-gray-400">
                        -Developed by: Eraasoft -All Copy Right Reserved @2024
                    </p>

                    <div className="flex items-center gap-4">
                        <FaEarthAmericas size={24} />
                        <select className="bg-transparent font-sans leading-[150%] text-white/50 border border-[1px_solid_#FFFFFF80] rounded-[8px] px-3 py-1 text-[14px] focus:outline-none focus:border-gray-400">
                            <option value="en" className='text-black'>English</option>
                            <option value="ar" className='text-black'>العربية</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    )
}
