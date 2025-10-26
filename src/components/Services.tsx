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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="border-b-4 border-foreground">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect hosting solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-2 border-border hover:border-foreground transition-all duration-500 hover:scale-105 group animate-scale-in hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-foreground p-3 mb-6 group-hover:shadow-xl group-hover:shadow-foreground/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="w-full h-full text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground transition-all duration-300">{service.title}</h3>
              <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-all duration-300">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-3 p-6 rounded-lg bg-muted/30 hover:bg-foreground/5 border border-border hover:border-foreground/20 transition-all duration-300 animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/10 p-2 mx-auto border border-foreground/20 hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-full h-full text-foreground" />
              </div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
