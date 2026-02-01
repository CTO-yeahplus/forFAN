"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";

export default function BadgeSection() {
  const [activeCategory, setActiveCategory] = useState("Creator");

  const categories = ["Creator", "Fandom", "Explorer", "Ambassador"];

  const badgeData = {
    // 🟣 Visionary Badge가 포함된 카테고리 (Silver 연계)
    Creator: [
      { name: "Frame Artisan", tier: "Common", material: "rosegold", desc: "제작 프레임 10회 판매 달성" },
      { name: "Trend Setter", tier: "Rare", material: "pearl", desc: "주간 베스트 랭킹 진입" },
      { name: "Visionary", tier: "Epic", material: "crystal", desc: "6개월 연속 창작 활동 (Silver Status)" },
    ],
    // 🟡 Guardian Badge가 포함된 카테고리 (Gold 연계)
    Fandom: [
      { name: "Early Bird", tier: "Common", material: "bronze", desc: "첫 프레임 구매 인증" },
      { name: "Top 1% Fan", tier: "Rare", material: "liquid-gold", desc: "채널 후원 랭킹 1% 진입" },
      { name: "Guardian", tier: "Legendary", material: "diamond", desc: "1년 연속 구독 및 후원 (Gold Status)" },
    ],
    // ⚪️ Common Badges 예시
    Explorer: [
      { name: "Urban Walker", tier: "Common", material: "steel", desc: "3개 도시 키오스크 방문" },
      { name: "Night Owl", tier: "Rare", material: "neon", desc: "심야(22-04시) 촬영 5회" },
      { name: "Season Traveler", tier: "Epic", material: "hologram", desc: "4계절 프레임 수집 완료" },
    ],
    Ambassador: [
      { name: "Social Butterfly", tier: "Common", material: "plastic", desc: "친구 초대 10명 달성" },
      { name: "Influencer", tier: "Rare", material: "purple", desc: "SNS 공유 20회 달성" },
    ]
  } as any;

  return (
    <section className="section badge-showcase-theme">
      <div className="container">
        <SectionHeader 
          title="Collection of Taste" 
          lead="당신의 취향과 성취는 '디지털 오브제'로 영구 소장됩니다. 퀘스트를 통해 수집한 명예를 확인하세요." 
        />

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Badge Grid */}
        <div className="badge-grid">
          {badgeData[activeCategory].map((badge: any, idx: number) => (
            <ScrollReveal key={badge.name} delay={idx * 100}>
              <div className={`badge-card ${badge.name === 'Guardian' || badge.name === 'Visionary' ? 'highlighted' : ''}`}>
                <div className="badge-visual-area">
                  <div className={`badge-objet ${badge.material}`}>
                    <div className="reflection" />
                    <div className="inner-symbol" />
                  </div>
                  <div className="pedestal" />
                </div>
                
                <div className="badge-info">
                  <span className={`tier-badge ${badge.tier.toLowerCase()}`}>{badge.tier}</span>
                  <h4 className="badge-name">{badge.name}</h4>
                  <p className="badge-desc">{badge.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .badge-showcase-theme {
          padding: 100px 0;
          background: #111;
          color: #fff;
          position: relative;
        }

        .category-tabs {
          display: flex; justify-content: center; gap: 12px; margin-bottom: 60px;
        }
        .tab-btn {
          padding: 10px 24px; border-radius: 99px; background: rgba(255,255,255,0.1); 
          color: #888; border: 1px solid transparent; font-weight: 600; cursor: pointer;
          transition: all 0.3s;
        }
        .tab-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .tab-btn.active { background: #fff; color: #000; box-shadow: 0 0 20px rgba(255,255,255,0.3); }

        .badge-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 40px; perspective: 1000px;
        }

        .badge-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 32px; padding: 40px 24px; text-align: center;
          transition: transform 0.4s ease, border-color 0.4s;
          position: relative; overflow: hidden;
        }
        .badge-card:hover { 
          transform: translateY(-10px); 
          border-color: rgba(255,255,255,0.2); 
          background: rgba(255,255,255,0.06);
        }
        /* Highlight specific badges */
        .badge-card.highlighted {
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.05);
        }

        /* 💎 Badge 3D Visuals */
        .badge-visual-area {
          height: 160px; display: flex; flex-direction: column; 
          align-items: center; justify-content: center; margin-bottom: 24px;
          position: relative;
        }
        
        .badge-objet {
          width: 100px; height: 100px; border-radius: 50%; 
          position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.3s;
        }
        .badge-card:hover .badge-objet { transform: scale(1.1) rotateY(10deg); }

        .reflection { position: absolute; inset: 0; border-radius: 50%; background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%); opacity: 0.8; z-index: 2; }
        .inner-symbol { position: absolute; inset: 25%; background: rgba(0,0,0,0.2); border-radius: 50%; z-index: 1; }

        /* Materials */
        .steel { background: linear-gradient(145deg, #bdc3c7, #2c3e50); border: 2px solid #95a5a6; }
        .neon { background: #000; border: 2px solid #fff; box-shadow: 0 0 20px #0ff, inset 0 0 20px #0ff; }
        .hologram { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); opacity: 0.9; }
        .rosegold { background: linear-gradient(145deg, #E0AA3E, #B88A44); border: 1px solid #F4C47C; }
        .pearl { background: radial-gradient(circle at 30% 30%, #fff, #f0f2f5); box-shadow: 0 0 15px rgba(255,255,255,0.6); }
        .crystal { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.5); backdrop-filter: blur(4px); box-shadow: inset 0 0 20px rgba(255,255,255,0.2); }
        .plastic { background: #3498db; border: 4px solid #2980b9; }
        .purple { background: linear-gradient(145deg, #8e44ad, #9b59b6); box-shadow: 0 10px 20px rgba(142, 68, 173, 0.4); }
        .bronze { background: linear-gradient(145deg, #cd7f32, #a0522d); }
        .liquid-gold { background: radial-gradient(ellipse at center, #FFD700 0%, #B8860B 100%); box-shadow: 0 0 30px rgba(255, 215, 0, 0.4); animation: flow 3s infinite linear; }
        .diamond { background: linear-gradient(135deg, #e6f7ff 0%, #ffffff 50%, #b3e0ff 100%); border: 1px solid #fff; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border-radius: 0; }

        .pedestal { width: 60px; height: 10px; background: rgba(255,255,255,0.1); border-radius: 50%; margin-top: 20px; filter: blur(4px); }

        .badge-info { position: relative; z-index: 2; }
        .tier-badge { font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 4px 8px; border-radius: 4px; margin-bottom: 8px; display: inline-block; letter-spacing: 1px; }
        .common { background: #555; color: #fff; }
        .rare { background: #0071e3; color: #fff; }
        .epic { background: #AF52DE; color: #fff; }
        .legendary { background: #FFD700; color: #000; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }

        .badge-name { font-size: 18px; font-weight: 700; margin: 8px 0; color: #fff; }
        .badge-desc { font-size: 13px; color: #888; line-height: 1.5; word-break: keep-all; }

        @media (max-width: 768px) {
          .badge-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .badge-card { padding: 24px 16px; }
          .badge-objet { width: 80px; height: 80px; }
        }
      `}</style>
    </section>
  );
}