import "./globals.css";
import DynamicIslandProvider from "@/components/DynamicIsland"; // 👈 Import

export const metadata = {
  title: "forFAN — Apple CMO View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 🟢 Provider로 감싸줍니다 */}
        <DynamicIslandProvider>
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  );
}