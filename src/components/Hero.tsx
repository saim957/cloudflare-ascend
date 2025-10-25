import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,70,255,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 text-sm text-foreground">
            <Zap className="w-4 h-4" />
            <span>Premium Gaming Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">
              Power Your Game
            </span>
            <br />
            <span className="text-foreground border-b-4 border-foreground">With StrengthCloud</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience lightning-fast Minecraft hosting and powerful VPS solutions. 
            Built for gamers, optimized for performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 transition-all group shadow-xl hover:shadow-foreground/20"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground/20 hover:border-foreground hover:bg-foreground/10"
              >
                View Pricing
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">DDoS</div>
              <div className="text-sm text-muted-foreground">Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
