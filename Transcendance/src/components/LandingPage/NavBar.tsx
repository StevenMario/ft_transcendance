import logo from "../../assets/logo.svg";
import SearchBar from "./SearchBar.tsx";
import { Button } from '@mui/material'
import LoginButton from './LoginButton.tsx'
import SingInButton from "./SingInButton.tsx";
export default function NavBar() {
    return (
        <>
            {/* Responsive lg */}
            <nav className=" hidden max-w-7xl mx-auto px-4 py-4 lg:flex items-center justify-between">
                <img className="w-20 sm:w-25 md:w-30" src={logo} alt="Logo" />
                <SearchBar classValue="relative w-75"></SearchBar>
                <Button color="inherit">
                    Why us ?
                </Button>
                <Button color="inherit">
                    Explore
                </Button>
                <Button color="inherit">
                    Services
                </Button>
                <SingInButton />
                <LoginButton />
            </nav>
            {/* Responsive md */}
            {/* <nav className=" hidden max-w-7xl mx-auto px-4 py-4 md:flex lg:hidden items-center justify-between">
                <img className="w-20 sm:w-25 md:w-30" src={logo} alt="Logo" />
                <SearchBar classValue="relative w-40"></SearchBar>
                <Button color="inherit">
                    Why us ?
                </Button>
                <Button color="inherit">
                    Explore
                </Button>
                <Button color="inherit">
                    Services
                </Button>
                <SingInButton />
                <LoginButton />
            </nav> */}
        </>
    );
}