import { assets } from '../../assets/images/assets'

export default function AuthenticationHero() {
    return (
        <main className="relative max-h-[40vh] overflow-hidden">
            <div className="absolute bg-black/60 z-10 h-full w-full"></div>
            <img
                src={assets.libImg}
                alt="Library"
                className="w-full h-full bg-no-repeat object-cover bg-cover bg-center z-0"
            />
        </main>
    )
}
