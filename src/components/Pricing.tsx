import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const minecraftPlans = [
    {
      name: "Starter",
      ram: "2GB",
      price: "₹400",
      features: [
        "2GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "24/7 Support",
      ],
    },
    {
      name: "Basic",
      ram: "4GB",
      price: "₹800",
      features: [
        "4GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "Priority Support",
        "Free Subdomain",
      ],
    },
    {
      name: "Pro",
      ram: "8GB",
      price: "₹1,600",
      features: [
        "8GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "Priority Support",
        "Free Subdomain",
        "Plugin Support",
      ],
      popular: true,
    },
    {
      name: "Advanced",
      ram: "16GB",
      price: "₹3,200",
      features: [
        "16GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "Priority Support",
        "Free Subdomain",
        "Full Mod Support",
      ],
    },
    {
      name: "Elite",
      ram: "32GB",
      price: "₹6,400",
      features: [
        "32GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Daily Backups",
        "Dedicated Support",
        "Free Subdomain",
        "Custom Configurations",
      ],
    },
    {
      name: "Ultimate",
      ram: "64GB",
      price: "₹12,800",
      features: [
        "64GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Hourly Backups",
        "VIP Support",
        "Free Domain",
        "White-label Options",
      ],
    },
  ];

  const vpsPlans = [
    {
      name: "Basic VPS",
      cpu: "2 Cores",
      ram: "4GB",
      storage: "50GB",
      price: "₹650",
      features: [
        "2 CPU Cores",
        "4GB RAM",
        "50GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Support",
      ],
    },
    {
      name: "Standard VPS",
      cpu: "4 Cores",
      ram: "8GB",
      storage: "100GB",
      price: "₹1,300",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "100GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "Priority Support",
      ],
    },
    {
      name: "Premium VPS",
      cpu: "6 Cores",
      ram: "16GB",
      storage: "200GB",
      price: "₹2,600",
      features: [
        "6 CPU Cores",
        "16GB RAM",
        "200GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "Priority Support",
        "Dedicated IP",
      ],
      popular: true,
    },
    {
      name: "Enterprise VPS",
      cpu: "8 Cores",
      ram: "32GB",
      storage: "400GB",
      price: "₹5,200",
      features: [
        "8 CPU Cores",
        "32GB RAM",
        "400GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "Dedicated Support",
        "Multiple IPs",
      ],
    },
    {
      name: "Ultimate VPS",
      cpu: "12 Cores",
      ram: "64GB",
      storage: "800GB",
      price: "₹10,400",
      features: [
        "12 CPU Cores",
        "64GB RAM",
        "800GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "VIP Support",
        "Custom Setup",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple <span className="text-gradient animate-text-shimmer border-b-4 border-foreground">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </div>

        {/* Minecraft Hosting Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-gradient animate-text-shimmer">Minecraft Hosting</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {minecraftPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-2 transition-all duration-500 hover:scale-105 hover:border-foreground animate-scale-in hover-lift hover-tilt group hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${
                  plan.popular 
                    ? "border-foreground shadow-2xl shadow-foreground/10 relative animate-pulse-glow" 
                    : "border-border"
                }`}
                style={{ animationDelay: `${index * 0.05 + 0.4}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Minecraft Server</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 group-hover:text-gradient transition-all duration-300">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-gradient animate-text-shimmer">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.ram} RAM</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group/btn ${
                      plan.popular 
                        ? "bg-foreground text-background hover:bg-foreground/90 animate-pulse-glow" 
                        : "bg-foreground/10 hover:bg-foreground/20 text-foreground border-2 border-foreground/20 hover:border-foreground"
                    }`}
                  >
                    <span className="absolute inset-0 animate-shimmer"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Buy Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* VPS Plans */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-gradient animate-text-shimmer">VPS Hosting</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {vpsPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-2 transition-all duration-500 hover:scale-105 hover:border-foreground animate-scale-in hover-lift hover-tilt group hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${
                  plan.popular 
                    ? "border-foreground shadow-2xl shadow-foreground/10 relative animate-pulse-glow" 
                    : "border-border"
                }`}
                style={{ animationDelay: `${index * 0.05 + 0.7}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Virtual Private Server</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 group-hover:text-gradient transition-all duration-300">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-gradient animate-text-shimmer">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.cpu} • {plan.ram} • {plan.storage}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group/btn ${
                      plan.popular 
                        ? "bg-foreground text-background hover:bg-foreground/90 animate-pulse-glow" 
                        : "bg-foreground/10 hover:bg-foreground/20 text-foreground border-2 border-foreground/20 hover:border-foreground"
                    }`}
                  >
                    <span className="absolute inset-0 animate-shimmer"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Buy Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
