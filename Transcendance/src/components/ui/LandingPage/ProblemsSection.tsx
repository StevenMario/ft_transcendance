import Danger from "../../../assets/icons/Danger.svg";
import Eyes from "../../../assets/icons/eys.svg";
import Find from "../../../assets/icons/find.svg";



const problems = [
  {
    icon: Find,
    title: "Trop de recherches inutiles",
    description: "Difficulté à trouver, perte de temps",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Danger,
    title: "Peu de contacts fiables",
    description: "Manque de confiance",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Eyes,
    title: "Manque de visibilité pour les talents locaux",
    description: "Difficulté à trouver, perte de temps",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-[#E64A22] font-medium mb-4">
            Mikandra simplifie la mise en relation.
          </p>
          <h2 className="text-2xl md:text-[48px] font-bold text-foreground leading-tight mx-auto">
            Trouver un professionnel ne<br />devrait pas être compliqué.
          </h2>
          <p></p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col justify-baseline items-center text-center"
            >
              <div className={`rounded-2xl ${problem.bgColor} flex items-center justify-center mb-5`}>
                <img
                  src={problem.icon}
                  alt={problem.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className=" 
                text-base
                md:text-[24px]
                font-semibold
                text-foreground
                mb-2
                tracking-tight">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-700">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
