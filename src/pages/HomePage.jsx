import { details, assets } from "../assets/images/assets";
import Button from "../components/ui/Button";
import ImageSlider from "../components/ui/ImageSlider";
export default function HomePage() {
    return (
        <>
            <section className='flex justify-center items-center py-[120px] px-[60px]'>
                <div className='container flex justify-between gap-[61px]'>
                    {details.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <img className="w-[30px] h-[30px]" src={item.logo} alt={item.title} />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg font-bold text-[#222222]">{item.title}</h2>
                                <p className="text-[1rem] text-[#22222280] font-normal">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex justify-center bg-frameColor items-center py-[120px]">
                <div className="flex flex-col items-center bg-transparent gap-[80px] w-full">
                    <div className="w-full flex flex-col items-center gap-[80px]" >
                        <div className="max-w-1/2 flex flex-col items-center gap-2">
                            <h1 className="font-bold text-[26px] text-[#FFFFFF] leading-[100%]">Best Seller</h1>
                            <p className="text-[1rem] text-[#FFFFFF80] font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                        </div>
                        <div className="flex justify-center w-full gap-8">
                            <ImageSlider />
                        </div>
                    </div>
                    <Button isMainBtn={true} width={"fit"} children={"Shop Now"} className={`font-semibold text-lg leading-[100%]`} />
                </div>
            </section>

            <section className="flex justify-center py-[120px] px-[60px]">
                <div className="container flex flex-col gap-10">
                    <h1 className="font-bold text-[26px] text-[#222222] leading-[100%]">Recomended For You</h1>
                    {/* Cards */}
                    <div className="h-full w-full flex gap-6">
                        <card className="flex justify-center items-center gap-10 p-10 bg-[#FFFFFF] w-fit">
                            {/* image of card */}
                            <div className="">
                                <img className="min-w-[176px] h-[264px]" src={assets.richDad} alt={"richDad"} />
                            </div>
                            {/* content of card */}
                            <content className="flex flex-col gap-6 w-[353px]">
                                {/* title and author */}
                                <discription className="flex flex-col gap-2">
                                    <info className="flex flex-col gap-1">
                                        <h1 className="font-bold text-[18px] leading-[100%] text-[#222222]">Rich Dad Poor Dad</h1>
                                        <h3 className="text-[14px] leading-[100%] text-[#22222280]">Author: <span className="font-semibold text-[#222222]">Robert Kiyosaki</span></h3>
                                    </info>
                                    <paragraph>
                                        <p className="text-[14px] leading-[100%] text-[#22222280] text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius</p>
                                    </paragraph>
                                </discription>
                                {/* price and button */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">

                                    </div>
                                    <div className="flex gap-2.5">
                                        <button className={`flex gap-2.5 bg-mainColor border-2 border-mainColor rounded-md px-2.5 py-2 font-semibold text-[16px] leading-[100%] text-[#FFFFFF]`}>
                                            Add To Cart
                                            <img src={assets.shoppingCart} alt={"shoppingCart"} className="w-[20px] h-[20px]" />
                                        </button>
                                        <button className={`font-semibold text-[16px] leading-[100%] text-[#FFFFFF]`}>
                                            <img src={assets.heartCard} alt={"Heart of Card"} className="w-[20px] h-[20px]" />
                                        </button>
                                    </div>
                                </div>
                            </content>
                        </card>
                    </div>
                </div>
            </section>
        </>
    )
};