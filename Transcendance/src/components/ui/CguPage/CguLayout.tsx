import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function CguLayout() {
  return (
    <section className="relative h-max overflow-hidden container mx-auto py-20">
      <Link to="/" className="flex gap-x-2 justify-left items-end text-sm w-max">
        <ArrowLeft size={18} />
        Accueil
      </Link>
    </section>
  );
}

export default CguLayout;