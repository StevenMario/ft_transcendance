const GetStartSection = () => {
    return (
        <section className="py-12 md:py-20 px-2 md:px-20">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-tr from-[#F0927A] via-[#F4C079] to-[#F0927A] p-8 md:p-12 lg:p-16 text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                            Prêt à commencer ?
                        </h2>
                        <p className="font-semibold text-sm md:text-base mb-8">
                            "Inscription gratuite. Utilisation rapide et facile."
                        </p>
                        <button className="bg-[#E64A22] text-white text-sm md:text-base font-semibold w-max px-6 py-3 rounded-full hover:bg-white hover:text-[#E64A22] transition-colors">
                          Commencer maintenant
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartSection;
