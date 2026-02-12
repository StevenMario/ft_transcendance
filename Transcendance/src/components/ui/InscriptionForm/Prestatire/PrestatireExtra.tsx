import { Chip } from "@mui/material";
import SecondaryButton from "../../Button/SecondaryButton";
import PrimaryButton from "../../Button/PrimaryButton";
import { useState } from "react";

function PrestataireExtra()
{
    const [selected, setSelected] = useState<string | null>(null);
    const categories = [
        "Bâtiment et construction",
        "Finance et gestion",
        "Accueil et entretien",
        "Mécanique et transport",
        "Santé et bien-être",
        "Technologie et numérique",
        "Commerce et services professionnels",
        "Éducation et formation",
    ];

    return <div className="w-full px-[20px] py-[10px]">
        <h1 className="text-[#333] tracking-[-0.32px]  text-[24px] md:text-[32px] font-bold leading-[130%]">
           Ce que vous proposez en tant que prestataire
        </h1>
        <div className=" w-full mt-4 flex flex-row flex-wrap gap-3">
            {categories.map((category, index) => (
                <Chip
                    key={index}
                    label={category}
                    color="default"
                    variant={selected === category ? "filled" : "outlined"}
                    sx={{
                        color: "#555",
                        ...(selected === category ? {
                            backgroundColor: "#e5492e",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#e5492e"
                            }
                        } : {})
                    }}
                    onClick={() => setSelected(category)}
                />
            ))}
        </div>
        <div className="mt-5 flex flex-row justify-center gap-4 ">
            <SecondaryButton name="Retour" />
            <PrimaryButton name="Suivant" path="/signup/finish-profile" />
        </div>
    </div>
}
export default PrestataireExtra;
