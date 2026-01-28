import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import SecondaryButton from "../Button/SecondaryButton";
import PrimaryButton from "../Button/PrimaryButton";

function RoleChoice() {
  return (
    <div>
      <h1 className=" font-semibold leading-normal tracking-[-0.32px] text-[32px] text-[#333] ">
        Quel est votre rôle ?
      </h1>
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Client" />
          <FormControlLabel control={<Checkbox />} label="Prestataire" />
          <FormControlLabel control={<Checkbox />} label="Entreprise" />
        </FormGroup>
        <div className="mt-3 flex flex-row justify-center gap-4">
          <SecondaryButton name="Retour" />
          <PrimaryButton name="Suivant" path="/singup/complete-profile" />
        </div>
      </div>
    </div>
  );
}

export default RoleChoice;