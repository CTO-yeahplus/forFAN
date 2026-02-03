import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

// ... (brandItems 등 상단 코드 유지) ...

// 1. [Main Page용] 비즈니스/마케팅 관점 (되돌림)
export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

// 2. [Spec Page용] 개발/기획 구체화 명세 (새로 추가)
export interface SpecItem {
  phase: string;
  title: string;
  goal: string; // UX 목표
  features: {
    name: string;
    tech: string; // 구현 기술 (예: Dynamic Island, Haptic)
    desc: string; // 상세 로직
  }[];
}

export const devSpecs: SpecItem[] = [
  {
    phase: "Phase 1: Before (Entry)",
    title: "설렘의 설계",
    goal: "사용자의 '심심함'을 '방문 의도'로 전환한다.",
    features: [
      {
        name: "Moment Preview Hero",
        tech: "Weather API + Time Logic",
        desc: "홈 화면 최상단 대형 카드. 날씨(비/맑음)와 시간(낮/밤) 조건에 따라 'Blue Mood' 등 맞춤 프레임을 큐레이션하여 노출."
      },
      {
        name: "Smart Notification",
        tech: "Geofencing + Dynamic Island",
        desc: "매장 반경 100m 진입 시 푸시가 아닌 '다이내믹 아일랜드' 확장. 대기 인원수와 '지금 찍기 좋음' 상태 표시."
      },
      {
        name: "Mood Cheat Sheet",
        tech: "Bottom Sheet UI",
        desc: "프레임 상세 진입 시 '이 프레임은 흰 옷이 잘 받아요' 등 실패 방지 팁을 텍스트로 간결하게 제공."
      }
    ]
  },
  {
    phase: "Phase 2: During (Action)",
    title: "몰입과 기록",
    goal: "촬영 현장에서 폰을 꺼내게 만드는 확실한 '이유(Utility)'를 제공한다.",
    features: [
      {
        name: "Wrist Guide",
        tech: "Apple Watch App / Widget",
        desc: "부스 안에서 폰을 볼 필요 없이, 애플워치만 힐끔거려도 현재 프레임의 추천 포즈 아이콘 4개를 순서대로 표시."
      },
      {
        name: "People Tagging Logic",
        tech: "Post-Scan Modal",
        desc: "QR 스캔 직후 '오늘 누구와 함께였나요?' 바텀 시트 호출. [연인/친구/가족/혼자] 태그 데이터 수집."
      },
      {
        name: "Haptic Feedback Reward",
        tech: "Core Haptics (Taptic Engine)",
        desc: "촬영/결제 완료 시 화면 팝업(+100P)을 띄우지 않고, 묵직하고 고급스러운 진동 패턴으로 보상 감각 전달."
      }
    ]
  },
  {
    phase: "Phase 3: After (Retention)",
    title: "데이터가 된 취향",
    goal: "단순 파일 저장이 아닌, '나를 알아주는 브랜드'로 인식시킨다.",
    features: [
      {
        name: "Taste Receipt",
        tech: "Image Generation (Canvas)",
        desc: "월말 결산 시 영수증 형태의 타이포그래피 이미지 생성. '흑백 선호 70%, #Minimalist' 등의 취향 분석 텍스트 포함."
      },
      {
        name: "Memory Widget",
        tech: "iOS Home Widget",
        desc: "앱 미접속 상태에서도 홈 화면에 '작년 오늘의 추억' 사진을 랜덤 롤링하여 재방문 트리거 역할 수행."
      },
      {
        name: "Quiet Circle View",
        tech: "Horizontal Scroll View",
        desc: "프레임 하단에 '이 프레임을 쓴 사람들'의 프로필 사진만 작게 나열. 클릭 시 해당 유저의 공개 사진 모달 팝업."
      }
    ]
  }
];

// ... (아래 partnerValue 등 나머지 코드는 유지) ...

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];


export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "사용자 여정지도" },
  { href: "#experience", label: "사용자 경험(탭)" },
  { href: "#level", label: "경험 Tier멤버" },
  { href: "#brandowner", label: "브랜드 주인되기" },
  { href: "#playbook", label: "노는법 따라하기" },
  { href: "#creator", label: "작가되기" },
  { href: "#quest", label: "기록하기" },
  
  { href: "#quiet", label: "보상받기" },
  { href: "#revenue", label: "24/7 멈추지않는 매출" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

export const appleIdentityItems: CardItem[] = [
  {
    id: "haptic",
    tag: "Taptic Engine",
    title: "Feel the moment.",
    desc: "화면을 터치하는 순간, 손끝에 전해지는 미세하고 기분 좋은 진동. 리워드가 쌓이는 순간을 '무게감' 있게 전달합니다.",
    bullets: [
      "리워드 획득 시 '딸깍'하는 아날로그 감각",
      "프레임 선택 시 부드러운 텐션 피드백",
      "성공/실패가 아닌 '완성'의 감각 전달"
    ],
    icon: "spark" // 기존 아이콘 재사용 또는 'wave' 등 추가 가능
  },
  {
    id: "dynamic",
    tag: "Live Activities",
    title: "Always at a glance.",
    desc: "앱을 굳이 열지 않아도 됩니다. 다이내믹 아일랜드가 당신의 촬영 순서와 매장 위치를 조용히 알려줍니다.",
    bullets: [
      "잠금 화면에서 대기 순서 실시간 확인",
      "매장 근처 진입 시 추천 프레임 팝업",
      "앱 진입 뎁스(Depth)를 0으로 단축"
    ],
    icon: "clock"
  },
  {
    id: "privacy",
    tag: "Privacy by Design",
    title: "Your data. Your story.",
    desc: "당신의 추억은 온전히 당신의 것입니다. 우리는 당신이 누구인지보다, 무엇을 좋아하는지만 기억합니다.",
    bullets: [
      "얼굴 데이터 저장 없음 (On-device 처리)",
      "위치 기록 미저장 (실시간 트리거만 활용)",
      "투명한 데이터 사용 리포트 제공"
    ],
    icon: "lock" // Icon.tsx에 lock 추가 필요 (또는 기존 circle 등 사용)
  }
];