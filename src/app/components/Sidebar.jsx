"use client";

import { ChevronFirst, ChevronLast, Sparkles } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarContext = createContext({ expanded: true });

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`sidebar ${expanded ? "sidebar-expanded" : "sidebar-collapsed"}`}>
      <nav>
        <div className="brand-row">
          <Link href="/" className="brand" aria-label="CaptureLife home">
            <span className="brand-mark">
              <Sparkles size={17} />
            </span>
            <span className="brand-name">
              Capture<span>Life</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="sidebar-toggle"
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <ChevronFirst size={18} /> : <ChevronLast size={18} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="sidebar-links">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, href = "#" }) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={`sidebar-link ${active ? "is-active" : ""}`}
        aria-current={active ? "page" : undefined}
      >
        <span className="sidebar-icon">{icon}</span>
        <span className="sidebar-text">{text}</span>
        {!expanded && <span className="sidebar-tooltip">{text}</span>}
      </Link>
    </li>
  );
}