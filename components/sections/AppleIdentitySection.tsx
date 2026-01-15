"use client";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useDynamicIsland } from "../DynamicIsland";

export default function AppleIdentitySection() {
  const { triggerIsland } = useDynamicIsland();
  
  // 🔦 Spotlight & 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  // 3D Tilt 상태
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    
    // 마우스 좌표 (컨테이너 기준)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight 위치 업데이트
    setPosition({ x, y });
    setOpacity(1);

    // 3D Tilt 계산 (중앙을 0,0으로 기준)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 기울기 강도 조절 (너무 심하면 어지러우니 미세하게)
    const rotateX = ((y - centerY) / centerY) * -2; // 상하 (최대 2도)
    const rotateY = ((x - centerX) / centerX) * 2;  // 좌우 (최대 2도)

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 }); // 원위치
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg identity-bg">
        <ScrollReveal>
          <div className="header-group">
            <h2 className="title-grad">Beyond the Touch.</h2>
            <p className="lead-text">
              소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Dynamic Island</b>까지.<br />
              인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 🔦 Container: Spotlight + 3D Tilt Wrapper */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid-pro spotlight-group"
          style={{
            // 3D 변환을 위한 원근감 설정
            perspective: "1000px" 
          }}
        >
          {/* 🔦 Spotlight Overlay */}
          <div 
            className="spotlight-overlay"
            style={{
              opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              // 조명은 기울어지지 않고 평면에 머물도록 설정 (선택사항)
              transform: `translateZ(0)`
            }}
          />

          {/* 🧊 3D Tilt 적용 그룹 */}
          <div 
            className="tilt-layer"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out" // 부드러우면서 즉각적인 반응
            }}
          >
            {/* Card 1 */}
            <ScrollReveal delay={100}>
              <div 
                className="card-pro card-large clickable"
                onClick={() => triggerIsland("Quiet Reward", "기분 좋은 햅틱과 함께 적립되었습니다.", "spark")}
              >
                <div className="card-border" />
                <div className="content">
                  <div className="icon-badge"><Icon name="spark" /></div>
                  <h3>Feel the Moment</h3>
                  <p>리워드가 쌓이는 순간, 기분 좋은 미세 진동으로 완성감을 전달합니다.</p>
                </div>
                
                {/* Waveform Logic (Fixed Hydration) */}
                <div className="waveform-viz">
                  {[...Array(20)].map((_, i) => {
                    const rawHeight = 15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50;
                    const height = rawHeight.toFixed(1); 
                    const delay = (i * 0.05).toFixed(2);
                    return (
                      <div 
                        key={i} 
                        className="wave-bar" 
                        style={{ animationDelay: `${delay}s`, height: `${height}%` }} 
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="sub-grid">
              {/* Card 2 */}
              <ScrollReveal delay={200}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Nearby Frame", "50m 앞, 홍대 매장이 있습니다.", "map")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="clock" /></div>
                    <h3>Always Glancable</h3>
                    <p>앱을 열지 않아도, 잠금 화면과 다이내믹 아일랜드에서 대기 순서를 확인합니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal delay={300}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Data Protected", "얼굴 데이터는 서버에 전송되지 않습니다.", "lock")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="mood" /></div>
                    <h3>Privacy First</h3>
                    <p>얼굴 데이터는 저장되지 않습니다. 오직 취향 데이터만 기기에 남습니다.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        .identity-bg {
          background: #000000;
          padding: 100px 0;
          position: relative;
          color: #f5f5f7;
          border-radius: 40px;
          margin: 60px 0;
          overflow: hidden;
        }
        
        .header-group { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        
        .title-grad {
          font-size: 56px; font-weight: 700;
          background: linear-gradient(135deg, #fff 40%, #6e6e73);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin: 0 0 20px; letter-spacing: -0.04em;
        }
        .lead-text { font-size: 22px; color: #86868b; font-weight: 400; line-height: 1.5; }
        .lead-text b { color: #f5f5f7; }

        .grid-pro {
          position: relative;
          /* 3D Context */
          transform-style: preserve-3d;
        }

        .tilt-layer {
          display: flex;
          flex-direction: column;
          gap: 20px;
          /* 3D Context 유지 */
          transform-style: preserve-3d;
        }

        .sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .spotlight-overlay {
          pointer-events: none;
          position: absolute;
          inset: -100px; /* 여유 있게 확장 */
          z-index: 0;
          transition: opacity 0.3s;
        }

        .card-pro {
          background: rgba(28,28,30, 0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: 40px;
          position: relative; 
          backdrop-filter: blur(20px);
          overflow: hidden; min-height: 320px;
          display: flex; flex-direction: column; justify-content: space-between;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          /* 3D 깊이감 */
          transform: translateZ(20px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .card-border {
          position: absolute; inset: 0; border-radius: 24px; padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }

        .card-pro:hover {
          background: rgba(44,44,46, 0.6);
          border-color: rgba(255,255,255,0.2);
        }
        .card-pro:active {
           transform: translateZ(10px) scale(0.98); /* 클릭 시 살짝 들어가는 느낌 */
        }

        .card-large { flex-direction: row; align-items: center; }

        .content { position: relative; z-index: 2; }
        .icon-badge {
          width: 52px; height: 52px; background: #fff; color: #000;
          border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
        }
        .card-pro h3 { font-size: 26px; margin: 0 0 12px; color: #fff; letter-spacing: -0.01em; }
        .card-pro p { font-size: 17px; color: #a1a1a6; line-height: 1.6; margin: 0; max-width: 90%; }
        
        .waveform-viz { display: flex; align-items: center; gap: 6px; height: 80px; margin-left: auto; padding-left: 40px; opacity: 0.8; }
        .wave-bar { width: 6px; background: rgba(255,255,255,0.2); border-radius: 99px; animation: bar-dance 1.4s infinite ease-in-out; }
        
        @keyframes bar-dance {
          0%, 100% { height: 20%; background: rgba(255,255,255,0.2); }
          50% { height: 100%; background: #0071e3; box-shadow: 0 0 20px rgba(0,113,227,0.8); }
        }

        @media (max-width: 768px) {
          .sub-grid { grid-template-columns: 1fr; }
          .card-large { flex-direction: column; align-items: flex-start; }
          .waveform-viz { margin: 40px auto 0; padding: 0; width: 100%; justify-content: center; }
          .title-grad { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}