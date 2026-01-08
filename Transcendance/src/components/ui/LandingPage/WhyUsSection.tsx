import ShieldIcon from '@mui/icons-material/Shield';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BackupTableIcon from '@mui/icons-material/BackupTable';
function WhyUsSection() {
    const reasons = [
        {
            icon: ShieldIcon,
            title: "Difficulté pour les clients de trouver rapidement un professionnel fiable à proximité.",
            color: "bg-orange-500/10 text-orange-600",
        },
        {
            icon: VisibilityIcon,
            title: "Manque de visibilité et d'opportunités pour les prestataires locaux.",
            color: "bg-pink-500/10 text-pink-600",
        },
        {
            icon: BackupTableIcon,
            title: "Absence d'une plateforme unique regroupant l'ensemble des métiers et services.",
            color: "bg-orange-500/10 text-orange-600",
        },
    ];
    return (
        <section className="mt-20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Why chose us ?
                </h2>
                <p className="text-muted-foreground max-w-md text-sm md:text-base">
                    M'kandra, la plateforme qui relie vos besoins <br /> aux bons prestataires.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="group bg-amber-600/2 p-6 rounded-3xl bg-background border border-b border-gray-300 hover:border-amber-500 transition-all duration-300 hover:shadow-lg"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center mb-4`}>
                            <reason.icon sx={{ fontSize: 40 }} />
                        </div>
                        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
                            {reason.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyUsSection;

// import { Shield, Eye, Layout } from "lucide-react";

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: Shield,
//       title: "Difficulté pour les clients de trouver rapidement un professionnel fiable à proximité.",
//       color: "bg-primary/10 text-primary",
//     },
//     {
//       icon: Eye,
//       title: "Manque de visibilité et d'opportunités pour les prestataires locaux.",
//       color: "bg-secondary/10 text-secondary",
//     },
//     {
//       icon: Layout,
//       title: "Absence d'une plateforme unique regroupant l'ensemble des métiers et services.",
//       color: "bg-accent text-accent-foreground",
//     },
//   ];

//   return (
//     <section className="py-12 md:py-20 bg-background">
//       <div className="container">
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
//             Why chose us ?
//           </h2>
//           <p className="text-muted-foreground max-w-md text-sm md:text-base">
//             M'kandra, la plateforme qui relie vos besoins aux bons prestataires.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="group p-6 rounded-2xl bg-gradient-to-b from-background to-accent/30 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center mb-4`}>
//                 <reason.icon size={24} />
//               </div>
//               <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
//                 {reason.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
