import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    classValue?: string; // facultatif
}

export default function SearchBar() {
    return (
        <form className="w-100">   
            
            <div className="relative">
                <input 
                    type="search" 
                    id="search" 
                    className="w-full h-15 py-3 pl-4 pr-12 text-white bg-gray-400 rounded-3xl placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50" 
                    placeholder="Find Solution of your probleme"  
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