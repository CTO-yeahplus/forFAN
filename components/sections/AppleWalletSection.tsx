"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useLanguage } from "@/lib/useLanguage";

type Tier = "basic" | "fan" | "gold";

export default function AppleWalletSection() {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [tier, setTier] = useState<Tier>("fan"); // Default: Silver

  // 🟢 [Restored] Tier Configuration
  const tierConfig = {
    basic: { 
      name: "Basic Fan", 
      color: "#1d1d1f", 
      bgClass: "basic-bg", 
      points: "150",
      iconColor: "#86868b",
      particleColor: null
    },
    fan: { 
      name: "Silver Fan", 
      color: "#ffffff", 
      bgClass: "fan-bg", 
      points: "850",
      iconColor: "rgba(255,255,255,0.7)",
      particleColor: "rgba(255,255,255,0.4)" // White Dust
    },
    gold: { 
      name: "Golden Fan", 
      color: "#1d1d1f", 
      bgClass: "gold-bg", 
      points: "2,400",
      iconColor: "rgba(0,0,0,0.6)",
      particleColor: "#FFD700" // Golden Dust
    },
  };

  const currentTier = tierConfig[tier];

  return (
    <section className="section-wallet">
      <div className="container">
        <div className="layout-split">
          {/* Left: Text Context */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-pill">{t("wallet.badge")}</div>
              <h2 className="h2-wallet">
                <span className="text-gradient-gold">{t("wallet.title")}</span>
              </h2>
              <p className="p-wallet">{t("wallet.desc")}</p>
              
              <div className="feature-list">
                <div className="f-item">
                  <div className="f-icon"><Icon name="spark" /></div>
                  <div className="f-text"><h4>{t("wallet.d1.title")}</h4><p>{t("wallet.d1.desc")}</p></div>
                </div>
                <div className="f-item">
                  <div className="f-icon"><Icon name="map" /></div>
                  <div className="f-text"><h4>{t("wallet.d2.title")}</h4><p>{t("wallet.d2.desc")}</p></div>
                </div>
                {/* 🟢 [Merged] Hidden Ticket + 'This one's on us' Copy */}
                <div className="f-item">
                  <div className="f-icon"><Icon name="gift" /></div>
                  <div className="f-text">
                    <h4>{t("wallet.d3.title")}</h4>
                    <p>
                      "This one's on us." — {t("wallet.d3.desc")}
                    </p>
                  </div>
                </div>
                
                {/* 🟢 [Restored] Tier Switcher & Market Link */}
                <div className="tier-switcher-box">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
                    <span className="switcher-label">Design Preview:</span>
                    <span className="market-link">Visit Skin Market ›</span>
                  </div>
                  <div className="switcher-btns">
                    {(["basic", "fan", "gold"] as Tier[]).map((t) => (
                      <button 
                        key={t}
                        onClick={() => setTier(t)}
                        className={`tier-btn ${tier === t ? "active" : ""}`}
                      >
                        {t === 'fan' ? 'Silver' : t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: 3D Card Visual */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="wallet-container" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="wallet-card back-card-layer" />

                <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
                  
                  {/* [Front Side] Dynamic Material based on Tier */}
                  <div className="front">
                    <div className={`wallet-card main-pass ${currentTier.bgClass}`}>
                      
                      {/* Particles (Premium Only) */}
                      {currentTier.particleColor && (
                        <div className="particles-container">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`particle p${i}`} 
                              style={{ background: currentTier.particleColor }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Shine Overlay */}
                      {tier !== 'basic' && <div className="holo-shine" />}
                      
                      <div className="pass-header">
                        <div className="pass-logo" style={{ color: currentTier.color }}>
                          <span className="logo-dot" style={{ background: currentTier.color }} />
                          forFAN
                        </div>
                        <div className="live-status">
                          <span className="status-dot pulse" />
                          <span style={{ color: currentTier.color, opacity: 0.9 }}>Open Now</span>
                        </div>
                      </div>
                      
                      <div className="pass-body" style={{ color: currentTier.color }}>
                        <div className="pass-row">
                          <div className="pass-field">
                            <label style={{ color: currentTier.iconColor }}>GRADE</label>
                            <div className="value">{currentTier.name}</div>
                          </div>
                          
                          <div className="profile-avatar">
                            <div className="avatar-circle">😎</div>
                          </div>
                        </div>

                        <div className="pass-row">
                          <div className="pass-field">
                            <label style={{ color: currentTier.iconColor }}>LATEST MOMENT</label>
                            <div className="value">Seongsu Flagship</div>
                          </div>
                          <div className="pass-field right">
                            <label style={{ color: currentTier.iconColor }}>POINTS</label>
                            <div className="value">{currentTier.points}</div>
                          </div>
                        </div>
                      </div>

                      <div className="pass-barcode">
                        {[...Array(24)].map((_, i) => (
                          <div key={i} className="bar-line" style={{ height: i % 2 === 0 ? '100%' : '80%', width: i % 3 === 0 ? 3 : 1, opacity: 0.8 }} />
                        ))}
                      </div>
                      
                      <div className="skin-tag" style={{ color: currentTier.color }}>🎨 Customize Skin</div>
                    </div>
                  </div>

                  {/* [Back Side] */}
                  <div className="back">
                    <div className="wallet-card back-pass">
                      <div className="qr-section">
                        <div className="qr-box">
                          <div className="qr-pattern" />
                          <div className="qr-logo"><span className="logo-dot" /></div>
                        </div>
                        <div className="qr-label">{t("wallet.back.qr")}</div>
                      </div>
                      <div className="back-info">
                        <div className="info-row"><span className="label">{t("wallet.back.visit")}</span><span className="val">{t("wallet.back.visit_val")}</span></div>
                        <div className="divider" />
                        <div className="info-row"><span className="label">{t("wallet.back.next")}</span><span className="val highlight">{t("wallet.back.next_val")}</span></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="tap-hint">Tap to Flip ↻</div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ... (Layout Styles 유지) ... */
        .section-wallet { padding: 100px 0; background: #000; color: #fff; border-radius: 40px; margin: 40px 0; overflow: hidden; position: relative; }
        .layout-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .badge-pill { display: inline-block; font-size: 11px; font-weight: 700; color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.3); padding: 6px 12px; border-radius: 99px; margin-bottom: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
        .h2-wallet { font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-gold { background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p-wallet { font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px; word-break: keep-all; }

        .feature-list { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; }
        .f-item { display: flex; gap: 16px; align-items: flex-start; }
        .f-icon { min-width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFD700; }
        .f-text h4 { font-size: 16px; font-weight: 700; margin: 0 0 4px 0; color: #fff; }
        .f-text p { font-size: 14px; color: #a1a1a6; margin: 0; line-height: 1.5; word-break: keep-all; }

        /* 🟢 Restored Switcher Styles */
        .tier-switcher-box { margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
        .switcher-label { font-size: 11px; color: #86868b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .market-link { font-size: 11px; color: #0071e3; cursor: pointer; font-weight: 600; transition: color 0.2s; }
        .market-link:hover { color: #2980b9; text-decoration: underline; }
        .switcher-btns { display: flex; gap: 8px; }
        .tier-btn { flex: 1; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #86868b; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .tier-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .tier-btn.active { background: #fff; color: #000; border-color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }

        /* 3D Flip System */
        .visual-col { display: flex; flex-direction: column; align-items: center; position: relative; }
        .wallet-container { position: relative; width: 300px; height: 460px; perspective: 1000px; cursor: pointer; }
        .flipper { width: 100%; height: 100%; position: relative; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
        .flipper.flipped { transform: rotateY(180deg); }
        .front, .back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 20px; }
        .back { transform: rotateY(180deg); }
        .back-card-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #333; border-radius: 20px; transform: translateY(16px) scale(0.95); opacity: 0.5; z-index: 0; }
        .tap-hint { margin-top: 30px; color: #555; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        /* 🟢 Card Materials */
        .wallet-card { 
          width: 100%; height: 100%; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; 
          transform: translateZ(0); border: 1px solid rgba(255,255,255,0.1); 
        }

        .basic-bg { background: linear-gradient(135deg, #f5f5f7 0%, #d2d2d7 100%); }

        .fan-bg { 
          background: linear-gradient(135deg, #3a3a3c 0%, #1c1c1e 100%);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .fan-bg .holo-shine { 
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 70%);
          background-size: 200% 100%; 
          animation: metal-sheen 4s infinite linear;
        }

        .gold-bg { 
          background: linear-gradient(45deg, #FFD700, #FDB931, #E5C100, #FFD700); 
          background-size: 300% 300%; 
          animation: liquid-flow 6s ease infinite, border-pulse 3s infinite alternate; 
          box-shadow: 0 20px 60px rgba(255,215,0,0.3); 
        }
        .gold-bg .holo-shine { 
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%); 
          animation: holo-move 4s infinite linear; 
          mix-blend-mode: overlay; 
        }

        @keyframes metal-sheen { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @keyframes liquid-flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes holo-move { 0% { transform: translateY(0) translateX(0) rotate(30deg); } 100% { transform: translateY(20%) translateX(-20%) rotate(30deg); } }
        @keyframes border-pulse { from { border-color: rgba(255,215,0,0.3); } to { border-color: rgba(255,255,255,0.8); } }

        /* Pass Content */
        .pass-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5; }
        .pass-logo { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 18px; transition: color 0.3s; }
        .logo-dot { width: 10px; height: 10px; border-radius: 50%; transition: background 0.3s; }
        
        .live-status { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 99px; backdrop-filter: blur(4px); }
        .status-dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .status-dot.pulse { animation: pulse-green 2s infinite; }
        @keyframes pulse-green { 0% { box-shadow: 0 0 0 0 rgba(52,199,89, 0.7); } 70% { box-shadow: 0 0 0 4px rgba(52,199,89, 0); } 100% { box-shadow: 0 0 0 0 rgba(52,199,89, 0); } }

        .pass-body { padding: 20px 24px; flex: 1; transition: color 0.3s; position: relative; z-index: 5; }
        .pass-row { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: flex-end; }
        .pass-field label { display: block; font-size: 10px; margin-bottom: 4px; font-weight: 700; letter-spacing: 0.5px; }
        .pass-field .value { font-size: 17px; font-weight: 700; letter-spacing: -0.02em; }
        .pass-field.right { text-align: right; }

        .profile-avatar { width: 44px; height: 44px; background: rgba(255,255,255,0.3); border-radius: 50%; padding: 2px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .avatar-circle { width: 100%; height: 100%; background: #f5f5f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }

        /* Particles */
        .particles-container { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
        .particle { position: absolute; width: 4px; height: 4px; border-radius: 50%; opacity: 0.4; animation: float-particle 4s infinite linear; }
        .p0 { top: 20%; left: 20%; animation-duration: 6s; }
        .p1 { top: 80%; left: 80%; animation-duration: 5s; animation-delay: 1s; }
        .p2 { top: 40%; left: 60%; animation-duration: 7s; animation-delay: 2s; width: 2px; height: 2px; }
        .p3 { top: 70%; left: 10%; animation-duration: 4s; }
        .p4 { top: 10%; left: 90%; animation-duration: 8s; width: 3px; height: 3px; }
        .p5 { top: 50%; left: 50%; animation-duration: 9s; width: 2px; height: 2px; }
        @keyframes float-particle { 
          0% { transform: translateY(0) translateX(0); opacity: 0; } 
          50% { opacity: 0.8; } 
          100% { transform: translateY(-40px) translateX(20px); opacity: 0; } 
        }

        .pass-barcode { height: 50px; background: rgba(255,255,255,0.9); margin: 0 20px 16px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 3px; padding: 0 10px; position: relative; z-index: 5; }
        .bar-line { background: #000; }
        
        .skin-tag { font-size: 10px; text-align: center; margin-bottom: 12px; opacity: 0.6; font-weight: 600; letter-spacing: 0.5px; position: relative; z-index: 5; }

        /* Back Styles */
        .back-pass { background: #1c1c1e; border: 1px solid rgba(255,255,255,0.1); padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .qr-section { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 40px; }
        .qr-box { width: 140px; height: 140px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; }
        .qr-pattern { width: 120px; height: 120px; background-image: radial-gradient(#000 2px, transparent 2px); background-size: 10px 10px; opacity: 0.8; }
        .qr-logo { position: absolute; width: 30px; height: 30px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .qr-label { font-size: 12px; color: #86868b; font-weight: 500; letter-spacing: 0.5px; }
        .back-info { width: 100%; display: flex; flex-direction: column; gap: 16px; }
        .info-row { display: flex; justify-content: space-between; align-items: center; font-size: 14px; }
        .info-row .label { color: #86868b; }
        .info-row .val { color: #fff; font-weight: 600; }
        .info-row .val.highlight { color: #FFD700; }
        .divider { height: 1px; background: rgba(255,255,255,0.1); width: 100%; }

        @media (max-width: 900px) { .layout-split { grid-template-columns: 1fr; gap: 40px; } .visual-col { margin-top: 20px; } .h2-wallet { font-size: 36px; } }
      `}</style>
    </section>
  );
}