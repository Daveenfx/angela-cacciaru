import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const competencyGroups = [
  {
    title: "Regulatory & Compliance",
    items: [
      "Environmental & Historic Compliance (NEPA, NHPA, ESA, CWA, CZMA)",
      "Environmental Review & Regulatory Approvals",
      "Federal Compliance Frameworks & Executive Orders",
      "Environmental Impact Assessment (EIA)",
    ],
  },
  {
    title: "Leadership & Advisory",
    items: [
      "Strategic Advisory & Policy Analysis",
      "Stakeholder Coordination & Interagency Collaboration",
      "Cross-Sector Coordination",
      "Public Speaking & Stakeholder Engagement",
    ],
  },
  {
    title: "Research & Technical",
    items: [
      "Project Analysis, Monitoring & Field Inspection",
      "High-Level Technical Writing & Reporting",
      "Interdisciplinary Research Integration",
      "GIS & Mapping (ArcGIS, Google Earth)",
    ],
  },
  {
    title: "International & Development",
    items: [
      "International Development & Sustainability Programs",
      "Academic Instruction & Curriculum Development",
      "Multilingual Communication (5 languages)",
      "Cross-Cultural Program Management",
    ],
  },
];

const technicalTools = [
  "ArcGIS", "Google Earth", "Canvas", "Blackboard", "D2L",
  "Microsoft Teams", "Webex", "Zoom", "Google Meet",
  "Environmental Review Processes", "Regulatory Reporting",
];

const industries = [
  "Federal Government (FEMA, EPA frameworks)",
  "International Development (UNDP, UNESCO)",
  "Higher Education & Academic Research",
  "Environmental Consulting",
  "Historic Preservation",
  "Sustainable Energy & Community Development",
  "Urban & Regional Planning",
  "Coastal & Land Use Management",
];

const Skills = () => (
  <div>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          title="Skills, Expertise & Industries"
          subtitle="Core competencies honed across three decades of environmental compliance, academic leadership, and international development."
        />

        {/* Competencies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competencyGroups.map((g) => (
            <div key={g.title} className="p-6 rounded-lg border bg-card">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Tools */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Technical Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalTools.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border bg-card text-sm font-medium text-foreground">{t}</span>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Industries Served</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind} className="p-4 rounded-lg bg-gold-light text-center text-sm font-medium text-foreground">{ind}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
);

export default Skills;
