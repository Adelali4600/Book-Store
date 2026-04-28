import { FaChevronRight } from "react-icons/fa";

const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Publication Date",
    "Best Seller",
];

export default function SortByDropdown({ value, onChange }) {
    return (
        <div className="dropdown dropdown-end shrink-0">
            {/* ===== Trigger Button ===== */}
            <div
                tabIndex={0}
                role="button"
                className="bg-white border border-gray-200 rounded-full px-5 py-[11px] flex items-center gap-3 shadow-sm min-w-[160px] cursor-pointer hover:border-mainColor/50 transition-colors select-none"
            >
                <span className={`text-[13px] font-medium flex-1 ${value ? "text-gray-700" : "text-gray-400"}`}>
                    {value || "Sort by"}
                </span>
                <FaChevronRight size={10} className="text-gray-400 shrink-0" />
            </div>

            {/* ===== DaisyUI Dropdown Content ===== */}
            <ul
                tabIndex={0}
                className="dropdown-content bg-white border border-gray-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.09)] z-50 mt-2 p-0 overflow-hidden min-w-[200px]"
            >
                {/* Options */}
                {sortOptions.map((option) => (
                    <li key={option}>
                        <button
                            onMouseDown={() => onChange(option)}
                            className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-medium cursor-pointer transition-colors rounded-none border-b border-gray-50 last:border-b-0 ${value === option
                                ? "text-mainColor bg-mainColor/5"
                                : "text-gray-600 hover:text-mainColor hover:bg-gray-50"
                                }`}
                        >
                            {option}
                        </button>
                    </li>
                ))}

                {/* Clear selection */}
                {value && (
                    <li className="border-t border-gray-100">
                        <button
                            onMouseDown={() => onChange(null)}
                            className="w-full text-center px-5 py-3 text-[12px] text-gray-400 hover:text-mainColor cursor-pointer transition-colors"
                        >
                            Clear sort
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
