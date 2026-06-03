import { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import LinkItem from '../ui/LinkItem';
import { assets, dropDown } from '../../assets/images/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaTimes } from 'react-icons/fa';
import { CgMenuRightAlt } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/useAuthStore';

export default function Navbar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { token, user, logoutAction } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutAction();
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
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>{t('navbar.home')}</NavLink>
                    <NavLink to={"/books"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>{t('navbar.books')}</NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}>{t('navbar.about')}</NavLink>
                </div>
                <div className='flex items-center'>
                    {
                        token ?
                            <div className='h-10 flex items-center gap-6 mr-6'>
                                <Link to={'/wishlist'} className={`h-8 w-8 indicator ${({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}`}>
                                    <span className="indicator-item badge w-[18px] h-[18px] rounded-full bg-mainColor text-white">12</span>
                                    <FaRegHeart size={24} className={`text-white`} />
                                </Link>
                                <Link to={'/cart'} className={`h-8 w-8 indicator ${({ isActive }) => isActive ? 'text-thirdColor nav-link' : 'text-white nav-link'}`}>
                                    <span className="indicator-item badge w-[18px] h-[18px] rounded-full bg-mainColor text-white">12</span>
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13816_1878)">
                                            <path d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z" fill="currentColor" />
                                            <path d="M5.83341 20.0001C6.75389 20.0001 7.50008 19.2539 7.50008 18.3334C7.50008 17.4129 6.75389 16.6667 5.83341 16.6667C4.91294 16.6667 4.16675 17.4129 4.16675 18.3334C4.16675 19.2539 4.91294 20.0001 5.83341 20.0001Z" fill="currentColor" />
                                            <path d="M14.1667 20.0001C15.0871 20.0001 15.8333 19.2539 15.8333 18.3334C15.8333 17.4129 15.0871 16.6667 14.1667 16.6667C13.2462 16.6667 12.5 17.4129 12.5 18.3334C12.5 19.2539 13.2462 20.0001 14.1667 20.0001Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13816_1878">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <div className='dropdown dropdown-end cursor-pointer flex items-center gap-2' tabIndex={0}>
                                    {/* ======================= User Info ======================= */}
                                    <div className='hidden md:flex items-center gap-2.5'>
                                        <img sizes={40} src={assets.group8} alt={assets.group8} />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-[1rem] font-OpenSans font-semibold leading-[100%] text-[#FFFFFF]'>
                                                {user?.firstName && user?.lastName
                                                    ? `${user.firstName} ${user.lastName}`
                                                    : user?.username || 'User'}
                                            </h3>
                                            <p className='text-[14px] font-OpenSans font-light leading-[100%] text-[#FFFFFF80]'>
                                                {user?.email || ''}
                                            </p>
                                        </div>
                                    </div>
                                    {/* ======================= Dropdown Menu ======================= */}
                                    <div className='py-2 pl-2 cursor-pointer'>
                                        <img sizes={24} src={assets.arrowDown} alt={assets.arrowDown} />
                                        <ul
                                            tabIndex="-1"
                                            className="dropdown-content bg-base-200 font-semibold leading-[100%] rounded-[8px] text-[#222222] z-1 mt-4 p-6 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)]">
                                            {dropDown.map((item) => {
                                                const key = item.title === 'Profile' ? 'profile' : 
                                                            item.title === 'Order History' ? 'orderHistory' : 
                                                            item.title === 'Address' ? 'address' : 
                                                            'help';
                                                return (
                                                    <li key={item.id}>
                                                        <Link to={item.path} className="min-w-[232px] hover:text-thirdColor py-3 flex items-center gap-2.5">
                                                            <img sizes={item.size} src={item.logo} alt={item.logo} />
                                                            <p>{t(`navbar.${key}`)}</p>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                            <li key={dropDown.length + 1}>
                                                <Link to={`/login`} onClick={handleLogout} className="min-w-[232px] hover:text-thirdColor py-3 flex items-center gap-2.5">
                                                    <img sizes={20} src={assets.icBaselineLogout} alt={assets.icBaselineLogout} />
                                                    <p>{t('navbar.logout')}</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            :
                            <div className="hidden md:flex items-center gap-2 lg:gap-3">
                                <NavLink to={"/login"} className="py-2 px-3 lg:py-3 lg:px-4 btn shadow-none bg-mainColor text-white rounded-lg border-transparent font-OpenSans font-semibold leading-[100%] text-sm lg:text-base hover:bg-transparent hover:border-mainColor hover:border transition-all">{t('navbar.login')}</NavLink>
                                <NavLink to={"/signup"} className="py-2 px-3 lg:py-3 lg:px-4 btn shadow-none text-mainColor bg-white rounded-lg border border-mainColor hover:text-white hover:bg-transparent leading-[100%] font-OpenSans font-semibold text-sm lg:text-base transition-all">{t('navbar.signup')}</NavLink>
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
                {/* ================= Mobile Menu ================= */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/20 backdrop-blur-md">
                        <div className="flex flex-col gap-2 p-4">
                            <LinkItem to={"/"}>{t('navbar.home')}</LinkItem>
                            <LinkItem to={"/books"}>{t('navbar.books')}</LinkItem>
                            <LinkItem to={"/about"}>{t('navbar.about')}</LinkItem>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    )
}