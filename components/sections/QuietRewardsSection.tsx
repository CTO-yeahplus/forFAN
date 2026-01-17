"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { quietRewardsCopy } from "@/content/data";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";
import { useLanguage } from "@/lib/useLanguage";

export default function QuietRewardsSection() {
  const { t } = useLanguage();
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([20, 50, 20]);
    setIsUnlocked(true);
  };

  return (
    <section className="section" id="quiet">
      <div className="container">
        <div className="section-island theme-gold">
          
          <div className="giant-coin-bg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.15" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              <text x="100" y="115" fontSize="60" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.1" style={{ fontFamily: 'serif' }}>4</text>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <SectionHeader
              title={t("rewards.title")}
              lead={t("rewards.lead")}
            />

            {/* 1. Reveal Cards (Accumulation) */}
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
                        <div className="hash-code"><span className="dot active"/>0x7F...{300 + idx * 127}</div>
                        <div className="text-lines">{c.lines.map((line, i) => <p key={i} className="line-item">{line}</p>)}</div>
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

            {/* 🟢 2. Spending Experience Demo (Renewed) */}
            <div className="usage-section">
              <div className="usage-header">
                <h3>{t("rewards.usage.title")}</h3>
                <p>{t("rewards.usage.desc")}</p>
              </div>

              <div className="usage-layout">
                {/* Left: Premium Unlock Demo */}
                <div className={`usage-card unlock-demo ${isUnlocked ? 'active' : ''}`}>
                  <div className="card-stage">
                    {/* Unlocked State: Premium Art */}
                    <div className="premium-card">
                      <div className="card-art" />
                      <div className="card-shine" />
                      <div className="card-badge">Limited Edition</div>
                    </div>
                    
                    {/* Locked State: Blur Cover */}
                    <div className={`blur-cover ${isUnlocked ? 'vanished' : ''}`}>
                      <Icon name="lock" />
                      <span>Secret Artist Frame</span>
                    </div>
                    
                    {/* Particles */}
                    {isUnlocked && <div className="particles" />}
                  </div>

                  <div className="usage-meta">
                    <h4>{t("rewards.use1")}</h4>
                    <button 
                      className={`coin-btn ${isUnlocked ? 'disabled' : ''}`}
                      onClick={handleUnlock}
                    >
                      {isUnlocked ? (
                        <span className="flex-center"><Icon name="spark"/> {t("rewards.btn.active")}</span>
                      ) : (
                        t("rewards.btn.unlock")
                      )}
                    </button>
                  </div>
                </div>

                {/* Right: Products List */}
                <div className="product-list-col">
                  {/* Digital Goods */}
                  <div className="list-group">
                    <div className="group-label">Digital Goods</div>
                    <div className="usage-list">
                      <div className="list-item">
                        <div className="li-icon icon-gift"><Icon name="gift" /></div>
                        <div className="li-info">
                          <span className="li-name">{t("rewards.use2")}</span>
                          <span className="li-cost">-300 C</span>
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="li-icon icon-file"><Icon name="copy" /></div>
                        <div className="li-info">
                          <span className="li-name">{t("rewards.use3")}</span>
                          <span className="li-cost">-100 C</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 🟢 Real-world Goods (Coming Soon) */}
                  <div className="list-group">
                    <div className="group-label">Real-world (Coming Soon)</div>
                    <div className="usage-list">
                      <div className="list-item disabled">
                        <div className="li-icon icon-print"><Icon name="map" /></div> {/* Pocky2 */}
                        <div className="li-info">
                          <span className="li-name">{t("rewards.item.pocky")}</span>
                          <span className="li-tag">{t("rewards.tag.soon")}</span>
                        </div>
                      </div>
                      <div className="list-item disabled">
                        <div className="li-icon icon-gacha"><Icon name="spark" /></div> {/* Gacha */}
                        <div className="li-info">
                          <span className="li-name">{t("rewards.item.gacha")}</span>
                          <span className="li-tag">{t("rewards.tag.soon")}</span>
                        </div>
                      </div>
                      <div className="list-item disabled">
                        <div className="li-icon icon-grip"><Icon name="circle" /></div> {/* Griptok */}
                        <div className="li-info">
                          <span className="li-name">{t("rewards.item.grip")}</span>
                          <span className="li-tag">{t("rewards.tag.soon")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        /* ... (기존 상단 스타일 유지: giant-coin-bg, reveal-grid ...) */
        .giant-coin-bg { position: absolute; top: -100px; right: -100px; width: 600px; height: 600px; color: #DAA520; animation: spin-slow 60s linear infinite; pointer-events: none; z-index: 0; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .reveal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 80px; }
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
        .frost-overlay { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.6s ease; z-index: 10; }
        .reveal-card:hover .frost-overlay { opacity: 0; pointer-events: none; }
        .lock-icon { color: #86868b; opacity: 0.5; }
        .hint-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; border: 1px solid #d2d2d7; padding: 6px 14px; border-radius: 99px; background: rgba(255,255,255,0.9); }

        /* Usage Section */
        .usage-section { border-top: 1px solid rgba(0,0,0,0.05); padding-top: 60px; }
        .usage-header { text-align: center; margin-bottom: 40px; }
        .usage-header h3 { font-size: 28px; font-weight: 700; margin-bottom: 10px; color: #1d1d1f; }
        .usage-header p { font-size: 16px; color: #86868b; }

        .usage-layout { display: grid; grid-template-columns: 320px 1fr; gap: 40px; align-items: start; max-width: 900px; margin: 0 auto; }

        /* Left: Demo Card */
        .usage-card { background: #fff; padding: 20px; border-radius: 24px; box-shadow: 0 10px 40px rgba(218, 165, 32, 0.1); border: 1px solid rgba(218, 165, 32, 0.2); }
        .card-stage { height: 240px; border-radius: 16px; margin-bottom: 20px; position: relative; overflow: hidden; background: #eee; }
        
        .premium-card { position: absolute; inset: 0; transform: scale(0.9); transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .unlock-demo.active .premium-card { transform: scale(1); }
        .card-art { width: 100%; height: 100%; background: linear-gradient(135deg, #111, #333); }
        .card-shine { position: absolute; inset: 0; background: linear-gradient(115deg, transparent 40%, rgba(255,215,0,0.4) 50%, transparent 60%); animation: shine 3s infinite; mix-blend-mode: overlay; }
        @keyframes shine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .card-badge { position: absolute; top: 12px; left: 12px; background: #FFD700; color: #000; font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; }

        .blur-cover { position: absolute; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; gap: 8px; transition: opacity 0.5s; z-index: 10; }
        .blur-cover.vanished { opacity: 0; pointer-events: none; }
        .blur-cover span { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; }

        .particles { position: absolute; inset: 0; background-image: radial-gradient(circle, #FFD700 2px, transparent 2px); background-size: 20px 20px; animation: sparkle 1s infinite; pointer-events: none; z-index: 20; }
        @keyframes sparkle { 0% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; } 100% { opacity: 0; transform: scale(1.2); } }

        .usage-meta h4 { font-size: 16px; font-weight: 700; margin: 0 0 12px; text-align: center; }
        .coin-btn { width: 100%; padding: 12px; background: #000; color: #FFD700; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: transform 0.1s; }
        .coin-btn:active { transform: scale(0.98); }
        .coin-btn.disabled { background: #f5f5f7; color: #86868b; cursor: default; }
        .flex-center { display: flex; align-items: center; justify-content: center; gap: 6px; }

        /* Right: Product List */
        .product-list-col { display: flex; flex-direction: column; gap: 30px; }
        .group-label { font-size: 11px; font-weight: 700; color: #86868b; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px; }
        .usage-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        
        .list-item { display: flex; align-items: center; gap: 12px; background: #fff; padding: 14px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 2px 8px rgba(0,0,0,0.02); transition: transform 0.2s; }
        .list-item:hover { transform: translateY(-2px); }
        .list-item.disabled { background: rgba(255,255,255,0.5); border-style: dashed; }
        
        .li-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .icon-gift { background: #E3F2FD; color: #2196F3; }
        .icon-file { background: #F3E5F5; color: #9C27B0; }
        .icon-print { background: #FFF3E0; color: #FF9800; }
        .icon-gacha { background: #E8F5E9; color: #4CAF50; }
        .icon-grip { background: #ECEFF1; color: #607D8B; }

        .li-info { display: flex; flex-direction: column; }
        .li-name { font-size: 13px; font-weight: 700; color: #1d1d1f; }
        .li-cost { font-size: 11px; font-weight: 600; color: #DAA520; }
        .li-tag { font-size: 10px; font-weight: 600; color: #86868b; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; width: fit-content; margin-top: 2px; }

        @media (max-width: 900px) { 
          .reveal-grid { grid-template-columns: 1fr; } 
          .usage-layout { grid-template-columns: 1fr; }
          .usage-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}