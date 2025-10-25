import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="StrengthCloud" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              StrengthCloud
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://gp.strengthcloud.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Panel
            </a>
            <a 
              href="https://discord.gg/HPRE6yNMEp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discord
            </a>
            <Link to="/auth">
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
