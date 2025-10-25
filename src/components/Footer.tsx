import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="StrengthCloud" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold text-foreground">
                StrengthCloud
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium game hosting and VPS solutions for the next generation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">VPS Hosting</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="https://gp.strengthcloud.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Panel</a></li>
              <li><a href="https://status.strengthcloud.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Status</a></li>
              <li><Link to="/auth" className="hover:text-foreground transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StrengthCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
