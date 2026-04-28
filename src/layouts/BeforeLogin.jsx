import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import AuthenticationHero from '../components/HeroSection/AuthenticationHero'

export default function BeforeLoginLayout() {
    return (
        <>
            <Navbar />
            <AuthenticationHero />
            <Outlet />
            <Footer />
        </>
    )
}
