"use client";

import Icon from "./Icon";
import { CardItem } from "@/content/types";
import ScrollReveal from "./ScrollReveal";
import { useRef, useState } from "react";

export default function ItemCard({
  item,
  span = 6,
  delay = 0,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 🖱️ 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 카드 내 X 좌표
    const y = e.clientY - rect.top;  // 카드 내 Y 좌표

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3; // 상하 기울기 (최대 3도)
    const rotateY = ((x - centerX) / centerX) * 3;  // 좌우 기울기 (최대 3도)

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // 마우스 나가면 원상복구
  };

  return (
    <ScrollReveal
      delay={delay}
      style={{ gridColumn: `span ${span}` }}
      className="bento-wrapper"
    >
      <div
        style={{ perspective: "1000px" }} // 3D 공간 정의
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <article
          ref={cardRef}
          className="bento-card"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s ease-out, box-shadow 0.3s ease", // 회전은 즉각적으로, 그림자는 부드럽게
          }}
        >
          <div className="bento-content">
            {item.icon && (
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
            )}
            <span className="bento-tag">{item.tag}</span>
            <h3 className="bento-title">{item.title}</h3>
            <p className="bento-desc">{item.desc}</p>

            {item.bullets.length > 0 && (
              <ul className="bento-list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <style jsx>{`
            .bento-card {
              height: 100%;
              background: #ffffff;
              border-radius: 24px;
              padding: 28px;
              /* 기본 그림자 */
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03);
              border: 1px solid rgba(0, 0, 0, 0.04);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              /* 하드웨어 가속 */
              will-change: transform;
            }
            
            /* Hover 시 더 깊은 그림자와 하이라이트 */
            .bento-card:hover {
              box-shadow: 
                0 20px 40px -5px rgba(0, 0, 0, 0.1), /* 깊은 그림자 */
                0 0 0 1px rgba(0,0,0,0.05); /* 경계선 강화 */
            }

            .icon-box {
              width: 44px; height: 44px;
              background: #f5f5f7;
              border-radius: 12px; /* iOS 스타일 스퀘어클 */
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 16px;
              color: #1d1d1f;
            }
            .bento-tag {
              font-size: 11px; font-weight: 700; color: #86868b;
              text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;
            }
            .bento-title {
              font-size: 20px; font-weight: 700; color: #1d1d1f;
              margin: 0 0 10px 0; line-height: 1.3;
              letter-spacing: -0.01em;
            }
            .bento-desc {
              font-size: 15px; line-height: 1.6; color: #86868b; margin: 0 0 20px 0;
            }
            .bento-list {
              padding: 0; margin: 0; list-style: none;
              border-top: 1px solid rgba(0,0,0,0.05); padding-top: 16px;
            }
            .bento-list li {
              font-size: 13px; color: #6e6e73; margin-bottom: 6px;
              position: relative; padding-left: 12px;
            }
            .bento-list li::before {
              content: "•"; position: absolute; left: 0; color: #d2d2d7;
            }
          `}</style>
        </article>
      </div>
    </ScrollReveal>
  );
}