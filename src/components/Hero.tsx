import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Multi-color animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,5%)] via-[hsl(250,40%,10%)] to-[hsl(270,30%,8%)] animate-gradient-x" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.2),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.2),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Hero-specific snowfall */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(2px 2px at 15% 90%, white, transparent)
          `,
          backgroundSize: '200px 200px, 150px 150px, 180px 180px, 220px 220px, 160px 160px, 190px 190px, 210px 210px',
          animation: 'snowfall 20s linear infinite',
          opacity: 0.6
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 text-sm text-foreground">
            <Zap className="w-4 h-4" />
            <span>Premium Gaming Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            <span className="text-foreground">
              Power Your Game
            </span>
            <br />
            <span className="text-gradient animate-text-shimmer border-b-4 border-foreground">With StrengthCloud</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience lightning-fast Minecraft hosting and powerful VPS solutions. 
            Built for gamers, optimized for performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-110 animate-pulse-glow relative overflow-hidden"
              >
                <span className="absolute inset-0 animate-shimmer"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </a>
            <a href="#pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground/20 hover:border-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-105 hover-lift hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                View Pricing
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-text-shimmer">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-text-shimmer">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2 animate-bounce-in" style={{ animationDelay: '1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-text-shimmer">DDoS</div>
              <div className="text-sm text-muted-foreground">Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
