import { useState } from "react";
import { MdHistory } from "react-icons/md";

const recentSearches = [
    "Rich dad and poor dad",
    "Self help books",
    "History of Egypt",
    "Harry Potter",
];

export default function SearchBar({ value, onChange, placeholder = "Search" }) {
    const [isFocused, setIsFocused] = useState(false);

    const filtered = recentSearches.filter(
        (s) => !value || s.toLowerCase().includes(value.toLowerCase())
    );

    const handleSelect = (text) => {
        onChange({ target: { value: text } });
    };

    return (
        <div className={`dropdown flex-1 w-full ${isFocused ? "dropdown-open" : ""}`}>

            {/* ===== Input Bar ===== */}
            <div
                tabIndex={0}
                className="w-full bg-white flex items-center border border-gray-200 rounded-full pr-2 pl-5 py-2 gap-3 shadow-sm transition-all duration-200 focus-within:border-mainColor/40 focus-within:shadow-[0_0_0_3px_rgba(217,23,108,0.07)]"
            >
                {/* Text Input */}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-[14px] py-1.5"
                />

                {/* Divider */}
                <div className="w-px h-5 bg-gray-200 shrink-0" />

                {/* Microphone Icon (SVG from assets) */}
                <button type="button" className="shrink-0 p-1 hover:opacity-70 transition-opacity cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z" fill="#9CA3AF" />
                        <path d="M5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 14.0796 5.97883 17.446 9.875 17.9291V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H14V17.9291C17.8212 17.446 21 14.0796 21 10C21 9.44772 20.5523 9 20 9C19.4477 9 19 9.44772 19 10C19 13.3137 16.3137 16 13 16H11C7.68629 16 5 13.3137 5 10Z" fill="#9CA3AF" />
                    </svg>
                </button>

                {/* Search Button — Pink circle with search icon */}
                <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-mainColor flex items-center justify-center shrink-0 hover:bg-mainColor/85 active:scale-95 transition-all cursor-pointer shadow-[0_2px_10px_rgba(217,23,108,0.3)]"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* ===== DaisyUI Dropdown ===== */}
            <ul
                tabIndex={0}
                className="dropdown-content bg-white w-full z-50 rounded-b-2xl rounded-t-none border border-t-0 border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.07)] p-0 overflow-hidden mt-0"
            >
                {filtered.length > 0
                    ? filtered.map((search, idx) => (
                        <li key={idx}>
                            <button
                                onMouseDown={() => handleSelect(search)}
                                className="w-full flex items-center gap-3 px-5 py-3.5 text-[13px] text-gray-600 hover:text-mainColor hover:bg-gray-50/80 text-left cursor-pointer transition-colors rounded-none"
                            >
                                <MdHistory size={17} className="text-gray-400 shrink-0" />
                                {search}
                            </button>
                        </li>
                    ))
                    : (
                        <li className="px-5 py-4 text-[13px] text-gray-400 text-center pointer-events-none">
                            No results for "<span className="text-mainColor font-medium">{value}</span>"
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
