"use client";

import { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useLanguage } from "@/lib/useLanguage";

export default function RevenueLogicSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(0);

  // Auto-cycle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === null || prev >= 2 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🟢 [Updated] Channel-based Logic Data
  const channelLogic = [
    {
      step: "01",
      title: "Channel Trigger",
      subtitle: "Experience → Retention",
      desc: "내 채널에 신규 프레임을 올리면, 구독자들에게 'New Drop' 알림이 전송되어 즉각적인 재방문을 유도합니다.",
      icon: "spark"
    },
    {
      step: "02",
      title: "Fandom Value",
      subtitle: "Retention → High ARPU",
      desc: "팬덤은 단순한 사진이 아니라 '가치'를 소비합니다. 한정판 프레임과 굿즈는 자연스럽게 객단가를 높입니다.",
      icon: "gift"
    },
    {
      step: "03",
      title: "Viral Expansion",
      subtitle: "Belonging → Organic Growth",
      desc: "“이 작가님 프레임 나왔어!” 유저가 자발적으로 채널을 홍보하며, 마케팅 비용 없이 신규 유저를 데려옵니다.",
      icon: "people"
    }
  ];

  return (
    <section className="section" id="revenue">
      <div className="container">
        
        {/* 🟢 Rounded Box Styling */}
        <div className="revenue-bg">
          
          {/* ⚡ Background Circuit Grid */}
          <div className="circuit-grid-bg">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="20%" cy="20%" r="200" fill="rgba(0, 113, 227, 0.15)" filter="blur(80px)" />
              <circle cx="80%" cy="80%" r="200" fill="rgba(175, 82, 222, 0.15)" filter="blur(80px)" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="dark-header">
              <SectionHeader
                title="Logic Flow: 24시간 멈추지 않는 매출 회로"
                lead={
                  <span style={{color: '#a1a1a6'}}>
                    채널(Channel)이 <strong style={{color: '#fff', fontWeight: 700}}>트래픽</strong>을 만들고, 
                    팬덤이 <strong style={{color: '#fff', fontWeight: 700}}>매출</strong>을 키웁니다.<br/>
                    forFAN은 이 완벽한 비즈니스 회로를 기술로 자동화했습니다.
                  </span>
                }
              />
            </div>

            <div className="circuit-board">
              {channelLogic.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`circuit-node ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <ScrollReveal delay={idx * 150}>
                    <div className="logic-card glass-card">
                      <div className="card-header-row">
                         <div className="status-dot-wrapper">
                           <div className="status-dot" />
                           <div className="status-ping" />
                         </div>
                         <div className="step-badge">{item.step}</div>
                      </div>
                      
                      <div className="icon-area">
                        <div className="card-icon"><Icon name={item.icon} /></div>
                        <div className="connector-dots">
                          {[...Array(3)].map((_, i) => <span key={i} className="dot"/>)}
                        </div>
                      </div>

                      <h3 className="card-title">{item.title}</h3>
                      <div className="card-sub">{item.subtitle}</div>
                      <p className="card-desc">{item.desc}</p>
                      
                      {/* Flow Connector Arrow */}
                      {idx < channelLogic.length - 1 && (
                        <div className="connector-line flowing">
                          <div className="energy-beam" />
                          <div className="arrow-head">▶</div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Box Styling */
        .revenue-bg {
          position: relative;
          background: #0d1117; 
          background-image: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
          color: #fff;
          border-radius: 48px; 
          overflow: hidden; 
          padding: 80px 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
          margin: 40px 0;
        }

        .circuit-grid-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dark-header :global(h2) { color: #fff !important; }
        
        .circuit-board { display: flex; gap: 30px; align-items: stretch; padding: 20px 0; position: relative; }
        .circuit-node { flex: 1; position: relative; display: flex; }

        .glass-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
        }

        .circuit-node.active .glass-card {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 113, 227, 0.15);
          border-color: rgba(0, 113, 227, 0.4);
        }

        .card-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        
        .status-dot-wrapper { position: relative; width: 8px; height: 8px; }
        .status-dot { width: 100%; height: 100%; border-radius: 50%; background: #333; transition: background 0.3s; }
        .circuit-node.active .status-dot { background: #34C759; box-shadow: 0 0 10px #34C759; }
        .status-ping { position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #34C759; opacity: 0; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .circuit-node.active .status-ping { opacity: 1; }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

        .step-badge { font-family: monospace; font-size: 12px; color: #555; font-weight: 700; letter-spacing: 1px; }
        .circuit-node.active .step-badge { color: #fff; text-shadow: 0 0 8px rgba(255,255,255,0.5); }

        .icon-area { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .card-icon { width: 48px; height: 48px; background: rgba(255,255,255,0.05); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #888; transition: all 0.3s; }
        .circuit-node.active .card-icon { background: #0071e3; color: #fff; box-shadow: 0 0 20px rgba(0,113,227,0.4); transform: scale(1.1); }
        
        .connector-dots { display: flex; gap: 4px; }
        .dot { width: 3px; height: 3px; background: #333; border-radius: 50%; }
        .circuit-node.active .dot { background: #0071e3; animation: dotPulse 1s infinite alternate; }
        @keyframes dotPulse { from { opacity: 0.3; } to { opacity: 1; } }

        .card-title { font-size: 20px; font-weight: 700; margin-bottom: 4px; color: #fff; }
        .card-sub { font-size: 11px; font-weight: 600; color: #0071e3; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
        .card-desc { font-size: 15px; color: #a1a1a6; line-height: 1.6; word-break: keep-all; flex: 1; }

        /* Flow Connector */
        .connector-line { position: absolute; top: 50%; left: 100%; width: 30px; height: 2px; background: rgba(255,255,255,0.1); transform: translateY(-50%); z-index: 1; overflow: hidden; }
        .energy-beam { width: 50%; height: 100%; background: linear-gradient(90deg, transparent, #0071e3, transparent); animation: beam-flow 1.5s infinite linear; filter: drop-shadow(0 0 4px #0071e3); }
        .arrow-head { position: absolute; right: -6px; top: -8px; font-size: 10px; color: rgba(255,255,255,0.1); transition: color 0.3s; }
        .circuit-node.active + div .arrow-head { color: #0071e3; }

        @keyframes beam-flow { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }

        @media (max-width: 900px) {
          .revenue-bg { padding: 40px 24px; border-radius: 32px; }
          .circuit-board { flex-direction: column; gap: 40px; }
          .connector-line { top: 100%; left: 50%; width: 2px; height: 40px; transform: translateX(-50%); }
          .energy-beam { width: 100%; height: 50%; background: linear-gradient(180deg, transparent, #0071e3, transparent); animation: beam-flow-vert 1.5s infinite linear; }
          @keyframes beam-flow-vert { 0% { transform: translateY(-150%); } 100% { transform: translateY(250%); } }
          .arrow-head { right: -4px; top: auto; bottom: -8px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}