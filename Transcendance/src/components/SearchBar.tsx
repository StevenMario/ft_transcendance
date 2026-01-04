import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <form className="relative w-80">   
            <label className="block mb-2.5 text-sm font-medium text-heading sr-only">
                Search
            </label>
            <div className="relative">
                <input 
                    type="search" 
                    id="search" 
                    className="w-full py-3 pl-4 pr-12 text-white bg-red-400 rounded-full placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50" 
                    placeholder="Recherche des services"  
                />
                <button 
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2"
                >
                    <SearchIcon style={{ color: '#ffff' }} />
                </button>
            </div>
        </form>
    );
}