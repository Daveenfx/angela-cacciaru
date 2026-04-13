import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => (
  <section className="bg-gold-light py-14">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">Let's Connect</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Available for senior advisory, compliance leadership, and consulting roles within federal agencies and international organizations.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/Angela_Cacciarru_Resume.pdf" download>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            <Download className="w-4 h-4" /> Download CV
          </Button>
        </a>
        <a href="mailto:angela.cacciarru@gmail.com">
          <Button variant="outline" className="gap-2 border-accent text-accent-foreground hover:bg-accent/10">
            <Mail className="w-4 h-4" /> Contact Me
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
