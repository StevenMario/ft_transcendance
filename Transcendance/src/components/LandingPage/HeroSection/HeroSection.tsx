import { Button } from '@mui/material'
import SearchBarSecond from './SearchBarSecond.tsx';
function HeroSection() {
    const tags = [
        "Développeur",
        "Docteur",
        "Mecanicien",
        "Artiste",
        "UX / UI Designer",
        "Comptable"
    ];
    const tagButtonStyle = {
        borderColor: "#C1C1C1",
        color: "#444444",
        textTransform: "none",
        borderRadius: "30px",
        "&:hover": {
            borderColor: "#F6865F",
            color: "#F6865F"
        },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 flex  items-center h-150">
            <div className="flex flex-col gap-4">
                <h1 className="lg:text-6xl font-bold leading-tight text-4xl">
                    Find solutions <br />
                    to your problem with <br />
                    <span className="
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-orange-400
                            via-pink-500
                            to-red-500"
                    >
                        M’kandra</span>
                </h1>
                <div className='flex flex-wrap gap-2 h-20 items-center mt-3'>
                    {tags.map((tag, index) => {
                        return (
                            <Button
                                sx={tagButtonStyle}
                                variant="outlined"
                            >{tag}</Button>
                        );
                    })}
                </div>
                <SearchBarSecond
                />
            </div>
            <img
                className=" hidden w-160 h-160 mt-5 align-middle lg:flex"
                src="/src/assets/hero_pic.svg" />
        </section>
    )
}

export default HeroSection;