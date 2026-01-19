import { useState } from 'react';
import search from "../../../assets/search.svg";
import business_message from "../../../assets/business_messages.svg";
import secutity from "../../../assets/security.svg";

export default function SolutionSection() {
    const [activeCard, setActiveCard] = useState(0);
    
    const features = [
        {
            icon: search,
            title: "Recherche intelligente et locale",
            description: "Filtrez par métier, localisation et disponibilité, et accédez aux prestataires réellement proches de vous, sans perdre de temps.",
            gradient: "card-pink-gradient",
            highlighted: true,
        },
        {
            icon: business_message,
            title: "Contact direct et instantané",
            description: "Discutez directement avec les prestataires via une messagerie intégrée, sans intermédiaire.",
            gradient: "bg-muted",
            highlighted: false,
        },
        {
            icon: secutity,
            title: "Sécurité et simplicité",
            description: "Mikandra privilégie une expérience fluide, accessible sur mobile et ordinateur, sans complexité inutile.",
            gradient: "bg-muted",
            highlighted: false,
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
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                        Mikandra est une plateforme pensée pour simplifier la recherche de services, valoriser les talents locaux et instaurer une relation de confiance entre tous les utilisateurs.
                    </p>
                </div>

                {/* Features Grid - Aligned Interactive Cards */}
                <div className="flex gap-6 items-stretch">
                    {features.map((feature, index) => {
                        const isActive = activeCard === index;
                        
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveCard(index)}
                                className={`
                                    relative rounded-2xl cursor-pointer h-72
                                    transition-all duration-500 ease-out
                                    ${isActive 
                                        ? 'flex-1 shadow-2xl' 
                                        : 'shrink-0 w-48 shadow-lg hover:shadow-xl'
                                    }
                                    ${feature.highlighted && isActive 
                                        ? feature.gradient 
                                        : isActive 
                                            ? 'bg-card ' 
                                            : 'bg-background hover:bg-card/30'
                                    }
                                `}
                            >
                                {/* Inner padding container */}
                                <div className={`
                                    h-full flex flex-col transition-all duration-500
                                    ${isActive ? 'p-8' : 'p-6 items-center mt-'}
                                `}>
                                    {/* Icon Container */}
                                    <div className={`
                                        mb-4 transition-all duration-500 inline-block
                                        ${isActive ? 'w-16 h-16' : 'w-12 h-12'}
                                    `}>
                                        <img 
                                            src={feature.icon} 
                                            alt={feature.title} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`
                                        font-semibold mb-3
                                        transition-all duration-500
                                        ${isActive ? 'text-lg md:text-xl' : 'text-base md:text-lg'}
                                    `}>
                                        {feature.title}
                                    </h3>

                                    {/* Description - Smooth Height Animation */}
                                    <div className={`
                                        flex-1 overflow-hidden transition-all duration-500
                                        ${isActive 
                                            ? 'opacity-100 visible' 
                                            : 'opacity-0 invisible'
                                        }
                                    `}>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <div className={`
                                            absolute bottom-0 left-0 h-1 bg-gradient-to-r from-coral to-coral-light rounded-b-2xl
                                            transition-all duration-500
                                            w-full
                                        `} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}