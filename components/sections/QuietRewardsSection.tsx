"use client";

import SectionHeader from "../SectionHeader";
import { quietRewardsCopy } from "@/content/data";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <div className="container">
        {/* 🟢 [적용] 화려한 골드 테마 (theme-gold) - 직접 div에 적용 */}
        <div className="section-island theme-gold">
          
          {/* 🪙 Background Giant Coin (섹션 내부로 이동) */}
          <div className="giant-coin-bg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.15" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              <text x="100" y="115" fontSize="60" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.1" style={{ fontFamily: 'serif' }}>4</text>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <SectionHeader
              title="“Quiet Rewards” — 4CUT Coin"
              lead="발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요."
            />

            <div className="reveal-grid">
              {quietRewardsCopy.map((c, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="reveal-card">
                    <div className="blockchain-mesh" />
                    <div className="icon-header">
                      <div className={`coin-visual coin-${idx}`}>
                        <span className="coin-face">$</span>
                      </div>
                      <span className="card-title">{c.title}</span>
                    </div>
                    
                    <div className="frost-container">
                      <div className="hidden-content">
                        <div className="hash-code">
                          <span className="dot active"/>
                          0x7F...{300 + idx * 127}
                        </div>
                        <div className="text-lines">
                          {c.lines.map((line, i) => (
                            <p key={i} className="line-item">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="frost-overlay">
                        <div className="lock-icon"><Icon name="lock" /></div>
                        <span className="hint-text">Hover to Decrypt</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .giant-coin-bg {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px;
          color: #DAA520;
          animation: spin-slow 60s linear infinite;
          pointer-events: none; z-index: 0;
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ... 기존 스타일 유지 ... */
        .reveal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .reveal-grid { grid-template-columns: 1fr; } }
        .reveal-card { background: #fff; border-radius: 28px; padding: 32px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 10px 40px rgba(0,0,0,0.04); min-height: 360px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.3s ease; }
        .reveal-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(218, 165, 32, 0.15); border-color: rgba(218, 165, 32, 0.3); }
        .blockchain-mesh { position: absolute; inset: 0; background-image: radial-gradient(#DAA520 1px, transparent 1px); background-size: 24px 24px; opacity: 0.1; z-index: 0; }
        .icon-header { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 24px; position: relative; z-index: 1; }
        .coin-visual { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.5); }
        .coin-0 { background: linear-gradient(135deg, #FFD700, #FDB931); color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .coin-1 { background: linear-gradient(135deg, #E0E0E0, #BDBDBD); color: #fff; }
        .coin-2 { background: linear-gradient(135deg, #f6d365, #fda085); color: #fff; }
        .card-title { font-size: 20px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.02em; }
        .frost-container { position: relative; flex: 1; border-radius: 20px; overflow: hidden; background: #fbfbfd; border: 1px solid rgba(0,0,0,0.03); z-index: 1; }
        .hidden-content { padding: 24px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
        .hash-code { font-family: monospace; font-size: 11px; color: #86868b; background: rgba(0,0,0,0.05); padding: 4px 8px; border-radius: 6px; width: fit-content; margin: 0 auto 16px; display: flex; align-items: center; gap: 6px; }
        .dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .dot.active { animation: blink 2s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .text-lines { display: flex; flex-direction: column; gap: 10px; text-align: center; }
        .line-item { font-size: 15px; color: #1d1d1f; font-weight: 600; line-height: 1.5; margin: 0; }
        .line-item::before { content: "“"; color: #DAA520; margin-right: 4px; }
        .line-item::after { content: "”"; color: #DAA520; }
        .frost-overlay { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1); z-index: 10; }
        .reveal-card:hover .frost-overlay { opacity: 0; pointer-events: none; }
        .lock-icon { color: #86868b; opacity: 0.5; }
        .hint-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; border: 1px solid #d2d2d7; padding: 6px 14px; border-radius: 99px; background: rgba(255,255,255,0.9); }
      `}</style>
    </section>
  );
}