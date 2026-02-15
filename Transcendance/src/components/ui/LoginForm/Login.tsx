import SecondaryButton from "../Button/SecondaryButton";
import NavBar from "../NavBar/NavBar";
import GoogleIcone from "../../../assets/icons/material-icon-theme_google.svg";

function Login() {
    return (
        <section className="relative h-max  overflow-hidden px-5 Z ">
            {/* Content */}
            <NavBar hide={true} />
            <div className="relative md:-mt-7.5 ">
                <div className="flex justify-center items-center min-h-screen ">
                    <div className="
                            flex 
                            flex-col 
                            rounded-2xl
                            shadow-[0_12px_24px_0_rgba(0,0,0,0.10),0_0_10px_0_rgba(0,0,0,0.08)]
                            border
                            border-[#E5E5E5]
                            bg-[#F5F5F5]
                            justify-center 
                            items-center 
                            w-full
                            sm:w-[90%]
                            md:w-119.5
                            px-4
                            sm:px-5.5
                            py-6
                            sm:py-8
                            backdrop-blur-[250px]
                            max-w-119.5">
                        <div>
                            <form
                                className="flex flex-col px-4 w-full h-full gap-4"
                                action=""
                            >
                                <div className="flex flex-col w-full h-full gap-4">
                                    <h1 className="text-[#333] tracking-[-0.32px] text-[32px] font-bold leading-[130%]">
                                        Conexion à votre compte
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
                                            className="focus:border-[#e54922be] placeholder:text-[10px] sm:placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none rounded-xl border border-[#e2e2e2] py-2 px-3 h-9 sm:h-10 text-sm sm:text-base"
                                            type="password"
                                            placeholder="Votre mot de passe"
                                            required
                                        />

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;