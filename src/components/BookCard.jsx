export default function BookCard({ product }) {
    return (
        <>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        src={product?.pro_image?.url || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300"}
                        alt={product?.pro_name || "Book Cover"} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.pro_name}
                        <div className="badge badge-secondary">{product?.pro_price}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{product?.category?.cat_name}</div>
                    </div>
                    <div className="card-actions flex flex-nowrap items-center w-full">
                        <button className="btn btn-error w-full">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
