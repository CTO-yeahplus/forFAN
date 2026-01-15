import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
