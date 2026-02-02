"use client";

import { navLinks } from "@/content/data";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

export default function FloatingDock() {
  const [activeId, setActiveId] = useState("");
  const { lang, toggleLang } = useLanguage();

  // 🟢 언어별 라벨/국기 매핑
  const langLabel = {
    "ko": "🇰🇷",
    "en": "🇺🇸",
    "zh-CN": "🇨🇳",
    "zh-TW": "🇹🇼"
  };

  useEffect(() => {
    const handleScroll = () => {
      // navLinks에 있는 href(#id)를 가진 요소들을 찾음
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveId(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="floating-dock">
      <div className="dock-glass">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`dock-item ${activeId === link.href ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        
        <div className="dock-divider" />
        
        {/* 🟢 4개 국어 순환 버튼 */}
        <button 
          className="dock-item lang-btn" 
          onClick={toggleLang}
          title="Change Language"
        >
          {langLabel[lang]}
        </button>
      </div>

      <style jsx>{`
        .floating-dock {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: auto; 
          /* 화면 너비가 좁아도 최대 92%까지만 차지하도록 제한 */
          max-width: 92vw;
        }

        .dock-glass {
          display: flex; align-items: center; 
          gap: 6px; padding: 8px; /* 🟢 터치 영역 확보를 위해 패딩 증가 */
          
          /* 배경 투명도 약간 낮춤 (가독성 확보) */
          background: rgba(255, 255, 255, 0.75); 
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05);
          
          /* 🟢 가로 스크롤 허용 (메뉴가 많아도 안전) */
          overflow-x: auto;
          white-space: nowrap;
          
          /* 스크롤바 숨기기 (심미성) */
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Chrome, Safari, Opera 스크롤바 숨김 */
        .dock-glass::-webkit-scrollbar {
          display: none;
        }

        .dock-item {
          padding: 10px 16px; border-radius: 18px; font-size: 13px; font-weight: 600; color: #86868b;
          white-space: nowrap; transition: all 0.2s ease; text-decoration: none; border: none; background: transparent; cursor: pointer;
          /* 모바일 터치 시 하이라이트 제거 */
          -webkit-tap-highlight-color: transparent;
        }
        .dock-item:hover { background: rgba(0, 0, 0, 0.05); color: #1d1d1f; }
        .dock-item.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        
        .dock-divider { width: 1px; height: 20px; background: rgba(0,0,0,0.1); margin: 0 4px; flex-shrink: 0; }
        
        .lang-btn { font-size: 18px; padding: 6px 12px; line-height: 1; }

        @media (max-width: 600px) {
          .floating-dock { bottom: 24px; }
          .dock-glass { padding: 6px; border-radius: 20px; gap: 4px; }
          .dock-item { padding: 8px 14px; font-size: 12px; }
        }
      `}</style>
    </nav>
  );
}