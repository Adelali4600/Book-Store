import { useNavigate } from "react-router-dom";

export default function AuthorSection() {
    const navigate = useNavigate();

    const authors = [
        { name: "John Smith", role: "Best Seller", image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/2q0eajs80b9o3354t79e7n8kbo._SY450_CR0%2C0%2C450%2C450_.jpg" },
        { name: "Robert T. Kiyosaki", role: "Management", image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/7tkg07k4b9ikvthnsbso7g9mjo._SY450_CR0%2C0%2C450%2C450_.jpg" },
        { name: "James Clear", role: "Productivity", image: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/h0nps2k27m8dnbst9ofnb5n9d0.jpg" },
        { name: "Morgan Housel", role: "Finance", image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/bd9ed6ntu9qnjt89o2vj06tue._SY450_CR0%2C0%2C450%2C450_.jpg" },
    ];

    return (
        <section className="py-16 px-5 md:py-24 bg-white border-t border-gray-100">
            <div className="container max-w-[1300px] mx-auto flex flex-col gap-10 md:gap-14">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">Featured Authors</h1>
                    <p className="text-sm md:text-base font-medium text-gray-500 max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {authors.map((author, index) => (
                        <div key={index} onClick={() => navigate('/books')} className="flex flex-col items-center justify-center gap-4 group cursor-pointer">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-mainColor/20 transition-all duration-300">
                                <img src={author.image} alt={author.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col items-center gap-1.5 text-center">
                                <h3 className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-mainColor transition-colors">{author.name}</h3>
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">{author.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
