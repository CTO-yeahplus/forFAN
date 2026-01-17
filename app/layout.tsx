import "./globals.css";
import DynamicIslandProvider from "@/components/DynamicIsland";
import SmoothScroller from "@/components/SmoothScroller"; // 🟢 1. 스크롤
import IntroOverlay from "@/components/IntroOverlay";     // 🟢 2. 인트로

// 🟢 3. Social Preview (OG Tags)
export const metadata = {
  title: "forFAN — Experience-first Brand Platform",
  description: "기술이 아닌 경험을 팝니다. forFAN이 제안하는 새로운 브랜드 경험.",
  openGraph: {
    title: "forFAN — Experience-first Brand Platform",
    description: "Technology doesn’t sell. Experience does.",
    url: "https://forfan.vercel.app", // 실제 배포 주소로 변경 권장
    siteName: "forFAN CMO View",
    images: [
      {
        url: "/og-image.png", // public 폴더에 이미지를 넣어야 함
        width: 1200,
        height: 630,
        alt: "forFAN Brand Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "forFAN — Experience-first Brand Platform",
    description: "Technology doesn’t sell. Experience does.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SmoothScroller /> {/* 🌊 전역 스크롤 적용 */}
        <IntroOverlay />   {/* 🎬 시네마틱 인트로 */}
        
        <DynamicIslandProvider>
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  );
}