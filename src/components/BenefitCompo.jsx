import { details } from '../assets/images/assets'

export default function BenefitCompo() {
    return (
        <section className='flex justify-center items-center py-10 px-5 md:py-[120px] md:px-[60px]'>
            <div className='container flex flex-col md:flex-row justify-between gap-10 md:gap-[61px]'>
                {details.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 items-center md:items-start text-center md:text-left flex-1">
                        <img className="w-[30px] h-[30px]" src={item.logo} alt={item.title} />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-bold text-secondColor">{item.title}</h2>
                            <p className="text-[1rem] text-[#22222280] font-normal">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
