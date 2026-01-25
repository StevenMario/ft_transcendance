import NavBar from "../NavBar/NavBar";
import PrimaryButton from "../NavBar/PrimaryButton";
import LogoRedBlur from "../../../assets/Logo_red_blur.svg";
import LogoYellowBlur from "../../../assets/Logo_yello_blur.svg";
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
        <section className="relative min-h-screen overflow-hidden px-[20px]">
            {/* Logo Red Blur - Bottom Left */}
            <img
                src={LogoRedBlur}
                alt="Logo Red Blur"
                className="absolute bottom-0 left-0 pointer-events-none lg:w-auto lg:h-auto w-1/3 h-1/3 -z-10"
            />
            {/* Logo Yellow Blur - Top Right */}
            <img
                src={LogoYellowBlur}
                alt="Logo Yellow Blur"
                className="absolute top-0 right-0 pointer-events-none lg:w-auto lg:h-auto w-1/3 h-1/3 -z-10"
            />
            {/* Content */}
            <div className="relative z-10">
                <NavBar hide={true} />
            <div className="flex justify-center items-center h-screen -mt-20">
                <div className="
                    flex 
                    flex-col 
                    rounded-2xl
                    shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)]
                  bg-[rgba(230,74,34,0.10)] 
                    border
                  border-[#E64A22]
                    justify-center 
                    items-center 
                    w-[478px] 
                    px-5.5 py-8
                    backdrop-blur-[250px]">
                    <form
                        className="flex flex-col w-full h-full gap-4 "
                        action="">
                        <div className="flex flex-col w-full h-full gap-4">
                            {
                                inscrpitionForm.map((input, index) => (
                                    <div className="flex flex-col gap-2" key={index}>
                                        <label
                                            className="text-[20px] self-stretch tracking-[0px] text-[#333] not-italic font-bold leading-[160%]"
                                            htmlFor={input.id}>{input.label}
                                        </label>
                                        <input
                                            className="focus:border-[#e54922be] placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl bg-[rgba(13,12,12,0.05)] border border-[rgba(255,255,255,0)]  py-2 px-3 h-10"
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
                            style={{ fontSize: '20px' }}>

                            <PrimaryButton px="40px" fontSize="20px" classButton=" px-6" name="Accepter et s’inscrire" />
                        </div>
                    </form>
                </div>

            </div>
            </div>
        </section>
    )
}