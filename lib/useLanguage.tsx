"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ko" | "en" | "zh-CN" | "zh-TW";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary: Record<string, Record<Lang, string>> = {
  // ... (Hero ~ Principle 유지)
  "hero.kicker": { ko: "Brand Platform • Experience-first", en: "Brand Platform • Experience-first", "zh-CN": "品牌平台 • 体验至上", "zh-TW": "品牌平台 • 體驗至上" },
  "hero.title1": { ko: "Technology\ndoesn’t sell.", en: "Technology\ndoesn’t sell.", "zh-CN": "技术\n本身无法销售", "zh-TW": "技術\n本身無法銷售" },
  "hero.title2": { ko: "Experience\ndoes.", en: "Experience\ndoes.", "zh-CN": "体验\n才是关键", "zh-TW": "體驗\n才是關鍵" },
  "hero.sub": { ko: "forFAN은 사진을 찍게 하지 않습니다. 그 순간을 ‘의미 있게’ 남기게 합니다.", en: "forFAN doesn't just make you take photos. We make the moment 'meaningful'.", "zh-CN": "forFAN 不仅仅是让您拍照。我们让那个瞬间变得“有意义”。", "zh-TW": "forFAN 不僅僅是讓您拍照。我們讓那個瞬間變得「有意義」。" },
  
  "principle.badge": { ko: "The First Principle", en: "The First Principle", "zh-CN": "第一原则", "zh-TW": "第一原則" },
  "principle.line1": { ko: "우리는 기능을", en: "We don't sell", "zh-CN": "我们要销售的", "zh-TW": "我們要銷售的" },
  "principle.line2": { ko: "팔지 않습니다.", en: "Features.", "zh-CN": "不是功能。", "zh-TW": "不是功能。" },
  "principle.line3": { ko: "경험의 질을", en: "We design", "zh-CN": "而是设计", "zh-TW": "而是設計" },
  "principle.line4": { ko: "설계합니다.", en: "Quality of Experience.", "zh-CN": "体验的质量。", "zh-TW": "體驗的質量。" },
  "principle.desc": { ko: "고객이 앱을 열었을 때 느끼는 감정 설렘 → 확신 → 여운을 연결하는 것. 그것이 유일한 우리의 전략입니다.", en: "Connecting the emotions: Excitement → Confidence → Afterglow. That is our only strategy.", "zh-CN": "连接客户打开应用时的情感：心动 → 确信 → 回味。这是我们唯一的策略。", "zh-TW": "連接客戶打開應用時的情感：心動 → 確信 → 回味。這是我們唯一的策略。" },

  "journey.title": { ko: "forFAN 고객 여정 지도", en: "Customer Journey Map", "zh-CN": "forFAN 客户旅程地图", "zh-TW": "forFAN 客戶旅程地圖" },
  "journey.lead": { ko: "고객의 시간은 멈춰있지 않습니다. Before(기대)에서 After(여운)까지 끊김 없는 빛의 흐름을 설계합니다.", en: "Customer time never stops. We design a seamless flow from Before to After.", "zh-CN": "客户的时间从未停止。设计从 Before(期待) 到 After(回味) 的无缝流程。", "zh-TW": "客戶的時間從未停止。設計從 Before(期待) 到 After(回味) 的無縫流程。" },

  "exp.title": { ko: "경험의 흐름: Before · During · After", en: "Flow of Experience", "zh-CN": "体验流程", "zh-TW": "體驗流程" },
  "exp.lead": { ko: "경험은 멈추지 않고 흐릅니다. 시간의 흐름에 따라 변화하는 가치를 확인하세요.", en: "Experience flows continuously. Witness the value transforming over time.", "zh-CN": "体验川流不息。请见证价值随时间流逝而发生的转变。", "zh-TW": "體驗川流不息。請見證價值隨時間流逝而發生的轉變。" },

  // ============================================================
  // 🟢 5. Wallet Section (Updated Benefits)
  // ============================================================
  "wallet.badge": { ko: "The Best App is No App", en: "The Best App is No App", "zh-CN": "最好的应用是无感应用", "zh-TW": "最好的應用是無感應用" },
  "wallet.title": { ko: "지갑 속에 Golden Ticket을.", en: "Golden Ticket in your Wallet.", "zh-CN": "钱包里的金票", "zh-TW": "錢包裡的金票" },
  "wallet.desc": { ko: "앱을 켜지 않아도 됩니다. 매장 근처에 가면, 당신의 추억 티켓이 잠금 화면에 조용히 떠오릅니다.", en: "No need to open the app. Your memory ticket quietly appears on the lock screen.", "zh-CN": "无需打开应用程序。当您靠近商店时，您的回忆票据会静静地浮现在锁屏上。", "zh-TW": "無需打開應用程序。當您靠近商店時，您的回憶票據會靜靜地浮現在鎖屏上。" },
  
  "wallet.d1.title": { ko: "Dynamic Tiering Card", en: "Dynamic Tiering Card", "zh-CN": "动态等级卡", "zh-TW": "動態等級卡" },
  "wallet.d1.desc": { ko: "경험의 깊이에 따라 카드의 재질이 변합니다. (Matte White → Platinum → Liquid Gold)", en: "Card texture evolves with experience depth. (Matte White → Platinum → Liquid Gold)", "zh-CN": "卡片材质随体验深度而变化。（哑光白 → 铂金 → 液态金）", "zh-TW": "卡片材質隨體驗深度而變化。（啞光白 → 鉑金 → 液態金）" },

  // 🟢 [수정] Fast Track -> Secret Frame Unlock
  "wallet.d2.title": { ko: "Location-based Unlock", en: "Location-based Unlock", "zh-CN": "基于位置的解锁", "zh-TW": "基於位置的解鎖" },
  "wallet.d2.desc": { 
    ko: "매장 50m 진입 시, 해당 매장 한정 '시크릿 프레임'이 자동으로 잠금 해제됩니다.", 
    en: "Exclusive 'Secret Frames' unlock automatically when within 50m of the store.",
    "zh-CN": "进入50米范围内，自动解锁该门店限定的“秘密相框”。",
    "zh-TW": "進入50米範圍內，自動解鎖該門店限定的「秘密相框」。"
  },

  "wallet.d3.title": { ko: "The “Hidden” Ticket", en: "The “Hidden” Ticket", "zh-CN": "“隐藏”票据", "zh-TW": "“隱藏”票據" },
  "wallet.d3.desc": { ko: "비 오는 날, 생일 주간 등 특정 맥락에만 조용히 생성되는 선물.", en: "Contextual gifts generated only for specific moments like rainy days or birthdays.", "zh-CN": "仅在下雨天、生日周等特定情境下悄然生成的礼物。", "zh-TW": "僅在下雨天、生日周等特定情境下悄然生成的禮物。" },
  
  "wallet.back.qr": { ko: "멤버십 보안 QR", en: "Secure Membership QR", "zh-CN": "会员安全二维码", "zh-TW": "會員安全二維碼" },
  "wallet.back.visit": { ko: "마지막 방문", en: "Last Visit", "zh-CN": "上次访问", "zh-TW": "上次訪問" },
  "wallet.back.visit_val": { ko: "성수 플래그십 (2일 전)", en: "Seongsu Flagship (2d ago)", "zh-CN": "圣水旗舰店 (2天前)", "zh-TW": "聖水旗艦店 (2天前)" },
  "wallet.back.next": { ko: "다음 등급까지", en: "To Next Tier", "zh-CN": "距离下一等级", "zh-TW": "距離下一等級" },
  "wallet.back.next_val": { ko: "2회 남음", en: "2 visits left", "zh-CN": "还需 2 次", "zh-TW": "還需 2 次" },

  // ... (나머지 Rewards, Revenue, Partners, Creator, Footer 유지)
  "rewards.title": { ko: "“Quiet Rewards” — 4CUT Coin", en: "“Quiet Rewards” — 4CUT Coin", "zh-CN": "“静谧奖励” — 4CUT Coin", "zh-TW": "“靜謐獎勵” — 4CUT Coin" },
  "rewards.lead": { ko: "발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요.", en: "Aesthetics of discovery. Wipe the frosted glass (Hover) to reveal hidden value.", "zh-CN": "发现的美学。像擦拭磨砂玻璃一样（悬停），发现隐藏的价值。", "zh-TW": "發現的美學。像擦拭磨砂玻璃一樣（懸停），發現隱藏的價值。" },

  "rewards.usage.title": { ko: "How to Spend", en: "How to Spend", "zh-CN": "使用方式", "zh-TW": "使用方式" },
  "rewards.usage.desc": { ko: "코인은 결제 수단이 아닙니다. 특별한 경험을 여는 열쇠입니다.", en: "Coins are not currency. They are keys to unlock exclusive experiences.", "zh-CN": "硬币不是支付手段。它是开启特殊体验的钥匙。", "zh-TW": "硬幣不是支付手段。它是開啟特殊體驗的鑰匙。" },
  
  "rewards.use1": { ko: "Secret Frame Unlock", en: "Secret Frame Unlock", "zh-CN": "解锁秘密相框", "zh-TW": "解鎖秘密相框" },
  "rewards.use2": { ko: "Gift to Friend", en: "Gift to Friend", "zh-CN": "赠送给朋友", "zh-TW": "贈送給朋友" },
  "rewards.use3": { ko: "Original Raw Data", en: "Original Raw Data", "zh-CN": "Original 原始数据", "zh-TW": "Original 原始數據" },
  
  "rewards.btn.unlock": { ko: "Unlock with 500 Coin", en: "Unlock with 500 Coin", "zh-CN": "使用 500 硬币解锁", "zh-TW": "使用 500 硬幣解鎖" },
  "rewards.btn.active": { ko: "Unlocked", en: "Unlocked", "zh-CN": "已解锁", "zh-TW": "已解鎖" },

  "rewards.item.pocky": { ko: "Pocky2 Voucher", en: "Pocky2 Voucher", "zh-CN": "Pocky2 兑换券", "zh-TW": "Pocky2 兌換券" },
  "rewards.item.gacha": { ko: "Life Gacha Coin", en: "Life Gacha Coin", "zh-CN": "扭蛋币", "zh-TW": "扭蛋幣" },
  "rewards.item.grip": { ko: "Limited Griptok", en: "Limited Griptok", "zh-CN": "限定手机支架", "zh-TW": "限定手機支架" },
  "rewards.tag.soon": { ko: "Coming Soon", en: "Coming Soon", "zh-CN": "即将推出", "zh-TW": "即將推出" },

  "revenue.title": { ko: "Logic Flow: 24시간 멈추지 않는 매출 회로", en: "Logic Flow: 24/7 Revenue Circuit", "zh-CN": "逻辑流：24小时不间断的营收回路", "zh-TW": "邏輯流：24小時不間斷的營收迴路" },
  "revenue.lead": { ko: "고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다.", en: "CX is a precisely engineered KPI circuit.", "zh-CN": "客户体验是精心设计的 KPI 回路。", "zh-TW": "客戶體驗是精心設計的 KPI 迴路。" },

  "partners.title": { ko: "실질적 수익 극대화", en: "Maximize Real Revenue", "zh-CN": "最大化实际收益", "zh-TW": "最大化實際收益" },
  "partners.lead": { ko: "데이터로 증명하는 효과 — 로컬 비즈니스를 글로벌 수익 모델로 전환합니다.", en: "Data-proven effects — Transforming local business into a global revenue model.", "zh-CN": "数据证明的效果 — 将本地业务转化为全球盈利模式。", "zh-TW": "數據證明的效果 — 將本地業務轉化為全球盈利模式。" },
  "partners.sim.title": { ko: "Monthly Revenue Uplift Simulator", en: "Monthly Revenue Uplift Simulator", "zh-CN": "月收入增长模拟器", "zh-TW": "月收入增長模擬器" },
  "partners.sim.desc": { ko: "앱 도입 시, 재방문 유도로 인한 월 추가 예상 매출을 확인하세요.", en: "Estimated monthly revenue uplift driven by revisit retention.", "zh-CN": "查看引入应用后，因回头客增加而带来的月度额外收入预测。", "zh-TW": "查看引入應用後，因回頭客增加而帶來的月度額外收入預測。" },

  "creator.badge": { ko: "The Next Chapter", en: "The Next Chapter", "zh-CN": "下一章", "zh-TW": "下一章" },
  "creator.title": { ko: "Make it. Sell it. Global.", en: "Make it. Sell it. Global.", "zh-CN": "Make it. Sell it. Global.", "zh-TW": "Make it. Sell it. Global." },
  "creator.lead": { ko: "누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이 전 세계 forFAN 키오스크에서 판매됩니다.", en: "Everyone becomes a creator. Your designed frames are sold worldwide.", "zh-CN": "每个人都可以成为创作者。您设计的相框将在全球销售。", "zh-TW": "每個人都可以成為創作者。您設計的相框將在全球銷售。" },
  "creator.feat1": { ko: "Infinite Creativity", en: "Infinite Creativity", "zh-CN": "无限创意", "zh-TW": "無限創意" },
  "creator.desc1": { ko: "유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.", en: "Users generate thousands of trendy frames daily.", "zh-CN": "用户每天生成数千个潮流相框。", "zh-TW": "用戶每天生成數千個潮流相框。" },
  "creator.feat2": { ko: "No Borders", en: "No Borders", "zh-CN": "无国界", "zh-TW": "無國界" },
  "creator.desc2": { ko: "한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.", en: "Frames made in Korea are instantly used globally.", "zh-CN": "在韩国制作的相框可在全球即时使用。", "zh-TW": "在韓國製作的相框可在全球即時使用。" },
  "creator.feat3": { ko: "Global Revenue", en: "Global Revenue", "zh-CN": "全球收益", "zh-TW": "全球收益" },
  "creator.desc3": { ko: "원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.", en: "KRW, USD, EUR. Experience a borderless settlement.", "zh-CN": "韩元、美元、欧元。体验无国界的结算系统。", "zh-TW": "韓元、美元、歐元。體驗無國界的結算系統。" },

  "footer.brand": { ko: "forFAN · Experience-first Brief", en: "forFAN · Experience-first Brief", "zh-CN": "forFAN · 体验优先简报", "zh-TW": "forFAN · 體驗優先簡報" },
  "footer.credit": { ko: "Designed by Apple Aesthetic.", en: "Designed by Apple Aesthetic.", "zh-CN": "Designed by Apple Aesthetic.", "zh-TW": "Designed by Apple Aesthetic." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ko") return "en";
      if (prev === "en") return "zh-CN";
      if (prev === "zh-CN") return "zh-TW";
      return "ko";
    });
  };
  
  const t = (key: string) => {
    return dictionary[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}