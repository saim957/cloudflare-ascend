import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b overflow-hidden group/nav">
      {/* Multi-color animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-card to-background animate-gradient-x opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 border-b border-primary/20" />
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group hover-lift">
            <img src={logo} alt="StrengthCloud" className="h-10 w-10 rounded-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-gradient animate-text-shimmer">
              StrengthCloud
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://gp.strengthcloud.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 group px-4 py-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg transition-all duration-300"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px rgba(147,51,234,0.5)' }}></span>
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">Panel</span>
            </a>
            <a 
              href="https://status.strengthcloud.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 group px-4 py-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-lg transition-all duration-300"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px rgba(6,182,212,0.5)' }}></span>
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">Status</span>
            </a>
            <a 
              href="https://discord.gg/HPRE6yNMEp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 group px-4 py-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-lg transition-all duration-300"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px rgba(236,72,153,0.5)' }}></span>
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">Discord</span>
            </a>
            <Link to="/auth">
              <Button 
                variant="outline" 
                className="relative overflow-hidden border-2 border-primary/30 hover:border-primary bg-background/50 transition-all duration-500 hover:scale-110 group animate-pulse-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-x"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10 font-semibold text-gradient">Login</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
