"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { revenueLogic } from "@/content/data";
import { useState, useEffect } from "react";

export default function RevenueSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Auto-cycle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === null || prev >= 2 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="revenue">
      <div className="container">
        
        {/* 🟢 [수정] Round Styling 강화: overflow-hidden 필수 */}
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
                lead={<span style={{color: '#a1a1a6'}}>고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다. <br/>이 흐름은 지금도 멈추지 않고 매출을 만들고 있습니다.</span>}
              />
            </div>

            <div className="circuit-board">
              {revenueLogic.map((item, idx) => (
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
                         <div className="card-icon"><Icon name={item.icon} /></div>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      
                      {idx < revenueLogic.length - 1 && (
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
          /* 핵심: 둥근 모서리와 넘침 방지 */
          border-radius: 48px; 
          overflow: hidden; 
          padding: 80px 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
          margin: 40px 0;
        }

        .circuit-grid-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dark-header :global(h2) { color: #fff !important; }
        
        .circuit-board { display: flex; gap: 40px; align-items: flex-start; padding: 20px 0; position: relative; }
        .circuit-node { flex: 1; position: relative; }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative; z-index: 2;
        }

        .circuit-node.active .glass-card {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 113, 227, 0.25);
          border-color: rgba(0, 113, 227, 0.5);
        }

        .card-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        
        .status-dot-wrapper { position: relative; width: 8px; height: 8px; }
        .status-dot { width: 100%; height: 100%; border-radius: 50%; background: #333; }
        .circuit-node.active .status-dot { background: #00ff41; box-shadow: 0 0 10px #00ff41; }
        .status-ping { position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #00ff41; opacity: 0; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .circuit-node.active .status-ping { opacity: 1; }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

        .card-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; }
        .circuit-node.active .card-icon { background: #0071e3; color: #fff; box-shadow: 0 0 20px rgba(0,113,227,0.4); }

        .card-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .card-desc { font-size: 14px; color: #a1a1a6; line-height: 1.6; }

        .connector-line { position: absolute; top: 50%; left: 100%; width: 40px; height: 4px; background: rgba(255,255,255,0.1); transform: translateY(-50%); z-index: 1; overflow: hidden; }
        .energy-beam { width: 50%; height: 100%; background: linear-gradient(90deg, transparent, #00e5ff, transparent); animation: beam-flow 1.5s infinite linear; filter: drop-shadow(0 0 5px #00e5ff); }
        .arrow-head { position: absolute; right: -6px; top: -7px; font-size: 12px; color: rgba(255,255,255,0.2); }
        .circuit-node.active + div .arrow-head { color: #00e5ff; }

        @keyframes beam-flow { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }

        @media (max-width: 900px) {
          .revenue-bg { padding: 40px 24px; border-radius: 32px; }
          .circuit-board { flex-direction: column; gap: 40px; }
          .connector-line { top: 100%; left: 50%; width: 4px; height: 40px; transform: translateX(-50%); }
          .energy-beam { width: 100%; height: 50%; background: linear-gradient(180deg, transparent, #00e5ff, transparent); animation: beam-flow-vert 1.5s infinite linear; }
          @keyframes beam-flow-vert { 0% { transform: translateY(-150%); } 100% { transform: translateY(250%); } }
          .arrow-head { right: -4px; top: auto; bottom: -10px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}