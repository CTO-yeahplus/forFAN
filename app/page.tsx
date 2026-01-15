"use client";

import { LanguageProvider } from "@/lib/useLanguage"; // 👈 Provider Import
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AppleIdentitySection from "@/components/sections/AppleIdentitySection";
import AppleWalletSection from "@/components/sections/AppleWalletSection";
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CreatorEconomySection from "@/components/sections/CreatorEconomySection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import FloatingDock from "@/components/FloatingDock";

export default function Page() {
  return (
    /* 🟢 최상위 래퍼를 LanguageProvider로 설정 */
    <LanguageProvider>
      
      {/* 이제 FloatingDock이 Provider 내부에 있으므로 에러가 사라집니다 */}
      <FloatingDock />
      
      <main>
        <HeroSection />

        <div className="container" style={{ paddingTop: 40 }}>
          <ScrollReveal delay={100}><PrincipleSection /></ScrollReveal>
        </div>
        
        <div className="container">
          <SectionShell id="journey" className="theme-clean">
            <JourneySection />
          </SectionShell>
        </div>

        <div className="container">
          <SectionShell id="experience" className="theme-mist">
             <ExperienceSection />
          </SectionShell>
        </div>

        <AppleIdentitySection />
        
        <div className="container">
          <AppleWalletSection /> 
        </div>

        <QuietRewardsSection />

        {/* Revenue Section (Self-contained Theme) */}
        <RevenueSection />

        {/* Partners Section (Self-contained Theme) */}
        <PartnersSection />

        {/* Creator Economy Section (Self-contained Theme) */}
        <CreatorEconomySection />

        <div className="container">
           <SectionShell id="dosdonts" className="theme-clean">
             <DosDontsSection />
           </SectionShell>
        </div>

        <footer className="footer container" style={{ marginBottom: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text-primary)" }}>forFAN Global · Experience-first Brief</div>
              <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
                Designed by LK Ventures for customers.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
               <span className="kbd">Confidential</span>
            </div>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
}