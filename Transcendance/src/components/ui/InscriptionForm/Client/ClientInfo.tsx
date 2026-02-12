import { useNavigate } from "react-router";
import PrimaryButton from "../../Button/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton";
function ClientInfo() {

  const navigate = useNavigate();
  const clientInfo = [
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
    },
    {
      label: "Adresse *",
      type: "text",
      id: "adresse",
      name: "adresse",
      placeholder: "Votre adresse"
    },
    
  ]
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Handle form submission logic here
    navigate('/signup/finish-profile');
  }
  return (
    <div className="w-full px-[40px]">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-4"
        action="">
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-[#333] tracking-[-0.32px]  text-[24px] md:text-[32px] font-bold leading-[130%]">
            Complétez votre profil
          </h1>
          {
            clientInfo.map((input, index) => (
              <div className="flex flex-col w-full gap-2" key={index}>
                <label
                  className="self-stretch tracking-[0px] text-[#333] not-italic leading-[160%] pt-2.5"
                  htmlFor={input.id}>{input.label}
                </label>
                <input
                  className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl border border-[#e2e2e2] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
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
          <PrimaryButton name="Suivant" />
        </div>
      </form>

    </div>
  )
}

export default ClientInfo;