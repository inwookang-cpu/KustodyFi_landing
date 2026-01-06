# KustodyFi - Trust-Native Treasury Infrastructure

> **Code the Law. Move the Money.**

프리미엄 B2B 핀테크 랜딩페이지 - Interbank-grade FX & Treasury Infrastructure

---

## 🎯 프로젝트 개요

KustodyFi는 기업의 외환·자금 거래를 사후 통제가 아닌 **'사전 통제'** 구조로 설계한 Trust-Native Treasury Infrastructure입니다.

### 타겟 사용자
- 한국 기업 CFO, 재무팀, Treasury 담당자
- 은행, 증권사, FX 브로커
- 규제·감사·내부통제를 중시하는 의사결정자

### 핵심 가치
- **Interbank-grade** - 은행 간 시장 수준의 전문성
- **Compliance-by-design** - 설계 단계부터 규제 준수
- **Policy-as-code** - 정책을 코드로 내재화

---

## ✨ 구현된 주요 기능

### 1️⃣ **히어로 섹션**
- ✅ 단순화된 메인 메시지: "Code the Law. Move the Money."
- ✅ 영어/한국어 이중 언어 구조
- ✅ Muted 서브타이틀: "Interbank-grade Treasury Infrastructure"
- ✅ CTA 버튼 + "Explore StableFX" 링크
- ✅ 풀스크린 다크 네이비 배경
- ✅ 스크롤 인디케이터 애니메이션

### 2️⃣ **What is KustodyFi 섹션**
- ✅ 3가지 핵심 가치 제안
  - Interbank-grade FX pricing
  - Policy-as-code control
  - Audit-ready by default
- ✅ 그리드 레이아웃 (3열)
- ✅ SVG 아이콘
- ✅ 호버 효과

### 3️⃣ **Core Infrastructure Modules 섹션**
- ✅ **StableFX** - Interbank-grade FX Pricing Engine
- ✅ **SEAL Layer** - Policy-as-Code Approval & Audit
- ✅ **DAT** - Treasury Data & Analytics
- ✅ 좌우 교차 레이아웃 (alternate layout)
- ✅ 각 모듈별 상세 설명

### 4️⃣ **Why It Matters 섹션**
- ✅ 3가지 문제점 제시
- ✅ 솔루션 강조 박스
- ✅ 시각적 계층 구조

### 5️⃣ **🆕 Built with Regulatory Reality in Mind 섹션** ⭐
- ✅ 새로 추가된 섹션
- ✅ 규제 우선 설계 철학 강조
- ✅ 3가지 핵심 원칙:
  - 승인 정책과 감사 로그 기본 생성
  - 권한 분리 및 2인 승인 구조 강제
  - 사전 통제 구조
- ✅ VC/은행/감사 대응용 메시지
- ✅ 체크마크 아이콘 포함

### 6️⃣ **Designed For 섹션**
- ✅ 4개 타겟 기관 카드
  - Corporates
  - Banks & Securities
  - FX Brokers
  - Digital Asset Operators
- ✅ SVG 아이콘
- ✅ 간결한 설명

### 7️⃣ **Final CTA 섹션**
- ✅ "The future of treasury is governed by code."
- ✅ 2개 행동 버튼
  - Talk to the Founder
  - Request Demo
- ✅ 제한적 온보딩 메시지

### 8️⃣ **🆕 Footer - Institution-Grade** ⭐
- ✅ 4열 레이아웃
- ✅ **새로 추가된 "Legal & Compliance" 섹션**:
  - Approval Policy
  - Audit Log Structure
  - Data Retention
  - Regulatory Alignment
- ✅ Company, Product, Resources 섹션 유지
- ✅ Copyright & 추가 링크

### 9️⃣ **반응형 디자인**
- ✅ 데스크톱 (1200px+)
- ✅ 태블릿 (768px ~ 1199px)
- ✅ 모바일 (< 768px)
- ✅ 햄버거 메뉴 (모바일)

### 🔟 **JavaScript 인터랙션**
- ✅ 스크롤 기반 헤더 효과
- ✅ 부드러운 스크롤 네비게이션
- ✅ Intersection Observer 기반 fade-in 애니메이션
- ✅ 스크롤 진행도 바
- ✅ 버튼 리플 효과
- ✅ 모바일 메뉴 토글
- ✅ Parallax 효과 (데스크톱)
- ✅ 키보드 네비게이션 지원
- ✅ Reduced Motion 지원 (접근성)

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
--color-deep-navy: #0B1220    /* 주 배경 */
--color-black: #000000        /* 강조 섹션 배경 */
--color-dark-gray: #1A1A1A    /* 보조 배경 */
--color-slate-gray: #2A2F3A   /* 카드 배경 */
--color-trust-blue: #3B82F6   /* 포인트 컬러 */
--color-soft-mint: #5FFAD0    /* CTA 강조 */
--color-white: #FFFFFF        /* 텍스트 */
```

### 타이포그래피
- **폰트**: Inter (Google Fonts)
- **영어**: 큰 사이즈, 간결, 개념 앵커
- **한국어**: 작은 사이즈, 명확, 이해 지원
- **구조**: 영어 위 / 한국어 아래

### 디자인 원칙
1. ✅ **영어는 개념, 한국어는 확정**
2. ✅ **설명보다 구조로 신뢰를 주는 UI**
3. ✅ **B2C 감성 완전 배제**
4. ✅ **Bloomberg / Kyriba / Murex 레퍼런스**
5. ✅ **"우리 쓰세요"가 아니라 "이게 표준입니다"**

---

## 📂 프로젝트 구조

```
KustodyFi/
├── index.html              # 메인 HTML (16KB)
├── css/
│   └── style.css          # 전체 스타일시트 (20KB+)
├── js/
│   └── main.js            # JavaScript 기능 (12KB+)
└── README.md              # 프로젝트 문서
```

---

## 🚀 실행 방법

### 로컬 개발 서버

**Python 3 사용:**
```bash
python -m http.server 8000
```

**Python 2 사용:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js 사용:**
```bash
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

---

## 📱 배포 가이드

### Netlify 배포 (권장)
1. [Netlify](https://netlify.com) 로그인
2. "New site from Git" 선택
3. GitHub 저장소 연결 또는 드래그 앤 드롭
4. 자동 배포 완료!

**장점:**
- 무료 SSL 인증서
- 자동 CDN 배포
- 커스텀 도메인 지원
- 간편한 CI/CD

### Vercel 배포
1. [Vercel](https://vercel.com) 로그인
2. "New Project" 선택
3. 저장소 연결
4. 자동 배포

### GitHub Pages 배포
1. GitHub 저장소 생성
2. Settings > Pages
3. Branch 선택 (main)
4. `https://username.github.io/repository` 접속

---

## 🎯 다음 단계 개발 권장사항

### 🔴 즉시 해야 할 일 (필수)

1. **실제 이미지 교체**
   - 히어로 배경: 고급 금융 인프라 이미지
   - 모듈 섹션: StableFX, SEAL Layer, DAT 비주얼
   - 권장 소스: Unsplash, Pexels (금융 관련 키워드)

2. **Contact Form 구현**
   - Formspree, EmailJS, Netlify Forms 등 통합
   - 또는 백엔드 API 연동
   - 스팸 방지 reCAPTCHA 추가

3. **도메인 연결**
   - kustodyfi.com 또는 원하는 도메인
   - DNS 설정
   - SSL 인증서 확인

4. **Google Analytics 추가**
   ```html
   <!-- Google Analytics 코드 추가 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

5. **SEO 최적화**
   - Meta description 보완
   - Open Graph 태그 추가
   - Twitter Card 추가
   - Sitemap.xml 생성
   - Robots.txt 생성

### 🟡 추가 개발 권장사항

6. **고객 로고 섹션**
   - 실제 파트너사 로고 추가
   - Trusted by 섹션 제작

7. **백서/문서 다운로드**
   - PDF 백서 제공
   - API 문서 링크
   - 기술 문서 저장소

8. **FAQ 섹션**
   - 자주 묻는 질문
   - 아코디언 UI
   - 검색 기능

9. **블로그/인사이트 섹션**
   - Treasury 관련 인사이트
   - 규제 업데이트
   - 시장 분석

10. **다국어 지원**
    - 영어 전용 버전
    - 언어 토글 기능

### 🟢 장기 개발 계획

11. **제품 데모 페이지**
    - StableFX 인터랙티브 데모
    - SEAL Layer 시뮬레이션
    - DAT 대시보드 미리보기

12. **사례 연구 페이지**
    - 고객 성공 사례
    - ROI 계산기
    - 비교 분석

13. **개발자 포털**
    - API 문서
    - SDK 다운로드
    - 통합 가이드

14. **채용 페이지**
    - 팀 소개
    - 채용 공고
    - 기업 문화

---

## 🔧 커스터마이징 가이드

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --color-deep-navy: #0B1220;
    --color-trust-blue: #3B82F6;
    --color-soft-mint: #5FFAD0;
}
```

### 폰트 변경
`index.html`의 Google Fonts 링크 수정:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

그리고 `css/style.css`에서:

```css
--font-primary: 'YOUR_FONT', sans-serif;
```

### 섹션 순서 변경
`index.html`에서 `<section>` 블록의 순서를 변경하면 됩니다.

---

## 🎓 기술 스택

### 프론트엔드
- **HTML5** - 시맨틱 마크업
- **CSS3** - Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)** - Vanilla JS
- **Google Fonts** - Inter 폰트

### 라이브러리/프레임워크
- ❌ **No Dependencies** - 순수 HTML/CSS/JS
- ✅ **Pure Vanilla JavaScript**
- ✅ **No Build Process Required**

### 브라우저 지원
- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ⚠️ IE11 미지원 (CSS Grid, Intersection Observer 등 최신 API 사용)

---

## 📊 성능 최적화

### 이미 적용된 최적화
- ✅ CSS Grid & Flexbox (효율적 레이아웃)
- ✅ Intersection Observer (lazy loading 애니메이션)
- ✅ Throttle 함수 (스크롤 이벤트 최적화)
- ✅ Reduced Motion 지원 (접근성)
- ✅ 최소화된 DOM 조작

### 추가 권장사항
- 이미지 최적화 (WebP 포맷)
- Lazy loading 이미지
- CSS/JS 압축 (Minify)
- CDN 사용

---

## ♿ 접근성 (Accessibility)

### 구현된 기능
- ✅ Semantic HTML5 태그
- ✅ ARIA labels (필요시)
- ✅ Keyboard navigation 지원
- ✅ Focus styles
- ✅ Reduced motion 지원
- ✅ Skip to content 링크
- ✅ 충분한 색상 대비

### 추가 권장사항
- Screen reader 테스트
- WCAG 2.1 AA 준수 확인
- Alt text 보완

---

## 🐛 알려진 이슈

현재 알려진 이슈 없음.

버그를 발견하신 경우 Issue를 생성해 주세요.

---

## 📝 변경 이력

### v1.0.0 (2024-01-06)
- ✅ 초기 릴리스
- ✅ 히어로 섹션 단순화 (FX 제거)
- ✅ "Built with Regulatory Reality in Mind" 섹션 추가
- ✅ Footer "Legal & Compliance" 섹션 추가
- ✅ 완전 반응형 디자인
- ✅ JavaScript 인터랙션 완성
- ✅ 접근성 기능 추가

---

## 🤝 기여 가이드

프로젝트 개선에 기여하고 싶으신 분들:

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

---

## 📄 라이선스

이 프로젝트는 KustodyFi의 소유입니다.

---

## 📞 연락처

**KustodyFi**  
Email: contact@kustodyfi.com  
Website: https://kustodyfi.com

---

## 🎉 완성!

**KustodyFi 프리미엄 B2B 핀테크 랜딩페이지**가 완성되었습니다!

### 핵심 개선사항 요약:
1. ✅ **Hero 섹션 단순화** - "Code the Law. Move the Money."에 집중
2. ✅ **"Regulatory in Mind" 섹션 추가** - 규제 우선 설계 강조
3. ✅ **Institution-grade Footer** - Legal & Compliance 섹션 추가

이제 **Publish 탭**으로 가셔서 실제 배포를 진행하세요! 🚀

---

**Made with ❤️ for the future of treasury**