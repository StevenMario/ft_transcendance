import { Building2, Car, Home, TrendingUp, Heart, Laptop, GraduationCap, Briefcase } from "lucide-react";
import { NeomorphContainer } from "../Utils/GradientText";
function AccessService() {
  const services = [
    { icon: Building2, title: "Bâtiment et construction" },
    { icon: Car, title: "Mécanique et transport" },
    { icon: Home, title: "Accueil et entretien" },
    { icon: TrendingUp, title: "Finance et gestion" },
    { icon: Heart, title: "Santé et bien-être" },
    { icon: Laptop, title: "Technologie et numérique" },
    { icon: GraduationCap, title: "Éducation et formation" },
    { icon: Briefcase, title: "Commerce et services professionnels" },
  ];
  return (
    <section className="py-12 md:py-20">
      <div className="container md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <NeomorphContainer text="Decouvrez les services en ligne" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4 max-w-2xl mx-auto">
            Accédez à des milliers de services locaux
          </h2>
          <p className=" text-sm md:text-base max-w-2xl mx-auto">
           Trouvez rapidement des professionnels de confiance près de chez vous, comparez les offres et réservez en quelques clics, en toute simplicité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-xl  border border-[#e2e2e2] hover:border-[#E64A22] transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-3xl bg-orange-400/10 text-primary flex items-center justify-center mb-3 group-hover:border-amber-600 group-hover:text-primary-foreground transition-all duration-300">
                <service.icon size={20} className="md:w-6 md:h-6 text-[#E64A22]" />
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
