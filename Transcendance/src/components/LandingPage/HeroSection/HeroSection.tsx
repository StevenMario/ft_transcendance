
function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 flex items-center h-200">
            <div>
                <h1 className="text-6xl font-bold leading-tight ">
                    Find solutions <br />
                    to your problem with <br />
                    <span className="
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-orange-400
                            via-pink-500
                            to-red-500"
                    >
                        M’kandra</span>
                </h1>
            </div>
            <img
                className=" hidden w-160 h-160 mt-5 align-middle lg:flex"
                src="/src/assets/hero_pic.svg" />
        </section>
    )
}

export default HeroSection;