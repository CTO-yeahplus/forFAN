export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
