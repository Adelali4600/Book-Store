import SidebarFilters from "../components/Books/SidebarFilters";
import BookGrid from "../components/Books/BookGrid";
import SearchBar from "../components/Books/SearchBar";
import SortByDropdown from "../components/Books/SortByDropdown";
import { useState } from "react";

const ALL_CATEGORIES = ["Business", "Self Help", "History", "Romance", "Fantasy", "Art", "Kids", "Music", "Cooking"];

export default function BooksPage() {
    const [activeCategory, setActiveCategory] = useState("Business");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState(null);

    return (
        <div className="min-h-screen bg-[#F0F0F0] py-10">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-6 items-start">

                {/* ================= Sidebar ================= */}
                <SidebarFilters />

                {/* ================= Main Content ================= */}
                <div className="flex-1 w-full flex flex-col gap-5">

                    {/* ================= Search + Sort Row ================= */}
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                        {/* ================= Search Bar Component ================= */}
                        <SearchBar
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        {/* ================= Sort By Dropdown ================= */}
                        <SortByDropdown value={sortBy} onChange={setSortBy} />
                    </div>

                    {/* ================= Category Tags ================= */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar flex-nowrap">
                        {ALL_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 px-5 py-2 text-[13px] font-medium rounded-sm border transition-all duration-200 ${activeCategory === cat
                                        ? "bg-mainColor text-white border-mainColor shadow-[0_3px_12px_rgba(217,23,108,0.2)] scale-[1.02]"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-mainColor hover:text-mainColor"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ================= Book Cards ================= */}
                    <BookGrid searchQuery={searchQuery} activeCategory={activeCategory} />
                </div>
            </div>
        </div>
    );
}
