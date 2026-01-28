import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import GoogleIcone from "../../../assets/icons/material-icon-theme_google.svg";
export default function InscriptionForm() {
    const inscrpitionForm = [
        {
            label: "Email",
            type: "email",
            id: "email",
            name: "email",
            placeholder: "exemple@email.com"
        },
        {
            label: "Mot de passe",
            type: "password",
            id: "password",
            name: "password",
            placeholder: "Votre mot de passe"
        },
        {
            label: "Confirmer le mot de passe",
            type: "password",
            id: "confirmPassword",
            name: "confirmPassword",
            placeholder: "Confirmez votre mot de passe"
        }
    ]
    return (
            <div>

                <form
                    className="flex flex-col w-full h-full gap-4"
                    action="">
                    <div className="flex flex-col w-full h-full gap-4">
                        <h1 className="text-[#333] tracking-[-0.32px]  text-[32px] font-bold leading-[130%]">
                            Créer un compte
                        </h1>
                        {
                            inscrpitionForm.map((input, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <label
                                        className="text-sm sm:text-base md:text-[20px] self-stretch tracking-[0px] text-[#333] not-italic font-bold leading-[160%]"
                                        htmlFor={input.id}>{input.label}
                                    </label>
                                    <input
                                        className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl bg-[rgba(13,12,12,0.05)] border border-[rgba(255,255,255,0)] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
                                        type={input.type}
                                        id={input.id}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-3.75 flex justify-center"
                        style={{ fontSize: 'clamp(14px, 2vw, 20px)' }}>

                        <PrimaryButton px="40px" fontSize="clamp(14px, 2vw, 20px)" classButton="px-4 sm:px-6" name="Accepter et s'inscrire" path="/singup/role-choice" />
                    </div>
                </form>
                <div className="flex flex-row w-full justify-center items-center mt-4 gap-2">
                    <hr className="flex-1 h-px text-transparent bg-[#999]" />
                    <p className="text-xs sm:text-sm text-gray-600">ou</p>
                    <hr className="flex-1 h-px text-transparent bg-[#999]" />
                </div>
                <div className="mt-4 w-full flex justify-center">
                    <SecondaryButton name="Continuer avec Google" endIcon={<img src={GoogleIcone} alt="Google icon" />} />
                </div>
                <div className="mt-3">
                    <p className="text-[10px] sm:text-xs md:text-[12px] justify-center text-center leading-[150%]">
                        En cliquant sur Continuer, vous acceptez les <br />
                        <span className="text-[#E64A22]"> Conditions d'utilisation</span>
                        , la <span className="text-[#E64A22]">Politique de confidentialité </span><br />
                        et la <span className="text-[#E64A22]">Politique relative aux cookies</span> de Mikandra.
                    </p>
                </div>

            </div>
    )
}