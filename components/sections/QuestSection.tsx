"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

// 🧩 퀘스트 데이터 (18종)
const questData = [
  // 1. Daily (3종)
  { id: "d1", period: "Daily", title: "The Daily Spark", goal: "오늘의 히든 프레임 탐색 및 체크인", reward: "500P", detail: "🔥 Streak Flame: 연속 달성 시 불꽃 레벨 업", accent: "#FF9500" },
  { id: "d2", period: "Daily", title: "Mood Check", goal: "오늘의 기분을 나타내는 이모지 태그 선택", reward: "100P", detail: "📅 Mood Calendar: 월별 감정 리포트 제공", accent: "#FFB340" },
  { id: "d3", period: "Daily", title: "Lucky Box", goal: "매일 1회 무료 랜덤 박스 열기", reward: "Random P", detail: "🎁 Surprise: 최대 10,000P 당첨 기회", accent: "#FFD700" },

  // 2. Weekly (3종)
  { id: "w1", period: "Weekly", title: "Weekly Curator", goal: "이번 주 베스트 샷 3회 공유", reward: "2,000P", detail: "🎖 Curator Badge: 프로필 하이라이트 링 적용", accent: "#AF52DE" },
  { id: "w2", period: "Weekly", title: "Frame Hunter", goal: "이번 주 신규 출시 프레임 1회 촬영", reward: "1,000P", detail: "🆕 Trendsetter: 얼리 어답터 전용 아이콘", accent: "#D96FF2" },
  { id: "w3", period: "Weekly", title: "Social Butterfly", goal: "친구에게 프레임 추천 링크 3회 공유", reward: "500P", detail: "🦋 Social Wing: 친구 초대 시 추가 포인트", accent: "#E086F6" },

  // 3. Monthly (3종)
  { id: "m1", period: "Monthly", title: "Monthly Muse", goal: "이달의 크리에이터 5인 응원 및 소통", reward: "10,000P", detail: "💌 Letter Archive: 내가 보낸 팬레터 수집", accent: "#0071e3" },
  { id: "m2", period: "Monthly", title: "Genre Master", goal: "이달의 테마(예: 레트로) 프레임 3종 수집", reward: "Theme Badge", detail: "🎨 Collector Book: 테마별 도감 완성", accent: "#339AF0" },
  { id: "m3", period: "Monthly", title: "Perfect Attendance", goal: "한 달 20일 이상 앱 방문 달성", reward: "3,000P", detail: "📅 Perfect Stamp: 개근상 스페셜 이펙트", accent: "#5C7CFA" },

  // 4. Quarterly (3종)
  { id: "q1", period: "Quarterly", title: "Quarterly Explorer", goal: "분기 내 10개 도시 키오스크 방문", reward: "Limited Badge", detail: "✈️ City Passport: 지역 한정 디지털 스탬프", accent: "#34C759" },
  { id: "q2", period: "Quarterly", title: "Seasonal Palette", goal: "이번 계절의 컬러(예: 벚꽃 핑크) 프레임 수집", reward: "Season Frame", detail: "🌸 Season Collection: 계절 한정판 프레임 지급", accent: "#63E6BE" },
  { id: "q3", period: "Quarterly", title: "Local Hopper", goal: "서로 다른 3개 핫플레이스(성수, 홍대, 강남) 방문", reward: "Travel Kit", detail: "🗺️ Explorer Map: 방문 지역 3D 맵 활성화", accent: "#20C997" },

  // 5. Semi-Annual (3종)
  { id: "s1", period: "Semi-Annual", title: "The Visionary", goal: "6개월간 꾸준한 창작 활동 기여", reward: "Silver Membership", detail: "🔑 Early Access Key: 신규 시즌 선공개 권한", accent: "#FF2D55" },
  { id: "s2", period: "Semi-Annual", title: "Loyalty Loop", goal: "6개월 연속 '골드 등급' 유지", reward: "Black Card Skin", detail: "💳 Premium UI: 앱 전체 테마 변경 권한", accent: "#FF4D4D" },
  { id: "s3", period: "Semi-Annual", title: "Top Fan Status", goal: "특정 크리에이터 채널 후원 랭킹 10위 진입", reward: "Fan Meeting", detail: "🎫 Private Ticket: 크리에이터 팬미팅 초대권", accent: "#F03E3E" },

  // 6. Annual (3종)
  { id: "a1", period: "Annual", title: "The Guardian", goal: "연간 최다 방문 및 후원 달성", reward: "Gold Membership", detail: "🎬 Year in Motion: 1년 활동 결산 무비 생성", accent: "#FFD700" },
  { id: "a2", period: "Annual", title: "Time Capsule", goal: "작년 오늘 촬영한 프레임으로 다시 찍기", reward: "Memory Frame", detail: "⏳ Then & Now: 1년 전후 비교 콜라주 생성", accent: "#FAB005" },
  { id: "a3", period: "Annual", title: "The Philanthropist", goal: "1년간 친구들에게 프레임 선물 10회 달성", reward: "Angel Wings", detail: "👼 Donor Badge: 닉네임 옆 천사 날개 아이콘", accent: "#FCC419" }
];

const strategyLayers = [
  { label: "Daily (일상)", desc: "습관 형성. 매일의 작은 즐거움으로 앱 방문을 유도합니다." },
  { label: "Weekly (순환)", desc: "질적 기여. 공유와 탐색을 통해 커뮤니티의 활기를 만듭니다." },
  { label: "Monthly (관계)", desc: "생태계 강화. 크리에이터와 깊은 유대감을 형성합니다." },
  { label: "Quarterly (여정)", desc: "공간의 확장. 계절과 장소를 테마로 오프라인 경험을 연결합니다." },
  { label: "Semi-Annual (신뢰)", desc: "로열티 구축. 꾸준한 활동에 대해 실질적인 권한과 명예를 부여합니다." },
  { label: "Annual (명예)", desc: "최상위 헌사. 사용자의 1년을 기록하고 기념하여 평생의 파트너가 됩니다." }
];

// ⚛️ Interactive Quest Card
const QuestCard = ({ q }: { q: any }) => {
  const [status, setStatus] = useState<'idle' | 'claiming' | 'claimed'>('idle');

  const handleClaim = () => {
    if (status !== 'idle') return;
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([10, 30, 10]);
    setStatus('claiming');
    setTimeout(() => setStatus('claimed'), 1500);
  };

  return (
    <div 
      className={`quest-card-v2 ${status}`} 
      onClick={handleClaim}
      style={{ '--accent': q.accent } as any}
      id="quest"
    >
      {status === 'claiming' && (
        <div className="confetti-container">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x = (Math.cos(angle) * 80).toFixed(1);
            const y = (Math.sin(angle) * 80).toFixed(1);
            return (
              <span key={i} className={`confetti c${i}`} style={{ '--tx': `${x}px`, '--ty': `${y}px` } as any} />
            );
          })}
        </div>
      )}

      <div className="card-top">
        <div className="period-tag" style={{ color: q.accent }}>{q.period}</div>
        <div className={`reward-pill ${status === 'claimed' ? 'done' : ''}`}>
          {status === 'claimed' ? 'Acquired' : q.reward}
        </div>
      </div>

      <h3 className="quest-h3">{q.title}</h3>
      <p className="quest-goal-text">{q.goal}</p>
      
      <div className="detail-feature-box">
        <span className="detail-text">{q.detail}</span>
      </div>

      <div className="interaction-area">
        {status === 'idle' && <div className="tap-hint">Tap to Claim</div>}
        {status === 'claiming' && <div className="claiming-loader" />}
        {status === 'claimed' && <div className="claimed-msg">✨ Reward Added!</div>}
      </div>

      <div className="progress-bar-thin">
        <div 
          className={`progress-active ${status === 'claimed' ? 'full' : ''}`} 
          style={{ background: q.accent, width: status === 'claimed' ? '100%' : '30%' }} 
        />
      </div>

      <style jsx>{`
        .quest-card-v2 { 
          background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(24px); 
          border-radius: 32px; padding: 32px; border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          min-height: 280px; position: relative; overflow: hidden; cursor: pointer;
        }
        .quest-card-v2:hover { 
          transform: translateY(-8px); 
          background: rgba(255, 255, 255, 0.1); 
          border-color: var(--accent);
          box-shadow: 0 10px 30px -10px var(--accent);
        }
        .quest-card-v2.claiming { transform: scale(0.98); border-color: var(--accent); }
        .quest-card-v2.claimed { background: rgba(255, 255, 255, 0.02); opacity: 0.8; pointer-events: none; }

        .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .period-tag { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .reward-pill { background: #fff; color: #000; font-size: 12px; font-weight: 800; padding: 6px 12px; border-radius: 99px; transition: all 0.3s; }
        .reward-pill.done { background: #34C759; color: #fff; }

        .quest-h3 { font-size: 22px; font-weight: 800; color: #fff; margin: 0 0 10px 0; letter-spacing: -0.02em; }
        .quest-goal-text { font-size: 15px; color: #d1d1d6; line-height: 1.5; font-weight: 500; margin-bottom: 20px; flex: 1; word-break: keep-all; }

        .detail-feature-box { background: rgba(0,0,0,0.3); border-radius: 12px; padding: 10px 14px; margin-bottom: 20px; border-left: 3px solid rgba(255,255,255,0.2); }
        .detail-text { font-size: 13px; color: #fff; font-weight: 600; opacity: 0.9; }

        .interaction-area { height: 24px; display: flex; align-items: center; justify-content: flex-start; }
        .tap-hint { font-size: 12px; font-weight: 700; color: var(--accent); opacity: 0; transform: translateY(5px); transition: all 0.3s; }
        .quest-card-v2:hover .tap-hint { opacity: 1; transform: translateY(0); }
        
        .claiming-loader { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 1s infinite linear; }
        .claimed-msg { font-size: 13px; font-weight: 700; color: #34C759; animation: popUp 0.3s ease-out; }

        .progress-bar-thin { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; position: relative; overflow: hidden; margin-top: 16px; }
        .progress-active { position: absolute; height: 100%; top: 0; left: 0; border-radius: 2px; transition: width 1s cubic-bezier(0.22, 1, 0.36, 1); }

        .confetti-container { position: absolute; inset: 0; pointer-events: none; z-index: 10; }
        .confetti { position: absolute; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; top: 50%; left: 50%; opacity: 0; }
        
        ${[...Array(12)].map((_, i) => `
          .c${i} { animation: explode-${i} 0.8s ease-out forwards; }
          @keyframes explode-${i} {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
          }
        `).join('')}

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes popUp { 0% { transform: scale(0.5); opacity: 0; } 80% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default function QuestSection() {
  const { t } = useLanguage();

  return (
    <section className="section-island quest-dark-theme overflow-hidden">
      <div className="bg-visuals">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="star-field" />
      </div>

      <div className="container relative-content">
        <div className="header-white">
          <SectionHeader 
            title="The Creative Journey" 
            lead="단순한 포인트 적립이 아닙니다. 당신의 창작 여정을 기념하는 18가지 마일스톤입니다." 
          />
        </div>

        <div className="quest-grid-refined">
          {questData.map((q, idx) => (
            <ScrollReveal key={q.id} delay={idx * 50}>
              <QuestCard q={q} />
            </ScrollReveal>
          ))}
        </div>

        <div className="strategy-info-box">
          <h4 className="strategy-title">📋 전략적 퀘스트 레이어 (Strategy Layer)</h4>
          <div className="strategy-grid">
            {strategyLayers.map((layer, i) => {
              // 🟢 각 주기에 맞는 대표 색상 매핑 (3개씩 묶여있으므로 i * 3)
              const accentColor = questData[i * 3].accent;
              
              return (
                <div key={i} className="strategy-item">
                  <span className="layer-label" style={{ color: accentColor }}>
                    {layer.label}
                  </span>
                  <p className="layer-desc">{layer.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .quest-dark-theme { 
          background: #050505; 
          padding: 120px 40px; border-radius: 56px; margin: 40px auto; position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5); border: 1px solid #111;
        }

        .bg-visuals { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
        .blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.25; animation: float 10s infinite ease-in-out alternate; }
        .b1 { width: 600px; height: 600px; background: #0A84FF; top: -20%; left: -10%; }
        .b2 { width: 500px; height: 500px; background: #5E5CE6; bottom: -10%; right: -5%; animation-delay: 5s; }
        .star-field { position: absolute; inset: 0; background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 50px 50px; opacity: 0.1; }
        @keyframes float { from { transform: translate(0,0); } to { transform: translate(30px, 30px); } }

        .relative-content { position: relative; z-index: 2; }
        .header-white :global(.h2) { color: #ffffff !important; }
        .header-white :global(.lead) { color: #86868b !important; }

        .quest-grid-refined { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-top: 60px; }

        .strategy-info-box { 
          margin-top: 80px; padding: 48px; background: rgba(255,255,255,0.02); 
          border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); 
        }
        .strategy-title { color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 40px; text-align: center; }
        .strategy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
        .layer-label { font-weight: 700; font-size: 15px; display: block; margin-bottom: 8px; letter-spacing: 0.5px; }
        .layer-desc { color: #86868b; font-size: 14px; line-height: 1.6; margin: 0; word-break: keep-all; }

        @media (max-width: 768px) {
          .quest-dark-theme { padding: 80px 24px; }
          .strategy-info-box { padding: 32px 24px; }
          .quest-grid-refined { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}