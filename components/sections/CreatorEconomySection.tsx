"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function CreatorEconomySection() {
  return (
    <section className="section">
      <div className="container">
        {/* 🟢 [Round] 섹션 전체를 감싸는 둥근 컨테이너 */}
        <div className="section-rounded-bg creator-bg">
          
          <ScrollReveal>
            <div className="creator-header">
              <div className="badge-pro">The Next Chapter</div>
              <h2 className="h2-creator">
                Make it. Sell it.<br />
                <span className="text-gradient-creative">Global.</span>
              </h2>
              <p className="p-creator">
                누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이<br />
                전 세계 forFAN 키오스크에서 판매되고, 글로벌 수익으로 연결됩니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 메인 비주얼: Abstract Glass Studio */}
          <div className="studio-visual">
            
            {/* 🌍 Background: World Map + ⚡ Live Traffic */}
            <div className="global-map-bg">
              {/* Map Dots */}
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="map-dot"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 90 + 5}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
              
              {/* ⚡ Live Traffic Arcs */}
              <svg className="network-arcs" viewBox="0 0 800 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                    <stop offset="50%" stopColor="#d4a5ff" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                  </linearGradient>
                </defs>
                <path className="arc-path" d="M400,250 Q600,50 700,100" />
                <circle r="3" fill="#fff"><animateMotion dur="3s" repeatCount="indefinite" path="M400,250 Q600,50 700,100" /></circle>
                <path className="arc-path" d="M400,250 Q200,50 100,150" />
                <circle r="3" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path="M400,250 Q200,50 100,150" /></circle>
                <path className="arc-path" d="M400,250 Q500,400 700,350" />
                <circle r="3" fill="#fff"><animateMotion dur="3.5s" repeatCount="indefinite" path="M400,250 Q500,400 700,350" /></circle>
              </svg>
            </div>

            {/* 🎨 Center: Floating Glass Canvas (Abstract iPad) */}
            <ScrollReveal delay={200}>
              <div className="glass-canvas-wrapper">
                {/* Layer 1: The Backing (Glass) */}
                <div className="layer glass-back" />
                
                {/* Layer 2: The Art (Glowing Gradient) */}
                <div className="layer art-layer">
                  <div className="art-gradient" />
                  <div className="art-symbol"><Icon name="spark" /></div>
                </div>

                {/* Layer 3: The UI (Minimal Floating Tools) */}
                <div className="layer ui-layer">
                  <div className="floating-tool t-left" />
                  <div className="floating-tool t-right" />
                  <div className="floating-btn">Publish</div>
                </div>
              </div>
            </ScrollReveal>

            {/* 💸 Global Revenue Stack (Multi-Currency) */}
            <div className="revenue-stack">
              {/* Card 1: EUR (Paris) */}
              <div className="rev-card card-1">
                <div className="rev-icon blue">€</div>
                <div className="rev-info">
                  <span className="rev-label">Paris, FR</span>
                  <span className="rev-val">+€3.50</span>
                </div>
              </div>
              
              {/* Card 2: KRW (Seoul) */}
              <div className="rev-card card-2">
                <div className="rev-icon purple">₩</div>
                <div className="rev-info">
                  <span className="rev-label">Seoul, KR</span>
                  <span className="rev-val">+₩5,400</span>
                </div>
              </div>
              
              {/* Card 3: USD (New York) */}
              <div className="rev-card card-3">
                <div className="rev-icon green">$</div>
                <div className="rev-info">
                  <span className="rev-label">New York, US</span>
                  <span className="rev-val">+$4.20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="feature-grid">
            <ScrollReveal delay={300}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="spark" /></div>
                <h4>Infinite Creativity</h4>
                <p>유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="map" /></div>
                <h4>No Borders</h4>
                <p>한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="chart" /></div>
                <h4>Global Revenue</h4>
                <p>원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Grouping Box */
        .creator-bg {
          background: #000;
          background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #000 80%);
          color: #fff;
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .creator-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        .badge-pro {
          display: inline-block; font-size: 11px; font-weight: 700; color: #d4a5ff;
          border: 1px solid rgba(212, 165, 255, 0.3); padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;
          background: rgba(212, 165, 255, 0.1);
        }
        .h2-creator { font-size: 48px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-creative {
          background: linear-gradient(135deg, #d4a5ff 0%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .p-creator { font-size: 18px; color: #888; line-height: 1.6; max-width: 600px; margin: 0 auto; }

        .studio-visual {
          position: relative; height: 500px; display: flex; justify-content: center; align-items: center;
          margin-bottom: 60px; perspective: 1000px; /* Depth for 3D layers */
        }

        .global-map-bg { position: absolute; inset: 0; opacity: 0.5; pointer-events: none; }
        .map-dot {
          position: absolute; width: 4px; height: 4px; background: #555; border-radius: 50%;
          animation: pulse-dot 4s infinite;
        }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); background: #d4a5ff; } }

        .network-arcs { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .arc-path { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 1; stroke-dasharray: 4; }

        /* 🎨 Abstract Glass Canvas (The Apple Essence) */
        .glass-canvas-wrapper {
          width: 400px; height: 280px; position: relative;
          transform: rotateX(10deg) rotateY(-10deg);
          transform-style: preserve-3d;
          animation: float-canvas 6s ease-in-out infinite;
        }
        @keyframes float-canvas { 0%, 100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0); } 50% { transform: rotateX(5deg) rotateY(-5deg) translateY(-20px); } }

        .layer {
          position: absolute; inset: 0; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s;
        }

        /* Layer 1: Glass Back */
        .glass-back {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transform: translateZ(-20px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        /* Layer 2: Glowing Art */
        .art-layer {
          transform: translateZ(0px);
        }
        .art-gradient {
          width: 200px; height: 200px; border-radius: 50%;
          background: linear-gradient(135deg, #d4a5ff, #0071e3);
          filter: blur(40px); opacity: 0.6;
          animation: breath-art 4s infinite alternate;
        }
        @keyframes breath-art { from { opacity: 0.4; transform: scale(0.9); } to { opacity: 0.8; transform: scale(1.1); } }
        .art-symbol { position: absolute; font-size: 40px; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.5); }

        /* Layer 3: Minimal UI */
        .ui-layer {
          transform: translateZ(30px);
        }
        .floating-tool {
          position: absolute; width: 40px; height: 40px; border-radius: 12px;
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .t-left { left: -20px; top: 30%; }
        .t-right { right: -20px; top: 50%; width: 50px; height: 50px; border-radius: 50%; }
        
        .floating-btn {
          position: absolute; bottom: -20px;
          background: #fff; color: #000;
          padding: 8px 20px; border-radius: 99px; font-weight: 700; font-size: 12px;
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }

        /* 💸 Multi-Currency Revenue Stack */
        .revenue-stack {
          position: absolute; bottom: 40px; right: 5%; z-index: 5;
          display: flex; flex-direction: column; gap: 10px;
          perspective: 1000px;
        }
        .rev-card {
          background: rgba(30, 30, 30, 0.85); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px; border-radius: 16px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: float-stack 4s ease-in-out infinite;
          width: 190px;
        }
        /* Stacking Visuals with Currency Colors */
        .card-1 { transform: scale(0.9) translateY(20px); opacity: 0.6; z-index: 1; animation-delay: 0s; }
        .card-2 { transform: scale(0.95) translateY(10px); opacity: 0.8; z-index: 2; animation-delay: 0.5s; }
        .card-3 { transform: scale(1) translateY(0); opacity: 1; z-index: 3; animation-delay: 1s; border-color: rgba(255,255,255,0.3); }

        .rev-icon {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;
        }
        .blue { background: #0071e3; color: #fff; }   /* Euro */
        .purple { background: #AF52DE; color: #fff; } /* Won */
        .green { background: #34C759; color: #fff; }  /* Dollar */

        .rev-info { display: flex; flex-direction: column; }
        .rev-label { font-size: 9px; color: #888; text-transform: uppercase; }
        .rev-val { font-size: 14px; font-weight: 700; color: #fff; }

        @keyframes float-stack { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-5px); } 
        }

        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .feature-item { text-align: center; padding: 20px; }
        .f-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #d4a5ff; }
        .feature-item h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .feature-item p { font-size: 14px; color: #888; line-height: 1.5; }

        @media (max-width: 900px) {
          .h2-creator { font-size: 32px; }
          .studio-visual { height: 400px; }
          .feature-grid { grid-template-columns: 1fr; gap: 40px; }
          .revenue-stack { right: 50%; transform: translateX(50%); bottom: -20px; }
        }
      `}</style>
    </section>
  );
}