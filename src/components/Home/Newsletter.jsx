export default function Newsletter() {
    return (
        <section className="bg-mainWhite py-16 px-5 md:py-24 border-t border-gray-100">
            <div className="container max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">Our Mission</h1>
                    <p className="text-base text-gray-500 leading-relaxed font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Donec non cursus mi. Vivamus scelerisque neque vel nulla imperdiet, eget ullamcorper dolor iaculis.
                    </p>
                    <p className="text-base text-gray-500 leading-relaxed font-medium">
                        Donec tincidunt nulla eget eros elementum tempor. Vivamus eu urna leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>

                <div className="flex flex-col gap-8 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
                        <p className="text-sm font-medium text-gray-500">We&apos;d love to hear from you. Drop us a line below.</p>
                    </div>

                    <form className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-mainColor focus:bg-white transition-all text-gray-800" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-mainColor focus:bg-white transition-all text-gray-800" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                            <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-mainColor focus:bg-white transition-all resize-none text-gray-800"></textarea>
                        </div>
                        <button type="button" className="w-full mt-2 py-4 bg-mainColor text-white font-bold rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 text-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
