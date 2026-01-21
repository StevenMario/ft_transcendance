import { Building2, Car, Home, TrendingUp, Heart, Laptop, GraduationCap, Briefcase } from "lucide-react";
import { NeomorphContainer } from "../Utils/GradientText";
import secureShield from "../../../assets/icons/verified_shiled.svg";
import clock from "../../../assets/icons/clock.svg";
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

  const servicesPer = [
    {
      icone: secureShield,
      title: "Choisissez en toute confiance",
      description: "Consultez les profils détaillés, les avis et les notes laissés par d’autres clients.Vous prenez votre décision en vous basant sur des expériences réelles et vérifiées."
    },
    {
      icone: clock,
      title: "Suivi clair de vos demandes",
      description: "Retrouvez l’historique de vos demandes, vos conversations et vos prestations passées,pour une expérience simple et organisée."
    }

  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <NeomorphContainer text="Decouvrez les services en ligne" />

          <h2 className="text-[40px] md:text-[64px] font-bold text-foreground leading-tight mb-4  mx-auto">
            Vous cherchez un service ?
          </h2>
          <p className=" text-sm md:text-[16px]  mx-auto">
            Mikandra vous aide à trouver rapidement un prestataire fiable, adapté à votre besoin et proche de chez vous.,<br />
            Plus besoin de multiplier les appels ou les recommandations incertaines : tout est centralisé au même endroit.
          </p>
        </div>
        {/* per service */}
        <div className="flex flex-col md:flex-row px-20 mb-10 gap-5">
          {
            servicesPer.map((service, index) => (
              <div key={index} className="flex max-h-100 items-start flex-1 flex-col w-full gap-4 md:gap-6 justify-center">
                <div className="flex justify-start items-center gap-4">
                  <img
                    src={service.icone}
                    alt={service.title}
                    width={index === 0 ? 43.48 : 48.684}
                    height={index === 0 ? 53.648 : 48.813}
                  />
                  <h3 className="text-[24px] md:text-[27px] tracking-tight font-semibold text-left">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[16px]  text-left text-gray-500 max-w-md">
                  {service.description}
                </p>
              </div>
            ))
          }


        </div>
        <div>
         
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
