import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { GrStar } from "react-icons/gr";

const books = Array(3).fill(null).map((_, index) => ({
    id: index + 1,
    title: "Rich Dad And Poor Dad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultrices est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    rating: 4.2,
    reviews: 210,
    price: 40.00,
    author: "Robert T. Kiyosaki",
    year: "1997",
    discountInfo: "25% Discount code: Ne212",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
}));

export default function BookGrid() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4">
            {/* ===== Book Cards ===== */}
            {books.map((book) => (
                <div
                    key={book.id}
                    className="bg-white rounded-lg border border-gray-100 shadow-[0_1px_6px_rgba(0,0,0,0.05)] flex flex-col md:flex-row hover:shadow-[0_4px_16px_rgba(0,0,0,0.09)] transition-shadow duration-300 overflow-hidden"
                >
                    {/* Book Cover */}
                    <div className="shrink-0 w-full md:w-[175px] flex items-stretch overflow-hidden bg-gray-50">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 flex flex-col md:flex-row p-5 gap-4">
                        {/* Left: Info */}
                        <div className="flex-1 flex flex-col gap-3">
                            <h3 className="font-bold text-gray-900 text-[18px] leading-snug">{book.title}</h3>
                            <p className="text-gray-400 text-[13px] leading-relaxed">
                                {book.description}
                            </p>

                            {/* Stars */}
                            <div className="flex items-center gap-2">
                                <div className="flex text-mainColor gap-0.5">
                                    {[1, 2, 3, 4].map((s) => <GrStar key={s} className="fill-mainColor" size={14} />)}
                                    <GrStar className="text-gray-300" size={14} />
                                </div>
                                <span className="text-[12px] text-gray-400">({book.reviews} Review)</span>
                            </div>
                            <p className="text-[12px] text-gray-500">
                                Rate: <span className="font-bold text-gray-700">{book.rating}</span>
                            </p>

                            {/* Author + Year */}
                            <div className="flex items-center gap-10 pt-1">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[11px] text-gray-400 font-medium">Author</span>
                                    <span className="text-[13px] font-bold text-gray-800">{book.author}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[11px] text-gray-400 font-medium">Year</span>
                                    <span className="text-[13px] font-bold text-gray-800">{book.year}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Price + Actions */}
                        <div className="flex flex-col items-end justify-between min-w-[190px] gap-4 pt-1">
                            {/* Discount Badge - top right */}
                            <span className="text-[11px] font-medium text-mainColor border border-mainColor/30 rounded px-3 py-1.5 bg-mainColor/5 whitespace-nowrap self-end">
                                {book.discountInfo}
                            </span>

                            {/* Price + Buttons */}
                            <div className="flex flex-col items-end gap-3 mt-auto">
                                <span className="text-[32px] font-bold text-gray-900 leading-none">
                                    ${book.price.toFixed(2)}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate('/cart')}
                                        className="cursor-pointer flex items-center gap-2 bg-mainColor hover:bg-mainColor/90 text-white px-5 py-2.5 rounded text-[13px] font-semibold transition-colors"
                                    >
                                        Add To Cart <FaShoppingCart size={13} />
                                    </button>
                                    <button
                                        onClick={() => navigate('/wishlist')}
                                        className="cursor-pointer flex items-center justify-center w-[42px] h-[42px] border border-mainColor/30 rounded bg-white text-mainColor hover:bg-mainColor/5 transition-colors"
                                    >
                                        <FaRegHeart size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ===== Pagination ===== */}
            <div className="flex flex-col items-center gap-2 mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-mainColor font-medium px-3 py-1 hover:underline cursor-pointer">
                        &lt; Previous
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-mainColor text-white font-semibold rounded shadow-sm text-[13px] cursor-pointer">1</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 font-medium hover:bg-gray-100 rounded shadow-sm text-[13px] cursor-pointer border border-gray-100">2</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 font-medium hover:bg-gray-100 rounded shadow-sm text-[13px] cursor-pointer border border-gray-100">3</button>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-400 font-bold text-[13px]">...</span>
                    <button className="flex items-center gap-1 text-mainColor font-medium px-3 py-1 hover:underline cursor-pointer">
                        Next &gt;
                    </button>
                </div>
                <p className="text-gray-400 text-[13px] mt-1">1-20 of 5000+ Book available</p>
            </div>
        </div>
    );
}
