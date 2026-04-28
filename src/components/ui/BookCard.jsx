import { GrStar } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BookCard({ book }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 w-full max-w-[280px]">
            {/* Book Image */}
            <div className="relative group overflow-hidden rounded-lg bg-[#F5F5F5] aspect-2/3 flex items-center justify-center cursor-pointer" onClick={() => navigate('/books')}>
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-[70%] h-auto shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => { e.stopPropagation(); navigate('/cart'); }} className="bg-white text-mainColor p-3 rounded-full hover:bg-mainColor hover:text-white transition-colors duration-300 shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); navigate('/wishlist'); }} className="bg-white text-mainColor p-3 rounded-full hover:bg-mainColor hover:text-white transition-colors duration-300 shadow-lg">
                        <FaRegHeart size={20} />
                    </button>
                </div>
            </div>

            {/* Book Info */}
            <div className="flex flex-col gap-1 px-1">
                <h3 className="font-bold text-lg text-secondColor truncate cursor-pointer hover:text-mainColor transition-colors" title={book.title}>
                    {book.title}
                </h3>
                <p className="text-sm font-medium text-gray-400 capitalize truncate">
                    {book.author}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-star text-sm gap-0.5">
                        <GrStar className={book.rating >= 1 ? "fill-current" : "text-gray-200"} />
                        <GrStar className={book.rating >= 2 ? "fill-current" : "text-gray-200"} />
                        <GrStar className={book.rating >= 3 ? "fill-current" : "text-gray-200"} />
                        <GrStar className={book.rating >= 4 ? "fill-current" : "text-gray-200"} />
                        <GrStar className={book.rating >= 5 ? "fill-current" : "text-gray-200"} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">
                        {book.rating} <span className="text-gray-400 font-normal">({book.reviews})</span>
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-2">
                    <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
                    {book.oldPrice && (
                        <span className="text-sm font-medium text-gray-400 line-through">${book.oldPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
