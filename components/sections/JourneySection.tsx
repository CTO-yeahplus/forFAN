"use client";

import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <div className="journey-inner">
      <SectionHeader
        title="forFAN 고객 여정 지도"
        lead={
          <>
            고객의 시간은 멈춰있지 않습니다.<br/>
            <b>Before(기대)</b>에서 <b>During(몰입)</b>을 거쳐 <b>After(여운)</b>까지, 끊김 없는 빛의 흐름을 설계합니다.
          </>
        }
      />

      <div className="journey-wrapper">
        
        {/* 🌟 The Active Pipeline (움직이는 경로) */}
        <div className="pipeline-container">
          {/* 1. Base Track (어두운 레일) */}
          <div className="track-rail" />

          {/* 2. Traveling Beam (이동하는 에너지) */}
          <div className="energy-packet">
            <div className="beam-head" />
            <div className="beam-tail" />
          </div>

          {/* 3. Nodes (정거장) - 색상 적용 */}
          <div className="node n-before">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-during">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-after">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
        </div>

        {/* Cards Grid */}
        <SectionGrid>
          {journeyMap.map((j, idx) => (
            <ItemCard
              key={j.phase}
              span={4}
              delay={idx * 150} 
              item={{
                id: j.phase,
                tag: j.phase,
                title: j.title,
                desc: "단계별 핵심 목표를 달성합니다.",
                bullets: j.bullets,
                icon: j.icon,
              }}
            />
          ))}
        </SectionGrid>
      </div>

      <style jsx>{`
        .journey-inner { position: relative; width: 100%; }
        .journey-wrapper { position: relative; padding-top: 40px; }

        /* 🛤️ Pipeline System */
        .pipeline-container {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          margin-top: -20px; /* 카드 위쪽으로 배치 */
          z-index: 0;
        }

        /* 1. Track */
        .track-rail {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          background: rgba(0,0,0,0.06); border-radius: 4px;
        }

        /* 2. Traveling Beam Animation */
        .energy-packet {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          overflow: hidden;
        }
        
        .beam-head {
          position: absolute; top: 0; width: 60px; height: 100%;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          filter: blur(1px);
          animation: travel-x 4s linear infinite;
        }
        
        .beam-tail {
          position: absolute; top: 0; width: 200px; height: 100%;
          /* 그라디언트: Orange -> Blue -> Purple 순으로 섞인 빛 */
          background: linear-gradient(90deg, transparent, #FF9500, #0071e3, #AF52DE, transparent);
          opacity: 0.8;
          animation: travel-x 4s linear infinite;
        }

        @keyframes travel-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); } /* 화면 밖으로 충분히 이동 */
        }

        /* 3. Nodes (Color Coded) */
        .node {
          position: absolute; top: -5px; width: 12px; height: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .node-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #fff;
          border: 2px solid #e5e5ea; z-index: 2; transition: all 0.3s;
        }
        .node-ripple {
          position: absolute; width: 20px; height: 20px; border-radius: 50%;
          opacity: 0; z-index: 1;
        }

        /* Positioning Nodes (Grid 중앙 정렬) */
        .n-before { left: 16.5%; }
        .n-during { left: 50%; transform: translateX(-50%); }
        .n-after  { left: 83.5%; }

        /* 🔥 Animations per Phase Color */
        /* Before: Orange */
        .n-before .node-dot { animation: hit-orange 4s infinite linear; animation-delay: 0.4s; }
        .n-before .node-ripple { border: 2px solid #FF9500; animation: ripple 4s infinite linear; animation-delay: 0.4s; }

        /* During: Blue */
        .n-during .node-dot { animation: hit-blue 4s infinite linear; animation-delay: 1.5s; }
        .n-during .node-ripple { border: 2px solid #0071e3; animation: ripple 4s infinite linear; animation-delay: 1.5s; }

        /* After: Purple */
        .n-after .node-dot { animation: hit-purple 4s infinite linear; animation-delay: 2.6s; }
        .n-after .node-ripple { border: 2px solid #AF52DE; animation: ripple 4s infinite linear; animation-delay: 2.6s; }

        @keyframes hit-orange { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #FF9500; background: #FF9500; } }
        @keyframes hit-blue   { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #0071e3; background: #0071e3; } }
        @keyframes hit-purple { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #AF52DE; background: #AF52DE; } }

        @keyframes ripple { 
          0% { transform: scale(1); opacity: 1; } 
          100% { transform: scale(3); opacity: 0; } 
        }

        @media (max-width: 900px) {
          .pipeline-container { width: 2px; height: 100%; left: 50%; top: 0; margin-top: 0; transform: translateX(-50%); }
          .track-rail { width: 2px; height: 100%; top: 0; left: 0; }
          .energy-packet { width: 2px; height: 100%; top: 0; left: 0; }
          .beam-head { width: 2px; height: 60px; animation: travel-y 4s linear infinite; }
          .beam-tail { width: 2px; height: 200px; background: linear-gradient(180deg, transparent, #FF9500, #0071e3, #AF52DE, transparent); animation: travel-y 4s linear infinite; }
          
          .node { left: -5px !important; transform: none !important; }
          .n-before { top: 16%; }
          .n-during { top: 50%; }
          .n-after  { top: 83%; }

          @keyframes travel-y { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
        }
      `}</style>
    </div>
  );
}