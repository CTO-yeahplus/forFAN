"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 🌐 지원 언어 타입
type Lang = "ko" | "en" | "zh-CN" | "zh-TW";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 📚 통합 번역 사전 (Dictionary)
const dictionary: Record<string, Record<Lang, string>> = {
  // 1. Hero
  "hero.kicker": { ko: "Brand Platform • Experience-first", en: "Brand Platform • Experience-first", "zh-CN": "品牌平台 • 体验至上", "zh-TW": "品牌平台 • 體驗至上" },
  "hero.title1": { ko: "Technology\ndoesn’t sell.", en: "Technology\ndoesn’t sell.", "zh-CN": "技术\n本身无法销售", "zh-TW": "技術\n本身無法銷售" },
  "hero.title2": { ko: "Experience\ndoes.", en: "Experience\ndoes.", "zh-CN": "体验\n才是关键", "zh-TW": "體驗\n才是關鍵" },
  "hero.sub": { ko: "forFAN은 사진을 찍게 하지 않습니다. 그 순간을 ‘의미 있게’ 남기게 합니다.", en: "forFAN doesn't just make you take photos. We make the moment 'meaningful'.", "zh-CN": "forFAN 不仅仅是让您拍照。我们让那个瞬间变得“有意义”。", "zh-TW": "forFAN 不僅僅是讓您拍照。我們讓那個瞬間變得「有意義」。" },

  // 2. Principle
  "principle.badge": { ko: "The First Principle", en: "The First Principle", "zh-CN": "第一原则", "zh-TW": "第一原則" },
  "principle.line1": { ko: "우리는 기능을", en: "We don't sell", "zh-CN": "我们要销售的", "zh-TW": "我們要銷售的" },
  "principle.line2": { ko: "팔지 않습니다.", en: "Features.", "zh-CN": "不是功能。", "zh-TW": "不是功能。" },
  "principle.line3": { ko: "경험의 질을", en: "We design", "zh-CN": "而是设计", "zh-TW": "而是設計" },
  "principle.line4": { ko: "설계합니다.", en: "Quality of Experience.", "zh-CN": "体验的质量。", "zh-TW": "體驗的質量。" },
  "principle.desc": { ko: "고객이 앱을 열었을 때 느끼는 감정 설렘 → 확신 → 여운을 연결하는 것. 그것이 유일한 우리의 전략입니다.", en: "Connecting the emotions: Excitement → Confidence → Afterglow. That is our only strategy.", "zh-CN": "连接客户打开应用时的情感：心动 → 确信 → 回味。这是我们唯一的策略。", "zh-TW": "連接客戶打開應用時的情感：心動 → 確信 → 回味。這是我們唯一的策略。" },

  // 3. Journey
  "journey.title": { ko: "forFAN 고객 여정 지도", en: "Customer Journey Map", "zh-CN": "forFAN 客户旅程地图", "zh-TW": "forFAN 客戶旅程地圖" },
  "journey.lead": { ko: "고객의 시간은 멈춰있지 않습니다. Before(기대)에서 After(여운)까지 끊김 없는 빛의 흐름을 설계합니다.", en: "Customer time never stops. We design a seamless flow from Before to After.", "zh-CN": "客户的时间从未停止。设计从 Before(期待) 到 After(回味) 的无缝流程。", "zh-TW": "客戶的時間從未停止。設計從 Before(期待) 到 After(回味) 的無縫流程。" },

  // 4. Experience
  "exp.title": { ko: "경험의 흐름: Before · During · After", en: "Flow of Experience", "zh-CN": "体验流程", "zh-TW": "體驗流程" },
  "exp.lead": { ko: "경험은 멈추지 않고 흐릅니다. 시간의 흐름에 따라 변화하는 가치를 확인하세요.", en: "Experience flows continuously. Witness the value transforming over time.", "zh-CN": "体验川流不息。请见证价值随时间流逝而发生的转变。", "zh-TW": "體驗川流不息。請見證價值隨時間流逝而發生的轉變。" },

  // 5. Wallet
  "wallet.badge": { ko: "The Best App is No App", en: "The Best App is No App", "zh-CN": "最好的应用是无感应用", "zh-TW": "最好的應用是無感應用" },
  "wallet.title": { ko: "지갑 속에 Golden Ticket을.", en: "Golden Ticket in your Wallet.", "zh-CN": "钱包里的金票", "zh-TW": "錢包裡的金票" },
  "wallet.desc": { ko: "앱을 켜지 않아도 됩니다. 매장 근처에 가면, 당신의 추억 티켓이 잠금 화면에 조용히 떠오릅니다.", en: "No need to open the app. Your memory ticket quietly appears on the lock screen.", "zh-CN": "无需打开应用程序。当您靠近商店时，您的回忆票据会静静地浮现在锁屏上。", "zh-TW": "無需打開應用程序。當您靠近商店時，您的回憶票據會靜靜地浮現在鎖屏上。" },
  "wallet.li1": { ko: "촬영 직후 자동 발급", en: "Instant Issuance", "zh-CN": "拍摄后自动签发", "zh-TW": "拍攝後自動簽發" },
  "wallet.li2": { ko: "매장 방문 시 위치 기반 팝업", en: "Location-based Popup", "zh-CN": "基于位置的弹出窗口", "zh-TW": "基於位置的彈出窗口" },
  "wallet.li3": { ko: "등급에 따라 변하는 디자인", en: "Dynamic Design by Grade", "zh-CN": "根据等级变化的设计", "zh-TW": "根據等級變化的設計" },

  // 6. Rewards (Quiet Rewards)
  "rewards.title": { ko: "“Quiet Rewards” — 4CUT Coin", en: "“Quiet Rewards” — 4CUT Coin", "zh-CN": "“静谧奖励” — 4CUT Coin", "zh-TW": "“靜謐獎勵” — 4CUT Coin" },
  "rewards.lead": { ko: "발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요.", en: "Aesthetics of discovery. Wipe the frosted glass (Hover) to reveal hidden value.", "zh-CN": "发现的美学。像擦拭磨砂玻璃一样（悬停），发现隐藏的价值。", "zh-TW": "發現的美學。像擦拭磨砂玻璃一樣（懸停），發現隱藏的價值。" },

  // 7. Revenue
  "revenue.title": { ko: "Logic Flow: 24시간 멈추지 않는 매출 회로", en: "Logic Flow: 24/7 Revenue Circuit", "zh-CN": "逻辑流：24小时不间断的营收回路", "zh-TW": "邏輯流：24小時不間斷的營收迴路" },
  "revenue.lead": { ko: "고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다.", en: "CX is a precisely engineered KPI circuit.", "zh-CN": "客户体验是精心设计的 KPI 回路。", "zh-TW": "客戶體驗是精心設計的 KPI 迴路。" },

  // 🟢 [누락되었던 부분] 8. Partners (수익 극대화 섹션)
  "partners.title": { ko: "실질적 수익 극대화", en: "Maximize Real Revenue", "zh-CN": "最大化实际收益", "zh-TW": "最大化實際收益" },
  "partners.lead": { ko: "데이터로 증명하는 효과 — 로컬 비즈니스를 글로벌 수익 모델로 전환합니다.", en: "Data-proven effects — Transforming local business into a global revenue model.", "zh-CN": "数据证明的效果 — 将本地业务转化为全球盈利模式。", "zh-TW": "數據證明的效果 — 將本地業務轉化為全球盈利模式。" },
  "partners.sim.title": { ko: "Monthly Revenue Uplift Simulator", en: "Monthly Revenue Uplift Simulator", "zh-CN": "月收入增长模拟器", "zh-TW": "月收入增長模擬器" },
  "partners.sim.desc": { ko: "앱 도입 시, 재방문 유도로 인한 월 추가 예상 매출을 확인하세요.", en: "Estimated monthly revenue uplift driven by revisit retention.", "zh-CN": "查看引入应用后，因回头客增加而带来的月度额外收入预测。", "zh-TW": "查看引入應用後，因回頭客增加而帶來的月度額外收入預測。" },

  // 9. Creator Economy
  "creator.badge": { ko: "The Next Chapter", en: "The Next Chapter", "zh-CN": "下一章", "zh-TW": "下一章" },
  "creator.title": { ko: "Make it. Sell it. Global.", en: "Make it. Sell it. Global.", "zh-CN": "Make it. Sell it. Global.", "zh-TW": "Make it. Sell it. Global." },
  "creator.lead": { ko: "누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이 전 세계 forFAN 키오스크에서 판매됩니다.", en: "Everyone becomes a creator. Your designed frames are sold worldwide.", "zh-CN": "每个人都可以成为创作者。您设计的相框将在全球销售。", "zh-TW": "每個人都可以成為創作者。您設計的相框將在全球銷售。" },
  "creator.feat1": { ko: "Infinite Creativity", en: "Infinite Creativity", "zh-CN": "无限创意", "zh-TW": "無限創意" },
  "creator.desc1": { ko: "유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.", en: "Users generate thousands of trendy frames daily.", "zh-CN": "用户每天生成数千个潮流相框。", "zh-TW": "用戶每天生成數千個潮流相框。" },
  "creator.feat2": { ko: "No Borders", en: "No Borders", "zh-CN": "无国界", "zh-TW": "無國界" },
  "creator.desc2": { ko: "한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.", en: "Frames made in Korea are instantly used globally.", "zh-CN": "在韩国制作的相框可在全球即时使用。", "zh-TW": "在韓國製作的相框可在全球即時使用。" },
  "creator.feat3": { ko: "Global Revenue", en: "Global Revenue", "zh-CN": "全球收益", "zh-TW": "全球收益" },
  "creator.desc3": { ko: "원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.", en: "KRW, USD, EUR. Experience a borderless settlement.", "zh-CN": "韩元、美元、欧元。体验无国界的结算系统。", "zh-TW": "韓元、美元、歐元。體驗無國界的結算系統。" },
};

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  // 언어 순환 로직
  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ko") return "en";
      if (prev === "en") return "zh-CN";
      if (prev === "zh-CN") return "zh-TW";
      return "ko";
    });
  };
  
  // 번역 함수 (키가 없으면 키를 그대로 반환)
  const t = (key: string) => {
    return dictionary[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}