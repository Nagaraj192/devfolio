import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({
  activeSection,
}: {
  activeSection?: string;
}) {
  const [open, setOpen] = useState(false);

  const onClickAnchor = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const linkCls = (id: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      activeSection === id ? "bg-accent text-accent-foreground" : "hover:bg-muted"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand with full name */}
        <a
          href="#hero"
          onClick={onClickAnchor("hero")}
          className="font-semibold tracking-tight"
        >
          Nagaraju Thaduri
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={onClickAnchor(it.id)}
              className={linkCls(it.id)}
            >
              {it.label}
            </a>
          ))}

          {/* Resume download (TOP-RIGHT) */}
          <a
            href={`${import.meta.env.BASE_URL}Nagaraju_Thaduri_resume.pdf`}
            download
            aria-label="Download Resume (PDF)"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden hover:bg-muted"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={onClickAnchor(it.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === it.id ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`}
                >
                  {it.label}
                </a>
              ))}

              <a
                href={`${import.meta.env.BASE_URL}Nagaraju_Thaduri_resume.pdf`}
                download
                aria-label="Download Resume (PDF)"
                className="mt-2"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
