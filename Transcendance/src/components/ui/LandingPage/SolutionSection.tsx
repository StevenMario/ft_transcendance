import search from "../../../assets/search.svg";
import business_message from "../../../assets/business_messages.svg";
import secutity from "../../../assets/security.svg";

export default function SolutionSection() {
    
    const features = [
        {
            icon: search,
            title: "Recherche intelligente et locale",
            description: "Filtrez par métier, localisation et disponibilité, et accédez aux prestataires réellement proches de vous, sans perdre de temps.",
        },
        {
            icon: business_message,
            title: "Contact direct et instantané",
            description: "Discutez directement avec les prestataires via une messagerie intégrée, sans intermédiaire.",
        },
        {
            icon: secutity,
            title: "Sécurité et simplicité",
            description: "Mikandra privilégie une expérience fluide, accessible sur mobile et ordinateur, sans complexité inutile.",
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4 max-w-2xl mx-auto">
                        Une solution simple pour connecter les bons services aux bons besoins
                    </h2>
                    <p className=" text-sm md:text-base max-w-2xl mx-auto">
                        Mikandra est une plateforme pensée pour simplifier la recherche de services, valoriser les talents locaux et instaurer une relation de confiance entre tous les utilisateurs.
                    </p>
                </div>

                {/* Features Grid - Simple Cards */}
                <div className="flex justify-center flex-wrap gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-2xl max-h-100 p-8 flex flex-col shadow-xl shadow-[#e2e2e2] border-[0.5px] border-[#e2e2e299] w-full md:w-87.5 "
                        >
                            {/* Icon Container */}
                            <div className="mb-4">
                                <img 
                                    src={feature.icon} 
                                    alt={feature.title}
                                    width={index === 2 ? 32 : 40}
                                    height={index === 2 ? 32 : 40}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-lg md:text-xl mb-4">
                                {feature.title}
                            </h3>

                            <hr className="mb-4 w-11.25 h-0.5" />

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}