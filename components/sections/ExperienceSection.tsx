"use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

// 🟢 [New] Contextual Pill (Dynamic Island Content)
const ContextPill = ({ phase }: { phase: Phase }) => {
  let text = "Searching...";
  let color = "#333";

  if (phase === "Before") { text = "매장까지 50m"; color = "#0071e3"; }
  if (phase === "During") { text = "촬영 중 (3/8)"; color = "#FF3B30"; }
  if (phase === "After")  { text = "취향 분석 완료"; color = "#AF52DE"; }

  return (
    <div className="dynamic-pill">
      <div className="pill-icon" style={{ background: color }} />
      <span className="pill-text">{text}</span>
      <div className="pill-wave" style={{ borderColor: color }} />
      
      <style jsx>{`
        .dynamic-pill {
          position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
          background: #000; padding: 6px 16px; border-radius: 99px;
          display: flex; align-items: center; gap: 8px; z-index: 20;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2); width: fit-content;
        }
        .pill-icon { width: 6px; height: 6px; border-radius: 50%; }
        .pill-text { font-size: 10px; font-weight: 600; color: #fff; letter-spacing: 0.5px; white-space: nowrap; }
        .pill-wave {
          position: absolute; right: 10px; width: 4px; height: 4px; border-radius: 50%; border: 1px solid;
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping { 75%, 100% { transform: scale(3); opacity: 0; } }
      `}</style>
    </div>
  );
};

// 🟢 [Updated] Screen Content (스타일 포함)
const ScreenContent = ({ phase }: { phase: Phase }) => {
  return (
    <>
      {/* Phase 1: Before */}
      {phase === "Before" && (
        <div className="screen-inner fade-in">
          <ContextPill phase="Before" />
          <div className="mock-header" style={{ marginTop: 40 }}>Today's Mood</div>
          
          <div className="mock-card hero-card">
            <div className="card-tag">Rainy Day Pick ☔️</div>
            <div className="card-visual">
              <div className="mood-blur blue" />
            </div>
            <div className="card-meta">
              <span>Blue Melancholy</span>
              <div className="btn-small">예약하기</div>
            </div>
          </div>

          <div className="mock-sub-row">
            <div className="sub-card"><div className="skel-text w60"/></div>
            <div className="sub-card"><div className="skel-text w40"/></div>
          </div>
        </div>
      )}

      {/* Phase 2: During */}
      {phase === "During" && (
        <div className="screen-inner fade-in bg-black">
          <ContextPill phase="During" />
          
          <div className="cam-viewport">
            <div className="focus-brackets">
              <span className="tl" /><span className="tr" /><span className="bl" /><span className="br" />
            </div>
            <div className="pose-guide-overlay">
              <div className="guide-icon"><Icon name="people" /></div>
              <span>턱을 살짝 당겨보세요</span>
            </div>
          </div>

          <div className="cam-controls">
            <div className="cam-btn shutter" />
          </div>
        </div>
      )}

      {/* Phase 3: After */}
      {phase === "After" && (
        <div className="screen-inner fade-in">
          <ContextPill phase="After" />
          <div className="mock-header" style={{ marginTop: 40 }}>Your Taste</div>
          
          <div className="receipt-paper">
            <div className="receipt-hole" />
            <div className="receipt-line title">TASTE ANALYSIS</div>
            <div className="receipt-divider" />
            <div className="receipt-row"><span>Mono Tone</span><span>72%</span></div>
            <div className="receipt-row"><span>Close-up</span><span>15%</span></div>
            <div className="receipt-divider" />
            <div className="receipt-keyword">#Minimalist</div>
            <div className="receipt-keyword">#Chic</div>
            <div className="barcode-strip" />
          </div>

          <div className="mock-toast">
            <div style={{width: 16}}><Icon name="gift" /></div>
            <span>Quiet Reward Added</span>
          </div>
        </div>
      )}

      {/* 🟢 ScreenContent 전용 스타일 (여기에 있어야 적용됨) */}
      <style jsx>{`
        .screen-inner { padding: 20px; height: 100%; display: flex; flex-direction: column; position: relative; }
        .screen-inner.bg-black { background: #000; color: #fff; }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .mock-header { font-size: 24px; font-weight: 800; margin-bottom: 20px; color: #1d1d1f; }
        
        /* Hero Card */
        .hero-card { background: #f5f5f7; border-radius: 20px; overflow: hidden; height: 220px; position: relative; display: flex; flex-direction: column; margin-bottom: 16px; }
        .card-tag { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.9); padding: 4px 10px; border-radius: 99px; font-size: 10px; font-weight: 700; color: #0071e3; z-index: 2; }
        .card-visual { flex: 1; background: #eee; position: relative; overflow: hidden; }
        .mood-blur { width: 150%; height: 150%; position: absolute; top: -25%; left: -25%; filter: blur(30px); opacity: 0.8; animation: move-bg 6s infinite alternate; }
        .mood-blur.blue { background: linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%); }
        @keyframes move-bg { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-10px, -10px) scale(1.1); } }
        .card-meta { padding: 16px; background: #fff; display: flex; justify-content: space-between; align-items: center; }
        .card-meta span { font-weight: 700; font-size: 14px; color: #1d1d1f; }
        .btn-small { background: #000; color: #fff; font-size: 10px; padding: 6px 12px; border-radius: 99px; font-weight: 600; }
        
        .mock-sub-row { display: flex; gap: 10px; }
        .sub-card { flex: 1; height: 80px; background: #f5f5f7; border-radius: 16px; padding: 12px; }
        .skel-text { height: 6px; background: #e5e5e5; border-radius: 4px; margin-bottom: 6px; }
        .w60 { width: 60%; } .w40 { width: 40%; }

        /* Cam View */
        .cam-viewport { flex: 1; margin: 60px 0 20px; border-radius: 16px; position: relative; border: 1px solid rgba(255,255,255,0.2); overflow: hidden; }
        .focus-brackets span { position: absolute; width: 10px; height: 10px; border-color: rgba(255,255,255,0.5); border-style: solid; }
        .tl { top: 10px; left: 10px; border-width: 2px 0 0 2px; }
        .tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; }
        .bl { bottom: 10px; left: 10px; border-width: 0 0 2px 2px; }
        .br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }
        .pose-guide-overlay { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); padding: 8px 16px; border-radius: 99px; display: flex; align-items: center; gap: 8px; backdrop-filter: blur(4px); }
        .guide-icon { color: #fff; width: 16px; }
        .pose-guide-overlay span { color: #fff; font-size: 11px; font-weight: 600; white-space: nowrap; }
        .cam-controls { height: 80px; display: flex; justify-content: center; align-items: center; }
        .shutter { width: 60px; height: 60px; border-radius: 50%; border: 4px solid #fff; position: relative; }
        .shutter::after { content: ""; position: absolute; inset: 4px; background: #fff; border-radius: 50%; }

        /* Receipt */
        .receipt-paper { background: #fbfbfd; border: 1px solid #e5e5e5; border-radius: 12px; padding: 20px; position: relative; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transform: rotate(-2deg); animation: float-receipt 3s ease-in-out infinite; }
        @keyframes float-receipt { 0%, 100% { transform: rotate(-2deg) translateY(0); } 50% { transform: rotate(-2deg) translateY(-5px); } }
        .receipt-hole { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: #333; border-radius: 50%; }
        .receipt-line { font-family: monospace; font-size: 12px; color: #86868b; text-align: center; margin-bottom: 12px; }
        .receipt-line.title { font-weight: 800; color: #1d1d1f; letter-spacing: 1px; font-size: 14px; }
        .receipt-divider { height: 1px; border-top: 1px dashed #d2d2d7; margin: 12px 0; }
        .receipt-row { display: flex; justify-content: space-between; font-family: monospace; font-size: 12px; margin-bottom: 6px; color: #1d1d1f; }
        .receipt-keyword { font-size: 20px; font-weight: 900; text-align: center; color: #1d1d1f; margin-bottom: 4px; letter-spacing: -0.02em; }
        .barcode-strip { height: 30px; background-image: linear-gradient(90deg, #333 2px, transparent 2px, #333 4px, transparent 4px); margin-top: 16px; opacity: 0.2; }
        
        .mock-toast { background: #000; color: #fff; padding: 12px 20px; border-radius: 99px; display: flex; align-items: center; gap: 8px; font-size: 12px; margin: auto auto 20px; font-weight: 600; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
      `}</style>
    </>
  );
};

export default function ExperienceSection() {
  const phases: Phase[] = ["Before", "During", "After"];
  const [tab, setTab] = useState<Phase>("Before");
  const [isPaused, setIsPaused] = useState(false);
  
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  // 🔄 Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setTab((prev) => {
        const idx = phases.indexOf(prev);
        return phases[(idx + 1) % phases.length];
      });
    }, 4000); 
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div 
      className="experience-inner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SectionHeader
        title="경험의 흐름: Before · During · After"
        lead="경험은 멈추지 않고 흐릅니다. 앱 화면 속에서 시간의 흐름에 따라 변화하는 가치를 확인하세요."
      />

      <div className="exp-layout">
        {/* Left: Controls */}
        <div className="exp-controls">
          <div className="tab-pills">
            {phases.map((p) => (
              <button
                key={p}
                onClick={() => setTab(p)}
                className={`tab-pill ${tab === p ? "active" : ""}`}
              >
                <span className="tab-text">{p}</span>
                {tab === p && !isPaused && (
                  <div className="progress-track"><div className="progress-bar" /></div>
                )}
              </button>
            ))}
          </div>

          <div className="exp-detail-list">
            {filtered.map((item) => (
              <div key={item.id} className="exp-detail-card fade-in-card">
                <div className="detail-icon"><Icon name={item.icon} /></div>
                <div>
                  <h4 className="detail-title">{item.title}</h4>
                  <p className="detail-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: iPhone Mockup */}
        <div className="exp-visual">
          <div className="iphone-frame">
            <div className="notch" />
            <div className="screen">
              <ScreenContent phase={tab} />
            </div>
          </div>
          <div className={`visual-glow ${tab.toLowerCase()}`} />
        </div>
      </div>

      <style jsx>{`
        .experience-inner { width: 100%; position: relative; }
        .exp-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; margin-top: 40px; }

        /* Tabs */
        .tab-pills { display: flex; gap: 8px; margin-bottom: 40px; background: rgba(0,0,0,0.05); padding: 4px; border-radius: 99px; width: fit-content; }
        .tab-pill { position: relative; overflow: hidden; padding: 10px 24px; border-radius: 99px; border: none; font-size: 14px; font-weight: 600; cursor: pointer; background: transparent; color: #86868b; transition: color 0.3s; }
        .tab-pill.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .tab-text { position: relative; z-index: 2; }
        .progress-track { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: transparent; }
        .progress-bar { height: 100%; background: #0071e3; width: 0; animation: progress 4s linear forwards; }
        @keyframes progress { from { width: 0; } to { width: 100%; } }

        /* Detail List */
        .exp-detail-card { background: #fff; padding: 20px; border-radius: 20px; display: flex; gap: 16px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.04); }
        .fade-in-card { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .detail-icon { min-width: 40px; height: 40px; background: #f5f5f7; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1d1d1f; }
        .detail-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #1d1d1f; }
        .detail-desc { margin: 0; font-size: 14px; color: #86868b; line-height: 1.5; word-break: keep-all; }

        /* Visuals */
        .exp-visual { position: relative; display: flex; justify-content: center; }
        .iphone-frame { width: 280px; height: 560px; background: #000; border-radius: 40px; padding: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); position: relative; z-index: 2; border: 4px solid #333; }
        .notch { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: #000; border-radius: 12px; z-index: 10; }
        .screen { width: 100%; height: 100%; background: #fff; border-radius: 28px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        
        .visual-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 350px; height: 600px; z-index: 1; filter: blur(80px); opacity: 0.5; transition: background 0.8s; }
        .visual-glow.before { background: radial-gradient(circle, #a1c4fd 0%, transparent 70%); }
        .visual-glow.during { background: radial-gradient(circle, #FF3B30 0%, transparent 70%); }
        .visual-glow.after { background: radial-gradient(circle, #AF52DE 0%, transparent 70%); }

        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr; } .exp-visual { margin-top: 40px; } }
      `}</style>
    </div>
  );
}