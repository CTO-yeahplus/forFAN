"use client";

import SectionHeader from "../SectionHeader";
import SectionShell from "../SectionShell";
import ScrollReveal from "../ScrollReveal";
import { partnerValue } from "@/content/data";
import ItemCard from "../ItemCard";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/useLanguage";

export default function PartnersSection() {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(1000); 
  const [isDragging, setIsDragging] = useState(false);

  // Logic
  const conversionRate = 0.45;
  const ticketPrice = 5000;
  const uplift = Math.floor(visitors * conversionRate * ticketPrice);
  
  // Progress (0 ~ 1)
  const min = 500;
  const max = 5000;
  const progress = (visitors - min) / (max - min);

  // 🌈 Dynamic Color Logic
  let resultColor = "#0071e3"; // Default: Blue
  let glowColor = "rgba(0, 113, 227, 0.4)";
  let bgGlow = "rgba(0, 113, 227, 0.05)";

  if (progress > 0.7) { 
    // 🔥 High: Red
    resultColor = "#FF3B30"; 
    glowColor = "rgba(255, 59, 48, 0.5)";
    bgGlow = "rgba(255, 59, 48, 0.08)";
  } else if (progress > 0.4) { 
    // 🔮 Mid: Purple
    resultColor = "#AF52DE"; 
    glowColor = "rgba(175, 82, 222, 0.5)";
    bgGlow = "rgba(175, 82, 222, 0.08)";
  }

  return (
    <SectionShell id="partners" className="theme-growth">
      <SectionHeader
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <ScrollReveal>
        {/* Simulator: Glassmorphism + Dynamic Glow */}
        <div 
          className="simulator-glass"
          style={{ 
            boxShadow: `0 30px 80px -20px ${glowColor}`,
            borderColor: progress > 0.7 ? "rgba(255, 59, 48, 0.3)" : "rgba(255,255,255,0.4)",
            background: `linear-gradient(180deg, rgba(255,255,255,0.8) 0%, ${bgGlow} 100%)`
          }}
        >
          <div className="sim-header">
            <h3>{t("partners.sim.title")}</h3>
            <p>{t("partners.sim.desc")}</p>
          </div>

          <div className="sim-body">
            {/* Left: Input Control */}
            <div className="input-group">
              <label>
                Daily Visitors
                <span className={`visitor-badge ${isDragging ? 'active' : ''}`} style={{ color: resultColor }}>
                  {visitors.toLocaleString()}
                </span>
              </label>
              
              <div className="slider-container">
                <input 
                  type="range" min={min} max={max} step="100" 
                  value={visitors} 
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  className="slider"
                  style={{ 
                    background: `linear-gradient(90deg, ${resultColor} ${progress * 100}%, #e5e5ea ${progress * 100}%)` 
                  }}
                />
              </div>
              <div className="range-labels">
                <span>Small Store</span>
                <span>Flagship</span>
              </div>
            </div>

            {/* Right: Result Display */}
            <div className="result-group" style={{ borderColor: progress > 0.7 ? resultColor : 'transparent' }}>
              <div className="result-label">Monthly Revenue Uplift</div>
              <div 
                className="result-value" 
                style={{ 
                  color: resultColor, 
                  transform: `scale(${1 + progress * 0.1})`,
                  textShadow: progress > 0.6 ? `0 0 30px ${glowColor}` : 'none'
                }}
              >
                + ₩{uplift.toLocaleString()}
              </div>
              <div className="result-desc">
                *Based on <b style={{color: resultColor}}>45%</b> Retention Rate
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 🍱 Alive Bento Grid */}
      <div className="alive-grid-wrapper" style={{ marginTop: 60 }}>
        {partnerValue.map((it, idx) => (
          <ScrollReveal key={it.id} delay={idx * 100}>
            <div className="alive-card">
              <ItemCard item={it} />
              <div className="hover-glow" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style jsx>{`
        /* Glass Simulator */
        .simulator-glass {
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-radius: 32px; padding: 48px;
          border: 1px solid rgba(255,255,255,0.6);
          margin-bottom: 60px; max-width: 900px; margin-left: auto; margin-right: auto;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .sim-header { text-align: center; margin-bottom: 48px; }
        .sim-header h3 { font-size: 28px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; letter-spacing: -0.02em; }
        .sim-header p { color: #86868b; font-size: 17px; word-break: keep-all; }
        
        .sim-body { display: flex; gap: 60px; align-items: center; justify-content: space-between; }
        
        /* Input Group */
        .input-group { flex: 1; display: flex; flex-direction: column; }
        .input-group label { display: flex; justify-content: space-between; align-items: center; font-size: 15px; font-weight: 600; color: #86868b; margin-bottom: 20px; }
        .visitor-badge { font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; transition: transform 0.2s; }
        .visitor-badge.active { transform: scale(1.1); }
        
        /* Custom Slider Styling */
        .slider-container { position: relative; height: 30px; display: flex; align-items: center; }
        .slider { 
          -webkit-appearance: none; width: 100%; height: 6px; border-radius: 99px; outline: none; 
          transition: background 0.1s; cursor: pointer;
        }
        .slider::-webkit-slider-thumb { 
          -webkit-appearance: none; width: 28px; height: 28px; border-radius: 50%; background: #fff; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); 
          cursor: grab; transition: transform 0.2s, box-shadow 0.2s; 
          margin-top: -1px; /* Align visual center if needed */
        }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .slider:active::-webkit-slider-thumb { 
          cursor: grabbing; transform: scale(1.2); 
          box-shadow: 0 0 0 10px ${glowColor}; /* Tactile Feedback Ring */
        }
        
        .range-labels { display: flex; justify-content: space-between; font-size: 12px; color: #a1a1a6; font-weight: 600; margin-top: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        
        /* Result Group */
        .result-group { 
          background: rgba(255,255,255,0.6); padding: 32px 48px; border-radius: 24px; 
          text-align: center; min-width: 320px; 
          box-shadow: 0 10px 40px rgba(0,0,0,0.05); 
          border: 2px solid transparent;
          transition: border-color 0.3s, transform 0.3s;
        }
        .result-label { font-size: 13px; font-weight: 700; color: #86868b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .result-value { font-size: 42px; font-weight: 800; margin-bottom: 8px; font-variant-numeric: tabular-nums; letter-spacing: -1px; transition: color 0.3s; }
        .result-desc { font-size: 13px; color: #86868b; font-weight: 500; }

        /* Alive Bento Grid Wrapper */
        .alive-grid-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Assuming 3 items, adjust based on partnerValue length */
          gap: 24px;
        }

        .alive-card {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 24px; /* Match ItemCard radius */
        }
        
        .alive-card:hover {
          transform: translateY(-8px);
          z-index: 2;
        }

        /* Hover Glow Effect for Cards */
        .hover-glow {
          position: absolute; inset: 0; border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 113, 227, 0.15);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
          z-index: -1;
        }
        .alive-card:hover .hover-glow { opacity: 1; }

        @media (max-width: 900px) { 
          .sim-body { flex-direction: column; gap: 40px; } 
          .result-group { width: 100%; min-width: auto; } 
          .alive-grid-wrapper { grid-template-columns: 1fr; }
        }
      `}</style>
    </SectionShell>
  );
}