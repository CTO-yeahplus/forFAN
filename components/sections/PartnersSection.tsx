"use client";

import SectionHeader from "../SectionHeader";
import SectionShell from "../SectionShell";
import ScrollReveal from "../ScrollReveal";
import { partnerValue } from "@/content/data";
import ItemCard from "../ItemCard";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage"; // 👈 다국어 지원

export default function PartnersSection() {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(1000); 
  const conversionRate = 0.45;
  const ticketPrice = 5000;
  const uplift = Math.floor(visitors * conversionRate * ticketPrice);
  const progress = (visitors - 500) / (5000 - 500); // 0 ~ 1

  // 🌈 Dynamic Color Logic (Blue -> Purple -> Red)
  let resultColor = "#0071e3"; // Default: Blue
  let glowColor = "rgba(0, 113, 227, 0.1)";

  if (progress > 0.7) { 
    // 🔥 High: Red (강렬한 수익)
    resultColor = "#FF3B30"; 
    glowColor = "rgba(255, 59, 48, 0.2)";
  } else if (progress > 0.4) { 
    // 🔮 Mid: Purple (성장 단계)
    resultColor = "#AF52DE"; 
    glowColor = "rgba(175, 82, 222, 0.15)";
  }

  return (
    <SectionShell id="partners" className="theme-growth">
      <SectionHeader
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <ScrollReveal>
        {/* Simulator: Dynamic Glow Effect */}
        <div 
          className="simulator-glass"
          style={{ 
            boxShadow: `0 20px 60px ${glowColor}`,
            borderColor: progress > 0.7 ? "rgba(255, 59, 48, 0.3)" : "rgba(255,255,255,0.4)"
          }}
        >
          <div className="sim-header">
            <h3>{t("partners.sim.title")}</h3>
            <p>{t("partners.sim.desc")}</p>
          </div>

          <div className="sim-body">
            <div className="input-group">
              <label>Visitors: <b>{visitors.toLocaleString()}</b></label>
              <input 
                type="range" min="500" max="5000" step="100" 
                value={visitors} onChange={(e) => setVisitors(Number(e.target.value))}
                className="slider"
                style={{ 
                  background: `linear-gradient(90deg, ${resultColor} ${progress * 100}%, #e5e5ea ${progress * 100}%)` 
                }}
              />
              <div className="range-labels"><span>Small</span><span>Flagship</span></div>
            </div>

            <div className="result-group">
              <div className="result-label">Monthly Uplift</div>
              <div 
                className="result-value" 
                style={{ 
                  color: resultColor, 
                  transform: `scale(${1 + progress * 0.2})`,
                  textShadow: progress > 0.7 ? `0 0 20px ${glowColor}` : 'none'
                }}
              >
                + ₩{uplift.toLocaleString()}
              </div>
              <div className="result-desc">*Based on 45% Retention Rate</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="bento-grid-container" style={{ marginTop: 60 }}>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>

      <style jsx>{`
        /* Glassmorphism Simulator */
        .simulator-glass {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          margin-bottom: 60px; max-width: 800px; margin-left: auto; margin-right: auto;
          transition: all 0.3s ease;
        }

        .sim-header { text-align: center; margin-bottom: 40px; }
        .sim-header h3 { font-size: 24px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; }
        .sim-header p { color: #86868b; font-size: 16px; word-break: keep-all; }
        
        .sim-body { display: flex; gap: 40px; align-items: center; justify-content: space-between; }
        
        .input-group { flex: 1; }
        .input-group label { display: block; font-size: 15px; color: #1d1d1f; margin-bottom: 16px; }
        .input-group label b { font-size: 20px; color: #1d1d1f; margin-left: 8px; }
        
        .slider { 
          -webkit-appearance: none; width: 100%; height: 8px; border-radius: 5px; outline: none; margin-bottom: 12px; 
          transition: background 0.1s; 
        }
        .slider::-webkit-slider-thumb { 
          -webkit-appearance: none; width: 32px; height: 32px; border-radius: 50%; background: #fff; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: grab; transition: transform 0.1s; 
          border: 1px solid rgba(0,0,0,0.05);
        }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .slider:active::-webkit-slider-thumb { cursor: grabbing; transform: scale(1.2); }
        
        .range-labels { display: flex; justify-content: space-between; font-size: 12px; color: #86868b; font-weight: 600; }
        
        .result-group { 
          background: rgba(255,255,255,0.8); padding: 24px 40px; border-radius: 16px; 
          text-align: center; min-width: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); 
        }
        .result-label { font-size: 14px; font-weight: 600; color: #86868b; margin-bottom: 8px; text-transform: uppercase; }
        .result-value { font-size: 36px; font-weight: 800; margin-bottom: 6px; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .result-desc { font-size: 11px; color: #a1a1a6; }

        @media (max-width: 768px) { .sim-body { flex-direction: column; gap: 30px; } .result-group { width: 100%; } }
      `}</style>
    </SectionShell>
  );
}