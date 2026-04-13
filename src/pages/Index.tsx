import { Download, ArrowRight, Globe, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CtaBanner from "@/components/CtaBanner";
import profileImg from "@/assets/angela-profile.jpg";

const highlights = [
  { icon: Shield, label: "30+ Years", desc: "Environmental & Historic Compliance" },
  { icon: Globe, label: "International", desc: "USA, Europe, Africa — UN Experience" },
  { icon: BookOpen, label: "5+ Universities", desc: "Academic Leadership & Research" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(38_70%_55%/0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img
            src={profileImg}
            alt="Angela Cacciarru"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-accent/40 shadow-lg flex-shrink-0"
          />
          <div className="max-w-3xl animate-slide-up text-center md:text-left">
            <p className="text-gold font-medium tracking-wider text-sm uppercase mb-4">Senior Environmental & Historic Compliance Specialist</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              Angela Cacciarru
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Expert in NEPA, NHPA, ESA, and federal regulatory frameworks with a proven track record across U.S. agencies and international organizations including the United Nations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/Angela_Cacciarru_Resume.pdf" download>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Download className="w-4 h-4" /> Download CV
                </Button>
              </a>
              <Link to="/experience">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  View Experience <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-start gap-4 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center flex-shrink-0">
                <h.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{h.label}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Summary */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Summary</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-8 rounded-full" />
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          Environmental and Historic Compliance expert with over three decades of experience spanning U.S. federal, state, and municipal agencies, as well as international organizations. Recognized for leading large-scale project reviews, ensuring compliance with environmental and historic preservation laws, and advising on complex regulatory requirements.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Combines technical expertise, academic leadership, and field implementation to deliver policy-aligned, data-driven solutions. Positioned for senior advisory, compliance leadership, and consulting roles within federal agencies, international organizations, and environmental consulting firms.
        </p>
      </div>
    </section>

    {/* Languages */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { lang: "Italian", level: "Native" },
            { lang: "English", level: "C2" },
            { lang: "Portuguese", level: "C2" },
            { lang: "Spanish", level: "C2" },
            { lang: "French", level: "B2" },
          ].map((l) => (
            <span key={l.lang} className="px-4 py-2 rounded-full border text-sm font-medium text-foreground bg-card">
              {l.lang} <span className="text-gold ml-1">({l.level})</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
);

export default Index;
