import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { Globe, Sun, Building2, Landmark, FileText, Trees } from "lucide-react";

const projects = [
  {
    icon: Landmark,
    title: "Federal Disaster Recovery Compliance Program",
    org: "FEMA",
    desc: "Led environmental and historic compliance reviews for 200+ federally funded disaster recovery projects, ensuring adherence to NEPA, NHPA, ESA, CWA, and CZMA frameworks. Developed standardized procedures that improved documentation consistency and accelerated project approval timelines.",
  },
  {
    icon: Sun,
    title: "Solar Villages Development Program",
    org: "UNDP / UNESCO — South Africa",
    desc: "Implemented a sustainable energy initiative delivering solar solutions to rural communities in South Africa. Benefited over 100 community members while ensuring full environmental compliance with sustainability standards. Coordinated with universities and government stakeholders.",
  },
  {
    icon: Globe,
    title: "Coastal Environmental Management Program",
    org: "UNDP / UNESCO — Mozambique",
    desc: "Provided environmental compliance expertise for coastal management programs, conducting field inspections and ensuring program alignment with international sustainability standards and local regulations.",
  },
  {
    icon: Building2,
    title: "Central Artery/Tunnel Project (Big Dig) — Community Mitigation",
    org: "Action for Boston Community Development",
    desc: "Supported infrastructure mitigation programs for one of the largest urban infrastructure projects in U.S. history. Prepared analytical reports integrating qualitative and quantitative data to inform community engagement and compliance strategies.",
  },
  {
    icon: Trees,
    title: "Multinational Sustainable Land Management Research",
    org: "Portuguese Forestry Institute & Sardinian Planning Department",
    desc: "Directed a seven-year multinational research initiative across Portugal and Italy, coordinating 14 international researchers. Delivered environmental compliance and policy reports to government agencies, advising on land use policy and sustainability strategies.",
  },
  {
    icon: FileText,
    title: "Expo 1998 Environmental Impact Assessment",
    org: "University of Massachusetts Boston",
    desc: "Conducted comprehensive environmental and socioeconomic impact assessments for Expo 1998 in Lisbon. Designed qualitative and quantitative research methodologies and produced bilingual technical reports in English and Portuguese.",
  },
];

const Projects = () => (
  <div>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          title="Key Projects & Initiatives"
          subtitle="High-impact programs spanning federal compliance, international development, and environmental research."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <p.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-gold font-medium mb-3">{p.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
);

export default Projects;
