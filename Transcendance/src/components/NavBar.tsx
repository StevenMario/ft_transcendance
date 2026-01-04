import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar.tsx";

export default function NavBar() {
    return (
        <>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <img className="w-40" src={logo} alt="Logo" />
                <SearchBar></SearchBar>
            </nav>
        </>
    );
}