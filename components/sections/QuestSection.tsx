"use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

// 🧩 퀘스트 데이터 (총 51종)
const questData = [
  // ==========================================
  // 1. Daily (11종)
  // ==========================================
  { id: "d1", period: "Daily", title: "The Daily Spark", goal: "오늘의 히든 프레임 탐색 및 체크인", reward: "500P", detail: "🔥 Streak Flame: 연속 달성 시 불꽃 레벨 업", accent: "#FF9500" },
  { id: "d2", period: "Daily", title: "Mood Check", goal: "오늘의 기분을 나타내는 이모지 태그 선택", reward: "100P", detail: "📅 Mood Calendar: 월별 감정 리포트 제공", accent: "#FFB340" },
  { id: "d3", period: "Daily", title: "Lucky Box", goal: "매일 1회 무료 룰렛 하기", reward: "Random P", detail: "🎁 Surprise: 최대 10,000P 당첨 기회", accent: "#FFD700" },
  { id: "d4", period: "Daily", title: "Photo Walk", goal: "특정 매장 반경 1km 이내 산책 및 앱 체크인", reward: "200P", detail: "🚶‍♂️ Walk & Earn: 걷기만 해도 포인트 획득", accent: "#FFA726" },
  { id: "d5", period: "Daily", title: "Early Supporter", goal: "오늘 신규 등록된 프레임 1개 응원하기", reward: "150P", detail: "❤️ Love Sender: 크리에이터에게 하트 전송", accent: "#FFC107" },
  { id: "d6", period: "Daily", title: "Time Slip", goal: "1달 전 오늘 찍은 네컷 사진 다시 열어보기", reward: "100P", detail: "⏪ Memory Playback: 잊혀진 추억 회상", accent: "#FFE082" },
  // 🟢 New Daily Quests
  { id: "d7", period: "Daily", title: "My Frame Start", goal: "나만의 프레임 사용하기", reward: "100P", detail: "🖼️ Custom Frame: 나만의 개성 표현하기", accent: "#FFB300" },
  { id: "d8", period: "Daily", title: "Playbook Reader", goal: "PhotoPlayBook 방문하기", reward: "100P", detail: "📖 Playbook: 새로운 놀이법 영감 얻기", accent: "#FFCA28" },
  { id: "d9", period: "Daily", title: "Filter Explorer", goal: "나만의 필터 사용하기", reward: "100P", detail: "✨ Custom Filter: 내 색감 찾기", accent: "#FFD54F" },
  { id: "d10", period: "Daily", title: "Channel Surfer", goal: "채널 방문하기", reward: "100P", detail: "📺 Channel Explore: 크리에이터 세계 탐험", accent: "#FFE082" },
  { id: "d11", period: "Daily", title: "Four Seasons", goal: "사계 방문하기", reward: "100P", detail: "🌸 4 Seasons: 계절의 변화 느끼기", accent: "#FFECB3" },

  // ==========================================
  // 2. Weekly (11종)
  // ==========================================
  { id: "w1", period: "Weekly", title: "Weekly Curator", goal: "이번 주 베스트 샷 3회 공유", reward: "2,000P", detail: "🎖 Curator Badge: 프로필 하이라이트 링 적용", accent: "#AF52DE" },
  { id: "w2", period: "Weekly", title: "Frame Hunter", goal: "이번 주 신규 출시 프레임 1회 촬영", reward: "1,000P", detail: "🆕 Trendsetter: 얼리 어답터 전용 아이콘", accent: "#D96FF2" },
  { id: "w3", period: "Weekly", title: "Social Butterfly", goal: "친구에게 프레임 추천 링크 3회 공유", reward: "500P", detail: "🦋 Social Wing: 친구 초대 시 추가 포인트", accent: "#E086F6" },
  { id: "w4", period: "Weekly", title: "Weekend Vibes", goal: "주말(토/일)에 친구 태그하여 네컷 촬영", reward: "1,500P", detail: "👯 Bestie Time: 주말 우정샷 보너스", accent: "#B388FF" },
  { id: "w5", period: "Weekly", title: "Trend Rider", goal: "주간 인기 프레임 TOP 10 중 하나로 촬영", reward: "800P", detail: "📈 Trend Follower: 대세 프레임 탑승 완료", accent: "#CE93D8" },
  { id: "w6", period: "Weekly", title: "Hidden Catch", goal: "오프라인 매장에 숨겨진 시크릿 QR 스캔", reward: "Random Item", detail: "🕵️ Secret Hunter: 오프라인 보물찾기", accent: "#E1BEE7" },
  // 🟢 New Weekly Quests
  { id: "w7", period: "Weekly", title: "Frame Artisan", goal: "나만의 프레임으로 프레임 제작하기", reward: "500P", detail: "🛠️ Frame Maker: 창작의 즐거움", accent: "#B39DDB" },
  { id: "w8", period: "Weekly", title: "Playbook Talker", goal: "PhotoPlayBook에 댓글달기", reward: "300P", detail: "💬 Playbook Comment: 팁과 후기 공유", accent: "#CE93D8" },
  { id: "w9", period: "Weekly", title: "Filter Snap", goal: "나만의 필터로 사진찍기", reward: "500P", detail: "📸 Filter Magic: 내 필터로 인생샷 완성", accent: "#E1BEE7" },
  { id: "w10", period: "Weekly", title: "Channel Supporter", goal: "채널 응원하기 (좋아요, 북마크)", reward: "300P", detail: "💖 Support: 크리에이터에게 힘이 되는 응원", accent: "#F48FB1" },
  { id: "w11", period: "Weekly", title: "Seasons Greeting", goal: "사계에 댓글달기", reward: "300P", detail: "📝 4 Seasons Talk: 계절 감상 남기기", accent: "#FF8A80" },

  // ==========================================
  // 3. Monthly (11종)
  // ==========================================
  { id: "m1", period: "Monthly", title: "Monthly Muse", goal: "이달의 크리에이터 5인 응원 및 소통", reward: "10,000P", detail: "💌 Letter Archive: 내가 보낸 팬레터 수집", accent: "#0071e3" },
  { id: "m2", period: "Monthly", title: "Genre Master", goal: "이달의 테마(예: 레트로) 프레임 3종 수집", reward: "Theme Badge", detail: "🎨 Collector Book: 테마별 도감 완성", accent: "#339AF0" },
  { id: "m3", period: "Monthly", title: "Perfect Attendance", goal: "한 달 20일 이상 앱 방문 달성", reward: "3,000P", detail: "📅 Perfect Stamp: 개근상 스페셜 이펙트", accent: "#5C7CFA" },
  { id: "m4", period: "Monthly", title: "True Fan", goal: "한 달 내 특정 크리에이터 프레임 3회 이상 구매", reward: "Fan Badge", detail: "💎 VIP Supporter: 찐팬 인증 스페셜 뱃지", accent: "#42A5F5" },
  { id: "m5", period: "Monthly", title: "Palette Master", goal: "서로 다른 4가지 무드(테마) 필터로 촬영", reward: "Custom Skin", detail: "🌈 Style Chameleon: 다양한 분위기 섭렵", accent: "#64B5F6" },
  { id: "m6", period: "Monthly", title: "Taste Critic", goal: "내가 찍은 프레임에 대한 짧은 한 줄 후기 5개 작성", reward: "2,500P", detail: "✍️ Best Reviewer: 나만의 프레임 감상평", accent: "#90CAF9" },
  // 🟢 New Monthly Quests
  { id: "m7", period: "Monthly", title: "My Frame Debut", goal: "나만의 프레임으로 제작한 프레임으로 매장에서 사진찍기", reward: "1,000P", detail: "🌟 Kiosk Debut: 내 작품을 오프라인에서", accent: "#64B5F6" },
  { id: "m8", period: "Monthly", title: "Playbook Cover", goal: "PhotoPlayBook과 비슷한 룩으로 사진찍기", reward: "1,000P", detail: "👗 Style Clone: 트렌디한 룩 도전", accent: "#4FC3F7" },
  { id: "m9", period: "Monthly", title: "Filter Master", goal: "나만의 필터 적용한 사진으로 매장에서 촬영하기", reward: "1,000P", detail: "🎨 Offline Filter: 매장에 내 색감 입히기", accent: "#29B6F6" },
  { id: "m10", period: "Monthly", title: "Channel Fan", goal: "채널에 응원 댓글 달기", reward: "1,000P", detail: "💌 Fan Letter: 찐팬의 마음 전하기", accent: "#03A9F4" },
  { id: "m11", period: "Monthly", title: "Seasons Record", goal: "사계로 매장에서 촬영하기", reward: "1,000P", detail: "🎞️ Seasons Kiosk: 계절을 사진으로 남기기", accent: "#039BE5" },

  // ==========================================
  // 4. Quarterly (6종)
  // ==========================================
  { id: "q1", period: "Quarterly", title: "Quarterly Explorer", goal: "분기 내 10개 도시 키오스크 방문", reward: "Limited Badge", detail: "✈️ City Passport: 지역 한정 디지털 스탬프", accent: "#34C759" },
  { id: "q2", period: "Quarterly", title: "Seasonal Palette", goal: "이번 계절의 컬러(예: 벚꽃 핑크) 프레임 수집", reward: "Season Frame", detail: "🌸 Season Collection: 계절 한정판 프레임 지급", accent: "#63E6BE" },
  { id: "q3", period: "Quarterly", title: "Local Hopper", goal: "서로 다른 3개 핫플레이스(성수, 홍대, 강남) 방문", reward: "Travel Kit", detail: "🗺️ Explorer Map: 방문 지역 3D 맵 활성화", accent: "#20C997" },
  { id: "q4", period: "Quarterly", title: "Global Link", goal: "해외 매장 방문 또는 해외 크리에이터 프레임 이용", reward: "Global Ticket", detail: "🌍 Cross-border Fan: 글로벌 팬덤 연결", accent: "#66BB6A" },
  { id: "q5", period: "Quarterly", title: "Event Hunter", goal: "벚꽃, 할로윈 등 시즌 이벤트 프레임 5종 수집", reward: "Festival Frame", detail: "🎆 Festival Record: 시즌 한정판 도감 완성", accent: "#81C784" },
  { id: "q6", period: "Quarterly", title: "Directing Star", goal: "내가 제안한 포즈/필터 레시피가 주간 베스트 선정", reward: "Creator Kit", detail: "🎬 Photo Director: 명예 에디터 등극", accent: "#A5D6A7" },

  // ==========================================
  // 5. Semi-Annual (6종)
  // ==========================================
  { id: "s1", period: "Semi-Annual", title: "The Visionary", goal: "6개월간 꾸준한 창작 활동 기여", reward: "Silver Membership", detail: "🔑 Early Access Key: 신규 시즌 선공개 권한", accent: "#FF2D55" },
  { id: "s2", period: "Semi-Annual", title: "Loyalty Loop", goal: "6개월 연속 '골드 등급' 유지", reward: "Black Card Skin", detail: "💳 Premium UI: 앱 전체 테마 변경 권한", accent: "#FF4D4D" },
  { id: "s3", period: "Semi-Annual", title: "Top Fan Status", goal: "특정 크리에이터 채널 후원 랭킹 10위 진입", reward: "Fan Meeting", detail: "🎫 Private Ticket: 크리에이터 팬미팅 초대권", accent: "#F03E3E" },
  { id: "s4", period: "Semi-Annual", title: "Brand Ambassador", goal: "6개월 내 추천 링크로 신규 가입자 50명 유치", reward: "Free Pass", detail: "🤝 1 Month Free: 1개월 무료 촬영권 지급", accent: "#FF5252" },
  { id: "s5", period: "Semi-Annual", title: "Area Mayor", goal: "특정 지역 키오스크 6개월 연속 매월 방문", reward: "Local Mayor", detail: "👑 Digital Mayor: 해당 오프라인 매장 닉네임 송출", accent: "#FF8A80" },
  { id: "s6", period: "Semi-Annual", title: "Master Collector", goal: "6개월간 희귀(Rare) 등급 이상 프레임 20개 소유", reward: "Platinum Theme", detail: "🖼️ Collector's Pride: 컬렉터 전용 앱 UI 제공", accent: "#FF1744" },

  // ==========================================
  // 6. Annual (6종)
  // ==========================================
  { id: "a1", period: "Annual", title: "The Guardian", goal: "연간 최다 방문 및 후원 달성", reward: "Gold Membership", detail: "🎬 Year in Motion: 1년 활동 결산 무비 생성", accent: "#FFD700" },
  { id: "a2", period: "Annual", title: "Time Capsule", goal: "작년 오늘 촬영한 프레임으로 다시 찍기", reward: "Memory Frame", detail: "⏳ Then & Now: 1년 전후 비교 콜라주 생성", accent: "#FAB005" },
  { id: "a3", period: "Annual", title: "The Philanthropist", goal: "1년간 친구들에게 프레임 선물 10회 달성", reward: "Angel Wings", detail: "👼 Donor Badge: 닉네임 옆 천사 날개 아이콘", accent: "#FCC419" },
  { id: "a4", period: "Annual", title: "The Legend", goal: "1년간 누적 10만 포인트 달성 및 사용", reward: "Black Card", detail: "💳 Black Membership: 영구 VVIP 혜택 부여", accent: "#FBC02D" },
  { id: "a5", period: "Annual", title: "Hall of Fame", goal: "1년간 내 프레임 누적 사용 횟수 10만 회 달성", reward: "Offline Ad", detail: "🏆 Kiosk Billboard: 오프라인 매장에 내 채널 홍보", accent: "#FFEB3B" },
  { id: "a6", period: "Annual", title: "Journey Maker", goal: "1년간 4계절을 모두 forFAN과 함께 촬영", reward: "Photobook", detail: "📖 Annual Photobook: 1년의 기록 실물 앨범 배송", accent: "#FFF59D" }
];

// 🟢 주기에 따른 명시적 컬러 매핑 (각 항목 개수가 달라졌으므로 정적으로 할당)
const strategyLayers = [
  { label: "Daily (일상)", desc: "습관 형성. 매일의 작은 즐거움으로 앱 방문을 유도합니다.", accent: "#FF9500" },
  { label: "Weekly (순환)", desc: "질적 기여. 공유와 탐색을 통해 커뮤니티의 활기를 만듭니다.", accent: "#AF52DE" },
  { label: "Monthly (관계)", desc: "생태계 강화. 크리에이터와 깊은 유대감을 형성합니다.", accent: "#0071e3" },
  { label: "Quarterly (여정)", desc: "공간의 확장. 계절과 장소를 테마로 오프라인 경험을 연결합니다.", accent: "#34C759" },
  { label: "Semi-Annual (신뢰)", desc: "로열티 구축. 꾸준한 활동에 대해 실질적인 권한과 명예를 부여합니다.", accent: "#FF2D55" },
  { label: "Annual (명예)", desc: "최상위 헌사. 사용자의 1년을 기록하고 기념하여 평생의 파트너가 됩니다.", accent: "#FFD700" }
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
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px); 
          border-radius: 32px; padding: 32px; border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex; flex-direction: column;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Daily", "Weekly", "Monthly", "Quarterly", "Semi-Annual", "Annual"];
  const displayedQuests = activeFilter === "All" ? questData : questData.filter(q => q.period === activeFilter);

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
            lead={`단순한 포인트 적립이 아닙니다. 당신의 창작 여정을 기념하는 ${questData.length}가지 마일스톤입니다.`}
          />
        </div>

        {/* 🟢 Category Tabs for Quests */}
        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="quest-grid-refined">
          {displayedQuests.map((q, idx) => (
            <ScrollReveal key={q.id} delay={(idx % 6) * 50}>
              <QuestCard q={q} />
            </ScrollReveal>
          ))}
        </div>

        <div className="strategy-info-box">
          <h4 className="strategy-title">📋 전략적 퀘스트 레이어 (Strategy Layer)</h4>
          <div className="strategy-grid">
            {strategyLayers.map((layer, i) => (
              <div key={i} className="strategy-item">
                <span className="layer-label" style={{ color: layer.accent }}>
                  {layer.label}
                </span>
                <p className="layer-desc">{layer.desc}</p>
              </div>
            ))}
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

        /* Filter Tabs */
        .filter-tabs {
          display: flex; gap: 8px; flex-wrap: wrap; margin: 40px 0 20px;
          background: rgba(255,255,255,0.05); padding: 6px; border-radius: 99px; width: fit-content;
        }
        .filter-btn {
          padding: 8px 16px; border-radius: 99px; background: transparent; color: #86868b;
          font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all 0.3s;
        }
        .filter-btn:hover { color: #fff; }
        .filter-btn.active { background: #fff; color: #000; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }

        .quest-grid-refined { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-top: 20px; }

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
          .filter-tabs { border-radius: 16px; justify-content: center; }
        }
      `}</style>
    </section>
  );
}