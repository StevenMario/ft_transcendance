import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

function CompleteProfile() {
    const completeProfile = [
        {
            label: "Nom *",
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Votre nom"
        },
        {
            label: "Prenom *",
            type: "text",
            id: "prenom",
            name: "prenom",
            placeholder: "Votre prénom"
        },
        {
            label: "Telephone *",
            type: "text",
            id: "telephone",
            name: "telephone",
            placeholder: "+261"
        }
        , {
            label: "Adresse *",
            type: "text",
            id: "adresse",
            name: "adresse",
            placeholder: "Votre adresse"
        }
    ]
    return (
        <div className="w-full px-[20px]">

            <form
                className="flex flex-col w-full gap-4"
                action="">
                <div className="flex flex-col w-full gap-4">
                    <h1 className="text-[#333] tracking-[-0.32px]  text-[24px] md:text-[32px] font-bold leading-[130%]">
                        Complétez votre profil
                    </h1>
                    {
                        completeProfile.map((input, index) => (
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
            <div className="mt-5 flex flex-row justify-center gap-4 ">
                <SecondaryButton name="Retour" />
                <PrimaryButton name="Suivant" path="/singup/finish-profile" />
            </div>
            </form>
            
        </div>
    );
}


export default CompleteProfile; 