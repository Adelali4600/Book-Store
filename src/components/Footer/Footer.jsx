import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaEarthAmericas, FaXTwitter } from 'react-icons/fa6'
import NavbarLogo from '../Navbar/NavbarLogo'
import LinkItem from '../ui/LinkItem'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <footer className="bg-[#2C2640] flex justify-center text-white py-16 md:py-32 px-6 lg:px-16" >
            <div className="w-full max-w-[1300px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-10 md:mb-6">
                    {/* ================= Logo & Navigation ================= */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="flex items-center gap-2">
                            <NavbarLogo />
                        </div>
                        <nav className="flex flex-wrap justify-center gap-6 text-[16px] md:text-[18px] font-semibold">
                            <LinkItem to="/" className="hover:text-gray-300 transition">{t('footer.home')}</LinkItem>
                            <LinkItem to="/books" className="hover:text-gray-300 transition">{t('footer.books')}</LinkItem>
                            <LinkItem to="/about" className="hover:text-gray-300 transition">{t('footer.about')}</LinkItem>
                        </nav>
                    </div>

                    {/* ================= Social Icons ================= */}
                    <div className="flex gap-5">
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

                {/* ================= Copyright & Language ================= */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 pt-6 border-t border-gray-600 text-center md:text-left">
                    <p className="text-[13px] md:text-sm text-gray-400">
                        {t('footer.rights')}
                    </p>

                    <div className="flex items-center gap-4">
                        <FaEarthAmericas size={22} className="text-white/80" />
                        <select 
                            value={i18n.language} 
                            onChange={handleLanguageChange}
                            className="bg-transparent font-sans leading-[150%] text-white border border-white/30 rounded-[8px] px-3 py-1.5 text-[14px] focus:outline-none focus:border-white/60 cursor-pointer"
                        >
                            <option value="en" className='text-black'>English</option>
                            <option value="ar" className='text-black'>العربية</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    )
}
