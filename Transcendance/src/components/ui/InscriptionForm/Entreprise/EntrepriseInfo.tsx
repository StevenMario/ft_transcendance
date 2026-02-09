import { useNavigate } from "react-router";
import PrimaryButton from "../../Button/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton";

function EntrepriseInfo() {
  const navigate = useNavigate();
  const entrepriseInfo = [
        {
            label: "Nom de votre entreprise *",
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Le nom de votre entreprise"
        },
        {
            label: "Telephone *",
            type: "text",
            id: "telephone",
            name: "telephone",
            placeholder: "+261"
        },
        {
            label: "Adresse *",
            type: "text",
            id: "adresse",
            name: "adresse",
            placeholder: "Votre adresse"
        },
        {
            label: "Site web",
            type: "text",
            id: "site_web",
            name: "site_web",
            placeholder: "exemple.com"
        },
    ]
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        // Handle form submission logic here
        navigate('/signup/complete-profile/entreprise/extra');
    }
    return (
        <div className="w-full px-5">

            <form
             onSubmit={handleSubmit}
                className="flex flex-col w-full gap-4"
                action="">
                <div className="flex flex-col w-full gap-4">
                    <h1 className="text-[#333] tracking-[-0.32px]  text-[24px] md:text-[32px] font-bold leading-[130%]">
                        Complétez votre profil
                    </h1>
                    {
                        entrepriseInfo.map((input, index) => (
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
                <PrimaryButton name="Suivant"/>
            </div>
            </form>
            
        </div>
    )
}

export default EntrepriseInfo;