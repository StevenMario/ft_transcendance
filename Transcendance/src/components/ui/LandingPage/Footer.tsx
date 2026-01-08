import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-background border-t border-border">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg text-foreground">M'kandra</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting clients with the best local professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why us?</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Explore</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">How it works</a></li>
            </ul>
          </div>

          {/* Auth */}
          <div>
            <div className="flex flex-col gap-3">
              <Button variant="contained" className="w-full sm:w-auto">
                Login
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Sign Up</span>
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">→</span>
              </div>
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
