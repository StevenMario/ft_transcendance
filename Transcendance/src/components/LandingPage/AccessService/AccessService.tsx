import { Building2, Car, Home, TrendingUp, Heart, Laptop, GraduationCap, Briefcase } from "lucide-react";
function AccessService() {
    const services = [
        { icon: Building2, title: "Building & Construction" },
        { icon: Car, title: "Mechanics & Transport" },
        { icon: Home, title: "Home & Maintenance" },
        { icon: TrendingUp, title: "Finance & Management" },
        { icon: Heart, title: "Health & Wellness" },
        { icon: Laptop, title: "Technology & Digital" },
        { icon: GraduationCap, title: "Education & Training" },
        { icon: Briefcase, title: "Trade & Professional Services" },
    ];
    return (
        <section className="mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Access thousands of local services
            </h2>
            
        </section>);
}

export default AccessService;
