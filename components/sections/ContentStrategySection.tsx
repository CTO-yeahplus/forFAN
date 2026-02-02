"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function ContentStrategySection() {
  return (
    <section className="section content-strategy-theme" id="playbook">
      <div className="container">
        <SectionHeader 
          title="Content Activation: The Playbook" 
          lead="단순한 업로드가 아닙니다. SNS의 '놀이 문화'를 앱의 '실질적 트래픽'으로 전환하는 O4O(Online for Offline) 파이프라인입니다." 
        />

        <div className="strategy-layout">
          {/* Left: The Concept (Photo Playbook) */}
          <div className="concept-col">
            <ScrollReveal>
              <div className="concept-card">
                <div className="card-badge">NEW SNS CONCEPT</div>
                <h3 className="concept-title">The Photo Playbook</h3>
                <p className="concept-desc">
                  '찍는 법'이 아니라 <b>'노는 법'</b>을 큐레이션합니다.<br/>
                  필터 레시피, 포즈 가이드, 상황별 연출을 통해<br/>
                  유저의 '결정 장애'를 해결하고 저장을 유도합니다.
                </p>
                
                {/* Visual Mockup: Playbook Cover */}
                <div className="playbook-mock">
                  <div className="book-cover">
                    <div className="cover-art" />
                    <span className="cover-title">PLAY<br/>BOOK</span>
                    <div className="cover-deco">2026 EDITION</div>
                  </div>
                  <div className="book-pages" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: The O4O Funnel (Flow Chart) */}
          <div className="funnel-col">
            <ScrollReveal delay={200}>
              <div className="funnel-box">
                <h4 className="funnel-header">O4O Traffic Pipeline</h4>
                
                <div className="funnel-steps">
                  {/* Step 1: SNS */}
                  <div className="step-item">
                    <div className="step-icon sns">
                      <Icon name="spark" />
                    </div>
                    <div className="step-info">
                      <span className="step-label">Step 1. Discovery</span>
                      <span className="step-desc">인스타 릴스/피드로 '한정판 프레임' 노출</span>
                    </div>
                    <div className="step-arrow">↓</div>
                  </div>

                  {/* Step 2: Deep Link */}
                  <div className="step-item">
                    <div className="step-icon link">
                      <Icon name="link" />
                    </div>
                    <div className="step-info">
                      <span className="step-label">Step 2. Connection</span>
                      <span className="step-desc">'프레임 바로 사용하기' 딥링크(Deep-link) 연결 </span>
                    </div>
                    <div className="step-arrow">↓</div>
                  </div>

                  {/* Step 3: App Activation */}
                  <div className="step-item highlight">
                    <div className="step-icon app">
                      <div className="app-logo-mini" />
                    </div>
                    <div className="step-info">
                      <span className="step-label">Step 3. Activation</span>
                      <span className="step-desc">앱 실행 시 프레임 자동 선택 & 매장 기기 QR 연동</span>
                    </div>
                  </div>
                </div>

                {/* Viral Loop */}
                <div className="viral-loop">
                  <div className="loop-line" />
                  <div className="loop-tag">
                    <Icon name="people" />
                    <span>촬영 후 SNS 공유 시 추가 혜택 (Re-Viral)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-strategy-theme {
          padding: 100px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .strategy-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          margin-top: 60px;
          align-items: center;
        }

        /* Left: Concept Card */
        .concept-card {
          background: #f5f5f7;
          border-radius: 32px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card-badge {
          font-size: 11px; font-weight: 800; color: #FF6B00; 
          background: rgba(255, 107, 0, 0.1); padding: 6px 12px; 
          border-radius: 99px; width: fit-content; margin-bottom: 20px;
        }
        .concept-title { font-size: 32px; font-weight: 800; margin-bottom: 16px; color: #1d1d1f; letter-spacing: -0.02em; }
        .concept-desc { font-size: 16px; color: #86868b; line-height: 1.6; margin-bottom: 40px; word-break: keep-all; }
        .concept-desc b { color: #1d1d1f; }

        .playbook-mock {
          position: relative;
          width: 200px;
          height: 260px;
          margin: 0 auto;
          perspective: 1000px;
          transform: rotateY(-15deg) rotateX(10deg);
          transition: transform 0.5s ease;
        }
        .concept-card:hover .playbook-mock { transform: rotateY(0deg) rotateX(0deg) scale(1.05); }

        .book-cover {
          position: absolute; inset: 0; background: #1d1d1f; border-radius: 8px 16px 16px 8px;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          color: #fff; z-index: 2; box-shadow: 10px 20px 40px rgba(0,0,0,0.2);
        }
        .cover-art { 
          position: absolute; inset: 0; opacity: 0.2; 
          background-image: radial-gradient(circle at 50% 50%, #555 1px, transparent 1px); 
          background-size: 20px 20px; 
        }
        .cover-title { font-size: 36px; font-weight: 900; line-height: 0.9; text-align: center; letter-spacing: -0.05em; position: relative; }
        .cover-deco { font-size: 10px; margin-top: 12px; letter-spacing: 2px; color: #888; position: relative; }
        
        .book-pages {
          position: absolute; top: 4px; right: -12px; width: 40px; height: 252px;
          background: #e5e5ea; border-radius: 0 8px 8px 0;
          border-left: 1px solid rgba(0,0,0,0.1);
          transform: translateZ(-10px);
        }

        /* Right: Funnel Box */
        .funnel-box {
          background: #fff; border: 1px solid rgba(0,0,0,0.06);
          border-radius: 32px; padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.05);
        }
        .funnel-header { font-size: 18px; font-weight: 700; margin-bottom: 32px; color: #1d1d1f; }

        .funnel-steps { position: relative; display: flex; flex-direction: column; gap: 0; }
        .step-item { display: flex; align-items: center; gap: 20px; position: relative; padding-bottom: 30px; }
        .step-item:last-child { padding-bottom: 0; }
        
        .step-icon { 
          width: 48px; height: 48px; border-radius: 16px; 
          display: flex; align-items: center; justify-content: center; 
          font-size: 20px; position: relative; z-index: 2;
        }
        .sns { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: #fff; }
        .link { background: #f5f5f7; color: #1d1d1f; }
        .app { background: #000; color: #fff; }
        .app-logo-mini { width: 16px; height: 16px; background: #fff; border-radius: 4px; }

        .step-info { flex: 1; }
        .step-label { display: block; font-size: 11px; font-weight: 700; color: #86868b; text-transform: uppercase; margin-bottom: 4px; }
        .step-desc { font-size: 15px; font-weight: 600; color: #1d1d1f; line-height: 1.4; }

        .step-arrow { position: absolute; left: 24px; bottom: 0; transform: translateX(-50%); color: #e5e5ea; font-size: 14px; }
        
        .highlight .step-desc { color: #0071e3; }
        .highlight .step-icon { box-shadow: 0 8px 20px rgba(0,0,0,0.2); transform: scale(1.1); }

        /* Viral Loop */
        .viral-loop { 
          margin-top: 30px; padding-top: 20px; border-top: 1px dashed #e5e5ea; 
          display: flex; align-items: center; justify-content: center;
        }
        .loop-tag { 
          background: #f0f9ff; color: #0071e3; padding: 10px 16px; 
          border-radius: 12px; font-size: 13px; font-weight: 600; 
          display: flex; align-items: center; gap: 8px;
        }

        @media (max-width: 900px) {
          .strategy-layout { grid-template-columns: 1fr; gap: 40px; }
          .playbook-mock { margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
}