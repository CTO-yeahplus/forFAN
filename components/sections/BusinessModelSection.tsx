"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useLanguage } from "@/lib/useLanguage";

export default function BusinessModelSection() {
  const { t } = useLanguage();

  const businessModels = [
    {
        id: "C2E",
        title: "C2E Creator Ecosystem",
        goal: "창작자의 영감이 전 세계의 순간으로 실시간 동기화되는 경제 구조",
        tech: "Instant Asset Deployment & Global Sync",
        desc: "어젯밤 X(Twitter)를 뜨겁게 달군 밈(Meme)이 오늘 아침 당신의 인생네컷 프레임이 됩니다.  창작자가 '나만의 프레임' 툴로 빚어낸 영감은 즉시 글로벌 채널을 통해 판매되며, 전 세계 3,000여 개 키오스크와 지체 없이 동기화되어 문화의 속도를 그대로 촬영 현장으로 가져옵니다.",
        accent: "#A020F0", 
        icon: "spark"
      },
    {
      id: "COMM",
      title: "Creator Promotion Community",
      goal: "채널 운영자가 직접 팬덤을 만들고 프레임을 영업하는 마케팅 허브",
      tech: "Quiet Circles & UGC Promotion Engine",
      desc: "채널 운영자가 '내 프레임으로 인생샷 건지는 법', '조명 활용 팁' 등을 공유하며 자발적으로 자신의 채널과 프레임을 홍보합니다. 이는 곧바로 오프라인 방문과 판매로 이어지는 유기적 성장 엔진이 됩니다.",
      accent: "#00FF7F", 
      icon: "people"
    },
    {
      id: "SUB",
      title: "Tiered Membership Subscription",
      goal: "실버(900원)와 골드(1,900원)로 누리는 독점적 권한",
      tech: "Recurring Payment & Hidden Access Control",
      desc: "실버 등급은 스페셜 에디션 히든 프레임을, 골드 등급은 전 세계 모든 히든 프레임을 제한 없이 탐색하고 촬영할 수 있는 마스터 액세스 권한을 부여받습니다.",
      accent: "#FFD700", 
      icon: "gift"
    },
    {
      id: "SETTLE",
      title: "Real-time Settlement Engine",
      goal: "실시간 정산 및 생체 인증 기반의 무결성 거래",
      tech: "Precision Calculation & Biometric Auth",
      desc: "다중 서버 클러스터에서 글로벌 환율 API와 연동하여 창작자의 수익을 유저의 로컬 통화로 즉시 정산합니다. 가장 안전하고 우아한 결제 경험을 완성합니다.",
      accent: "#00E5FF", 
      icon: "lock"
    }
  ];

  return (
    <section className="section-island modern-orange-theme overflow-hidden" id="creator">
      {/* 🌊 Dynamic Background Elements */}
      <div className="bg-animation-container">
        <div className="aurora-blob a1" />
        <div className="aurora-blob a2" />
        <div className="aurora-blob a3" />
        <div className="particles-overlay" />
      </div>

      <div className="container relative-content">
        <div className="header-contrast">
          <SectionHeader 
            title="The Hyper-Growth Economy" 
            lead={
              <span className="lead-dark">
                forFAN은 <b>창작자의 홍보</b>가 <b>팬덤의 열광</b>이 되고, 
                그 열광이 <b>실시간 매출</b>로 전환되는 순환 구조를 설계합니다.
              </span>
            }
          />
        </div>

        <div className="bm-stack-refined">
          {businessModels.map((bm, idx) => (
            <ScrollReveal key={bm.id} delay={idx * 150}>
              <div className="bm-card-refined">
                <div className="black-banner-goal">
                  <div className="status-indicator" style={{ backgroundColor: bm.accent }} />
                  <div className="banner-text">
                    <span className="label-dim">MAXIMIZING VALUE</span>
                    <p className="goal-msg-bright">{bm.goal}</p>
                  </div>
                  <div className="icon-wrap" style={{ color: bm.accent }}>
                    <Icon name={bm.icon} />
                  </div>
                </div>

                <div className="content-area-refined">
                  <div className="header-row-refined">
                    <h3 className="title-refined">{bm.title}</h3>
                    <span className="tech-tag-refined">{bm.tech}</span>
                  </div>
                  <p className="desc-refined">{bm.desc}</p>
                </div>
                
                {bm.id === "SETTLE" && (
                  <div className="mini-flow-viz">
                    <div className="flow-dot" style={{ backgroundColor: bm.accent }} />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .modern-orange-theme { 
          background: #FF6B00;
          padding: 100px 40px; 
          border-radius: 56px;
          margin: 40px auto;
          box-shadow: 0 30px 70px rgba(255, 107, 0, 0.2);
          position: relative;
          z-index: 1;
        }

        /* 🌊 Background Animation System */
        .bg-animation-container {
          position: absolute; inset: 0;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(165deg, #FF6B00 0%, #FF8C42 100%);
        }

        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          animation: drift 20s infinite alternate ease-in-out;
        }

        .a1 { width: 600px; height: 600px; background: #FF9500; top: -10%; left: -10%; }
        .a2 { width: 500px; height: 500px; background: #FFD700; bottom: -10%; right: -5%; animation-duration: 25s; }
        .a3 { width: 400px; height: 400px; background: #FF3B30; top: 40%; left: 30%; animation-duration: 18s; opacity: 0.3; }

        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          100% { transform: translate(100px, 50px) rotate(15deg) scale(1.2); }
        }

        .particles-overlay {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, #fff 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.1;
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
        }

        .relative-content { position: relative; z-index: 2; }
        
        .header-contrast :global(.h2) { color: #000 !important; font-weight: 800; }
        .lead-dark { color: rgba(0, 0, 0, 0.7); font-size: 20px; line-height: 1.6; display: block; margin-top: 16px; }
        .lead-dark b { color: #000; }

        .bm-stack-refined { display: flex; flex-direction: column; gap: 32px; margin-top: 60px; }
        
        .bm-card-refined { 
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border-radius: 36px; padding: 40px; 
          border: 1px solid rgba(255, 255, 255, 0.3); position: relative; overflow: hidden;
          transition: transform 0.4s var(--ease-apple);
        }

        .bm-card-refined:hover { 
          transform: translateY(-8px) scale(1.01);
          background: rgba(255, 255, 255, 0.3);
        }

        .black-banner-goal { 
          background: #1d1d1f; border-radius: 20px; padding: 24px 28px; 
          margin-bottom: 28px; display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .status-indicator { width: 4px; height: 32px; border-radius: 2px; }
        .banner-text { flex: 1; margin-left: 20px; }
        .label-dim { font-size: 10px; font-weight: 800; color: #86868b; letter-spacing: 1.5px; display: block; margin-bottom: 4px; }
        .goal-msg-bright { font-size: 18px; font-weight: 600; color: #fff; margin: 0; word-break: keep-all; }
        .icon-wrap { width: 32px; height: 32px; opacity: 0.8; }

        .content-area-refined { position: relative; z-index: 2; }
        .header-row-refined { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; }
        .title-refined { font-size: 24px; font-weight: 800; color: #000; margin: 0; letter-spacing: -0.02em; }
        .tech-tag-refined { font-size: 11px; font-family: SF Mono, monospace; background: #000; color: #fff; padding: 4px 12px; border-radius: 99px; font-weight: 600; }

        .desc-refined { font-size: 17px; line-height: 1.7; color: rgba(0, 0, 0, 0.8); max-width: 850px; word-break: keep-all; margin: 0; font-weight: 500; }

        .mini-flow-viz { height: 2px; background: rgba(0,0,0,0.05); margin-top: 24px; border-radius: 2px; position: relative; overflow: hidden; }
        .flow-dot { position: absolute; height: 100%; width: 20%; animation: flow-slide 2.5s infinite linear; }
        @keyframes flow-slide { from { left: -20%; } to { left: 120%; } }

        @media (max-width: 768px) {
          .modern-orange-theme { padding: 60px 20px; }
          .bm-card-refined { padding: 32px 24px; }
          .title-refined { font-size: 20px; }
          .goal-msg-bright { font-size: 16px; }
          .aurora-blob { width: 300px; height: 300px; }
        }
      `}</style>
    </section>
  );
}