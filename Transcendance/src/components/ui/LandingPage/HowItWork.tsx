import { Button } from "@mui/material";
import { Search, MessageCircle, CheckCircle} from "lucide-react";
// import { Button } from "./ui/button";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: "Search for a service",
            color: "bg-gradient-to-tl from-orange-400 to-pink-400",
        },
        {
            icon: MessageCircle,
            title: "Contact the right service provider",
            color: "bg-gradient-to-tl from-pink-400 to-orange-400",
        },
        {
            icon: CheckCircle,
            title: "Conduct and evaluate",
            color: "bg-gradient-to-tl from-orange-400 to-pink-400",
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-10 right-0 w-32 h-32 md:w-48 md:h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
                    <path
                        d="M50 0 L100 50 L50 100 L0 50 Z"
                        fill="currentColor"
                        opacity="0.2"
                    />
                </svg>
            </div>

            <div className="container relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12">
                    How it work?
                </h2>

                <div className="mb-8">
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                        Find, contact and collaborate with the right professional with ease.
                    </p>
                    <Button
                        sx={
                            {
                                borderRadius: '1.5rem',
                                border: '2px solid',
                                borderColor: 'grey.400',
                                color: 'black',

                                transition: 'all 250ms ease',

                                '&:hover': {
                                    borderColor: 'warning.main',
                                    backgroundColor: 'rgba(255, 165, 0, 0.08)',
                                },

                                '&:focus-visible': {
                                    borderColor: 'warning.main',
                                    boxShadow: '0 0 0 4px rgba(255, 165, 0, 0.35)',
                                    transform: 'scale(1.05)',
                                }
                            }}
                        className="rounded-3xl"
                        variant="outlined"
                        startIcon={
                            <PlayArrowIcon sx={{color:'orange'}}  />
                        }>
                        Service
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative p-6 md:p-8 rounded-2xl ${step.color} text-primary-foreground overflow-hidden group hover:scale-95 transition-transform duration-300`}
                        >
                            {/* Icon background */}
                            <div className="absolute top-4 right-4 opacity-20">
                                <step.icon size={60} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center mb-4">
                                    <step.icon size={24} className="md:w-6 md:h-6 text-amber-50" />
                                </div>
                                <h3 className="font-semibold text-base text-amber-50 md:text-lg">
                                    {step.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
