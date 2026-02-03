"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function TimelineSection() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Core Experience & Retention",
      date: "Q1-2026",
      desc: "사용자를 붙잡아두는 '재미'와 '보상'의 순환 고리를 완성합니다.",
      features: [
        { name: "Journey Flow", desc: "Before-During-After 경험 설계", icon: "map" },
        { name: "Golden Ticket", desc: "멤버십 구독 & Dynamic Wallet", icon: "spark" }, // wallet icon 대체
        { name: "Daily Ritual", desc: "감각적인 일일 미션 & 포인트", icon: "gift" },
        { name: "Playbook", desc: "노는 법 가이드 (O4O)", icon: "hint" },
      ],
      status: "In Progress",
      accent: "#0071e3" // Blue
    },
    {
      phase: "Phase 2",
      title: "Creator Economy & Expansion",
      date: "Q2 - 2026",
      desc: "소비자가 생산자가 되는 C2E 생태계를 구축하여 무한 확장합니다.",
      features: [
        { name: "Brand Owner", desc: "나만의 채널 개설 & 브랜딩", icon: "spark" },
        { name: "Creator Tools", desc: "프레임 제작 및 판매 시스템", icon: "circle" }, // creator icon 대체
        { name: "Global Sync", desc: "전 세계 키오스크 실시간 배포", icon: "map" }, // globe icon 대체
        { name: "Archive", desc: "활동 기록 및 명예의 전당", icon: "people" }, // record icon 대체
      ],
      status: "Coming Soon",
      accent: "#AF52DE" // Purple
    }
  ];

  return (
    <section className="section timeline-theme" id="roadmap">
      <div className="container">
        <SectionHeader 
          title="Project Roadmap" 
          lead="단순한 기능 나열이 아닙니다. '사용자 확보'에서 '생태계 확장'으로 이어지는 정교한 마일스톤입니다." 
        />

        <div className="timeline-container">
          {/* Central Line */}
          <div className="central-line" />

          {roadmap.map((phase, idx) => (
            <ScrollReveal key={idx} delay={idx * 200}>
              <div className={`timeline-block ${idx % 2 === 0 ? 'left' : 'right'}`}>
                
                {/* Center Node */}
                <div className="timeline-node" style={{ borderColor: phase.accent }}>
                  <div className="node-inner" style={{ background: phase.accent }} />
                </div>

                {/* Content Card */}
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="phase-badge" style={{ color: phase.accent, borderColor: phase.accent }}>
                      {phase.phase}
                    </span>
                    <span className="phase-date">{phase.date}</span>
                  </div>
                  
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-desc">{phase.desc}</p>

                  <div className="feature-grid">
                    {phase.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feat-row">
                        <div className="feat-icon" style={{ color: phase.accent }}>
                          <Icon name={feat.icon} />
                        </div>
                        <div className="feat-text">
                          <span className="feat-name">{feat.name}</span>
                          <span className="feat-sub">{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="status-tag" style={{ background: phase.status === 'In Progress' ? '#34C759' : '#86868b' }}>
                    {phase.status}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-theme {
          padding: 100px 0;
          background: #fbfbfd;
          position: relative;
          overflow: hidden;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 60px auto 0;
          padding: 20px 0;
        }

        .central-line {
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 2px;
          background: rgba(0,0,0,0.1);
          transform: translateX(-50%);
        }

        .timeline-block {
          position: relative;
          width: 50%;
          padding: 0 40px;
          margin-bottom: 60px;
          box-sizing: border-box;
        }
        .timeline-block.left { left: 0; text-align: right; }
        .timeline-block.right { left: 50%; text-align: left; }

        /* Node */
        .timeline-node {
          position: absolute;
          top: 30px;
          width: 20px; height: 20px;
          background: #fff;
          border: 3px solid #000;
          border-radius: 50%;
          z-index: 2;
          display: flex; align-items: center; justify-content: center;
        }
        .left .timeline-node { right: -10px; }
        .right .timeline-node { left: -10px; }
        
        .node-inner { width: 8px; height: 8px; border-radius: 50%; }

        /* Card */
        .timeline-card {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
          transition: transform 0.3s ease;
        }
        .timeline-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }

        .card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .left .card-header { justify-content: flex-end; }
        
        .phase-badge { 
          font-size: 11px; font-weight: 700; text-transform: uppercase; 
          padding: 4px 8px; border-radius: 6px; border: 1px solid;
        }
        .phase-date { font-size: 13px; color: #86868b; font-weight: 600; }

        .phase-title { font-size: 22px; font-weight: 800; color: #1d1d1f; margin: 0 0 8px; }
        .phase-desc { font-size: 15px; color: #6e6e73; line-height: 1.5; margin-bottom: 24px; word-break: keep-all; }

        .feature-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        
        .feat-row { 
          display: flex; align-items: center; gap: 12px; 
          background: #f5f5f7; padding: 12px; border-radius: 12px;
        }
        .left .feat-row { flex-direction: row-reverse; text-align: right; }

        .feat-icon { 
          width: 32px; height: 32px; background: #fff; border-radius: 8px; 
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .feat-text { display: flex; flex-direction: column; }
        .feat-name { font-size: 13px; font-weight: 700; color: #1d1d1f; }
        .feat-sub { font-size: 11px; color: #86868b; }

        .status-tag {
          position: absolute; top: -10px; 
          padding: 4px 12px; border-radius: 99px;
          color: #fff; font-size: 10px; font-weight: 700; text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .left .status-tag { right: 20px; }
        .right .status-tag { left: 20px; }

        @media (max-width: 768px) {
          .timeline-container { margin-top: 40px; padding-left: 20px; }
          .central-line { left: 20px; }
          .timeline-block { width: 100%; padding-left: 40px; padding-right: 0; margin-bottom: 40px; }
          .timeline-block.left, .timeline-block.right { left: 0; text-align: left; }
          .left .timeline-node, .right .timeline-node { left: -10px; right: auto; }
          .left .card-header { justify-content: flex-start; }
          .left .feat-row { flex-direction: row; text-align: left; }
          .left .status-tag { right: auto; left: 20px; }
        }
      `}</style>
    </section>
  );
}