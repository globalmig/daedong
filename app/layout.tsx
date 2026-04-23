import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import GNB from "@/components/GNB";

// 폰트 세팅 (geist는 영문/코드용으로만 유지)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
// Pretendard는 동적 서브셋 CDN으로 대체 (head의 <link> 태그로 로드)

// ✅ SEO 메타데이터
export const metadata: Metadata = {
  metadataBase: new URL("https://www.daedong-precision.co.kr"),
  title: {
    default: "대동정밀 | 시험편·지그 장비·호이스트·컨베어 전문 제작",
    template: "%s | 대동정밀",
  },
  description: "대동정밀은 1995년 창업 이래 30년 이상의 기술력으로 금속 인장시험편, 충격시험편, 호이스트, 컨베어, 각종 감속기 교체 장비, 지그 판금 가공용접을 전문 제작합니다.",
  keywords: ["대동정밀", "인장시험편", "충격시험편", "샤르피시험편", "호이스트", "컨베어", "감속기", "지그제작", "판금가공", "시험기기", "정밀부품"],
  authors: [{ name: "대동정밀" }],
  openGraph: {
    type: "website",
    url: "https://www.daedong-precision.co.kr",
    title: "대동정밀 | 시험편·지그 장비·호이스트·컨베어 전문 제작",
    description: "1995년 창업, 30년 이상의 경험과 기술력으로 정밀 시험편·장비·지그를 제작합니다.",
    siteName: "대동정밀",
    images: [
      {
        url: "https://www.daedong-precision.co.kr/img/SEO.png",
        width: 1200,
        height: 630,
        alt: "대동정밀 대표 이미지",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "대동정밀 | 시험편·지그 장비·호이스트·컨베어 전문 제작",
    description: "1995년 창업, 삼성SDI·삼성바이오로직스·세종대·건국대 납품 이력의 정밀 부품 전문 제작업체.",
    images: ["https://www.daedong-precision.co.kr/img/SEO.png"],
  },
  alternates: {
    canonical: "https://www.daedong-precision.co.kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "naver-site-verification": "11bd70a8580917eb6b8b30a1893432d5d478f52c",
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen flex flex-col`}>
        <GNB />
        <main className="flex-1 min-h-screen">{children}</main>
        <footer className="mt-auto">
          <Footer />
          {/* <!-- 공통 적용 스크립트 , 모든 페이지에 노출되도록 설치. 단 전환페이지 설정값보다 항상 하단에 위치해야함 --> */}
          {/* <Script src="//wsa.mig-log.com/wsalog.js" strategy="afterInteractive" />
          <Script id="wsa-init" strategy="afterInteractive">
            {`window.wsa = window.wsa || {}; window.wsa.inflow("www.daedong-precision.co.kr"); window.wsa_do(window.wsa);`}
          </Script> */}
        </footer>

        {/* ✅ 구조화 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "대동정밀",
              url: "https://www.daedong-precision.co.kr",
              description: "금속 인장시험편, 충격시험편, 호이스트, 컨베어, 감속기 교체 장비, 지그 판금 가공용접 전문 제작.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR",
                addressLocality: "서울특별시",
                addressRegion: "성동구",
                streetAddress: "광나루로 229 1층 (송정동 81-18)",
              },
              telephone: "02-463-9942",
              faxNumber: "02-466-3018",
              email: "dedong4462@naver.com",
              foundingDate: "1995-07-08",
            }),
          }}
        />
      </body>
    </html>
  );
}
