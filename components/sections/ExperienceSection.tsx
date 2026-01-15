"use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

// ScreenContent 컴포넌트는 이전과 동일하므로 생략하거나 기존 코드를 유지하세요.
const ScreenContent = ({ phase }: { phase: Phase }) => {
    // ... (이전 코드의 ScreenContent 내용 그대로 사용)
    if (phase === "Before") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-header">Today's Pick</div>
            <div className="mock-card big"><Icon name="spark" /><span>Romantic Mood</span></div>
            <div className="mock-row"><div className="mock-card small" /><div className="mock-card small" /></div>
            <div className="mock-msg">촬영 전, 설렘을 미리 확인하세요.</div>
          </div>
        );
      }
      if (phase === "During") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-cam-view">
              <div className="focus-ring" />
              <div className="pose-tip"><Icon name="hint" /><span>고개를 살짝 왼쪽으로 15°</span></div>
            </div>
            <div className="mock-controls"><div className="shutter-btn" /></div>
            <div className="mock-msg">망설임 없는 완벽한 포즈 가이드.</div>
          </div>
        );
      }
      return (
        <div className="screen-inner fade-in">
          <div className="mock-header">Your Memories</div>
          <div className="mock-list">
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '60%'}}/><span style={{width: '40%'}}/></div></div>
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '70%'}}/></div></div>
          </div>
          <div className="mock-toast"><Icon name="gift" /><span>Quiet Reward Arrived</span></div>
        </div>
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
        const nextIdx = (idx + 1) % phases.length;
        return phases[nextIdx];
      });
    }, 4000); // 4초마다 전환

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    // SectionShell은 page.tsx에서 감싸고 있으므로 여기선 div로 처리
    <div 
      className="experience-inner"
      onMouseEnter={() => setIsPaused(true)} // 마우스 올리면 일시정지
      onMouseLeave={() => setIsPaused(false)} // 떼면 다시 재생
    >
      <div className="container">
        <SectionHeader
          title="경험의 흐름: Before · During · After"
          lead="경험은 멈추지 않고 흐릅니다. 앱 화면 속에서 시간의 흐름에 따라 변화하는 가치를 확인하세요."
        />

        <div className="exp-layout">
          {/* Left: Controls with Progress */}
          <div className="exp-controls" style={{ minHeight: "420px" }}>
            <div className="tab-pills">
              {phases.map((p) => (
                <button
                  key={p}
                  onClick={() => setTab(p)}
                  className={`tab-pill ${tab === p ? "active" : ""}`}
                >
                  <span className="tab-text">{p}</span>
                  {/* ⏳ Progress Bar (Active일 때만 보임) */}
                  {tab === p && !isPaused && (
                    <div className="progress-track">
                      <div className="progress-bar" />
                    </div>
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
            
            {/* Background Glow */}
            <div className={`visual-glow ${tab.toLowerCase()}`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-inner { width: 100%; position: relative; }

        .exp-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: start; margin-top: 40px;
        }

        /* Tabs with Progress */
        .tab-pills {
          display: flex; gap: 8px; margin-bottom: 40px;
          background: rgba(0,0,0,0.05); padding: 4px; border-radius: 99px;
          width: fit-content;
        }
        .tab-pill {
          position: relative; overflow: hidden;
          padding: 10px 24px; border-radius: 99px; border: none; font-size: 14px; font-weight: 600; cursor: pointer;
          background: transparent; color: #86868b; transition: color 0.3s;
        }
        .tab-pill.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        
        .tab-text { position: relative; z-index: 2; }

        /* ⏳ Progress Animation */
        .progress-track {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background: transparent;
        }
        .progress-bar {
          height: 100%; background: #0071e3; width: 0;
          animation: progress 4s linear forwards;
        }
        @keyframes progress { from { width: 0; } to { width: 100%; } }

        /* Detail Cards Animation */
        .exp-detail-card {
          background: #fff; padding: 20px; border-radius: 20px;
          display: flex; gap: 16px; margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .fade-in-card { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .detail-icon { min-width: 40px; height: 40px; background: #f5f5f7; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1d1d1f; }
        .detail-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
        .detail-desc { margin: 0; font-size: 14px; color: #86868b; line-height: 1.5; }

        /* iPhone Visuals (Same as before) */
        .exp-visual { position: relative; display: flex; justify-content: center; }
        .iphone-frame {
          width: 280px; height: 560px; background: #000; border-radius: 40px; padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2); position: relative; z-index: 2; border: 4px solid #333;
        }
        .notch { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: #000; border-radius: 12px; z-index: 10; }
        .screen { width: 100%; height: 100%; background: #fff; border-radius: 28px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        
        .screen-inner { padding: 40px 20px; height: 100%; display: flex; flex-direction: column; }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .mock-header { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
        .mock-card { background: #f5f5f7; border-radius: 16px; }
        .mock-card.big { height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; font-weight: 600; color: #555; margin-bottom: 12px; }
        .mock-row { display: flex; gap: 12px; margin-bottom: 20px; }
        .mock-card.small { height: 80px; flex: 1; }
        .mock-msg { margin-top: auto; font-size: 12px; color: #86868b; text-align: center; }

        .mock-cam-view { flex: 1; background: #333; border-radius: 16px; position: relative; margin-bottom: 20px; }
        .focus-ring { width: 80px; height: 80px; border: 1px solid #fff; border-radius: 50%; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); opacity: 0.5; }
        .pose-tip { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); color: #fff; padding: 8px 16px; border-radius: 99px; font-size: 12px; display: flex; gap: 6px; white-space: nowrap; }
        .shutter-btn { width: 60px; height: 60px; border-radius: 50%; border: 4px solid #ccc; margin: 0 auto; }

        .mock-item { display: flex; gap: 12px; margin-bottom: 16px; }
        .mock-thumb { width: 50px; height: 50px; background: #eee; border-radius: 12px; }
        .mock-text-lines { flex: 1; display: flex; flex-direction: column; gap: 6px; justify-content: center; }
        .mock-text-lines span { height: 8px; background: #f5f5f7; border-radius: 4px; display: block; }
        .mock-toast { background: #000; color: #fff; padding: 10px 16px; border-radius: 99px; display: flex; align-items: center; gap: 8px; font-size: 12px; margin-top: auto; width: fit-content; align-self: center; }

        .visual-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 350px; height: 600px; z-index: 1; filter: blur(60px); opacity: 0.6; transition: background 0.5s; }
        .visual-glow.before { background: radial-gradient(circle, #FFA500 0%, transparent 70%); }
        .visual-glow.during { background: radial-gradient(circle, #0071e3 0%, transparent 70%); }
        .visual-glow.after { background: radial-gradient(circle, #AF52DE 0%, transparent 70%); }

        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr; } .exp-visual { margin-top: 40px; } }
      `}</style>
    </div>
  );
}