import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  // 🟢 [New] 게이미피케이션 전략 가이드 추가
  const strategicDos = [
    "게이미피케이션은 'Daily Ritual(의식)'로 격상 (Haptic & Visual)", // [cite: 17, 23]
    "클릭이 아닌 '텐션(Long Press)'과 '해방(Pop)'의 감각 설계" // 
  ];

  const strategicDonts = [
    "사행성 도박(슬롯/룰렛) UI 및 '잭팟' 멘트 사용 (브랜드 결 훼손)", // 
    "복잡한 규칙으로 진입 장벽 높이기 (직관성 저하)" // [cite: 18]
  ];

  return (
    <section className="section" id="dosdonts">
      <SectionHeader 
        title="DO / DON’T (브랜드를 지키는 룰)" 
        lead="기능을 추가할 때도 원칙은 동일합니다. 우리는 '중독성 게임'이 아닌 '감각적 의식'을 설계합니다." 
      />

      <div className="split">
        {/* ✅ DO LIST */}
        <div className="doDont">
          <p className="listTitle" style={{ color: "#34C759" }}>✅ DO</p>
          <ul className="bullets">
            {/* 기존 리스트 */}
            {doList.map((d, idx) => (
              <li key={`d-${idx}`}>{d}</li>
            ))}
            {/* 🟢 신규 전략 리스트 (강조) */}
            {strategicDos.map((d, idx) => (
              <li key={`new-d-${idx}`} style={{ fontWeight: 600, color: "#1d1d1f" }}>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* ⛔ DON'T LIST */}
        <div className="doDont">
          <p className="listTitle" style={{ color: "#FF3B30" }}>⛔ DON’T</p>
          <ul className="bullets">
            {/* 기존 리스트 */}
            {dontList.map((d, idx) => (
              <li key={`nd-${idx}`}>{d}</li>
            ))}
            {/* 🟢 신규 전략 리스트 (강조) */}
            {strategicDonts.map((d, idx) => (
              <li key={`new-nd-${idx}`} style={{ fontWeight: 600, color: "#1d1d1f" }}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* 기존 스타일 유지 */
        .section { padding: 80px 0; position: relative; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 768px) { .split { grid-template-columns: 1fr; } }

        .doDont {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .listTitle {
          font-size: 18px; font-weight: 800; margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }

        .bullets { list-style: none; padding: 0; margin: 0; }
        .bullets li {
          position: relative;
          padding-left: 14px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #424245;
          line-height: 1.6;
          word-break: keep-all;
        }
        .bullets li::before {
          content: "•"; position: absolute; left: 0; color: #d2d2d7;
        }
      `}</style>
    </section>
  );
}