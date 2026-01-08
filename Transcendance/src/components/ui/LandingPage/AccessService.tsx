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
        <section className="py-12 md:py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12">
          Access thousands of local services
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-xl  border border-gray-300 hover:border-amber-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-3xl bg-orange-400/10 text-primary flex items-center justify-center mb-3 group-hover:border-amber-600 group-hover:text-primary-foreground transition-all duration-300">
                <service.icon size={20}  className="md:w-6 md:h-6 text-orange-700" />
              </div>
              <h3 className="text-xs md:text-sm font-medium text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>);
}

export default AccessService;
