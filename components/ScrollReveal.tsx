"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "", // 👈 추가
  style = {},     // 👈 추가
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // 외부에서 받은 className과 내부 스타일을 병합합니다.
      className={`reveal-container ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...style // 👈 외부 스타일(Grid 속성 등)을 여기에 적용합니다.
      }}
    >
      {children}
    </div>
  );
}