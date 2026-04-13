import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

const achievements = [
  { icon: TrendingUp, stat: "200+", label: "Federally Funded Projects Reviewed", desc: "Comprehensive environmental and historic compliance reviews under NEPA, NHPA, ESA, CWA, and CZMA at FEMA." },
  { icon: Users, stat: "100+", label: "Community Members Benefited", desc: "Through the Solar Villages Development Program implemented with UNDP/UNESCO in rural South Africa." },
  { icon: Award, stat: "14", label: "International Researchers Coordinated", desc: "Directed a multinational research initiative on sustainable land management across Portugal and Italy." },
  { icon: BookOpen, stat: "5+", label: "Universities Taught", desc: "Multidisciplinary instruction in environmental conservation, geography, and sustainability across the USA and Europe." },
];

const publications = [
  "Land Ownership and Land Use in Sardinia (FAO Land Tenure Journal)",
  "Historical Analysis of Agrarian Reform in Italy (Europe Now)",
  "Moral Economies of Agricultural Production (Europe Now)",
  "A Solar Village in South Africa (South African Development Fund)",
];

const Achievements = () => (
  <div>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          title="Achievements & Measurable Impact"
          subtitle="Quantifiable results reflecting decades of leadership in compliance, research, and international development."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {achievements.map((a, i) => (
            <div key={i} className="p-8 rounded-lg border bg-card text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <a.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="font-serif text-4xl font-bold text-foreground mb-1">{a.stat}</div>
              <div className="text-sm font-semibold text-gold mb-2">{a.label}</div>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Selected Publications</h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {publications.map((pub) => (
              <div key={pub} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <BookOpen className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground italic">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
);

export default Achievements;
