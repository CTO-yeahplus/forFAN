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
    phase: "4. Value Redemption",
    title: "Quiet Rewards (4CUT Coin)",
    goal: "결제 과정을 '지출'이 아닌 '경험'으로 인식하게 만드는 마이크로 인터랙션",
    features: [
      {
        name: "Vector Particle Animation",
        tech: "Lottie / Rive (GPU Accelerated)",
        desc: "잠금 해제 순간 50개 이상의 파티클이 물리 법칙에 따라 흩어지는 고품질 벡터 애니메이션. JSON 파일은 원격 CDN에서 gzip 압축 전송하며, 로컬 캐싱으로 재진입 시 로딩 제거."
      },
      {
        name: "Biometric Auth Integration",
        tech: "LocalAuthentication (FaceID/TouchID)",
        desc: "코인 차감 시 `CryptoObject`를 생성하여 생체 인증과 연동. 단순 인증 성공/실패가 아닌, 인증 토큰(Signature)을 서버로 전송하여 트랜잭션 위변조 원천 차단."
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
      },
      {
        name: "Home Screen Widget",
        tech: "WidgetKit (SwiftUI) / Jetpack Glance",
        desc: "앱 실행 없이 내 채널의 수익과 판매량을 보여주는 네이티브 위젯. 타임라인 프로바이더를 통해 15분 단위로 데이터를 저전력 백그라운드 갱신."
      }
    ]
  },
  {
    phase: "6. Business Logic",
    title: "Revenue Maximization",
    goal: "사용자 행동에 0.5초 이내로 반응하는 실시간 데이터 파이프라인",
    features: [
      {
        name: "Real-time Socket Pipeline",
        tech: "Socket.io (WebSocket) with Heartbeat",
        desc: "프레임 판매 발생 시 Polling 방식이 아닌 WebSocket으로 즉시(Latency < 500ms) 클라이언트에 이벤트 전송. 연결 끊김 시 Exponential Backoff 전략으로 자동 재연결."
      },
      {
        name: "Rich Media Push",
        tech: "Notification Service Extension",
        desc: "판매 알림 수신 시, 앱을 열지 않고도 알림 센터에서 판매된 프레임 이미지와 수익 금액을 바로 확인할 수 있도록 커스텀 UI(Notification Content Extension) 구현."
      }
    ]
  }
];

export default function SpecsPage() {
  return (
    <div className="doc-layout">
      {/* Header */}
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
          <div className="badge-beta">Engineering Spec v2.1</div>
          <h1 className="h1">App Implementation Guide</h1>
          <p className="lead">
            forFAN 앱의 <b>사용자 경험(UX)</b>과 <b>비즈니스 목표</b>를 달성하기 위한 상세 기술 명세서입니다.<br/>
            개발팀은 아래 명세된 <b>Native API</b>와 <b>Performance Constraint</b>를 준수하여 구현해야 합니다.
          </p>
        </div>

        <div className="specs-container">
          {mobileAppSpecs.map((phase, idx) => (
            <section key={idx} className="spec-section">
              <div className="section-header-sticky">
                <div className="phase-marker">{phase.phase}</div>
                <h2 className="spec-title">{phase.title}</h2>
              </div>
              
              <div className="goal-box">
                <span className="goal-label">🎯 UX & Perf Goal:</span> {phase.goal}
              </div>

              <div className="feature-table">
                {phase.features.map((feat, fIdx) => (
                  <div key={fIdx} className="feature-row">
                    <div className="col-meta">
                      <span className="feat-name">{feat.name}</span>
                      <span className="feat-tech">{feat.tech}</span>
                    </div>
                    <div className="col-desc">
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
        /* Apple Developer Docs Style */
        .doc-layout { background: #fff; min-height: 100vh; color: #1d1d1f; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif; }
        
        .doc-header { border-bottom: 1px solid #e5e5e5; position: sticky; top: 0; background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); z-index: 100; }
        .header-inner { display: flex; justify-content: space-between; align-items: center; height: 60px; }
        .brand { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px; letter-spacing: -0.01em; }
        .dot { width: 8px; height: 8px; background: #0071e3; border-radius: 50%; }
        .back-link { font-size: 13px; color: #0071e3; text-decoration: none; font-weight: 500; }
        .back-link:hover { text-decoration: underline; }

        .doc-body { padding-top: 60px; padding-bottom: 100px; max-width: 900px; }
        
        .doc-intro { margin-bottom: 80px; border-bottom: 1px solid #e5e5e5; padding-bottom: 40px; }
        .badge-beta { display: inline-block; font-size: 11px; font-weight: 700; color: #0071e3; background: #f0f7ff; padding: 4px 8px; border-radius: 6px; margin-bottom: 16px; border: 1px solid rgba(0, 113, 227, 0.2); font-family: SF Mono, Menlo, monospace; }
        .h1 { font-size: 44px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 20px; color: #1d1d1f; line-height: 1.1; }
        .lead { font-size: 21px; line-height: 1.5; color: #86868b; font-weight: 400; }
        .lead b { color: #1d1d1f; font-weight: 600; }

        .spec-section { margin-bottom: 100px; }
        .section-header-sticky { margin-bottom: 24px; }
        .phase-marker { font-size: 12px; font-weight: 700; color: #86868b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .spec-title { font-size: 32px; font-weight: 700; letter-spacing: -0.01em; color: #1d1d1f; }
        
        .goal-box { 
          background: #fbfbfd; padding: 24px 28px; border-radius: 16px; 
          font-size: 17px; line-height: 1.6; margin-bottom: 40px; 
          color: #1d1d1f; border-left: 4px solid #000; 
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .goal-label { font-weight: 800; color: #000; margin-right: 8px; }

        .feature-table { border-top: 1px solid #e5e5e5; }
        .feature-row { display: grid; grid-template-columns: 280px 1fr; gap: 40px; padding: 32px 0; border-bottom: 1px solid #e5e5e5; align-items: start; }
        
        .col-meta { display: flex; flex-direction: column; gap: 8px; }
        .feat-name { font-weight: 700; font-size: 17px; color: #1d1d1f; letter-spacing: -0.01em; }
        .feat-tech { 
          font-size: 11px; font-family: SF Mono, Menlo, monospace; 
          color: #d63384; background: rgba(214, 51, 132, 0.06); 
          padding: 6px 10px; border-radius: 6px; width: fit-content; 
          border: 1px solid rgba(214, 51, 132, 0.15); line-height: 1.4;
        }
        
        .col-desc { font-size: 16px; line-height: 1.7; color: #333; }

        @media (max-width: 768px) {
          .h1 { font-size: 34px; }
          .feature-row { grid-template-columns: 1fr; gap: 16px; padding: 24px 0; }
          .col-meta { flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; }
          .col-desc { font-size: 15px; }
        }
      `}</style>
    </div>
  );
}