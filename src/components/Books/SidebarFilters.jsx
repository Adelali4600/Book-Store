import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const categories = [
    { name: "All Categories", count: 1450 },
    { name: "Business", count: 140 },
    { name: "Kids", count: 309 },
    { name: "Art", count: 102 },
    { name: "History", count: 204 },
    { name: "Romance", count: 89 },
    { name: "Fantasy", count: 47 },
    { name: "Self Help", count: 163 },
    { name: "Cooking", count: 211 },
    { name: "Sports", count: 92 },
];

const publishers = [
    { name: "Paulo Coelho", count: 214 },
    { name: "Jane Austen", count: 180 },
    { name: "Charles Dickens", count: 304 },
    { name: "Mark Twain", count: 188 },
    { name: "Virginia Woolf", count: 203 },
    { name: "Leo Tolstoy", count: 89 },
    { name: "Fyodor Dostoevsky", count: 119 },
    { name: "Haruki Murakami", count: 196 },
    { name: "Gabriel Márquez", count: 271 },
    { name: "Chinua Achebe", count: 155 },
];

const years = [
    { year: "2024", count: 110 },
    { year: "2023", count: 148 },
    { year: "2022", count: 190 },
    { year: "2021", count: 110 },
    { year: "2020", count: 84 },
    { year: "2019", count: 82 },
    { year: "2018", count: 61 },
    { year: "2017", count: 168 },
    { year: "2016", count: 98 },
    { year: "2015", count: 252 },
];

// Reusable collapsible accordion block
function FilterBlock({ title, isOpen, onToggle, children }) {
    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-[0_1px_6px_rgba(0,0,0,0.04)] overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full px-5 py-4 flex justify-between items-center cursor-pointer"
            >
                <h3 className={`font-bold text-sm ${isOpen ? "text-mainColor" : "text-gray-700"}`}>{title}</h3>
                {isOpen
                    ? <FaChevronDown size={10} className="text-mainColor" />
                    : <FaChevronRight size={10} className="text-gray-400" />
                }
            </button>
            {isOpen && <div className="border-t border-gray-100">{children}</div>}
        </div>
    );
}

export default function SidebarFilters() {
    const [openBlocks, setOpenBlocks] = useState({ categories: true, publisher: false, year: false, sort: false });
    const [selectedCats, setSelectedCats] = useState(["All Categories"]);
    const [selectedPubs, setSelectedPubs] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [showMorePubs, setShowMorePubs] = useState(false);

    const toggle = (key) =>
        setOpenBlocks((prev) => ({ ...prev, [key]: !prev[key] }));

    const toggleCheck = (setter, list, value) => {
        setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    };

    const visiblePublishers = showMorePubs ? publishers : publishers.slice(0, 6);

    return (
        <aside className="w-full md:w-[260px] shrink-0 flex flex-col gap-3">
            {/* ======= Categories ======= */}
            <FilterBlock title="Categories" isOpen={openBlocks.categories} onToggle={() => toggle("categories")}>
                <div className="px-5 py-4 flex flex-col gap-3">
                    {/* Active label in mainColor at top */}
                    <p className="text-mainColor text-xs font-semibold mb-1">Categories</p>
                    {categories.map((cat) => (
                        <label key={cat.name} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={selectedCats.includes(cat.name)}
                                    onChange={() => toggleCheck(setSelectedCats, selectedCats, cat.name)}
                                    className="w-3.5 h-3.5 accent-mainColor cursor-pointer rounded"
                                />
                                <span className={`text-[13px] group-hover:text-mainColor transition-colors ${selectedCats.includes(cat.name) ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                                    {cat.name}
                                </span>
                            </div>
                            <span className="text-[11px] text-gray-400">({cat.count})</span>
                        </label>
                    ))}
                    <button className="text-mainColor text-xs font-semibold text-center mt-2 hover:underline cursor-pointer">
                        Load More
                    </button>
                </div>
            </FilterBlock>

            {/* ======= Publisher ======= */}
            <FilterBlock title="Publisher" isOpen={openBlocks.publisher} onToggle={() => toggle("publisher")}>
                <div className="px-5 py-4 flex flex-col gap-3">
                    {/* Highlighted label with dashed border */}
                    <p className="text-mainColor text-xs font-semibold border border-dashed border-mainColor/40 rounded px-2 py-1 w-fit mb-1">Publisher</p>
                    {visiblePublishers.map((pub) => (
                        <label key={pub.name} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={selectedPubs.includes(pub.name)}
                                    onChange={() => toggleCheck(setSelectedPubs, selectedPubs, pub.name)}
                                    className="w-3.5 h-3.5 accent-mainColor cursor-pointer rounded"
                                />
                                <span className={`text-[13px] group-hover:text-mainColor transition-colors ${selectedPubs.includes(pub.name) ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                                    {pub.name}
                                </span>
                            </div>
                            <span className="text-[11px] text-gray-400">({pub.count})</span>
                        </label>
                    ))}
                    <button
                        onClick={() => setShowMorePubs(!showMorePubs)}
                        className="text-mainColor text-xs font-semibold text-center mt-2 hover:underline cursor-pointer"
                    >
                        {showMorePubs ? "Show Less" : "Load More"}
                    </button>
                </div>
            </FilterBlock>

            {/* ======= Year ======= */}
            <FilterBlock title="Year" isOpen={openBlocks.year} onToggle={() => toggle("year")}>
                <div className="px-5 py-4 flex flex-col gap-3">
                    <p className="text-mainColor text-xs font-semibold mb-1">Year</p>
                    {years.map((y) => (
                        <label key={y.year} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={selectedYears.includes(y.year)}
                                    onChange={() => toggleCheck(setSelectedYears, selectedYears, y.year)}
                                    className="w-3.5 h-3.5 accent-mainColor cursor-pointer rounded"
                                />
                                <span className={`text-[13px] group-hover:text-mainColor transition-colors ${selectedYears.includes(y.year) ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                                    {y.year}
                                </span>
                            </div>
                            <span className="text-[11px] text-gray-400">({y.count})</span>
                        </label>
                    ))}
                    <button className="text-mainColor text-xs font-semibold text-center mt-2 hover:underline cursor-pointer">
                        Load More
                    </button>
                </div>
            </FilterBlock>
        </aside>
    );
}
