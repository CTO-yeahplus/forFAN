"use client";

import { useState, useRef, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

// 🎮 Game Type Definition
type GameType = 'capsule' | 'focus' | 'film';

export default function DailyRitualSection() {
  const [activeGame, setActiveGame] = useState<GameType>('capsule');
  
  // Ritual Items (Tab)
  const games = [
    { id: 'capsule', label: 'Moment Capsule', desc: '에너지를 모아 터트리세요' },
    { id: 'focus', label: 'Focus Tuner', desc: '다이얼을 돌려 초점을 맞추세요' },
    { id: 'film', label: 'Film Developer', desc: '문질러서 사진을 현상하세요' },
  ];

  return (
    <section className="section ritual-theme">
      <div className="container">
        <div className="ritual-layout">
          <div className="text-area">
            <SectionHeader 
              title="Daily Ritual" 
              lead="단순한 뽑기가 아닙니다. 매일 다른 감각적인 의식(Ritual)을 통해 오늘의 행운을 발견하세요." 
            />
          </div>

          {/* 🕹️ Game Switcher (Tab) */}
          <div className="game-switcher">
            {games.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGame(g.id as GameType)}
                className={`switch-btn ${activeGame === g.id ? 'active' : ''}`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* 🎲 Active Game Area */}
          <div className="game-stage">
            <div className="game-instruction">
              <Icon name="hint" />
              <span>{games.find(g => g.id === activeGame)?.desc}</span>
            </div>

            <ScrollReveal key={activeGame}>
              {activeGame === 'capsule' && <CapsuleGame />}
              {activeGame === 'focus' && <FocusGame />}
              {activeGame === 'film' && <FilmGame />}
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ritual-theme {
          background: #050505;
          padding: 100px 0;
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .ritual-layout { display: flex; flex-direction: column; align-items: center; gap: 40px; }
        
        .game-switcher {
          display: flex; gap: 8px; background: rgba(255,255,255,0.1);
          padding: 4px; border-radius: 99px; margin-bottom: 20px;
        }
        .switch-btn {
          padding: 8px 20px; border-radius: 99px; background: transparent; color: #888;
          font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all 0.3s;
        }
        .switch-btn.active { background: #fff; color: #000; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }

        .game-stage {
          width: 100%; display: flex; flex-direction: column; align-items: center; gap: 24px;
          min-height: 320px;
        }
        .game-instruction {
          display: flex; align-items: center; gap: 6px; color: #FFD700; font-size: 13px; font-weight: 500;
          opacity: 0.8; letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
}

// ------------------------------------------------------------------
// 🧨 Game 1: Moment Capsule (Tension & Pop)
// ------------------------------------------------------------------
function CapsuleGame() {
  const [status, setStatus] = useState<'idle' | 'charging' | 'success'>('idle');
  const [power, setPower] = useState(0);
  const [reward, setReward] = useState(0);
  const requestRef = useRef<number | null>(null);

  const startCharging = () => { if (status !== 'success') setStatus('charging'); };
  
  const stopCharging = () => {
    if (status === 'success') return;
    if (power > 85) completeRitual(); // Success threshold
    else {
      setStatus('idle');
      setPower(0);
    }
  };

  useEffect(() => {
    if (status === 'charging') {
      const animate = () => {
        setPower(prev => (prev >= 100 ? 100 : prev + 2));
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [status]);

  const completeRitual = () => {
    setStatus('success');
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([50, 50, 50]);
    setReward(Math.floor(Math.random() * 400) + 100);
  };

  return (
    <div 
      className={`capsule-container ${status}`}
      onMouseDown={startCharging} onMouseUp={stopCharging} onMouseLeave={stopCharging}
      onTouchStart={startCharging} onTouchEnd={stopCharging}
    >
      <div className="aura-ring" style={{ transform: `scale(${1 + power/40})`, opacity: power/100 }} />
      <div className="capsule-core">
        {status === 'success' ? <RewardDisplay amount={reward} /> : <div className="guide">{status === 'charging' ? 'HOLD...' : 'HOLD'}</div>}
      </div>
      
      {/* Progress SVG Ring */}
      <svg className="progress-ring" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="58" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
        <circle cx="60" cy="60" r="58" stroke={power > 85 ? "#FFD700" : "#fff"} strokeWidth="4" fill="none" strokeDasharray="364" strokeDashoffset={364 - (364 * power) / 100} strokeLinecap="round" />
      </svg>

      <style jsx>{`
        .capsule-container { width: 180px; height: 180px; position: relative; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: transform 0.1s; user-select: none; }
        .capsule-container:active { transform: scale(0.95); }
        .capsule-container.charging { animation: shake 0.5s infinite; }
        .capsule-core { width: 140px; height: 140px; background: radial-gradient(circle at 30% 30%, #333, #000); border-radius: 50%; display: flex; justify-content: center; align-items: center; z-index: 2; border: 1px solid rgba(255,255,255,0.2); box-shadow: inset 0 0 20px rgba(255,255,255,0.1); }
        .success .capsule-core { background: radial-gradient(circle at 30% 30%, #FFD700, #B8860B); border-color: #FFD700; box-shadow: 0 0 40px rgba(255,215,0,0.4); }
        .aura-ring { position: absolute; inset: -10px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%); z-index: 0; }
        .progress-ring { position: absolute; inset: 0; transform: rotate(-90deg); pointer-events: none; z-index: 3; }
        .guide { font-weight: 700; font-size: 14px; color: #888; letter-spacing: 1px; }
        @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 20% { transform: translate(-2px, 0px) rotate(1deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 60% { transform: translate(-2px, 1px) rotate(0deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } }
      `}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// 📸 Game 2: Focus Tuner (Precision)
// ------------------------------------------------------------------
function FocusGame() {
  const [blurAmount, setBlurAmount] = useState(20); // Initial blur (0 to 40)
  const [success, setSuccess] = useState(false);
  const [reward, setReward] = useState(0);
  
  // Target sweet spot is at range value 50 (center)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (success) return;
    const val = parseInt(e.target.value);
    const dist = Math.abs(50 - val); // Distance from center (0 is perfect)
    
    setBlurAmount(dist / 1.5); // Map distance to blur px

    // Success Condition: very close to center for a moment
    if (dist < 2 && !success) {
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(50);
      setSuccess(true);
      setBlurAmount(0); // Perfect clear
      setReward(Math.floor(Math.random() * 400) + 100);
    } else if (dist < 10) {
       // Haptic hint when getting closer
       if (typeof navigator !== "undefined" && navigator.vibrate && Math.random() > 0.7) navigator.vibrate(5);
    }
  };

  return (
    <div className="focus-container">
      <div className={`viewfinder ${success ? 'flash' : ''}`}>
        {/* Blurry Image Layer */}
        <div 
          className="target-image"
          style={{ 
            filter: `blur(${blurAmount}px) grayscale(${success ? 0 : 100}%)`,
            opacity: success ? 1 : 0.6
          }} 
        />
        
        {/* Focus Brackets */}
        <div className={`brackets ${blurAmount < 5 ? 'active' : ''}`}>
          <div className="br tl" /> <div className="br tr" />
          <div className="br bl" /> <div className="br br-c" />
        </div>

        {success && (
          <div className="center-reward">
            <RewardDisplay amount={reward} />
          </div>
        )}
      </div>

      {/* Control Dial */}
      <div className="dial-wrapper">
        <input 
          type="range" min="0" max="100" defaultValue="10" 
          onChange={handleInput} 
          className="focus-slider"
          disabled={success}
        />
        <div className="dial-marks">
          {[...Array(11)].map((_, i) => <div key={i} className="mark" style={{ height: i===5 ? 16 : 8 }} />)}
        </div>
      </div>

      <style jsx>{`
        .focus-container { width: 280px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
        .viewfinder { 
          width: 240px; height: 160px; background: #111; border-radius: 12px; position: relative; overflow: hidden; 
          border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .viewfinder.flash { animation: flash 0.5s ease-out; border-color: #FFD700; }
        
        /* Placeholder Image (Geometric) */
        .target-image {
          width: 100%; height: 100%;
          background-image: linear-gradient(45deg, #0071e3 25%, #34C759 75%);
          transition: filter 0.1s;
        }

        .brackets { position: absolute; inset: 20px; transition: all 0.3s; opacity: 0.5; transform: scale(1.1); }
        .brackets.active { opacity: 1; transform: scale(1); border-color: #FFD700; }
        .br { position: absolute; width: 10px; height: 10px; border: 2px solid #fff; transition: border-color 0.3s; }
        .brackets.active .br { border-color: #FFD700; }
        .tl { top: 0; left: 0; border-right: 0; border-bottom: 0; }
        .tr { top: 0; right: 0; border-left: 0; border-bottom: 0; }
        .bl { bottom: 0; left: 0; border-right: 0; border-top: 0; }
        .br-c { bottom: 0; right: 0; border-left: 0; border-top: 0; }

        .center-reward { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); }

        .dial-wrapper { width: 100%; position: relative; padding: 0 10px; }
        .focus-slider { 
          width: 100%; -webkit-appearance: none; background: transparent; cursor: pointer; position: relative; z-index: 2;
        }
        .focus-slider::-webkit-slider-thumb {
          -webkit-appearance: none; height: 24px; width: 24px; border-radius: 50%; background: #fff; 
          border: 2px solid #000; box-shadow: 0 2px 6px rgba(0,0,0,0.3); margin-top: -10px;
        }
        .focus-slider::-webkit-slider-runnable-track {
          width: 100%; height: 4px; background: #333; border-radius: 2px;
        }
        .dial-marks { 
          position: absolute; top: 14px; left: 10px; right: 10px; display: flex; justify-content: space-between; pointer-events: none; 
        }
        .mark { width: 2px; background: #444; }

        @keyframes flash { 0% { box-shadow: inset 0 0 0 100px #fff; } 100% { box-shadow: inset 0 0 0 0 transparent; } }
      `}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// 🎞️ Game 3: Film Developer (Discovery)
// ------------------------------------------------------------------
function FilmGame() {
  const [developed, setDeveloped] = useState(0);
  const [success, setSuccess] = useState(false);
  const [reward, setReward] = useState(0);

  const handleRub = () => {
    if (success) return;
    setDeveloped(prev => {
      const next = prev + 2.5; // Speed of developing
      if (next >= 100) {
        setSuccess(true);
        if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(100);
        setReward(Math.floor(Math.random() * 400) + 100);
        return 100;
      }
      return next;
    });
  };

  return (
    <div 
      className="film-container"
      onMouseMove={handleRub}
      onTouchMove={handleRub}
    >
      <div className="darkroom-tray">
        <div className="liquid-ripple" />
        
        {/* Photo Paper */}
        <div className="photo-paper">
          {/* Hidden Image reveals based on 'developed' state */}
          <div 
            className="film-image"
            style={{ 
              opacity: developed / 100,
              filter: `sepia(${100 - developed}%) contrast(${developed + 50}%)`
            }} 
          >
            {/* Visual pattern instead of real image */}
            <div className="pattern-grid" />
          </div>
          
          {/* Overlay Text */}
          {!success && (
            <div className="rub-hint" style={{ opacity: 1 - developed/80 }}>
              RUB TO DEVELOP
            </div>
          )}

          {success && (
            <div className="film-reward">
              <span className="stamp">DEVELOPED</span>
              <RewardDisplay amount={reward} />
            </div>
          )}
        </div>
      </div>
      
      <div className="dev-status-bar">
        <div className="bar-fill" style={{ width: `${developed}%` }} />
      </div>

      <style jsx>{`
        .film-container { width: 220px; display: flex; flex-direction: column; align-items: center; gap: 16px; cursor: crosshair; }
        
        .darkroom-tray {
          width: 100%; height: 260px; background: #1c1c1e; border: 4px solid #2c2c2e; border-radius: 8px;
          display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }
        
        .photo-paper {
          width: 180px; height: 220px; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: relative; display: flex; justify-content: center; align-items: center; overflow: hidden;
        }

        .film-image {
          width: 100%; height: 100%; position: absolute; inset: 0;
          background: #FFD700; /* Base color for revealed image */
          transition: all 0.1s linear;
        }
        .pattern-grid {
          width: 100%; height: 100%;
          background-image: radial-gradient(#000 2px, transparent 2px);
          background-size: 20px 20px;
          opacity: 0.2;
        }

        .rub-hint {
          position: absolute; font-size: 14px; font-weight: 800; color: #000; opacity: 0.3;
          transform: rotate(-15deg); pointer-events: none; z-index: 5;
        }

        .film-reward {
          position: absolute; z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 8px;
          animation: stampIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .stamp { 
          font-size: 12px; font-weight: 900; color: #d63031; border: 2px solid #d63031; 
          padding: 2px 6px; border-radius: 4px; transform: rotate(-10deg);
        }

        .dev-status-bar { width: 100%; height: 4px; background: #333; border-radius: 2px; overflow: hidden; }
        .bar-fill { height: 100%; background: #d63031; transition: width 0.1s; }

        @keyframes stampIn { from { transform: scale(2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

// ------------------------------------------------------------------
// 🏆 Shared Component: Reward Display
// ------------------------------------------------------------------
function RewardDisplay({ amount }: { amount: number }) {
  return (
    <div className="reward-pop">
      <span className="plus">+</span>
      <span className="amount">{amount}</span>
      <span className="unit">P</span>
      <style jsx>{`
        .reward-pop { color: #000; display: flex; align-items: baseline; gap: 2px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
        .plus { font-size: 16px; font-weight: 700; color: #1d1d1f; }
        .amount { font-size: 32px; font-weight: 800; letter-spacing: -1px; color: #1d1d1f; }
        .unit { font-size: 14px; font-weight: 700; color: #1d1d1f; }
      `}</style>
    </div>
  );
}