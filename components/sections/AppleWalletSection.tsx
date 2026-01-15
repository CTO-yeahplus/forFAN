"use client";

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function AppleWalletSection() {
  return (
    <section className="section-wallet">
      <div className="container">
        <div className="layout-split">
          {/* Left: Text Context */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-pill">The Best App is No App</div>
              <h2 className="h2-wallet">
                지갑 속에<br />
                <span className="text-gradient-gold">Golden Ticket</span>을.
              </h2>
              <p className="p-wallet">
                앱을 켜지 않아도 됩니다. <br />
                매장 근처에 가면, 당신의 <b>추억 티켓</b>이 잠금 화면에 조용히 떠오릅니다.
                가장 인생네컷스러운 방식의 멤버십 경험입니다.
              </p>
              <ul className="wallet-bullets">
                <li><Icon name="spark" /> 촬영 직후 자동 발급 (NFC/QR)</li>
                <li><Icon name="map" /> 매장 방문 시 위치 기반 팝업</li>
                <li><Icon name="gift" /> 등급에 따라 변하는 카드 디자인</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Wallet Pass Visual */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="wallet-stack">
                {/* Back Card (Depth) */}
                <div className="wallet-card back-card" />
                
                {/* Main Pass */}
                <div className="wallet-card main-pass">
                  <div className="pass-header">
                    <div className="pass-logo">
                      <span className="logo-dot" />
                      forFAN
                    </div>
                    <span className="pass-label">STORE PASS</span>
                  </div>
                  
                  <div className="pass-body">
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>GRADE</label>
                        <div className="value gold">Golden Fan</div>
                      </div>
                      <div className="pass-field right">
                        <label>POINTS</label>
                        <div className="value">2,400</div>
                      </div>
                    </div>
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>LATEST MOMENT</label>
                        <div className="value">Hongdae Flagship</div>
                      </div>
                    </div>
                  </div>

                  <div className="pass-barcode">
                    {/* Fake Barcode Lines */}
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bar-line" 
                        style={{ 
                          height: i % 2 === 0 ? '100%' : '80%', 
                          width: i % 3 === 0 ? 3 : 1,
                          opacity: 0.8 
                        }} 
                      />
                    ))}
                  </div>
                  
                  {/* Holographic Shine Effect */}
                  <div className="holo-shine" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-wallet {
          padding: 100px 0;
          background: #000; /* Apple Wallet Context */
          color: #fff;
          border-radius: 40px;
          margin: 40px 0;
          overflow: hidden;
          position: relative;
        }

        .layout-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .badge-pill {
          display: inline-block;
          font-size: 11px; font-weight: 700; color: #FFD700;
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .h2-wallet {
          font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 24px;
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .p-wallet {
          font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px;
        }
        .p-wallet b { color: #f5f5f7; }

        .wallet-bullets { list-style: none; padding: 0; margin: 0; }
        .wallet-bullets li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px; color: #d2d2d7; font-size: 15px;
        }

        /* Wallet UI */
        .visual-col {
          display: flex; justify-content: center; position: relative;
        }

        .wallet-stack {
          position: relative;
          width: 300px; height: 460px;
          perspective: 1000px;
        }

        .wallet-card {
          width: 100%; height: 100%;
          border-radius: 20px;
          position: absolute;
          top: 0; left: 0;
        }

        .back-card {
          background: #333;
          transform: translateY(16px) scale(0.95);
          opacity: 0.5;
          z-index: 1;
        }

        .main-pass {
          background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%);
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; flex-direction: column;
          animation: float-pass 6s ease-in-out infinite;
        }

        .pass-header {
          padding: 20px;
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(255,255,255,0.03);
        }
        .pass-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
        .logo-dot { width: 10px; height: 10px; background: #FFD700; border-radius: 50%; }
        .pass-label { font-size: 10px; color: #86868b; letter-spacing: 1px; font-weight: 600; }

        .pass-body { padding: 24px; flex: 1; }
        .pass-row { display: flex; justify-content: space-between; margin-bottom: 24px; }
        .pass-field label { display: block; font-size: 10px; color: #86868b; margin-bottom: 4px; font-weight: 600; }
        .pass-field .value { font-size: 16px; font-weight: 600; }
        .pass-field .value.gold { color: #FFD700; }
        .pass-field.right { text-align: right; }

        .pass-barcode {
          height: 60px;
          background: #fff;
          margin: 0 20px 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 0 10px;
        }
        .bar-line { background: #000; }

        /* Holographic Effect */
        .holo-shine {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(255, 215, 0, 0.1) 45%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 215, 0, 0.1) 55%,
            transparent 60%
          );
          transform: rotate(30deg);
          animation: holo-move 4s infinite linear;
          pointer-events: none;
        }

        @keyframes float-pass {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        @keyframes holo-move {
          0% { transform: translateY(0) translateX(0) rotate(30deg); }
          100% { transform: translateY(20%) translateX(-20%) rotate(30deg); }
        }

        @media (max-width: 900px) {
          .layout-split { grid-template-columns: 1fr; gap: 40px; }
          .visual-col { margin-top: 20px; }
          .h2-wallet { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}