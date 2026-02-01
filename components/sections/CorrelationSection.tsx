"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon"; // 👈 Icon 컴포넌트 필요

export default function CorrelationSection() {
  const logicRows = [
    {
      grade: "Basic",
      theme: "basic",
      bm: "무료 사용자",
      access: "전체공개 프레임",
      path: "기본 제공",
      quest: "Daily / Weekly Quests",
      badge: "Common Badges",
      visual: "Matte White Card",
      badgeIcon: "spark", // Basic icon
      desc: "누구나 시작할 수 있는 가장 담백한 경험"
    },
    {
      grade: "Silver",
      theme: "silver",
      bm: "Silver Membership (₩900)",
      access: "스페셜 에디션 접근",
      path: "OR",
      quest: "Semi-Annual 퀘스트 달성",
      badge: "Visionary Badge",
      visual: "Silver Fan Card",
      badgeIcon: "star", // Silver reward icon
      desc: "합리적인 구독, 혹은 6개월의 꾸준한 증명"
    },
    {
      grade: "Gold",
      theme: "gold",
      bm: "Gold Membership (₩1,900)",
      access: "모든 히든 프레임 무제한",
      path: "OR",
      quest: "Annual 퀘스트 달성",
      badge: "Guardian Badge",
      visual: "Liquid Gold Card",
      badgeIcon: "crown", // Gold reward icon (Icon 컴포넌트에 crown이 없다면 gift 등으로 대체 가능)
      desc: "최고의 가치, 혹은 1년간 쌓아온 헌신의 결과"
    }
  ];

  return (
    <section className="section correlation-theme">
      <div className="container">
        <SectionHeader 
          title="Logic of Connection" 
          lead="행동(Quest)은 명예(Badge)가 되고, 명예는 권한(Tier)이 됩니다. 모든 활동은 유기적으로 연결됩니다." 
        />

        <div className="logic-table-wrapper">
          {/* Header Row */}
          <div className="table-header">
            <div className="col col-1">1. Status (권한)</div>
            <div className="col col-2">Connection</div>
            <div className="col col-3">2. Quest & Badge (행동과 명예)</div> {/* 👈 Updated Header */}
            <div className="col col-4">3. Visual Proof (증명)</div>
          </div>

          {/* Logic Rows */}
          <div className="table-body">
            {logicRows.map((row, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`logic-row theme-${row.theme}`}>
                  
                  {/* Left: BM & Status */}
                  <div className="cell bm-cell">
                    <span className="cell-label">TIER & ACCESS</span>
                    <h4 className="cell-title">{row.bm}</h4>
                    <span className="cell-desc">{row.access}</span>
                  </div>

                  {/* Middle: Path (Connector) */}
                  <div className="cell path-cell">
                    <div className="path-line left" />
                    <span className="path-badge">{row.path}</span>
                    <div className="path-line right" />
                  </div>

                  {/* Right: Quest & Badge (Merged) */}
                  <div className="cell quest-cell">
                    <span className="cell-label">REQUIRED ACTIVITY</span>
                    <h4 className="cell-title">{row.quest}</h4>
                    
                    {/* 🟢 Badge Connection Display */}
                    <div className="badge-connector">
                      <span className="plus">+</span>
                      <div className="mini-badge">
                        <Icon name="spark" /> {/* 뱃지 아이콘 */}
                        <span>{row.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Far Right: Visual Proof (Wallet + Badge Object) */}
                  <div className="cell visual-cell">
                    <div className="visual-group">
                      <div className="visual-card-mock">
                        <span className="card-name">{row.visual}</span>
                        <div className="card-shine" />
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .correlation-theme {
          padding: 100px 0;
          background: #f5f5f7; 
          position: relative;
        }

        .logic-table-wrapper {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1.2fr 0.4fr 1.4fr 1fr; /* Adjusted Column Widths */
          padding: 0 40px;
          margin-bottom: 8px;
          opacity: 0.6;
        }
        .col { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; }
        .col-2 { text-align: center; }
        .col-4 { text-align: right; }

        .logic-row {
          display: grid;
          grid-template-columns: 1.2fr 0.4fr 1.4fr 1fr; /* Adjusted Column Widths */
          background: #fff;
          border-radius: 24px;
          padding: 32px 40px;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .logic-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          z-index: 10;
        }

        /* Themes */
        .theme-basic { border-left: 6px solid #d2d2d7; }
        .theme-silver { border-left: 6px solid #a1a1a6; background: linear-gradient(90deg, #fff, #fcfcfc); }
        .theme-gold { border-left: 6px solid #FFD700; background: linear-gradient(90deg, #fff, #fffdf5); }

        /* Cells */
        .cell { display: flex; flex-direction: column; justify-content: center; }
        .cell-label { font-size: 10px; font-weight: 800; color: #86868b; margin-bottom: 6px; letter-spacing: 0.5px; }
        .cell-title { font-size: 17px; font-weight: 700; color: #1d1d1f; margin: 0 0 4px; }
        .cell-desc { font-size: 13px; color: #86868b; word-break: keep-all; }

        /* Path Connector */
        .path-cell { flex-direction: row; align-items: center; justify-content: center; position: relative; }
        .path-badge { 
          font-size: 11px; font-weight: 800; color: #86868b; background: #f5f5f7; 
          padding: 4px 8px; border-radius: 6px; z-index: 2; position: relative;
        }
        .path-line { height: 1px; background: #e5e5ea; flex: 1; }

        /* 🟢 Badge Connector Styles */
        .badge-connector { display: flex; align-items: center; gap: 8px; margin-top: 8px; }
        .plus { font-size: 12px; color: #86868b; }
        .mini-badge { 
          display: flex; align-items: center; gap: 4px; 
          background: rgba(0,0,0,0.03); padding: 4px 8px; border-radius: 6px; 
          font-size: 12px; font-weight: 600; color: #555; border: 1px solid rgba(0,0,0,0.05);
        }
        .theme-gold .mini-badge { background: rgba(255, 215, 0, 0.1); color: #B8860B; border-color: rgba(255, 215, 0, 0.3); }
        .theme-silver .mini-badge { background: rgba(0,0,0,0.05); color: #333; }

        /* Visual Card Mock */
        .visual-cell { align-items: flex-end; }
        .visual-group { position: relative; }
        .visual-card-mock {
          width: 140px; height: 80px; border-radius: 12px; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);
        }
        .card-name { font-size: 12px; font-weight: 700; position: relative; z-index: 2; }
        .card-shine { position: absolute; inset: 0; z-index: 1; }

        /* Specific Card Styles */
        .theme-basic .visual-card-mock { background: #f5f5f7; color: #86868b; }
        
        .theme-silver .visual-card-mock { 
          background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f7 100%); color: #333; border: 1px solid rgba(0,0,0,0.1);
        }
        .theme-silver .card-shine {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%);
          background-size: 200% 100%; animation: shine 3s infinite linear;
        }

        .theme-gold .visual-card-mock { 
          background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%); color: #000;
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }
        .theme-gold .card-shine {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%);
          background-size: 200% 100%; animation: shine 3s infinite linear;
        }

        @keyframes shine { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        @media (max-width: 900px) {
          .table-header { display: none; }
          .logic-row { grid-template-columns: 1fr; gap: 24px; text-align: center; padding: 40px 24px; }
          .theme-basic, .theme-silver, .theme-gold { border-left: none; border-top: 6px solid; }
          
          .path-cell { flex-direction: column; gap: 8px; }
          .path-line { width: 1px; height: 20px; }
          
          .visual-cell { align-items: center; }
          .mini-badge { justify-content: center; }
        }
      `}</style>
    </section>
  );
}