import { Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "../../../assets/logo.svg";
import SingUpButton from "../Button/SingUpButton.tsx";
import PrimaryButton from "../Button/PrimaryButton.tsx";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-background border-border">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img className="w-30" src={logo} alt="Logo" />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Mettre en relation les clients avec les meilleurs professionnels locaux.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-pink-400/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-pink-400" />
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Accueil?</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Explorer</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">A propos</a></li>
              
            </ul>
          </div>

          {/* Auth */}
          <div>
            <div className="flex flex-col gap-3">
              <PrimaryButton name="Se connecter" />
              <SingUpButton />

            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            ©2025 M'kandra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
