import { Search } from "lucide-react";
import { Button } from '@mui/material'


const HeroSection = () => {
  return (
    <section className=" pt-32 pb-20 md:pt-25 md:pb-30">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-red-700 mb-6">
          <span className="text-red-500">Register</span>
          <span className="text-gray-500">•</span>
          <span className="text-amber-400">Local</span>
          <span className="text-gray-500">•</span>
          <span className="text-red-500">Freelance</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text- leading-tight mb-6 max-w-4xl mx-auto">
          Trouvez le bon professionnel,au bon endroit, au bon moment
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Trouvez, contactez et collaborez avec les meilleurs prestataires, en quelques clics.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center  rounded-full shadow-lg border border-amber-600 overflow-hidden">
            <input
              type="text"
              placeholder="Rechercher des prestataires"
              className="flex-1 px-6 py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none bg-transparent"
            />
            <Button sx={{
              backgroundColor: '#FF6F61',
              color: '#FFFFFF',
              borderRadius: '9999px',
              margin: '6px',
              padding: '12px 24px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '&:hover': {
                backgroundColor: '#FF8A80',
              },
            }}>
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Rechercher</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
