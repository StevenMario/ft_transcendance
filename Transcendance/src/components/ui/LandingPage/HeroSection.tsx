import { Button } from '@mui/material'
import SearchBar from './SearchBar';


const HeroSection = () => {
  const tags = ["Electrician", "Service", "Innovation", "Jobs", "UX / UI Designer"];
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
    <section className=" pt-32 pb-20 md:pt-25 md:pb-30">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-700 mb-6 px-4 py-2 shadow-inner shadow-slate-200 rounded-3xl border-[1.5px] border-white">
          <span className="bg-linear-to-r from-[#EF485B] via-[#F39C12] to-[#F1C40F] text-transparent bg-clip-text">Register . Local . Fiable</span>
        </div>

        {/* Title */}
        <h1 className="text-[40px]
          md:text-[64px]
          font-bold
          text-center
          leading-tight
          tracking-[-2.56px]
          max-w-4xl
          mx-auto
          mb-6">
          Trouvez le bon professionnel
          <span> au bon endroit, au bon moment</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-md mb-10 max-w-xl mx-auto">
          Trouvez, contactez et collaborez avec les meilleurs prestataires, en quelques clics.
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 justify-center items-center mb-10 max-w-4xl mx-auto'>
          {tags.map((tag) => {
            return (
              <Button
                key={tag}
                sx={tagButtonStyle}
                variant="outlined"
              >{tag}</Button>
            );
          })}
        </div>

          {/*Search Bar */}
          <SearchBar></SearchBar>
      </div>
    </section>
  );
};

export default HeroSection;
