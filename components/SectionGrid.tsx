"use client";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid-container">
      {children}
    </div>
  );
}