import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 400);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div
            className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-9999 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
            <button
                onClick={scrollToTop}
                className="p-3.5 rounded-full bg-mainColor text-white shadow-[0_4px_15px_rgba(232,43,97,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(232,43,97,0.5)] transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={20} />
            </button>
        </div>
    );
}
