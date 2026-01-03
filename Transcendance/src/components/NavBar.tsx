import logo from "../assets/logo.svg";

export default function NavBar() {
    return (
        <>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <img src={logo} alt="Logo" />
            </nav>
        </>
    );
}