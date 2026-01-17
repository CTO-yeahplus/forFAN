"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 부드러움의 정도 (기본값보다 조금 더 무게감 있게)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple style easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // UI를 렌더링하지 않는 유틸리티 컴포넌트
}