# 폰트 로딩 최적화 — Pretendard Critical Path 개선

## 발견 경위

Chrome DevTools(Lighthouse 또는 Network 패널)의 **Network Dependency Tree** 분석 결과에서 아래 경고 확인:

```
Maximum critical path latency: 617 ms

Initial Navigation
  http://localhost:3000              - 311 ms, 15.64 KiB
  └─ app/layout.css                  - 310 ms,  9.22 KiB
     └─ ff840cfebfb63b0c-s.p.woff2  - 617 ms, 2,009.76 KiB  ← LCP 병목
  └─ app/page.css                    - 308 ms,  3.74 KiB
```

---

## 문제점

`app/layout.tsx`에서 Pretendard 폰트를 `node_modules`의 Variable Font 단일 파일로 로드하고 있었음.

```ts
// 문제가 된 코드 (app/layout.tsx)
const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});
```

---

## 원인 분석

| 항목 | 내용 |
|------|------|
| 문제 파일 | `PretendardVariable.woff2` |
| 파일 크기 | **2,009.76 KiB (약 2 MB)** |
| 로드 위치 | `layout.tsx` → 전체 페이지 공통 적용 |
| 지연 시간 | **617 ms** (critical path 최대 지연) |

### 왜 2MB인가?

Pretendard Variable Font는 **한국어 전체 글자(약 11,000자 이상) + 라틴 문자 + 굵기 100~900 전체**를 단일 `.woff2` 파일 안에 담고 있다. 이로 인해 파일 크기가 2MB에 달함.

### 왜 Critical Path에 포함되는가?

Next.js의 `localFont()`로 등록된 폰트는 `layout.tsx`가 렌더링될 때 `<head>`에 `<link rel="preload">` 태그로 자동 삽입된다. 즉, **페이지 첫 렌더링 전에 반드시 다운로드**되어야 하는 리소스로 처리되어 LCP(Largest Contentful Paint)를 직접 지연시킨다.

### 정적 파일로 분리해도 해결되지 않는 이유

굵기별 정적 `.woff2` 파일(Regular, Medium, SemiBold, Bold)도 각각 약 750KB이며, 4개를 모두 로드하면 총 **~3MB**로 오히려 더 나빠짐. 한국어 폰트는 글자 수가 많아 정적 파일도 크기가 크다.

---

## 해결 방법: 동적 서브셋(Dynamic Subset) CDN

### 핵심 아이디어

동적 서브셋은 폰트 파일을 **수백 개의 작은 청크**로 분리하고, 현재 페이지에서 **실제 렌더링에 필요한 글자만** 골라서 해당 청크만 다운로드한다.

예: "대동정밀 소개" 페이지 → 해당 글자들이 포함된 2~3개 청크(수십 KB)만 로드.

### 변경 내용

**`app/layout.tsx`**

```diff
- import localFont from "next/font/local";
-
- const pretendard = localFont({
-   src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
-   variable: "--font-pretendard",
-   weight: "100 900",
-   display: "swap",
- });

  return (
    <html lang="ko">
+     <head>
+       <link
+         rel="stylesheet"
+         href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
+       />
+     </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ...`}>
```

**`app/globals.css`**

```diff
  html, body {
-   font-family: var(--font-pretendard), -apple-system, ...;
+   font-family: "Pretendard Variable", Pretendard, -apple-system, ...;
  }
```

---

## 개선 효과

| 항목 | 개선 전 | 개선 후 |
|------|---------|---------|
| 폰트 초기 로드 크기 | **~2,010 KB** (단일 파일) | **~수십 KB** (사용 글자 청크만) |
| Critical Path 지연 | **617 ms** | 대폭 감소 (CDN 캐시 시 ~수십 ms) |
| 로드 방식 | `localFont` preload (blocking) | CSS `@font-face` + 동적 청크 (non-blocking) |
| 전체 폰트 데이터 | 항상 2MB 전체 다운로드 | 페이지별 필요 글자만 다운로드 |
| CDN 캐싱 | 없음 (로컬 번들) | jsDelivr 글로벌 엣지 캐싱 적용 |

### 추가 이점

- **재방문 시 완전 캐시**: CDN에서 받은 청크는 브라우저에 캐시되어 재방문 시 0ms
- **번들 크기 감소**: `PretendardVariable.woff2`가 Next.js 빌드 산출물에서 제거됨
- **유지보수 간소화**: `node_modules` 경로 직접 참조 제거로 패키지 업데이트 영향 없음

---

## 참고

- [Pretendard GitHub](https://github.com/orioncactus/pretendard)
- [jsDelivr CDN](https://www.jsdelivr.com/)
- [Web Font Optimization — web.dev](https://web.dev/articles/font-best-practices)
- 수정 파일: `app/layout.tsx`, `app/globals.css`
