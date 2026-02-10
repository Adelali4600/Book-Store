export default function Button({ children, isMainBtn, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`${className} capitalize rounded-lg cursor-pointer border border-mainColor
                active:scale-95 transition-all duration-300 ${isMainBtn ? 'bg-mainColor text-white hover:bg-white hover:text-mainColor' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}
            `}>
            {children}
        </button>
    )
}