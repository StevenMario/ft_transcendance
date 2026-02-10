import SecondaryButton from "../Button/SecondaryButton";
import GoogleIcone from "../../../assets/icons/material-icon-theme_google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { passwordStrength } from "./PasswordUtils";
import { useForm, useWatch } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type InscriptionFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function InscriptionForm() {
  const { control, register, handleSubmit } = useForm<InscriptionFormInputs>();
  const password = useWatch({ control, name: "password", defaultValue: "" });
  const confirmPassword = useWatch({
    control,
    name: "confirmPassword",
    defaultValue: "",
  });
  const security = useMemo(() => {
    return passwordStrength(password);
  }, [password]);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InscriptionFormInputs> = (data) => {
    console.log({ form: data });
    for (const field in data) if (!field) return;
    navigate("/signup/role-choice");
    /* Fetch API stuff */
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full gap-4"
        action=""
      >
        <div className="flex flex-col w-full h-full gap-4">
          <h1 className="text-[#333] tracking-[-0.32px] text-[32px] font-bold leading-[130%]">
            Créer un compte
          </h1>
          {/* Email input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="self-stretch tracking-[0px] text-[#333] not-italic leading-[160%] pt-2.5"
            >
              Email *
            </label>
            <input
              {...register("email")}
              className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl border border-[#e2e2e2] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
              type="email"
              placeholder="exemple@gmail.com"
              required
            />
          </div>
          {/* Password input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="self-stretch tracking-[0px] text-[#333] not-italic leading-[160%] pt-2.5"
            >
              Mot de passe *
            </label>
            <input
              {...register("password")}
              className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl border border-[#e2e2e2] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
              type="password"
              placeholder="Votre mot de passe"
              required
            />
            {/* Check for password strength */}
            {password.length > 0 && (
              <p
                className={`text-sm font-semibold ${
                  security === "Faible"
                    ? "text-red-500"
                    : security === "Moyen"
                      ? "text-gray-500"
                      : "text-green-500"
                }`}
              >
                {security}
              </p>
            )}
          </div>
          {/* Confirm password input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="test"
              className="self-stretch tracking-[0px] text-[#333] not-italic leading-[160%] pt-2.5"
            >
              Confirmer le mot de passe *
            </label>
            <input
              {...register("confirmPassword")}
              className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl border border-[#e2e2e2] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
              type="password"
              placeholder="Confirmez votre mot de passe"
              required
            />
            {/* Check if passwords are identic */}
            {confirmPassword.length > 0 && confirmPassword !== password && (
              <small className="text-red-500">Mots de passe incoherents</small>
            )}
          </div>
        </div>
        <div
          className="mt-3.75 flex justify-center"
          style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
        >
          <button
            className="bg-gray-800 text-white text-base px-5 py-3 rounded-full"
            type="submit"
          >
            Suivant
          </button>
        </div>
      </form>
      <div className="flex flex-row w-full justify-center items-center mt-4 gap-2">
        <hr className="flex-1 h-px text-transparent bg-[#999]" />
        <p className="text-xs sm:text-sm text-gray-600">ou</p>
        <hr className="flex-1 h-px text-transparent bg-[#999]" />
      </div>
      <div className="mt-4 w-full flex justify-center">
        <SecondaryButton
          name="Continuer avec Google"
          endIcon={<img src={GoogleIcone} alt="Google icon" />}
        />
      </div>
      <div className="mt-3">
        {/* <small className="text-[8px] sm:text-xs md:text-[12px] justify-center text-center leading-[150%]">
          En cliquant sur "suivant", vous acceptez les <br />
          <span className="text-[#E64A22]"> Conditions d'utilisation</span>
          , la <span className="text-[#E64A22]">Politique de confidentialité </span><br />
          et la <span className="text-[#E64A22]">Politique relative aux cookies</span> de Mikandra.
        </small> */}
        <div className="text-[8px] sm:text-xs md:text-[12px] flex flex-wrap gap-5 justify-center text-center leading-[150%]">
          <Link className="text-[#E64A22]" to="/cgu">
            Conditions d'utilisation
          </Link>
          <Link className="text-[#E64A22]" to="/policy">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  );
}
