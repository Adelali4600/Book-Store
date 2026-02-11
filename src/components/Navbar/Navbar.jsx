import { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import LinkItem from '../ui/LinkItem';
import { assets, dropDown } from '../../assets/images/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRightAlt } from 'react-icons/cg';
import toast from 'react-hot-toast';
// import { useAuthStore } from '../../store';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const logout = useAuthStore(state => state.logout);
    // const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        // isAuthenticated ? logout() : navigate('/login');
        localStorage.removeItem("token") || sessionStorage.removeItem("token");
        navigate('/login');
        toast.error('Logged out!!');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='relative'>
            <div className="absolute z-999 w-full flex items-center justify-between py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-10 lg:py-7.5 lg:px-35 bg-[#FFFFFF33]">
                <NavbarLogo />

                <div className="hidden lg:flex items-center gap-6 lg:gap-10 mr-auto ml-6 lg:ml-0">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>home</NavLink>
                    <NavLink to={"/books"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>books</NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>about us</NavLink>
                </div>
                <div className='flex items-center'>

                    {
                        token ?
                            <div className='h-10 flex items-center gap-6'>
                                <img sizes={32} src={assets.group4} alt={assets.group4} />
                                <img sizes={32} src={assets.group5} alt={assets.group5} />
                                <div className='dropdown dropdown-end cursor-pointer flex items-center gap-2' tabIndex={0}>
                                    <div className='flex items-center gap-2.5'>
                                        <img sizes={40} src={assets.group8} alt={assets.group8} />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-[1rem] font-OpenSans font-semibold leading-[100%] text-[#FFFFFF]'>John Smith</h3>
                                            <p className='text-[14px] font-OpenSans font-light leading-[100%] text-[#FFFFFF80]'>Johnsmith@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='py-2 pl-2 cursor-pointer'>
                                        <img sizes={24} src={assets.arrowDown} alt={assets.arrowDown} />
                                        <ul
                                            tabIndex="-1"
                                            className="dropdown-content bg-base-200 font-semibold leading-[100%] rounded-[8px] text-[#222222] z-1 mt-4 p-6 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)]">
                                            {dropDown.map((item) => (
                                                <li key={item.id}>
                                                    <Link className="min-w-[232px] hover:text-thirdColor py-3 flex items-center gap-2.5">
                                                        <img sizes={item.size} src={item.logo} alt={item.logo} />
                                                        <p>{item.title}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li key={dropDown.length + 1}>
                                                <Link onClick={handleLogout} className="min-w-[232px] hover:text-thirdColor py-3 flex items-center gap-2.5">
                                                    <img sizes={20} src={assets.icBaselineLogout} alt={assets.icBaselineLogout} />
                                                    <p>Logout</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            :
                            <div className="hidden md:flex items-center gap-2 lg:gap-3">
                                <NavLink to={"/login"} className="py-2 px-3 lg:py-3 lg:px-4 btn shadow-none bg-mainColor text-white rounded-lg border-transparent font-OpenSans font-semibold leading-[100%] text-sm lg:text-base hover:bg-transparent hover:border-mainColor hover:border transition-all">Log in</NavLink>
                                <NavLink to={"/signup"} className="py-2 px-3 lg:py-3 lg:px-4 btn shadow-none text-mainColor bg-white rounded-lg border border-mainColor hover:text-white hover:bg-transparent leading-[100%] font-OpenSans font-semibold text-sm lg:text-base transition-all">Sign Up</NavLink>
                            </div>
                    }
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-all"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6 text-white" />
                        ) : (
                            <CgMenuRightAlt className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/20 backdrop-blur-md">
                        <div className="flex flex-col gap-2 p-4">
                            <LinkItem to={"/"}>home</LinkItem>
                            <LinkItem to={"/books"}>books</LinkItem>
                            <LinkItem to={"/about"}>about us</LinkItem>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    )
}