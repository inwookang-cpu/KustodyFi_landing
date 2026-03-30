# KustodyFi Landing Website

AI-Powered FX Management 플랫폼 KustodyFi의 공식 웹사이트.

---

## 페이지 구성

### 메인

| 파일 | 용도 | 타�� |
|------|------|------|
| `index.html` | 메인 랜딩 (기��용) | 기업 재무담당자, CFO |
| `index_child.html` | ���인 랜딩 (서브) | 기업 재무담당자 |
| `for-institutions.html` | 기관용 랜딩 | 은행, 증권사 FX 데스크 |
| `docs.html` | 문서 센터 (약정서, 서비스 플로우 등) | 전체 |
| `privacy.html` | 개인정보처리방침 | 전체 |

### Use Case 데모 — 고객 시나리오

| 파일 | 시나리오 | 테마 색상 |
|------|----------|-----------|
| `fx_demo_sme_trade.html` | 수출 중견기업 | cyan/blue |
| `fx_demo_exporter.html` | 수출업체 FX 혁신 | green |
| `fx_demo_importer.html` | 수입업체 | amber/orange |
| `fx_demo_airline_v2.html` | 항공사 FX 관리 | blue |
| `fx_demo_airline_ndc.html` | 항공사 NDC/GDS 매출 전환 | blue |
| `fx_demo_powerplant.html` | 발전소 / 에너지 위기 대응 | red/orange |
| `fx_demo_foreign_bank.html` | 외국계 은행 FX 데스크 | cyan/purple |
| `fx_demo_proxy_hedge.html` | Proxy Hedge (10통화→3통화) | blue |

### Use Case 데모 — 제품 화면

| 파일 | 용도 |
|------|------|
| `fx_demo_cash_optimizer.html` | **Cash Schedule 기반 최적 헤지 전략** — 캘린더 뷰 + 넷팅 + 묶음 헤지 |
| `fx_dashboard.html` | 기본 Treasury 대시보드 (포지션, 헷지 비율, 만기 캘린더) |
| `fx_onboarding.html` | 거래 히스토리 마이그레이션 온보딩 |
| `fx_audit.html` | FX 회계 감사 지원 (공정가치 계산 근거) |

### AI Agent

| 파일 | 용�� |
|------|------|
| `ai_agent_daily.html` | AI Agent가 일하는 하루 (워크플로우 타임라인) |
| `agents.html` | 44-Agent 아키텍처 소개 |
| `agent_summary.html` | Agent 요약 + 통계 |
| `agent_architecture.mmd` | Agent 아키텍처 다이어그램 (Mermaid) |

### 제품 / 기술

| 파일 | 용도 |
|------|------|
| `usdc_term_structure.html` | USDC Term Structure 설명 |
| `USD_Stablecoin_Term_Structure_Spec.md` | USDC Term Structure 스펙 문서 |
| `curve_config.html` | Curve 설정 화면 (기술 데모) |
| `sme_sequence.html` | 증거금 기반 선물환 자금 흐름 |
| `fund-flow.html` | 글로벌 자금 흐름 구조 |

### IR / 프레젠테이션

| 파일 | 용도 |
|------|------|
| `kidb_presentation.html` | KIDB 제안서 |
| `pitch_bass_ventures.html` | Bass Ventures 피치 |
| `presentations/KustodyFi_Company_Profile.html` | 회사 소개서 |
| `presentations/KustodyFi_Service_Intro.html` | 서비스 소개 |
| `presentations/KustodyFi_Partnership_Deck_KR.html` | 파트너십 덱 (한국어) |
| `presentations/KustodyFi_Partnership_Deck_EN.html` | 파트너십 덱 (영문) |
| `presentations/KustodyFi_Global_Structure_v5.html` | 글로벌 구조 (최신) |
| `presentations/presentation.html` | TMS 기업 자금관리 시나리오 |
| `presentations/fx_trading_demo_presentation.html` | FX 데스크 데모 |
| `presentations/fx_corporate_demo_presentation.html` | 기업 FX 데모 |

### 브로커/기관별 프레젠테이션

| 파일 | 대상 |
|------|------|
| `presentations/bgc_presentation.html` | BGC |
| `presentations/gfi_presentation.html` | GFI |
| `presentations/ips_presentation.html` | IPS |
| `presentations/nittan_presentation.html` | Nittan (에너지) |
| `presentations/smbs_presentation.html` | SMBS |
| `presentations/tradition_presentation.html` | Tradition |
| `presentations/tullet_prebon_presentation.html` | Tullet Prebon |

### 내부 문서 (`internal/`)

| 파일 | 용도 |
|------|------|
| `internal/cost-structure.html` | 비용 구조 |
| `internal/fpa.html` | FPA 문서 |
| `internal/fund-flow.html` | 내부 자금 흐름 |
| `internal/KustodyFi_3Phase_Strategy.html` | 3단계 확장 전략 |
| `internal/KustodyFi_5Layer_서비스플로우.html` | 5레이어 서비스 플로우 |
| `internal/Invoice_Forward_증빙자동제출_플로우.html` | 인보이스 증빙 자동 제출 |
| `internal/만기결제_Cutoff_타임라인.html` | 만기 결제 컷오프 타임라인 |
| `internal/외화_타��이체_플로우.html` | 외화 타행이체 플로우 |
| `internal/정산플로우_은행직접_vs_증권사경유.html` | 정산 플로우 비교 |
| `internal/KIDB_QA_Internal_Cheatsheet.html` | KIDB QA 치트시트 |
| `internal/LOI_KIDB_KustodyFi.html` | KIDB LOI |

### 데이터

| 파일 | 용도 |
|------|------|
| `usdkrw_vol_analysis.csv` | USDKRW 변동성 분석 데이터 |

---

## 데모 흐름 (고객 여정)

```
고객 시나리오 데모 (왜 필요한지)
  fx_demo_exporter / importer / airline / ...
      ↓
제품 화면 데모 (쓰면 뭐가 보이는지)
  fx_demo_cash_optimizer  ← Cash Schedule + 최적 헤지
  fx_dashboard            ← 포지션 대시보드
      ↓
AI Agent (어떻게 자동화되는지)
  ai_agent_daily / agents
      ↓
CTA → sales@kustodyfi.com
```

---

## 로컬 실행

별도 빌드 없이 HTML 파일을 브라우저에서 바로 열면 됩니다.

또는 로컬 서버:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

`http://localhost:8000` 접속

---

## 기술 스택

- HTML / CSS / JS (인라인, ��레임워크 없음)
- Google Fonts (Noto Sans KR, Inter)
- 반응형 ��자인 (모바일/태블릿/데스크톱)
- 슬라이드 네비게이션 (키보드 ← → / 터치 스와이프)

---

## 연락처

**KustodyFi Co., Ltd.**
- 영업/데모: sales@kustodyfi.com
- 대표: inwoo.kang@kustodyfi.com
