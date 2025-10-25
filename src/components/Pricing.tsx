import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      type: "Minecraft",
      price: "$5",
      features: [
        "2GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "24/7 Support",
      ],
    },
    {
      name: "Pro",
      type: "Minecraft",
      price: "$10",
      features: [
        "4GB RAM",
        "Unlimited Player Slots",
        "DDoS Protection",
        "Auto Backups",
        "Priority Support",
        "Free Subdomain",
      ],
      popular: true,
    },
    {
      name: "Basic VPS",
      type: "VPS",
      price: "$8",
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
      name: "Premium VPS",
      type: "VPS",
      price: "$16",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "100GB NVMe",
        "Full Root Access",
        "DDoS Protection",
        "Priority Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 backdrop-blur border transition-all duration-300 hover:scale-105 animate-scale-in ${
                plan.popular 
                  ? "border-primary shadow-lg shadow-primary/20 relative" 
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-1">{plan.type}</div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://discord.gg/HPRE6yNMEp" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" 
                      : "bg-primary/10 hover:bg-primary/20 text-primary"
                  }`}
                >
                  Buy Now
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
