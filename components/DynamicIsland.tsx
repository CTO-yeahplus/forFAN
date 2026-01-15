"use client";

import React, { createContext, useContext, useState } from "react";
import Icon from "./Icon";

// 1. Context 정의
type IslandState = {
  isActive: boolean;
  message: string;
  subMessage?: string;
  icon?: string;
};

type IslandContextType = {
  triggerIsland: (msg: string, sub?: string, icon?: string) => void;
};

const IslandContext = createContext<IslandContextType | null>(null);

export const useDynamicIsland = () => {
  const context = useContext(IslandContext);
  if (!context) throw new Error("useDynamicIsland must be used within a DynamicIslandProvider");
  return context;
};

export default function DynamicIslandProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IslandState>({ isActive: false, message: "", icon: "spark" });

  const triggerIsland = (message: string, subMessage: string = "", icon: string = "spark") => {
    setState({ isActive: false, message: "", icon }); // Reset to re-trigger animation
    
    setTimeout(() => {
      setState({ isActive: true, message, subMessage, icon });
    }, 50);

    setTimeout(() => {
      setState((prev) => ({ ...prev, isActive: false }));
    }, 4000); // 4초 후 닫힘
  };

  return (
    <IslandContext.Provider value={{ triggerIsland }}>
      {children}
      
      {/* 🏝️ UI Container */}
      <div className="island-container">
        <div className={`island-pill ${state.isActive ? "expanded" : "idle"}`}>
          <div className="island-content">
            <div className="content-layout">
              <div className="icon-area">
                <div className={`anim-icon ${state.isActive ? "pop-in" : ""}`}>
                   <Icon name={state.icon} />
                </div>
              </div>
              <div className="text-area">
                <span className="title">{state.message}</span>
                {state.subMessage && <span className="desc">{state.subMessage}</span>}
              </div>
              {/* 장식용 오디오 바 */}
              <div className="audio-bars">
                 <span className="bar" />
                 <span className="bar" />
                 <span className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .island-container {
          position: fixed;
          /* 🟢 [수정] 헤더 높이(약 64px) + 여백(16px) = 80px 아래에 위치 */
          top: 15px; 
          left: 0; 
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 999; /* 네비게이션바보다 위, 혹은 상황에 따라 아래로 조정 */
          pointer-events: none;
        }

        .island-pill {
          background: #000;
          color: #fff;
          border-radius: 99px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 쫀득한 모션 */
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        /* Idle: 숨겨진 상태 (크기 0이 아니라 작게 대기하다가 사라짐) */
        .island-pill.idle {
          width: 0px; 
          height: 36px;
          opacity: 0;
          transform: translateY(-10px);
        }

        /* Expanded: 알림 표시 */
        .island-pill.expanded {
          width: 380px;
          height: 88px;
          opacity: 1;
          transform: translateY(0);
          border-radius: 44px;
        }

        .island-content {
          width: 380px; 
          height: 88px;
          display: flex;
          align-items: center;
          padding: 0 28px;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
        
        .island-pill.expanded .island-content {
          opacity: 1;
          transition-delay: 0.2s;
        }

        .content-layout {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 18px;
        }

        .icon-area {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #FFD700;
        }

        .anim-icon.pop-in {
          animation: pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .text-area {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
        .title { font-size: 15px; font-weight: 600; color: #fff; line-height: 1.3; }
        .desc { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.3; }

        .audio-bars { display: flex; gap: 4px; align-items: center; height: 20px; }
        .bar {
          width: 4px; background: #0071e3; border-radius: 99px;
          animation: eq 1s infinite ease-in-out;
        }
        .bar:nth-child(1) { height: 12px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 20px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 16px; animation-delay: 0.2s; }

        @keyframes pop {
          0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }
        }
        @keyframes eq {
          0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); }
        }

        @media (max-width: 450px) {
          .island-pill.expanded { width: 92vw; }
          .island-content { width: 100%; padding: 0 20px; }
        }
      `}</style>
    </IslandContext.Provider>
  );
}