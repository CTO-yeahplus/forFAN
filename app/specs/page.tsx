"use client";

// 🟢 [Deep Dive] 모바일 앱 실무 구현을 위한 상세 기술 명세 (Implementation Detail)
const mobileAppSpecs = [
  {
    phase: "1. Experience Flow",
    title: "Customer Journey & Navigation",
    goal: "Cold Start 1.5초 이내 진입, 모든 화면 전환 60fps 유지 (Zero-Jank)",
    features: [
      {
        name: "Deferred Deep Linking",
        tech: "AppsFlyer / Firebase Dynamic Links",
        desc: "앱 미설치 유저가 웹 링크 클릭 시, 스토어로 이동 후 설치 완료 시 원래 보던 프레임 상세 화면으로 자동 라우팅. 클립보드 파라미터가 아닌 Native Deferred Link API를 사용하여 정확도 99.9% 보장."
      },
      {
        name: "Shared Element Transition",
        tech: "React Native Reanimated 3 (SharedTag)",
        desc: "리스트 → 상세 진입 시 이미지가 끊기지 않고 자연스럽게 확장되는 물리 기반 애니메이션. JS Thread가 아닌 UI Thread에서 실행되도록 `worklet` 함수 사용 필수."
      },
      {
        name: "Gesture-Driven Navigation",
        tech: "React Navigation (Native Stack)",
        desc: "iOS 스타일의 'Swipe Back' 제스처 구현. 화면의 15% 영역이 아닌 전체 영역에서 스와이프 가능하도록 제스처 영역 확장 및 물리 엔진(Spring config) 튜닝."
      }
    ]
  },
  {
    phase: "2. Hardware Sync",
    title: "Beyond the Touch (Haptic & Sonic)",
    goal: "시각적 피드백보다 50ms 빠른 햅틱 반응으로 '즉각성' 부여",
    features: [
      {
        name: "High-Fidelity Haptics",
        tech: "iOS Core Haptics (CHHapticEngine)",
        desc: "단순 진동이 아닌 '질감' 표현. 슬라이더 조작 시 드르륵거리는 'Texture' 패턴과 결제 성공 시의 'Transient' 패턴 분리 구현. Android는 `VibrationEffect.createWaveform`으로 대체."
      },
      {
        name: "Low-Latency Audio FX",
        tech: "Native SoundPool (Android) / AVAudioPlayer (iOS)",
        desc: "버튼 탭 시 오디오 버퍼링 없이 즉시 재생(Latency < 20ms). OS의 '방해금지 모드' 및 '하드웨어 볼륨' 상태를 감지하여 사운드 출력 자동 제어 (Audio Ducking 적용)."
      }
    ]
  },
  {
    phase: "3. Digital Possession",
    title: "Membership Wallet Card",
    goal: "실물 카드를 손에 쥔 듯한 물리적 빛 반사 및 보안성 확보",
    features: [
      {
        name: "Gyroscope Specular Lighting",
        tech: "SensorManager (Gravity/Accelerator)",
        desc: "디바이스 기울기(Pitch, Roll) 값을 16ms(60Hz) 주기로 샘플링하여, 카드 표면의 그라데이션 및 하이라이트 위치를 실시간 렌더링. `requestAnimationFrame`을 사용하여 배터리 소모 최적화."
      },
      {
        name: "Offline TOTP QR Generator",
        tech: "Local Crypto Lib (HMAC-SHA1)",
        desc: "지하/통신 불능 상태에서도 결제 가능하도록, 서버 통신 없이 로컬 시간 기반으로 30초마다 갱신되는 일회용 QR 생성. 시드 키는 Secure Storage(Keychain/Keystore)에 암호화 보관."
      },
      {
        name: "Screen Capture Prevention",
        tech: "Native ScreenShield API",
        desc: "멤버십 바코드 노출 시 OS 레벨에서 캡처 방지 플래그(`FLAG_SECURE`) 활성화. iOS는 캡처 감지 시 QR 코드를 즉시 블러(Blur) 처리하여 복제 방지."
      }
    ]
  },
  {
    phase: "4. Business Model (C2E)",
    title: "Settlement & Transaction",
    goal: "다국적 통화 정산 오차 0% 및 생체 인식 기반 무결성 거래 환경 구축",
    features: [
      {
        name: "Settlement Engine",
        tech: "Server-Side Precision Calculation",
        desc: "다중 서버 클러스터에서 부동 소수점 오차 없는 통화 정산 로직 구현. 글로벌 환율 API와 연동하여 유저의 로컬 통화로 실시간 정산 및 FCM/WebSocket을 통한 앱 반영."
      },
      {
        name: "Biometric Marketplace",
        tech: "Biometric Auth (FaceID / TouchID)",
        desc: "인증 성공 시 로컬 기기 내 Keychain에서 암호화된 트랜잭션 서명 객체(CryptoObject)를 생성하여 서버로 전달. 복제 불가능한 고유 서명을 통해 거래 보안성 극대화."
      }
    ]
  },
  {
    phase: "5. Creator Ecosystem",
    title: "From User to Brand Owner",
    goal: "데스크탑 수준의 편집 도구를 모바일 네이티브 성능으로 구현",
    features: [
      {
        name: "High-Performance Canvas",
        tech: "Skia Engine (react-native-skia)",
        desc: "기본 Canvas API 대신 C++ 기반의 Skia 엔진을 사용하여, 수백 개의 레이어와 필터 효과를 60fps로 실시간 렌더링. 핀치 줌/로테이션 시 매트릭스 연산 최적화."
      },
      {
        name: "Background Upload Task",
        tech: "Background Fetch API / WorkManager",
        desc: "고용량 프레임 데이터 업로드 중 앱을 닫아도, OS 백그라운드 스레드에서 업로드를 계속 진행. 완료 시 로컬 푸시 알림으로 성공 여부 피드백."
      }
    ]
  }
];

export default function SpecsPage() {
  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="dot" />
            <span>forFAN Developers</span>
          </div>
          <a href="/" className="back-link">← Back to Overview</a>
        </div>
      </header>

      <main className="container doc-body">
        <div className="doc-intro">
          <div className="badge-beta">Engineering Spec v2.5</div>
          <h1 className="h1">App Implementation Guide</h1>
          <p className="lead">
            forFAN 앱의 <b>사용자 경험(UX)</b>과 <b>비즈니스 가치</b>를 극대화하기 위한 상세 기술 명세서입니다. [cite: 111, 112]
          </p>
        </div>

        <div className="specs-container">
          {mobileAppSpecs.map((phase, idx) => (
            <section key={idx} className="spec-section">
              <div className="phase-marker">{phase.phase}</div>
              <h2 className="spec-title">{phase.title}</h2>
              
              {/* 🟢 Goal Section: 시인성 강화 */}
              <div className="goal-banner">
                <div className="goal-content">
                  <span className="goal-label">GOAL</span>
                  <p className="goal-text">{phase.goal}</p>
                </div>
              </div>

              {/* 🟢 Features: 와이드 레이아웃으로 변경하여 설명글 확보 */}
              <div className="feature-stack">
                {phase.features.map((feat, fIdx) => (
                  <div key={fIdx} className="feature-block">
                    <div className="feature-header">
                      <h3 className="feat-name">{feat.name}</h3>
                      <span className="feat-tech">{feat.tech}</span>
                    </div>
                    <div className="feat-desc">
                      {feat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <style jsx>{`
        .doc-layout { background: #fff; min-height: 100vh; color: #1d1d1f; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif; }
        .doc-header { border-bottom: 1px solid #e5e5e5; position: sticky; top: 0; background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); z-index: 100; }
        .header-inner { display: flex; justify-content: space-between; align-items: center; height: 60px; }
        .brand { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px; }
        .dot { width: 8px; height: 8px; background: #0071e3; border-radius: 50%; }
        .back-link { font-size: 13px; color: #0071e3; text-decoration: none; font-weight: 500; }

        .doc-body { padding-top: 80px; padding-bottom: 120px; max-width: 900px; }
        .doc-intro { margin-bottom: 80px; border-bottom: 1px solid #e5e5e5; padding-bottom: 40px; }
        .badge-beta { display: inline-block; font-size: 11px; font-weight: 700; color: #0071e3; background: #f0f7ff; padding: 4px 8px; border-radius: 6px; margin-bottom: 16px; border: 1px solid rgba(0, 113, 227, 0.2); }
        .h1 { font-size: 48px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 20px; line-height: 1.1; }
        .lead { font-size: 22px; line-height: 1.5; color: #86868b; }

        .spec-section { margin-bottom: 120px; }
        .phase-marker { font-size: 13px; font-weight: 700; color: #86868b; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
        .spec-title { font-size: 36px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 32px; }

        /* 🟢 Goal Banner: 핵심 가치 강조 */
        .goal-banner { 
          background: #1d1d1f; color: #fff; padding: 32px; border-radius: 24px; 
          margin-bottom: 48px; position: relative; overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .goal-label { font-size: 11px; font-weight: 800; color: #0071e3; letter-spacing: 2px; display: block; margin-bottom: 12px; }
        .goal-text { font-size: 20px; font-weight: 600; line-height: 1.4; margin: 0; word-break: keep-all; }

        /* 🟢 Feature Stack: 와이드 레이아웃 */
        .feature-stack { display: flex; flex-direction: column; gap: 40px; }
        .feature-block { 
          padding-bottom: 40px; border-bottom: 1px solid #f2f2f2; 
          display: grid; grid-template-columns: 1fr; gap: 16px;
        }
        .feature-block:last-child { border-bottom: none; }

        .feature-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .feat-name { font-size: 22px; font-weight: 700; color: #1d1d1f; margin: 0; }
        .feat-tech { 
          font-size: 12px; font-family: SF Mono, monospace; 
          color: #d63384; background: rgba(214, 51, 132, 0.05); 
          padding: 6px 12px; border-radius: 8px; border: 1px solid rgba(214, 51, 132, 0.1);
        }

        .feat-desc { font-size: 17px; line-height: 1.7; color: #424245; max-width: 100%; word-break: keep-all; }

        @media (max-width: 768px) {
          .h1 { font-size: 36px; }
          .spec-title { font-size: 28px; }
          .goal-text { font-size: 18px; }
          .feat-name { font-size: 20px; }
          .feature-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}