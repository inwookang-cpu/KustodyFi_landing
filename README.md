# KustodyFi Landing Website

AI-Powered FX Management 플랫폼 KustodyFi의 공식 웹사이트.

---

## 페이지 구성

### 메인

| 파일 | 용도 | 타겟 |
|------|------|------|
| `index.html` | 메인 랜딩 (기업용) | 기업 재무담당자, CFO |
| `index_child.html` | 메인 랜딩 (서브) | 기업 재무담당자 |
| `for-institutions.html` | 기관용 랜딩 | 은행, 증권사 FX 데스크 |
| `privacy.html` | 개인정보처리방침 | 전체 |

### Use Case 데모

| 파일 | 시나리오 |
|------|----------|
| `fx_demo_sme_trade.html` | 수출 중견기업 |
| `fx_demo_importer.html` | 수입업체 |
| `fx_demo_airline_v2.html` | 항공사 |
| `fx_demo_powerplant.html` | 발전소 / 에너지 |

### 제품 / 기술

| 파일 | 용도 |
|------|------|
| `ai_agent_daily.html` | AI Agent가 일하는 하루 (워크플로우) |
| `agents.html` | 44-Agent 아키텍처 소개 |
| `agent_summary.html` | Agent 요약 |
| `agent_architecture.mmd` | Agent 아키텍처 다이어그램 (Mermaid) |
| `sme_sequence.html` | 증거금 기반 선물환 자금 흐름 |
| `curve_config.html` | Curve 설정 화면 |
| `usdc_term_structure.html` | USDC Term Structure 설명 |
| `USD_Stablecoin_Term_Structure_Spec.md` | USDC Term Structure 스펙 문서 |

### IR / 프레젠테이션

| 파일 | 용도 |
|------|------|
| `kidb_presentation.html` | KIDB 프레젠테이션 |
| `pitch_bass_ventures.html` | Bass Ventures 피치 |

### 데이터

| 파일 | 용도 |
|------|------|
| `usdkrw_vol_analysis.csv` | USDKRW 변동성 분석 데이터 |

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

- HTML / CSS / JS (인라인, 프레임워크 없음)
- Google Fonts (Noto Sans KR, Inter)
- 반응형 디자인 (모바일/태블릿/데스크톱)

---

## 연락처

**KustodyFi Co., Ltd.**
- 영업/데모: sales@kustodyfi.com
- 대표: inwoo.kang@kustodyfi.com
