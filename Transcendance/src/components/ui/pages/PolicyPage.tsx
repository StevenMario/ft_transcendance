import { ArrowLeft, ArrowRight } from "lucide-react";
import { CguListItem, CguSectionTitle } from "./CguPage";
import { POLICY_AND_TERMS } from "../../../utils/constants";
import { Link, useNavigate } from "react-router";

function PolicyPage() {
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
          Conditions Générales d'utilisation
          <ArrowRight size={18} />
        </Link>
      </div>
      <h1 className="font-medium text-3xl mb-2">
        Politique de Confidentialité
      </h1>
      <p className="mb-5">
        <small>Dernière mise à jour : 10 février 2026</small>
        <br />
        <br />
        Chez Mikandra, nous attachons une grande importance à la protection de
        vos données personnelles. Cette politique détaille comment nous
        collectons, stockons et utilisons vos informations conformément à
        l'architecture de notre système.
      </p>
      {POLICY_AND_TERMS.map(({ title, description, items }, index) => {
        return (
          <div key={Date.now() + index}>
            <CguSectionTitle className="mb-2">{title}</CguSectionTitle>
            <div className="mb-5">
              {description && (
                <>
                  {description}
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

export default PolicyPage;
