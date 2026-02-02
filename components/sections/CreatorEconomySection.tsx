"use client";

import { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";
import { useLanguage } from "@/lib/useLanguage";

export default function CreatorEconomySection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  // 🔄 Cycle Animation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section creator-section" id="brandowner">
      <div className="container">
        
        {/* 1. Main Process Flow */}
        <div className="layout-grid">
          {/* Left: Text & Strategy */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-creator">Brand Owner</div>
              <h2 className="title-grad">From User<br/>to Brand Owner.</h2>
              <p className="lead-text">
                셀럽들만 프레임을 팔던 시대는 끝났습니다.<br/>
                forFAN에서는 당신의 <b>'채널(Channel)'</b>이 곧 글로벌 상점입니다.<br/>
                창작부터 전 세계 인생네컷 송출, 그리고 정산까지. 모든 비즈니스가 당신의 채널 안에서 이루어집니다.
              </p>

              <div className="feat-list">
                {/* 🟣 Step 0: Channel (Purple) */}
                <div className="feat-item">
                  <div className={`feat-icon color-purple ${activeStep === 0 ? 'active' : ''}`}>
                    <Icon name="spark" />
                  </div>
                  <div>
                    <h4>1. Open Your Channel</h4>
                    <p>나만의 프레임을 등록하고 브랜드를 만드세요. 구독자가 모이는 당신만의 공간입니다.</p>
                  </div>
                </div>

                {/* 🔴 Step 1: Connect (Pink) */}
                <div className="feat-item">
                  <div className={`feat-icon color-pink ${activeStep === 1 ? 'active' : ''}`}>
                    <Icon name="camera" />
                  </div>
                  <div>
                    <h4>2. Connect to Life4Cut</h4>
                    <p>업로드 즉시, 전 세계 5,000여 개 인생네컷 키오스크와 실시간 동기화됩니다.</p>
                  </div>
                </div>

                {/* 🟡 Step 3: Revenue (Gold) */}
                <div className="feat-item">
                  <div className={`feat-icon color-gold ${activeStep === 3 ? 'active' : ''}`}>
                    <Icon name="gift" />
                  </div>
                  <div>
                    <h4>3. Revenue Cycle</h4>
                    <p>누군가 당신의 프레임으로 사진을 찍을 때마다, 수익이 자동으로 정산됩니다.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Ecosystem Visualizer */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="process-container">
                {/* Circuit Lines */}
                <svg className="circuit-lines" viewBox="0 0 400 600">
                  <path d="M200,80 L200,520" className="circuit-path" style={{ opacity: 0.1 }} />
                  <circle cx="200" cy="80" r="4" fill="#0071e3">
                    <animate attributeName="cy" from="80" to="520" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="8s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Node 1: Channel (Purple) */}
                <div className={`process-node node-1 ${activeStep === 0 ? 'active' : ''}`}>
                  <div className="node-icon"><Icon name="spark" /></div>
                  <div className="node-content"><span className="node-label">My Channel</span><span className="node-desc">Frame Upload</span></div>
                  <div className="status-dot" />
                </div>
                <div className="flow-arrow">↓</div>

                {/* Node 2: Kiosk (Pink) */}
                <div className={`process-node node-2 ${activeStep === 1 ? 'active' : ''}`}>
                  <div className="node-icon"><Icon name="camera" /></div>
                  <div className="node-content"><span className="node-label">Life4Cut Kiosk</span><span className="node-desc">Sync Infrastructure</span></div>
                  {activeStep === 1 && <div className="pulse-ring" />}
                </div>
                <div className="flow-arrow">↓</div>

                {/* Node 3: Global Sales (Green - Hidden in Text, Visible in Visual) */}
                <div className={`process-node node-3 ${activeStep === 2 ? 'active' : ''}`}>
                  <div className="node-icon"><Icon name="map" /></div>
                  <div className="node-content"><span className="node-label">Global Sales</span><span className="node-desc">NY • Paris • Tokyo • Seoul</span></div>
                  <div className="map-dots"><span className="dot d1"/><span className="dot d2"/><span className="dot d3"/></div>
                </div>

                {/* Revenue Card (Gold) */}
                <div className={`return-path ${activeStep === 3 ? 'active' : ''}`}>
                  <div className="revenue-card-pop">
                    <div className="rev-icon"><Icon name="gift" /></div>
                    <div className="rev-text">
                      <span className="rev-label">Revenue Settled</span>
                      <span className="rev-amount">+$ 1,250.00</span>
                    </div>
                    <div className="rev-shine" />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ... (Benefits Section은 기존 유지) ... */}
        <div className="benefits-section">
           {/* ... (생략: 이전 코드와 동일) ... */}
           {/* 필요 시 이전 코드의 Benefits 섹션을 그대로 붙여넣으세요 */}
        </div>
      </div>

      <style jsx>{`
        /* ... (기본 스타일 유지) ... */
        .creator-section { padding: 100px 0; background: #000; color: #fff; overflow: hidden; position: relative; }
        .layout-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 120px; }

        .badge-creator { display: inline-block; font-size: 11px; font-weight: 700; color: #BF5AF2; border: 1px solid rgba(191, 90, 242, 0.3); padding: 6px 12px; border-radius: 99px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .title-grad { font-size: 48px; font-weight: 700; margin-bottom: 24px; line-height: 1.1; background: linear-gradient(135deg, #fff 0%, #a1a1a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .lead-text { font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px; word-break: keep-all; }
        .lead-text b { color: #fff; }
        
        .feat-list { display: flex; flex-direction: column; gap: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; }
        .feat-item { display: flex; gap: 16px; transition: opacity 0.3s; }
        
        /* 🟢 [수정] Left Icon Styles - Default */
        .feat-icon { 
          min-width: 40px; height: 40px; 
          background: rgba(255,255,255,0.1); color: #fff; 
          border-radius: 12px; display: flex; align-items: center; justify-content: center; 
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
        }

        /* 🟢 [수정] Left Icon Styles - Active Colors (Matching Right Side) */
        /* 1. Purple (Channel) */
        .feat-icon.active.color-purple { 
          background: #BF5AF2; color: #fff; 
          transform: scale(1.1); 
          box-shadow: 0 0 15px rgba(191, 90, 242, 0.5); 
        }
        /* 2. Pink (Kiosk) */
        .feat-icon.active.color-pink { 
          background: #FF2D55; color: #fff; 
          transform: scale(1.1); 
          box-shadow: 0 0 15px rgba(255, 45, 85, 0.5); 
        }
        /* 3. Gold (Revenue) */
        .feat-icon.active.color-gold { 
          background: #FFD700; color: #000; /* Gold needs dark text */
          transform: scale(1.1); 
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); 
        }

        .feat-item h4 { font-size: 16px; font-weight: 700; margin: 0 0 4px; color: #fff; }
        .feat-item p { font-size: 14px; color: #a1a1a6; margin: 0; line-height: 1.5; word-break: keep-all; }

        /* ... (Right Visual Column Styles - Same as before) ... */
        .visual-col { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
        .process-container { width: 400px; height: 100%; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px; }
        .circuit-lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
        .circuit-path { stroke: #333; stroke-width: 2; }
        .flow-arrow { color: #555; font-size: 12px; animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(5px); opacity: 1; } }

        /* Nodes */
        .process-node { width: 280px; background: #1c1c1e; border: 1px solid #333; border-radius: 20px; padding: 20px; display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .process-node.active { background: #2c2c2e; transform: scale(1.05); }
        
        /* Node Colors (Matching Left) */
        .process-node.active { border-color: #555; } /* Fallback */
        .node-1.active { border-color: #BF5AF2; box-shadow: 0 15px 40px rgba(191, 90, 242, 0.2); }
        .node-2.active { border-color: #FF2D55; box-shadow: 0 15px 40px rgba(255, 45, 85, 0.2); }
        .node-3.active { border-color: #34C759; box-shadow: 0 15px 40px rgba(52, 199, 89, 0.2); }

        .node-1.active .node-icon { background: #BF5AF2; color: #fff; }
        .node-2.active .node-icon { background: #FF2D55; color: #fff; }
        .node-3.active .node-icon { background: #34C759; color: #fff; }

        .node-icon { width: 48px; height: 48px; background: #333; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: background 0.3s; }
        .node-content { display: flex; flex-direction: column; }
        .node-label { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .node-desc { font-size: 11px; color: #888; }
        .status-dot { width: 8px; height: 8px; background: #333; border-radius: 50%; position: absolute; right: 20px; top: 20px; }
        .node-1.active .status-dot { background: #34C759; box-shadow: 0 0 10px #34C759; }
        .pulse-ring { position: absolute; inset: -5px; border: 2px solid #FF2D55; border-radius: 24px; opacity: 0; animation: pulseRing 1.5s infinite; }
        @keyframes pulseRing { 0% { transform: scale(0.95); opacity: 0.8; } 100% { transform: scale(1.1); opacity: 0; } }
        .map-dots { position: absolute; right: 20px; display: flex; gap: 4px; }
        .dot { width: 4px; height: 4px; border-radius: 50%; background: #555; }
        .node-3.active .d1 { background: #0071e3; animation: blink 1s infinite; }
        .node-3.active .d2 { background: #34C759; animation: blink 1s infinite 0.2s; }
        .node-3.active .d3 { background: #FFD700; animation: blink 1s infinite 0.4s; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .return-path { position: absolute; right: -80px; top: 50%; transform: translateY(-50%); opacity: 0; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10; pointer-events: none; }
        .return-path.active { opacity: 1; right: -40px; transform: translateY(-50%) translateX(0) scale(1.1); }
        .revenue-card-pop { background: linear-gradient(135deg, #FFD700, #FFA500); padding: 16px 24px; border-radius: 20px; display: flex; align-items: center; gap: 16px; box-shadow: 0 20px 60px rgba(255, 165, 0, 0.4); border: 1px solid rgba(255,255,255,0.4); position: relative; overflow: hidden; }
        .rev-icon { width: 40px; height: 40px; background: #fff; border-radius: 50%; color: #FFA500; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .rev-text { display: flex; flex-direction: column; }
        .rev-label { font-size: 10px; font-weight: 700; color: rgba(0,0,0,0.6); text-transform: uppercase; }
        .rev-amount { font-size: 20px; font-weight: 800; color: #000; font-variant-numeric: tabular-nums; }
        .rev-shine { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.8) 50%, transparent 55%); animation: shine 2s infinite; pointer-events: none; }
        @keyframes shine { 0% { transform: translate(-100%, -100%) rotate(45deg); } 100% { transform: translate(100%, 100%) rotate(45deg); } }

        /* ... (Benefits Section - Same as previous) ... */
        .benefits-section { margin-top: 60px; padding-top: 60px; border-top: 1px solid #222; text-align: center; width: 100%; }
        .benefits-title { font-size: 32px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .benefits-desc { font-size: 16px; color: #86868b; margin-bottom: 60px; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; text-align: left; width: 100%; }
        .benefit-card { background: #0a0a0a; border: 1px solid #333; border-radius: 24px; padding: 32px; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .benefit-card:hover { transform: translateY(-10px) scale(1.02); border-color: #555; }
        
        .theme-green:hover { box-shadow: 0 20px 60px rgba(52, 199, 89, 0.15); border-color: rgba(52, 199, 89, 0.4); }
        .theme-blue:hover { box-shadow: 0 20px 60px rgba(0, 113, 227, 0.15); border-color: rgba(0, 113, 227, 0.4); }
        .theme-pink:hover { box-shadow: 0 20px 60px rgba(255, 45, 85, 0.15); border-color: rgba(255, 45, 85, 0.4); }
        
        .b-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 24px; background: transparent; border: 1px solid rgba(255,255,255,0.1); animation: floatIcon 6s infinite ease-in-out; }
        @keyframes floatIcon { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        
        .chart { color: #34C759; box-shadow: 0 0 15px rgba(52, 199, 89, 0.1); }
        .globe { color: #0071e3; box-shadow: 0 0 15px rgba(0, 113, 227, 0.1); }
        .shake { color: #FF2D55; box-shadow: 0 0 15px rgba(255, 45, 85, 0.1); }
        
        .benefit-card h4 { font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .quote-bubble { background: rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px; border-left: 3px solid; color: #fff; font-size: 15px; font-weight: 600; line-height: 1.5; margin-bottom: 16px; }
        .theme-green .quote-bubble { border-left-color: #34C759; }
        .theme-green .quote-mark { color: #34C759; }
        .theme-blue .quote-bubble { border-left-color: #0071e3; }
        .theme-blue .quote-mark { color: #0071e3; }
        .theme-pink .quote-bubble { border-left-color: #FF2D55; }
        .theme-pink .quote-mark { color: #FF2D55; }
        .quote-mark { font-size: 20px; margin-right: 4px; font-family: serif; }
        .desc { font-size: 14px; color: #86868b; line-height: 1.6; word-break: keep-all; }
        .desc b { color: #fff; }

        @media (max-width: 900px) {
          .layout-grid { grid-template-columns: 1fr; }
          .visual-col { height: 600px; margin-top: 40px; }
          .process-container { width: 100%; }
          .return-path.active { right: 0; transform: translateY(-50%) translateX(0); }
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}