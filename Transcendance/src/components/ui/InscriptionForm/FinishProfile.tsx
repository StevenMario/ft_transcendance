import PrimaryButton from "../Button/PrimaryButton";

function FinishProfile() {
  return (
    <div className="w-full px-[20px]">

            <form
                className="flex flex-col w-full gap-4"
                action="">
                <div className="flex flex-col w-full gap-4">
                    <h1 className="text-[#333] tracking-[-0.32px]  text-[32px] font-bold leading-[130%]">
                        Complétez votre profil
                    </h1>
                  
                </div>
            <div className="mt-5 flex flex-row justify-center gap-4 ">
                <PrimaryButton name="Creer mon compte" path="/singup/finish-profile" />
            </div>
            </form>
            
        </div>
  )
}

export default FinishProfile;