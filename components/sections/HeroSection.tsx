"use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 전체 진행률 (0 ~ 1)
      let p = (windowHeight - top) / (windowHeight + height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    // 초기 로딩 시 강제 실행하여 텍스트 표시
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="sticky-wrapper">
        <div className="kicker">Brand Platform • Experience-first</div>
        
        {/* Scene 1: Technology doesn't sell. */}
        <div 
          className="msg-layer"
          style={{ 
            // 🟢 [수정] 0~20% 구간까지는 무조건 잘 보이게 유지
            opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4), 
            transform: `translate(-50%, -50%) scale(${1 - progress * 0.3})`,
            // 블러도 천천히 먹임
            filter: `blur(${Math.max(0, (progress - 0.2) * 20)}px)`
          }}
        >
          <h1 className="hero-title">
            Technology<br />doesn’t sell.
          </h1>
        </div>

        {/* Scene 2: Experience does. */}
        <div 
          className="msg-layer"
          style={{ 
            // 40% 지점부터 나타나기 시작
            opacity: Math.min(1, Math.max(0, (progress - 0.4) * 3)),
            // 줌인 효과
            transform: `translate(-50%, -50%) scale(${1.8 - (Math.min(1, Math.max(0, (progress - 0.4) * 2)) * 0.8)})`,
            filter: `blur(${Math.max(0, (0.6 - progress) * 20)}px)`
          }}
        >
          <h1 className="hero-title accent">
            Experience<br />does.
          </h1>
        </div>

        <p className="sub-text" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.6) * 4)) }}>
          forFAN은 사진을 찍게 하지 않습니다.<br/>
          그 순간을 <b>‘의미 있게’</b> 남기게 합니다.
        </p>
      </div>

      <style jsx>{`
        .hero-cinematic {
          height: 200vh; /* 적절한 스크롤 길이 */
          position: relative;
          width: 100%;
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .kicker { 
          position: absolute; top: 15%; left: 50%; transform: translateX(-50%);
          font-size: 13px; font-weight: 700; color: #86868b; 
          text-transform: uppercase; letter-spacing: 1px; z-index: 10;
        }
        
        .msg-layer {
          position: absolute;
          top: 50%; left: 50%;
          /* transform은 inline style이 제어 */
          width: 100%;
          text-align: center;
          pointer-events: none;
          will-change: opacity, transform, filter;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: clamp(50px, 9vw, 130px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1d1d1f;
          margin: 0;
          white-space: nowrap;
        }
        .hero-title.accent {
          background: linear-gradient(135deg, #000 0%, #555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-text {
          position: absolute;
          bottom: 15%; left: 50%; transform: translateX(-50%);
          font-size: 20px;
          line-height: 1.5;
          color: #86868b;
          text-align: center;
          width: 90%;
          max-width: 600px;
          transition: opacity 0.5s;
        }
        .sub-text b { color: #1d1d1f; }
      `}</style>
    </section>
  );
}