"use client";

import ScrollReveal from "../ScrollReveal";

export default function PrincipleSection() {
  return (
    <section className="section-principle" id="principle">
      <div className="container">
        <div className="manifesto-wrapper">
          <ScrollReveal>
            <div className="label-badge">The First Principle</div>
          </ScrollReveal>
          
          <div className="manifesto-text">
            <ScrollReveal delay={100}>
              <h2 className="line">우리는 기능을</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="line outline">팔지 않습니다.</h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h2 className="line highlight">경험의 질을</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <h2 className="line">설계합니다.</h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <p className="manifesto-desc">
              고객이 앱을 열었을 때 느끼는 감정<br/>
              <b>설렘 → 확신 → 여운</b>을 연결하는 것.<br/>
              그것이 유일한 우리의 전략입니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section-principle {
          padding: 120px 0;
          background: #111; /* Deep Black */
          color: #fff;
          border-radius: 40px; /* 섹션 자체를 둥글게 */
          margin: 40px 0;
          position: relative;
          overflow: hidden;
        }

        .manifesto-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 2; position: relative;
        }

        .label-badge {
          font-size: 12px; font-weight: 700; color: #86868b;
          text-transform: uppercase; letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 16px; border-radius: 99px;
          margin-bottom: 40px;
        }

        .manifesto-text {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 50px;
        }

        .line {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.03em;
        }

        /* Outline Text Effect */
        .outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.4);
        }

        /* Highlight Gradient */
        .highlight {
          background: linear-gradient(90deg, #fff, #86868b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #86868b;
          max-width: 480px;
        }
        .manifesto-desc b { color: #fff; }

        /* Background Glow Animation */
        .section-principle::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 60%; height: 60%;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}