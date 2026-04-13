import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import profileImg from "@/assets/angela-profile.jpg";

const About = () => (
  <div>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title="Professional Background" subtitle="A career dedicated to environmental stewardship, regulatory compliance, and international development." />

        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <img
            src={profileImg}
            alt="Angela Cacciarru"
            className="w-48 h-48 rounded-full object-cover border-4 border-accent/40 shadow-lg flex-shrink-0 mx-auto md:mx-0"
          />
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Angela Cacciarru is a Senior Environmental & Historic Compliance Specialist with over 30 years of distinguished experience spanning U.S. federal agencies, international organizations, and academia. Her career reflects a deep commitment to environmental protection, historic preservation, and sustainable development.
            </p>
            <p>
              Currently serving as a Historic Preservation Specialist at the Federal Emergency Management Agency (FEMA), Angela has conducted environmental and historic compliance reviews for more than 200 federally funded projects under critical frameworks including NEPA, NHPA, ESA, CWA, and CZMA.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            She has developed standardized procedures for project analysis and site inspections, significantly improving efficiency across compliance documentation workflows.
          </p>
          <p>
            Her international experience includes service as a Project Coordinator and Environmental Compliance Advisor with UNDP/UNESCO in South Africa and Mozambique, where she implemented the Solar Villages Development Program benefiting over 100 community members. She also directed a multinational research initiative across Portugal and Italy, coordinating 14 international researchers on sustainable land management practices.
          </p>
          <p>
            As a professor and researcher across five universities in the USA and Europe, Angela designed curricula in environmental conservation, geography, and sustainability, bridging academic research with real-world policy applications. She holds a Ph.D. in Human Geography from the University of North Carolina at Chapel Hill, a Master's in Geography (Urban & Regional Planning) from Universidade Nova de Lisboa, and a Bachelor's in Economics and Trade (Environmental Economics) from the University of Cagliari.
          </p>
          <p>
            Angela is multilingual, fluent in Italian (native), English, Portuguese, and Spanish (all C2), with upper-intermediate proficiency in French. This linguistic versatility, combined with her cross-cultural expertise, positions her uniquely for senior roles in international organizations, advisory boards, and environmental consulting firms.
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Education</h3>
          <div className="space-y-6">
            {[
              { degree: "Ph.D. in Human Geography", school: "University of North Carolina at Chapel Hill", loc: "USA" },
              { degree: "Master's in Geography (Urban & Regional Planning)", school: "Universidade Nova de Lisboa", loc: "Portugal" },
              { degree: "B.A. in Economics and Trade (Environmental Economics)", school: "University of Cagliari", loc: "Italy" },
            ].map((e) => (
              <div key={e.degree} className="flex items-start gap-4 p-5 rounded-lg border bg-card">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{e.degree}</h4>
                  <p className="text-muted-foreground text-sm">{e.school} — {e.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
);

export default About;
