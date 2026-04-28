import { Link } from "react-router-dom";

export default function LinkItem({ children, to }) {
    return (
        <>
            <Link to={to} className="text-white text-lg font-semibold capitalize transition-all duration-500 ease-out hover:text-thirdColor">
                {children}
            </Link>
        </>
    )
}