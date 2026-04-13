import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const roles = [
  {
    title: "Historic Preservation Specialist (HSSP)",
    org: "Federal Emergency Management Agency (FEMA)",
    location: "Lake Mary / Tampa, FL",
    period: "2003 – Present",
    points: [
      "Conducted environmental and historic compliance reviews for 200+ federally funded projects under NEPA, NHPA, ESA, CWA, and CZMA",
      "Ensured regulatory compliance with federal environmental laws and Executive Orders",
      "Led environmental review processes to support timely project approvals",
      "Developed standardized procedures for project worksheet analysis and site inspections",
      "Coordinated with multidisciplinary teams on disaster recovery compliance",
      "Improved efficiency and consistency in compliance documentation and workflows",
    ],
  },
  {
    title: "Professor / Researcher (Environmental & Geographic)",
    org: "Multiple Universities (USA & Europe)",
    location: "USA & Europe",
    period: "2004 – 2023",
    points: [
      "Designed and taught courses in environmental conservation, geography, and sustainability",
      "Integrated environmental policy and compliance frameworks into curriculum",
      "Supervised research on migration, land use, and resource management",
      "Delivered multidisciplinary instruction across 5+ universities",
      "Bridged academic research with real-world environmental and policy applications",
    ],
  },
  {
    title: "Community Outreach & Project Analyst",
    org: "Action for Boston Community Development",
    location: "Boston, MA",
    period: "2002 – 2004",
    points: [
      "Supported infrastructure mitigation programs (Central Artery/Tunnel Project)",
      "Prepared analytical reports with qualitative and quantitative data",
      "Assisted in community engagement and compliance-related communication",
      "Contributed to project monitoring and reporting processes",
    ],
  },
  {
    title: "Project Coordinator & Environmental Compliance Advisor",
    org: "UNDP / UNESCO",
    location: "South Africa & Mozambique",
    period: "2000 – 2001",
    points: [
      "Implemented Solar Villages Development Program in rural South Africa",
      "Delivered sustainable energy solutions benefiting 100+ community members",
      "Provided environmental compliance expertise for coastal management programs",
      "Coordinated with universities and government stakeholders",
      "Conducted field inspections and ensured program compliance with sustainability standards",
    ],
  },
  {
    title: "Field Researcher – Environmental Impact Analysis",
    org: "University of Massachusetts Boston",
    location: "Boston, MA",
    period: "1997 – 1999",
    points: [
      "Conducted environmental and socioeconomic impact assessments (Expo 1998, Lisbon)",
      "Designed qualitative and quantitative research methodologies",
      "Produced bilingual technical reports (English & Portuguese)",
    ],
  },
  {
    title: "Project Director – Environmental & Land Use Compliance",
    org: "Portuguese Forestry Institute & Sardinian Planning Department",
    location: "Portugal & Italy",
    period: "1990 – 1997",
    points: [
      "Directed multinational research on sustainable land management practices",
      "Coordinated 14 international researchers across Portugal and Italy",
      "Delivered environmental compliance and policy reports to government agencies",
      "Advised on land use policy and environmental sustainability strategies",
      "Contributed to regional land use planning and environmental governance",
    ],
  },
];

const Experience = () => (
  <div>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          title="Career Experience & Leadership"
          subtitle="A track record of progressive leadership across federal agencies, international organizations, and academia."
        />

        <div className="space-y-8">
          {roles.map((role, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-accent" />
              <div className="p-6 md:p-8 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{role.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-5">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-accent" />{role.org}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" />{role.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" />{role.period}</span>
                </div>
                <ul className="space-y-3">
                  {role.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
);

export default Experience;
