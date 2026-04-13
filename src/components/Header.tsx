import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Achievements", path: "/achievements" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-serif text-xl font-bold text-foreground tracking-tight">
          Angela <span className="text-gold">Cacciarru</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === item.path ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="/Angela_Cacciarru_Resume.pdf" download>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5">
              <Download className="w-3.5 h-3.5" /> CV
            </Button>
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-gold ${
                  location.pathname === item.path ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="/Angela_Cacciarru_Resume.pdf" download>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5 w-full mt-2">
                <Download className="w-3.5 h-3.5" /> Download CV
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
