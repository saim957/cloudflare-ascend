import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-xl overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 animate-slide-in-left">
            <div className="flex items-center gap-2 group">
              <img src={logo} alt="StrengthCloud" className="h-8 w-8 rounded-lg group-hover:rotate-12 transition-transform duration-500 hover-lift" />
              <span className="text-lg font-bold text-gradient animate-text-shimmer">
                StrengthCloud
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium game hosting and VPS solutions for the next generation.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-gradient">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-primary">Minecraft Hosting</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-primary">VPS Hosting</a></li>
              <li><a href="#pricing" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-primary">Pricing</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-gradient">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-accent">Discord</a></li>
              <li><a href="https://gp.strengthcloud.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-primary">Panel</a></li>
              <li><a href="https://status.strengthcloud.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-secondary">Status</a></li>
              <li><Link to="/auth" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300 hover:text-primary">Login</Link></li>
            </ul>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4 text-gradient">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="hover:text-foreground transition-colors duration-300">&copy; {new Date().getFullYear()} StrengthCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
