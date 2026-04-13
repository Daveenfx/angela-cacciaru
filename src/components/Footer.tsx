import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-3">Angela Cacciarru</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Senior Environmental & Historic Compliance Specialist with 30+ years of expertise in federal and international regulatory frameworks.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> angela.cacciarru@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> (305) 746-0542</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Frankfort, Kentucky, USA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">For Recruiters</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Interested in discussing opportunities? Download my CV or reach out directly.</p>
          <a href="/Angela_Cacciarru_Resume.pdf" download>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Download className="w-4 h-4" /> Download CV (PDF)
            </Button>
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Angela Cacciarru. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
