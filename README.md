📘 README.md — DUTY3 기업 홈페이지
🚀 프로젝트 개요

DUTY3 는 헬스케어 테크놀로지 그룹을 위한
기업형 멀티 브랜드 랜딩 사이트(Corporate Multi-Brand Landing) 입니다.

사이트는 다음의 3개 브랜드를 통합적으로 소개합니다.

- Prore : 재활·운동·국시 대비 교육 플랫폼

- HealingU : 감성 힐링 커머스 브랜드

- DutyOn : 간호사 스케줄링·커뮤니티 플랫폼

메인 홈페이지는 다음 순서로 구성됩니다.

1.CompanyHero — 파티클 배경 기반 회사 소개 Hero

2.ProreSection — Prore 전용 풀스크린 슬라이더

3.HealingSection — 힐링유 브랜드 섹션

4.DutyOnSection — 듀티온 브랜드 섹션

5.QuestionSection — 문의 CTA(콜투액션) 섹션

6.Footer — 회사 정보 및 안내

📌 주요 특징
✔ 1. 브랜드별 완전 분리 설계

각 브랜드는 코드·이미지·스타일이 독립되어 있어
유지보수 / 확장 / 디자인 리뉴얼이 매우 쉽다.

- /src/assets/images/[브랜드]

- /src/sections/[브랜드Section].jsx

- /src/styles/sections/[브랜드]/hero-[브랜드].css

→ 브랜드 하나만 수정해도 다른 섹션에 영향 없음.

✔ 2. Tailwind + Custom CSS 하이브리드

- Tailwind : 전역 레이아웃·폰트·반응형 유틸리티

- Custom CSS : 브랜드별 Hero, 슬라이더, 애니메이션 등 고급 스타일

구조적으로 전역 스타일은 main.jsx에서만 import하며,
각 섹션은 자기 CSS만 import하는 모듈형 구조.

✔ 3. Prore 풀스크린 슬라이더 (Swiper 기반)

Prore 섹션은 Swiper를 이용한 풀스크린 인터랙티브 슬라이더로 제작.

각 슬라이드는 다음 구성:

- SlideOne — Prore 핵심 메시지 + 브랜드 시그니처 이미지

- SlideTwo — 수강생 후기 6개 카드 + “후기 더보기”

- SlideThree — 대표 강좌 6개 카드 + “강의 더보기”

타임라인 Progress Bar + Play/Pause 버튼 포함

관련 파일: 
components/prore/fullscreen/ProreFullscreenSlider.jsx
components/prore/fullscreen/slides/SlideOne.jsx
components/prore/fullscreen/slides/SlideTwo.jsx
components/prore/fullscreen/slides/SlideThree.jsx
components/prore/fullscreen/controls/PlayPauseButton.jsx

✔ 4. CompanyHero 파티클 애니메이션

회사 소개 섹션은 Canvas 기반 커스텀 파티클 애니메이션을 포함.

- JS 애니메이션 유틸 → src/assets/utils/particleBackground.js

- Hero 구조 → src/sections/CompanyHero.jsx

- 스타일 → styles/sections/company/hero-company.css

→ 추후 3D 애니메이션(Three.js, GSAP 등) 확장 용이함.

🔧 기술 스택 (Tech Stack)
Frontend

- React 18

- Vite

- JavaScript

- Tailwind CSS

- Swiper.js

- Heroicons

Build / Tools

- Vite (HMR, blazing-fast dev server)

- ESLint

- PostCSS

📂 프로젝트 구조 (최신 업데이트 버전)

아래는 네 프로젝트 전체 구조 + 각 파일 역할 설명 포함한 트리 완성본.
duty3/
│
├─ public/
│   └─ index.html                  # React가 주입되는 루트 HTML
│
├─ src/
│   ├─ assets/
│   │   ├─ images/                 # 모든 브랜드 이미지 관리
│   │   │   ├─ dutyon/             # DutyOn 이미지
│   │   │   ├─ healing/            # HealingYou 이미지
│   │   │   └─ prore/              # Prore 이미지
│   │   │
│   │   ├─ logos/                  # 로고·파비콘 리소스 (현재 비어있음)
│   │   └─ utils/
│   │       ├─ particleBackground.js  # CompanyHero 파티클 애니메이션
│   │       └─ partnersWave.js        # PartnersSection 배경 웨이브
│   │
│   ├─ components/
│   │   ├─ common/                    # 모든 페이지에서 공통으로 쓰이는 UI
│   │   │   ├─ BrandCard.jsx
│   │   │   ├─ Footer.jsx
│   │   │   ├─ Header.jsx
│   │   │   └─ PartnersWaveCanvas.jsx
│   │   │
│   │   └─ prore/                     # Prore 전용 슬라이더 시스템
│   │       ├─ fullscreen/
│   │       │   ├─ controls/
│   │       │   │   └─ PlayPauseButton.jsx   # 슬라이더 재생/정지 버튼
│   │       │   └─ slides/
│   │       │       ├─ SlideOne.jsx
│   │       │       ├─ SlideTwo.jsx
│   │       │       └─ SlideThree.jsx
│   │       │
│   │       └─ ProreFullscreenSlider.jsx      # Swiper 전체 묶음 슬라이더
│   │
│   ├─ pages/
│   │   └─ HomePage.jsx               # 메인 페이지 (모든 섹션 조립)
│   │
│   ├─ sections/                      # 홈페이지 섹션 단위 UI
│   │   ├─ CompanyHero.jsx
│   │   ├─ DutyOnSection.jsx
│   │   ├─ HealingSection.jsx
│   │   ├─ PartnersSection.jsx
│   │   ├─ ProreSection.jsx
│   │   └─ QuestionSection.jsx
│   │
│   ├─ styles/
│   │   ├─ base/
│   │   │   └─ globals.css            # 전역 리셋/폰트/기본 스타일
│   │   │
│   │   ├─ common/
│   │   │   ├─ footer.css             # Footer 전용 스타일
│   │   │   └─ header.css             # Header 전용 스타일
│   │   │
│   │   └─ sections/
│   │       ├─ company/
│   │       │   └─ hero-company.css   # CompanyHero
│   │       ├─ dutyon/
│   │       │   └─ hero-dutyon.css
│   │       ├─ healing/
│   │       │   └─ hero-healing.css
│   │       ├─ partners/
│   │       │   └─ partners-section.css
│   │       └─ prore/
│   │           ├─ hero-prore.css
│   │           ├─ prore-fullscreen.css
│   │           ├─ prore-slide1.css
│   │           ├─ prore-slide2.css
│   │           └─ prore-slide3.css
│   │
│   ├─ App.css                         # App 전용 스타일(드물게 사용)
│   ├─ App.jsx                         # 루트 컴포넌트
│   ├─ index.css                       # Tailwind 엔트리
│   └─ main.jsx                        # 앱 진입 파일 (전역 스타일 import)
│
├─ package.json
├─ package-lock.json
├─ tailwind.config.js                  # Tailwind 설정
├─ postcss.config.js                   # PostCSS 구성
├─ vite.config.js                      # Vite 설정
└─ README.md                           # 이 문서

🧩 핵심 코드 구조 요약
1) 앱 진입 파일 — main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/base/globals.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

2) 루트 컴포넌트 — App.jsx
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return <HomePage />;
}

3) 메인 페이지 구성 — HomePage.jsx
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

import CompanyHero from "../sections/CompanyHero.jsx";
import ProreSection from "../sections/ProreSection.jsx";
import HealingSection from "../sections/HealingSection.jsx";
import DutyOnSection from "../sections/DutyOnSection.jsx";
import QuestionSection from "../sections/QuestionSection.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <CompanyHero />
        <ProreSection />
        <HealingSection />
        <DutyOnSection />
        <QuestionSection />
      </main>

      <Footer />
    </div>
  );
}

🛠 설치 & 실행
1) 패키지 설치
npm install

2) 개발 서버 실행
npm run dev

3) 프로덕션 빌드
npm run build

4) 빌드 결과 미리보기
npm run preview

🔄 유지보수·확장 가이드
✔ 브랜드 추가 방법

1.이미지 폴더 생성
src/assets/images/[brand]/

2.섹션 컴포넌트 생성
src/sections/[BrandSection].jsx

3.스타일 생성
src/styles/sections/[brand]/hero-[brand].css

4.HomePage.jsx에 섹션 추가

✔ 섹션/페이지 추가

Hero/섹션 → src/sections/
독립 페이지 → src/pages/

필요 시 react-router-dom 도입 가능.

✔ 이미지 교체

파일만 교체하면 됨.
파일명만 유지하면 컴포넌트 수정 필요 없음.
