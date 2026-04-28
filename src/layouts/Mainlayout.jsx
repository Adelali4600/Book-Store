import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import MainHero from '../components/HeroSection/MainHero'

export default function Mainlayout() {
    return (
        <>
            <Navbar />
            <MainHero />
            <Outlet />
            <Footer />
        </>
    )
}
