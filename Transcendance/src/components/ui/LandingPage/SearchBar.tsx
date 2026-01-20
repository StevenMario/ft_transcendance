import { Search } from "lucide-react";
import { Button } from '@mui/material'


export default function SearchBar() {
    return (
        <>
          {/* Search Bar */}
          <div className="md:w-177.25 md:h-[60px] mx-auto">
          <div className="flex items-center md:gap-70 pt-2 pr-2 pb-2 pl-6.5 rounded-full shadow-lg border border-amber-600 overflow-hidden">
            <input
              type="text"
              placeholder="Rechercher des prestataires"
              className="flex-1 text-sm md:text-sm   focus:outline-none "
            />
            <Button sx={{
              background: 'linear-gradient(90deg, #E64A22 0%, #F39C12 70%, #F1C40F 100%)',
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
        </>
    );
}