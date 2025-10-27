import { Card } from "@/components/ui/card";
import { Server, Cpu, Shield, Zap, HardDrive, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Minecraft Hosting",
      description: "Optimized servers for vanilla, modded, and plugin-based Minecraft experiences with instant setup.",
    },
    {
      icon: Cpu,
      title: "VPS Hosting",
      description: "Full root access, high-performance processors, and flexible configurations for any project.",
    },
  ];

  const features = [
    { icon: Shield, title: "DDoS Protection", description: "Enterprise-grade protection" },
    { icon: Zap, title: "NVMe Storage", description: "Lightning-fast SSDs" },
    { icon: HardDrive, title: "Auto Backups", description: "Never lose your data" },
    { icon: Globe, title: "Global Network", description: "Low latency worldwide" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      {/* Floating colored orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient animate-text-shimmer border-b-4 border-foreground">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Choose the perfect hosting solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-2 border-border hover:border-primary transition-all duration-500 hover:scale-105 group animate-scale-in hover-lift hover-tilt cursor-pointer hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-3 mb-6 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 animate-float">
                <service.icon className="w-full h-full text-background" />
              </div>
              
              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 group-hover:w-full transition-all duration-500" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
              <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-all duration-300">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-3 p-6 rounded-lg bg-muted/30 hover:bg-foreground/5 border border-border hover:border-foreground/20 transition-all duration-300 animate-fade-up hover-lift hover-tilt hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/10 p-2 mx-auto border border-foreground/20 hover:scale-125 hover:rotate-12 transition-all duration-300 animate-pulse-glow">
                <feature.icon className="w-full h-full text-foreground" />
              </div>
              <h4 className="font-semibold hover:text-gradient transition-all">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
