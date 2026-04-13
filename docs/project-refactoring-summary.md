# 대동정밀 웹사이트 리팩토링 전체 변경 내역

## 개요

| 항목 | 내용 |
|------|------|
| 프로젝트 | 대동정밀 공식 홈페이지 |
| 스택 | Next.js 15 (App Router), TypeScript, Tailwind CSS, Swiper |
| 배포 | Vercel / `daedong-precision.co.kr` |
| 주요 커밋 | `fix:메인화면 클라이언트 반응형 수정`, `fix:경로변경`, `fix:문의하기 예외처리` |

---

## 1. 페이지 구성 전면 재설계

### 1-1. 메인 홈페이지 (`app/page.tsx`)

**변경 전** — 단일 긴 스크롤 페이지, 이미지 직접 배치  
**변경 후** — 섹션 컴포넌트 조합 구조로 분리

| 섹션 순서 | 컴포넌트 | 내용 |
|-----------|---------|------|
| 1 | `<Slider />` | Swiper 풀스크린 슬라이더 |
| 2 | `<Work />` | 사업영역 5개 (확장 카드 레이아웃) |
| 3 | 인라인 그리드 | 주요 거래처 12곳 로고 카드 |
| 4 | `<ProductList />` | 제품 8종 이미지 카드 그리드 |
| 5 | `<GoogleMap />` | 구글맵 iframe + 정보 박스 |
| 6 | `<Contact />` | 문의하기 폼 |

거래처 로고 카드는 `/clients` 페이지로 링크 연결.

---

### 1-2. 회사소개 (`app/company/page.tsx`)

**신규 구성 2섹션 추가**

- **대표 소개** 섹션: 홍찬국 대표의 이력을 `<ul>` 리스트로 정리
- **CEO 인사말** 섹션: 배경 이미지(`bg_ceo.jpg`) + 반투명 오버레이 + 대표 직인 형식 마무리
  - `blur-sm` 처리로 텍스트 가독성 확보
  - 그라디언트 오버레이 2중 적용(`bg-[#1b2030]/80`, `from-black/40`)

---

### 1-3. 제품소개 (`app/work/page.tsx`)

**URL 쿼리 파라미터 기반 탭 필터 구조 도입**

```
/work?type=specimens   → 시험편 제작
/work?type=equipment   → 시험기기
/work?type=hoist       → 호이스트 / 컨베어 / 화물 리프트
/work?type=reducer     → 지그 장비
/work?type=fabrication → 판금 / 가공 / 용접
```

- 잘못된 `type` 값 진입 시 `specimens`으로 자동 fallback (방어 처리)
- `router.replace()`로 브라우저 히스토리 오염 없이 탭 전환
- **반응형 이원화**:
  - 모바일(`md` 미만): 커스텀 드롭다운 (애니메이션, 바깥 클릭 닫기, aria 속성)
  - 데스크탑(`md` 이상): 5개 버튼 탭

---

### 1-4. 주요거래처 (`app/clients/page.tsx`)

**전용 페이지로 분리 (신규)**

- 12개 거래처 데이터 배열(`clients[]`)로 관리
  - 대기업 2곳 (삼성SDI, 삼성바이오로직스)
  - 대학교 10곳
- 카드 레이아웃: 로고 + 기관명 + 영문명 + 카테고리 뱃지
- 하단에 "더 많은 거래처와 함께하고 있습니다" 안내 섹션 추가
- 단국대학교는 로고 미확보로 주석 처리(`// commented out`)

---

### 1-5. 오시는 길 (`app/map/page.tsx`)

**전용 페이지로 분리 (신규)**

- Hero 배너 + `<GoogleMap />` 컴포넌트
- 연락처 정보를 2열 그리드 테이블로 정리
  - 주소, 대표, 전화, 휴대폰, 팩스, 이메일 6개 항목

---

## 2. 컴포넌트 리팩토링

### 2-1. GNB (`components/GNB.tsx`)

| 항목 | 내용 |
|------|------|
| 로고 | 텍스트 → `logo_white.png` 이미지로 교체 |
| 모바일 메뉴 | 햄버거 버튼 + 슬라이드 다운 풀스크린 메뉴 |
| 모바일 닫기 | 화면 너비 `≥768px` 리사이즈 시 자동으로 메뉴 닫힘 |
| 네비게이션 항목 | 회사소개 / 제품소개 / 주요거래처 / 오시는 길 |
| 상단 배경 | 기본 투명, 모바일 메뉴 열렸을 때만 `bg-slate-800` 적용 |

---

### 2-2. Slider (`components/Slider.tsx`)

**Swiper 라이브러리 기반 풀스크린 슬라이더 신규 구현**

| 항목 | 내용 |
|------|------|
| 슬라이드 수 | 3장 (`hero1.jpg`, `hero_factory.jpg`, `bg_slider03.jpg`) |
| 자동재생 | 3초 간격, 사용자 인터랙션 후 재개 |
| 모바일 높이 | `h-screen` (전체 화면) |
| 데스크탑 높이 | `h-[640px]` 고정 |
| 모바일 전용 UI | 스크롤 다운 화살표 버튼 (바운스 애니메이션) |
| 네비게이션 | 데스크탑: 좌우 화살표 / 모바일: 점 페이지네이션 |

---

### 2-3. Work (`components/Work.tsx`)

**사업영역 5개 — 호버 확장(Accordion) 카드**

- `lg` 이상: `hover:flex-[3]` 로 호버된 카드가 3배 너비로 확장 (`duration-700`)
- `md`: 3열 고정 그리드
- 모바일: 1열 `h-56` 카드
- 각 카드 클릭 시 `/work?type=` 해당 탭으로 이동

---

### 2-4. ProductList (`components/ProductList.tsx`)

**제품 8종 카드 그리드 신규 구현**

- 각 카드: 이미지(`h-64`) + 제목 + 설명 + 호버 시 테두리 sky 색상 변경
- `/work?type=` 해당 탭으로 링크 연결
- `lg`: 4열, `md`: 2열, 모바일: 1열

---

### 2-5. GoogleMap (`components/GoogleMap.tsx`)

**구글맵 iframe 임베드 + 오버레이 정보 박스**

- `loading="lazy"` 로 초기 로딩 지연
- 좌상단 오버레이 박스: 상호명, 주소, 전화번호

---

### 2-6. Figure01 / Figure02 (`components/Figure01.tsx`, `Figure02.tsx`)

**재사용 가능한 이미지+텍스트 레이아웃 컴포넌트**

| 컴포넌트 | 용도 | 특징 |
|---------|------|------|
| `Figure01` | 제품소개 상세 이미지 + 설명 | `direction: "left" \| "right"` 로 이미지 위치 제어, `object-contain` |
| `Figure02` | 프로필/소개 이미지 + 설명 | `description`이 배열이면 `<ul>`, 문자열이면 `<pre>`, `object-cover` |

---

### 2-7. Footer (`components/Footer.tsx`)

- 텍스트 로고 → `logo_white.png` 이미지로 교체
- 연락처 정보 (주소, 전화, 휴대폰, 팩스, 이메일) 표시
- 저작권 연도 `new Date().getFullYear()` 동적 처리

---

### 2-8. styles.css (`components/styles.css`)

**Swiper 커스텀 스타일 + 스크롤 다운 애니메이션 추가**

```css
/* 네비게이션 화살표: 모바일 숨김 / 데스크탑 표시 */
.swiper-button-prev, .swiper-button-next { display: none; }
@media (min-width: 768px) { ... display: flex; }

/* 점 페이지네이션: 모바일 표시 / 데스크탑 숨김 */
@media (min-width: 768px) { .swiper-pagination { display: none; } }

/* 스크롤 다운 화살표 바운스 애니메이션 */
@keyframes scroll-bounce { ... }
```

---

## 3. 레이아웃 및 전역 스타일

### 3-1. layout.tsx — 폰트 최적화

> 상세 내용: [font-loading-optimization.md](./font-loading-optimization.md)

- `PretendardVariable.woff2` (2MB 로컬 파일) → jsDelivr 동적 서브셋 CDN으로 교체
- Critical path 폰트 지연 617ms → 대폭 감소
- `geistSans`, `geistMono` 는 영문/코드용으로 유지

### 3-2. globals.css — 전역 타이포그래피

```css
html, body {
  font-family: "Pretendard Variable", Pretendard, -apple-system, ...;
}
```

- `h1`~`h4`, `p` 기본 사이즈·굵기·여백 Tailwind `@apply`로 일괄 정의
- `text-shadow`, `white-text`, `multiple-shadow` 유틸리티 클래스 추가

---

## 4. 정리된 항목 (삭제)

### 4-1. 컴포넌트 삭제

| 파일 | 이유 |
|------|------|
| `components/WsaScript.tsx` | WSA 로그 스크립트 미사용, `layout.tsx`에서도 주석 처리됨 |

### 4-2. 이미지 정리

사용하지 않는 이미지 대거 삭제 (약 30개 이상):

- 기존 슬라이더 배경 (`bg_slider01.jpg`, `bg_slider02.jpg`)
- 기존 섹션 배경 (`bg_food.jpg`, `bg_global.jpg`, `bg_import.jpg`, `bg_taxes.jpg` 등)
- Unsplash 체크 이미지 시리즈 (`check_photo-*.jpg`)
- 이전 사업영역 배경 (`bg_work_solutions*.jpg`)
- 관세사무소 로고 (`LK 관세사무소 로고.png`) — 타 프로젝트 파일

---

## 5. SEO 설정 (`app/layout.tsx`)

```ts
metadataBase: "https://www.daedong-precision.co.kr"
title: "대동정밀 | 시험편·지그 장비·호이스트·컨베어 전문 제작"
keywords: ["대동정밀", "인장시험편", "충격시험편", ...]
openGraph: { type: "website", image: "/img/SEO.png", locale: "ko_KR" }
robots: { index: true, follow: true, googleBot: { ... } }
```

- JSON-LD 구조화 데이터 (`LocalBusiness` 스키마) 추가
- `canonical` URL 설정
- Twitter Card `summary_large_image` 설정

---

## 6. 변경 파일 목록 요약

| 파일 | 변경 유형 | 내용 요약 |
|------|----------|----------|
| `app/layout.tsx` | 수정 | 폰트 CDN 전환, SEO 메타, JSON-LD |
| `app/globals.css` | 수정 | 폰트 패밀리, 타이포그래피 기본값 |
| `app/page.tsx` | 수정 | 섹션 컴포넌트 조합 구조로 재편 |
| `app/company/page.tsx` | 수정 | 대표 소개 + 인사말 섹션 추가 |
| `app/work/page.tsx` | 수정 | URL 쿼리 탭 필터, 모바일 드롭다운 |
| `app/clients/page.tsx` | 수정 | 전용 페이지로 분리, 카드 그리드 |
| `app/map/page.tsx` | 수정 | 전용 페이지로 분리, 연락처 그리드 |
| `components/GNB.tsx` | 수정 | 이미지 로고, 반응형 햄버거 메뉴 |
| `components/Footer.tsx` | 수정 | 이미지 로고, 연락처 정보 |
| `components/Slider.tsx` | 수정 | Swiper 슬라이더, 스크롤 다운 버튼 |
| `components/Work.tsx` | 수정 | 호버 확장 카드, 5개 사업영역 |
| `components/ProductList.tsx` | 수정 | 8종 제품 카드 그리드 |
| `components/GoogleMap.tsx` | 수정 | iframe + 오버레이 정보 박스 |
| `components/Figure01.tsx` | 수정 | direction prop 기반 레이아웃 |
| `components/Figure02.tsx` | 수정 | 배열/문자열 description 분기 |
| `components/styles.css` | 수정 | Swiper 반응형 + 스크롤 애니메이션 |
| `components/WsaScript.tsx` | **삭제** | WSA 스크립트 미사용 제거 |
| `public/img/*.jpg` (다수) | **삭제** | 미사용 이미지 정리 |
| `public/img/SEO.png` | 수정 | OG 이미지 교체 |
