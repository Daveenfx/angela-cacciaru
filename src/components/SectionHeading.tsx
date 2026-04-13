const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
