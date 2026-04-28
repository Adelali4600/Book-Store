import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();

    const categories = [
        { title: "Higher Education", items: "1250 Books", bgColor: "bg-pink-50" },
        { title: "Management Books", items: "1250 Books", bgColor: "bg-orange-50" },
        { title: "Engineering Books", items: "1250 Books", bgColor: "bg-blue-50" },
        { title: "Programming Books", items: "1250 Books", bgColor: "bg-pink-50" },
        { title: "Architecture Books", items: "1250 Books", bgColor: "bg-orange-50" },
    ];

    return (
        <section className="py-16 px-5 md:py-24 bg-white border-b border-gray-100">
            <div className="container max-w-[1300px] mx-auto flex flex-col gap-10 md:gap-14">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">Explore Our Categories</h1>
                        <p className="text-sm md:text-base font-medium text-gray-500 max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                        </p>
                    </div>
                    <button onClick={() => navigate('/books')} className="px-6 py-2.5 border border-mainColor text-mainColor rounded-md font-semibold hover:bg-mainColor hover:text-white transition-colors duration-300 shrink-0">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => navigate('/books')}
                            className={`flex flex-col items-center justify-center gap-3 p-8 rounded-2xl ${category.bgColor} hover:-translate-y-2 hover:shadow-md transition-all duration-300 cursor-pointer text-center group`}
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 text-base md:text-lg">{category.title}</h3>
                            <p className="text-sm font-medium text-gray-500">{category.items}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
