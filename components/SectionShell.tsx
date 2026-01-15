"use client";

export default function SectionShell({
  id,
  className = "theme-clean", // 기본값: Clean White
  children,
}: {
  id: string;
  className?: string; // variant 대신 className으로 직접 제어
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-wrapper">
      <div className="container">
        <div className={`section-island ${className}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .section-wrapper {
          padding: 20px 0; /* 섹션 간 간격 조절 */
          width: 100%;
        }
        /* section-island 내부는 z-index 관리가 필요할 수 있음 */
        .section-island > :global(*) {
          position: relative; z-index: 1;
        }
      `}</style>
    </section>
  );
}