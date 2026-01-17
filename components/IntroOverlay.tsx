"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. 로고 보여주기 (1.5초)
    const timer1 = setTimeout(() => {
      setIsFading(true); // 페이드 아웃 시작
    }, 1800);

    // 2. 컴포넌트 삭제 (페이드 아웃 후 0.8초 뒤)
    const timer2 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto"; // 스크롤 잠금 해제
    }, 2600);

    // 초기 스크롤 잠금
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`intro-overlay ${isFading ? "fade-out" : ""}`}>
      <div className="intro-logo">
        <span className="dot" />
        <span className="text">forFAN</span>
      </div>

      <style jsx>{`
        .intro-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: #000;
          display: flex; justify-content: center; align-items: center;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .intro-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .intro-logo {
          display: flex; align-items: center; gap: 12px;
          color: #fff; font-size: 32px; font-weight: 800; letter-spacing: -0.02em;
          animation: breathe 2s ease-in-out infinite;
        }

        .dot {
          width: 12px; height: 12px; background: #0071e3; border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 113, 227, 0.6);
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.8; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}