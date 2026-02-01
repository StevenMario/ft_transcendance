import PrimaryButton from "../Button/PrimaryButton";
import Image from "../../../assets/Image.svg"
function FinishProfile() {
    return (
        <div className="w-full    p-4 ">
            <h1 className="text-[#333] mb-7 tracking-[-0.32px]  text-[24px] md:text-[32px] font-bold leading-[130%]">
                Complétez votre profil
            </h1>

            {/* Photo de profil */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                    Photo de profil
                </label>

                <div
                    className="mx-auto w-40 h-40 rounded-full border-2 border-orange-400 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition relative overflow-hidden"
                >
                    <div className="flex flex-col items-center">
                        <img src={Image} className="w-6 h-6" />
                        <span className="text-sm text-gray-400 mt-2">
                            Choisir
                        </span>
                    </div>

                </div>

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </div>

            {/* Bio */}
            <div className="mb-8">
                <label className="block text-sm font-medium mb-2">
                    Bio
                </label>

                <textarea
                    placeholder="Ajouter un bio..."
                    className="w-full h-28 resize-none rounded-xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mt-5 flex flex-row justify-center gap-4 ">
                <PrimaryButton name="Creer mon compte" path="" />
            </div>
        </div>
    )
}

export default FinishProfile;