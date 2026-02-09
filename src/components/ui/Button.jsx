export default function Button({ children, width, isMainBtn }) {
    return (
        <>
            <button className={`w-${width} px-4 py-3 capitalize rounded-lg cursor-pointer border border-mainColor
                active:scale-95 transition-all duration-300 ${isMainBtn ? 'bg-mainColor text-white hover:bg-white hover:text-mainColor' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}
            `}>
                {children}
            </button>
        </>
    )
}