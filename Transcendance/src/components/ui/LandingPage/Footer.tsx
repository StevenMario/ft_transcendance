import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@mui/material";
import logo from "../../../assets/logo.svg";
import SingUpButton from "../NavBar/SingUpButton";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-background border-t border-border">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img className="w-30" src={logo} alt="Logo" />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Connecting clients with the best local professionals.
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
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Why us?</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Explore</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-amber-500 transition-colors">How it works</a></li>
            </ul>
          </div>

          {/* Auth */}
          <div>
            <div className="flex flex-col gap-3">
              <Button variant="contained"
                sx={{
                  px: 4,
                  py: 1,
                  borderRadius: '1.5rem',
                  color: 'white',
                  background: 'linear-gradient(135deg, rgba(255,149,0,1), rgba(255,77,166,1))',
                  transition: 'background 300ms ease, transform 300ms ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}>
                Login
              </Button>
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
