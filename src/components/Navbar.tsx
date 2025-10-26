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
            <span className="text-xl font-bold text-foreground">
              StrengthCloud
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://gp.strengthcloud.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-glow group px-3 py-2"
            >
              <span className="relative z-10">Panel</span>
              <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded transition-all duration-300"></span>
            </a>
            <a 
              href="https://status.strengthcloud.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-glow group px-3 py-2"
            >
              <span className="relative z-10">Status</span>
              <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded transition-all duration-300"></span>
            </a>
            <a 
              href="https://discord.gg/HPRE6yNMEp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-glow group px-3 py-2"
            >
              <span className="relative z-10">Discord</span>
              <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 rounded transition-all duration-300"></span>
            </a>
            <Link to="/auth">
              <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover-lift">
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
