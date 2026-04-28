
export default function RatingStars() {
    return (
        <div className="rating">
            <div className="mask mask-star bg-star h-4 w-4" aria-label="1 star"></div>
            <div className="mask mask-star bg-star h-4 w-4" aria-label="2 star"></div>
            <div className="mask mask-star bg-star h-4 w-4" aria-label="3 star"></div>
            <div className="mask mask-star bg-star h-4 w-4" aria-label="4 star" aria-checked={true}></div>
            <div className="mask mask-star bg-star h-4 w-4" aria-label="5 star"></div>
        </div>
    )
}