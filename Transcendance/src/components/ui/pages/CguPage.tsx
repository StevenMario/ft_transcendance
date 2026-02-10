import { ArrowLeft, ArrowRight } from "lucide-react";
import { CGUS } from "../../../utils/constants";
import { Link, useNavigate } from "react-router";

export const CguSectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <h1 className={`font-medium text-lg ${className}`}>{children}</h1>;
};

export const CguListItem = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <p className={`text-base text-left ${className}`}>- {children}</p>;
};

function CguPage() {
  const navigate = useNavigate();

  return (
    <section className="relative h-max overflow-hidden container mx-auto py-20 text-[#444]">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full mb-10">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-x-2 justify-left items-center cursor-pointer text-sm text-[#E64A22] hover:text-inherit transition-colors w-max"
        >
          <ArrowLeft size={18} />
          Retour
        </button>
        <Link
          className="flex gap-x-2 justify-left items-center cursor-pointer text-sm text-[#E64A22] hover:text-inherit transition-colors w-max"
          to="/policy"
        >
          Politique de Confidentialité
          <ArrowRight size={18} />
        </Link>
      </div>
      <h1 className="font-medium text-3xl mb-2">
        Conditions Générales d’Utilisation
      </h1>
      <p className="mb-5">
        <small>Date de dernière mise à jour: 10 février 2026</small>
        <br />
        <br />
        Bienvenue sur Mikandra. La présente plateforme met en relation des
        prestataires de services et des clients. En créant un compte, vous
        acceptez sans réserve les présentes conditions.
      </p>
      {CGUS.map(({ title, description, items }, index) => {
        return (
          <div key={Date.now() + index}>
            <CguSectionTitle className="mb-2">{title}</CguSectionTitle>
            <div className="mb-5">
              {description && (
                <>
                  {description}
                  <br />
                  <br />
                </>
              )}
              {items &&
                items.map((item, itemIndex) => {
                  return (
                    <CguListItem key={Date.now() + index + itemIndex}>
                      {item}
                    </CguListItem>
                  );
                })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CguPage;
