"use client";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useDynamicIsland } from "../DynamicIsland";

export default function AppleIdentitySection() {
  const { triggerIsland } = useDynamicIsland();
  
  // 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  };

  // 🎵 Sonic Identity: Web Audio API
  const playChime = () => {
    if (typeof window === 'undefined') return;
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 1.5);
  };

  // 🟢 [Logic] Connected Handlers
  const triggerHapticCard = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([10, 30, 10]);
    playChime();
    triggerIsland("Sonic & Haptic", "감각을 깨우는 소리와 진동.", "spark");
  };

  const triggerDynamicCard = () => {
    // 🟢 [연결] Wallet의 '패스트트랙/시크릿프레임'과 연결되는 맥락
    triggerIsland("Near Store", "홍대점 50m 진입. 시크릿 프레임이 대기중입니다.", "map");
  };

  const triggerPrivacyCard = () => {
    // 🟢 [연결] Quiet Rewards의 '서프라이즈' 카피 적용
    // 데이터 분석의 결과가 '감시'가 아니라 '선물'임을 강조
    triggerIsland("Surprise Arrived", "“We thought you’d like this.”", "gift");
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg identity-bg">
          <ScrollReveal>
            <div className="header-group">
              <h2 className="title-grad">Beyond the Touch.</h2>
              <p className="lead-text">
                소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Continuity</b>까지.<br />
                인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* Container */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="grid-pro spotlight-group"
            style={{ perspective: "1000px" }}
          >
            <div 
              className="spotlight-overlay"
              style={{
                opacity,
                background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
                transform: `translateZ(0)`
              }}
            />

            <div 
              className="tilt-layer"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              {/* Card 1: Haptic + Sonic */}
              <ScrollReveal delay={100}>
                <div 
                  className="card-pro card-large clickable haptic-card"
                  onClick={triggerHapticCard}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge pulse-icon"><Icon name="spark" /></div>
                    <h3>Sonic & Haptic</h3>
                    <p>탭하는 순간 느껴지는 <b>'딸깍'</b>임과 청아한 <b>사운드</b>. 디지털 경험에 무게감을 더합니다.</p>
                  </div>
                  
                  <div className="waveform-viz">
                    {[...Array(20)].map((_, i) => {
                      const height = (15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50).toFixed(1);
                      return (
                        <div 
                          key={i} 
                          className="wave-bar" 
                          style={{ 
                            animationDelay: `${(i * 0.05).toFixed(2)}s`, 
                            height: `${height}%` 
                          }} 
                        />
                      );
                    })}
                  </div>
                  <div className="touch-hint">Tap for Sound 🔊</div>
                </div>
              </ScrollReveal>

              <div className="sub-grid">
                {/* Card 2: Continuity */}
                <ScrollReveal delay={200}>
                  <div 
                    className="card-pro dynamic-card clickable"
                    onClick={triggerDynamicCard} 
                  >
                    <div className="card-border" />
                    <div className="content">
                      <div className="island-group">
                        <div className="island-mock">
                          <div className="island-notch">
                            <div className="island-content-hidden">
                              <span className="i-icon"><Icon name="map" /></span>
                              <span className="i-text">50m 앞</span>
                            </div>
                          </div>
                        </div>
                        <div className="watch-float">
                          <Icon name="watch" />
                          <div className="sync-line" />
                        </div>
                      </div>
                      <h3>Seamless Continuity</h3>
                      <p>매장 근처에 가면 <b>Watch</b>가 먼저 반응합니다. 폰을 꺼내지 않고 바로 입장하세요.</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Card 3: Privacy -> Taste Analysis */}
                <ScrollReveal delay={300}>
                  <div 
                    className="card-pro privacy-card clickable"
                    onClick={triggerPrivacyCard}
                  >
                    <div className="card-border" />
                    <div className="content">
                      <div className="icon-badge lock-badge">
                        <Icon name="gift" /> {/* 🟢 Icon changed to Gift (Surprise) */}
                        <div className="scan-line" />
                      </div>
                      <h3>Taste Intelligence</h3>
                      <p>당신의 취향 데이터를 분석하여, 오늘 날씨에 딱 맞는 <b>서프라이즈 혜택</b>을 선물합니다.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ... (이전 스타일 코드 그대로 유지) ... */
        .identity-bg { background: #000000; padding: 100px 0; position: relative; color: #f5f5f7; border-radius: 40px; margin: 60px 0; overflow: hidden; }
        .header-group { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        .title-grad { font-size: 56px; font-weight: 700; background: linear-gradient(135deg, #fff 40%, #6e6e73); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0 0 20px; letter-spacing: -0.04em; }
        .lead-text { font-size: 22px; color: #86868b; font-weight: 400; line-height: 1.5; }
        .lead-text b { color: #f5f5f7; }

        .grid-pro { position: relative; transform-style: preserve-3d; }
        .tilt-layer { display: flex; flex-direction: column; gap: 20px; transform-style: preserve-3d; }
        .sub-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .spotlight-overlay { pointer-events: none; position: absolute; inset: -100px; z-index: 0; transition: opacity 0.3s; }

        .card-pro { background: rgba(28,28,30, 0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px; position: relative; backdrop-filter: blur(20px); overflow: hidden; min-height: 320px; display: flex; flex-direction: column; justify-content: space-between; transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s; transform: translateZ(20px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); cursor: pointer; }
        .card-border { position: absolute; inset: 0; border-radius: 24px; padding: 1px; background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
        .card-pro:hover { background: rgba(44,44,46, 0.6); border-color: rgba(255,255,255,0.2); }
        .card-pro:active { transform: translateZ(10px) scale(0.98); }
        .card-large { flex-direction: row; align-items: center; }

        .content { position: relative; z-index: 2; width: 100%; }
        .icon-badge { width: 52px; height: 52px; background: #fff; color: #000; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(255,255,255,0.15); position: relative; overflow: hidden; }
        .card-pro h3 { font-size: 26px; margin: 0 0 12px; color: #fff; letter-spacing: -0.01em; }
        .card-pro p { font-size: 17px; color: #a1a1a6; line-height: 1.6; margin: 0; max-width: 90%; }
        .card-pro p b { color: #fff; }

        .pulse-icon { animation: pulse-ring 3s infinite; }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(255,255,255, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(255,255,255, 0); } 100% { box-shadow: 0 0 0 0 rgba(255,255,255, 0); } }
        .waveform-viz { display: flex; align-items: center; gap: 6px; height: 80px; margin-left: auto; padding-left: 40px; opacity: 0.8; }
        .wave-bar { width: 6px; background: rgba(255,255,255,0.2); border-radius: 99px; animation: bar-dance 1.4s infinite ease-in-out; }
        @keyframes bar-dance { 0%, 100% { height: 20%; background: rgba(255,255,255,0.2); } 50% { height: 100%; background: #0071e3; box-shadow: 0 0 20px rgba(0,113,227,0.8); } }
        .touch-hint { position: absolute; bottom: 20px; right: 40px; font-size: 12px; color: #86868b; opacity: 0; transition: opacity 0.3s; }
        .haptic-card:hover .touch-hint { opacity: 1; }

        .island-group { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; position: relative; }
        .island-mock { height: 52px; display: flex; align-items: center; }
        .island-notch { width: 40px; height: 12px; background: #000; border-radius: 20px; border: 1px solid rgba(255,255,255,0.3); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
        .dynamic-card:hover .island-notch { width: 120px; height: 36px; border-color: #0071e3; background: #000; }
        .island-content-hidden { display: flex; align-items: center; gap: 8px; opacity: 0; transition: opacity 0.2s; }
        .dynamic-card:hover .island-content-hidden { opacity: 1; transition-delay: 0.1s; }
        .i-icon { color: #0071e3; }
        .i-text { font-size: 12px; font-weight: 600; color: #fff; white-space: nowrap; }

        .watch-float { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: #fff; position: absolute; right: 20px; top: 8px; animation: float-watch 3s ease-in-out infinite; }
        .sync-line { position: absolute; left: -20px; top: 50%; width: 20px; height: 1px; background: linear-gradient(90deg, transparent, #0071e3); opacity: 0.5; }
        .dynamic-card:hover .sync-line { opacity: 1; width: 40px; left: -40px; transition: width 0.3s; }
        @keyframes float-watch { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

        .scan-line { position: absolute; top: -100%; left: 0; width: 100%; height: 20%; background: linear-gradient(to bottom, transparent, rgba(255, 215, 0, 0.8), transparent); animation: scan 3s infinite ease-in-out; }
        .privacy-card:hover .scan-line { animation-duration: 1.5s; }
        @keyframes scan { 0% { top: -20%; } 100% { top: 120%; } }

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