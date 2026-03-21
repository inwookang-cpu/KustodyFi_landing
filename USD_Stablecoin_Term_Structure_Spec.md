# KustodyFi — USD Stablecoin Term Structure Discovery

> 전통 FX Swap의 가격 메커니즘(CIP)을 On-Chain으로 옮기고,
> 시장에 존재하지 않는 USD Stablecoin 금리 커브를 최초로 생성한다.

---

## 1. Product Overview

KustodyFi는 **Stablecoin Dated Futures** 거래소다.

- 전통 FX Swap에서 은행이 하던 역할(유동성 공급, 가격 산출)을 **Unified LP Pool + AMM**이 대체한다.
- 가격 산출 공식은 전통과 동일한 **CIP (Covered Interest Parity)**를 사용한다.
- 만기가 있는 Dated Futures를 거래함으로써, 시장에 존재하지 않는 **USD Stablecoin Term Structure**를 생성한다.

### 핵심 차별점

| 구분 | Perpetual Futures | KustodyFi Dated Futures |
|------|------------------|------------------------|
| 만기 | 없음 | 셋째주 수요일 (NW~12M, 9개 tenor) |
| 금리 발견 | 불가 (단일 funding rate) | 가능 (tenor별 implied rate 역산) |
| Term Structure | 생성 불가 | **최초 생성** |
| 가격 산출 | Mark price + funding | CIP: F = S × DF_base / DF_quote |

---

## 2. Currency Structure

### Base Currency: USD Stablecoin

- **USDC, USDT, USDE, USD1** 등 USD-pegged stablecoin 전체를 아우르는 통칭
- USD Stablecoin ≠ USD. 금리가 다르다 (r_USD.S ≈ 4.975% vs r_USD(SOFR) ≈ 4.33%)
- 금리 Source: RWA/DeFi Oracle (70% RWA + 30% DeFi weighted blend)

### Quote Currency: KRW / KRW Stablecoin

- 현재: KRW (원화, FX Implied yield from 전통 시장)
- 향후: KRW Stablecoin (sKRW) 확장 시 순수 on-chain FX forward 가능
- 장기 확장: sJPY, sEUR 등 multi-currency stablecoin rate discovery

---

## 3. CIP Forward Pricing

```
F_mid(T) = S_mid × DF_base(T) / DF_quote(T)
```

- **DF_base**: USD Stablecoin 할인팩터 (Phase 1: flat oracle rate, ACT/365)
- **DF_quote**: KRW 할인팩터 (FX Implied yield, StableFX Engine unified curve_bootstrapper)
- r_USD.S > r_KRW → DF_base < DF_quote → **Forward Discount (Swap Points < 0)**

### Curve Methodology

| Currency | Source | Daycount | Interpolation |
|----------|--------|----------|---------------|
| USD Stablecoin | RWA/DeFi Oracle (flat → RWA ladder → implied) | ACT/365 | Log DF |
| KRW | FX Implied yield (≤1Y) + CRS zero rate (>1Y) | ACT/365 | Log DF |

---

## 4. Tenor Schedule — 셋째주 수요일 Convention

CME 방식의 dated futures 만기 스케줄:

- **NW**: Next Wednesday (가장 가까운 수요일)
- **1~6M**: 이번달부터 6개월 뒤까지 매월 셋째주 수요일
- **9M, 12M**: 9개월, 12개월 뒤 셋째주 수요일
- **총 9개 tenor**

### Tenor Code

CME month codes + 2자리 연도:

```
F=Jan  G=Feb  H=Mar  J=Apr  K=May  M=Jun
N=Jul  Q=Aug  U=Sep  V=Oct  X=Nov  Z=Dec
```

예시 (base date 2026-03-19):

| Tenor | Maturity | Days | F_mid | Swap Pts |
|-------|----------|------|-------|----------|
| NW | 2026-03-25 (Wed) | 6 | 1,485.02 | -0.38 |
| J26 | 2026-04-15 (Wed) | 27 | 1,483.59 | -1.81 |
| K26 | 2026-05-20 (Wed) | 62 | 1,481.06 | -4.34 |
| M26 | 2026-06-17 (Wed) | 90 | 1,478.41 | -6.99 |
| N26 | 2026-07-15 (Wed) | 118 | 1,475.84 | -9.56 |
| Q26 | 2026-08-19 (Wed) | 153 | 1,472.64 | -12.76 |
| U26 | 2026-09-16 (Wed) | 181 | 1,470.08 | -15.32 |
| Z26 | 2026-12-16 (Wed) | 272 | 1,462.57 | -22.83 |
| H27 | 2027-03-17 (Wed) | 363 | 1,455.47 | -29.93 |

---

## 5. LP Pool Design — 왜 이렇게 설계했는가

### Unified Pool (tenor 구분 없음)

LP Pool을 tenor별로 나누지 않고 **하나의 Unified Pool**로 운영하는 이유:

1. **유동성 분산 방지**: 9개 tenor별로 나누면 각 풀이 얇아져서 spread가 넓어진다
2. **LP 진입 단순화**: LP는 하나의 풀에만 예치하면 모든 tenor에 유동성을 공급하게 된다
3. **r_USD.S가 flat인 Phase 1에서는 tenor 구분이 의미 없음**: LP 관점에서 USD Stablecoin rate는 어차피 동일. Tenor별 가격 차이는 KRW term structure에서 발생

### RWA 전액 배치가 가능한 이유

전통 AMM은 유동성의 대부분이 풀 안에 잠겨 있어야 한다. KustodyFi는 다르다:

- **Dated futures = cash-settled**: 만기에 차금만 정산. 원금 교환 없음
- **일일 정산 필요 cash: 5~10%만**: 나머지 90~95%는 RWA에 배치 가능
- 이것이 **"LP가 왜 참여하는가"**의 핵심 답: RWA yield(~5%)를 포기하지 않으면서 추가 Trading Alpha를 받는다

### LP가 r_USD.S보다 수익이 떨어지면 참여할 이유가 없다

LP Baseline = r_USD.S ≈ 5%. 이것은 LP가 어디서든 받을 수 있는 수익률이다.
KustodyFi LP Pool에 넣는 이유는 **이 위에 Trading Alpha가 쌓이기 때문**:

- 5bp spread × volume = 추가 수익
- 따라서 **volume이 없으면 LP도 빠진다** → volume-first 전략의 필연성

### Dynamic Spread — 왜 평시에는 0인가

```
Dynamic_Spread = Base × max(0, U_mult + Δ_mult + σ_mult − 3)

Normal market (U=50%, Δ=0, σ=1.0):
  U_mult = 1 + max(0, 0.5-0.5)×2 = 1.0
  Δ_mult = 1 + |0|×1.5 = 1.0
  σ_mult = 1 + max(0, 1.0-1.0)×1.0 = 1.0
  Dynamic = Base × max(0, 1+1+1-3) = Base × 0 = 0
```

- **Phase 1 목표는 volume**: spread를 키우면 거래가 줄어든다
- Dynamic은 **LP 보호 메커니즘**. 평시에는 비활성, 스트레스 시에만 자동 활성화
- Asymmetric spread (§4.4): 풀이 한쪽으로 치우치면 반대 방향 거래를 유도

### Asymmetric Spread

```
Pool이 Net Long KRW (Δ > 0):
  Bid_Spread = Total/2 × (1 + Skew_Factor)   ← 넓힘 (매수 억제)
  Ask_Spread = Total/2 × (1 − Skew_Factor)   ← 좁힘 (매도 유도)
  Skew_Factor = min(0.8, |Δ| × 2)
```

- 풀 균형을 자동으로 맞추는 메커니즘
- Normal market에서는 Δ=0이므로 Skew_Factor=0, 대칭 spread

---

## 6. Fee Structure — Volume-First

### 거래 수수료

| | Rate | 비교 |
|---|------|------|
| **Maker** | **0.5bp** | Binance 1bp의 절반 |
| **Taker** | **1.0bp** | 업계 수준 |

### LP Spread (AMM)

| 상태 | Base Spread | Dynamic Spread | Total |
|------|------------|----------------|-------|
| Normal (U=50%, Δ=0, σ=1.0) | 5bp | 0bp | **5bp one-side** |
| Stress (U=70%, Δ=0.2, σ=1.5) | 5bp | ~5bp | ~10bp one-side |

Dynamic Spread = Base × max(0, U_mult + Δ_mult + σ_mult − 3)

- 평시에는 Dynamic = 0. LP 보호용으로만 활성화.
- 스트레스 시에만 자동으로 spread 확대.

### Full Cycle Cost (고객 관점)

| Layer | Cost |
|-------|------|
| LP Spread (one-side) | 5.0bp |
| Trading Fee (Taker) | 1.0bp |
| **Futures 편도** | **6.0bp** |
| Round-trip (진입+청산) | ~12bp |
| Mint + Trade + Redeem (full cycle) | ~17bp |

### Total Cost Cap: **50bp 이하**

- 전체 flywheel 비용이 50bp를 넘어서는 안 된다.
- 현재 구조에서 최악 시나리오에서도 ~20bp 수준.
- 수수료로 돈 버는 게 아니라 **volume으로 버는 구조**.

### 왜 이렇게 설정했는가

1. **Maker 0.5bp**: 프로 마켓메이커가 적극적으로 호가를 넣을 유인. Binance/Bybit의 1bp 대비 절반 → MM 유치 핵심
2. **Taker 1bp**: 업계 표준 수준. 부담 없는 선에서 최소한의 수익 확보
3. **LP Spread 5bp 고정**: Phase 1에서 Dynamic=0. Spread 키우면 volume 죽음. Volume이 죽으면 implied rate 역산 불가 → Phase 2 전환 불가
4. **50bp cap**: 고객이 Mint → Trade → Settle → Redeem 전체 cycle을 반복해도 부담이 없어야 flywheel이 돈다. 50bp는 TradFi FX Swap의 숨겨진 비용(은행 마진 + 숨은 스프레드) 대비 투명하고 저렴한 수준

---

## 7. Mint & Trade Service

USD Stablecoin 프리미엄/디스카운트에 따른 자연스러운 차익거래 루트:

```
프리미엄 높을 때:
  USD 입금 → Circle Mint (1:1) → KustodyFi에서 매도 (프리미엄 수익) → 또는 Futures 진입

디스카운트일 때:
  KustodyFi에서 Stablecoin 매수 (싸게) → Circle Redeem → USD 출금 → 차익
```

| Service | Fee |
|---------|-----|
| USD → Stablecoin Mint | 3~5bp |
| Stablecoin → USD Redeem | 3~5bp |

### 왜 필수인가

1. **Arbitrage가 가격을 바로잡음**: 프리미엄/디스카운트를 줄여서 시장 효율성 높임
2. **자연스러운 유동성 유입**: 차익 기회가 있으면 알아서 돈이 들어옴
3. **Flywheel 가속**: Mint → Trade → Settle → Redeem → 다시 Mint, 계속 회전
4. **발행사 파트너십 근거**: Circle/Tether 입장에서 minting volume 증가 → win-win

### 현재 시장 관찰 (2026-03 기준)

업비트 기준: USDC/KRW 1,488 | USDE/KRW 1,488 | USDT/KRW 1,487 | USD1/KRW 1,487
실제 USD/KRW: ~1,500

→ 약 12~13원 디스카운트 상태. 이 괴리를 활용하는 차익거래 루트를 제공하면 자연스러운 유동성 유입.

---

## 8. LP Economics

### LP 수익 구조

```
LP 예치 ($10M USD Stablecoin)
  → RWA 전액 배치 (BUIDL/USDY, $10M)
  → Baseline ~5% ($500K/yr)
  → + Trading Alpha (5bp spread × volume)
  → = Total 6.5~9.5% ($650~950K/yr)
```

| 수익원 | Rate | Source |
|--------|------|--------|
| Baseline (RWA) | ~5.0% | BUIDL/USDY 전액 배치 |
| Trading Alpha | +1.5~4.5% | Bid/Ask 5bp spread 수취 |
| **Total LP Yield** | **6.5~9.5%** | Baseline + Alpha |

### Full RWA Deployment가 가능한 이유

- Dated futures = cash-settled (차금결제)
- 일일 정산에 5~10% cash만 필요
- 나머지 90~95%는 RWA에서 yield 수취 중

### LP 관점의 핵심 질문과 답

> "USD Stablecoin을 그냥 BUIDL에 맡기면 5% 받는데, 왜 LP Pool에 넣어?"

→ **그 위에 Trading Alpha가 쌓인다.** RWA 수익은 동일하게 받으면서 추가 수익.

---

## 9. Volume Flywheel

```
Volume ↑ → Implied Rate 데이터 ↑ → Term Structure 신뢰도 ↑ → Reference Rate 지위
    ↑                                                              ↓
    └── 더 많은 Volume ← Tighter Spread ← LP 수익 안정 ← 더 많은 LP ←┘
```

- **Phase 1 전략**: 타이트하게 유지 (5bp fixed, Dynamic=0, Maker 0.5bp)
- volume이 충분히 쌓여야 tenor별 implied rate를 역산할 수 있다.
- implied rate가 있어야 Phase 2로 전환할 수 있다.
- LP 수익 = Spread × Volume. Spread가 작아도 Volume이 크면 수익이 크다.

---

## 10. Term Structure Discovery — 4-Phase Transition

### Phase 1: Oracle Flat (Launch)

- r_USD.S = RWA/DeFi weighted blend (flat, 전 tenor 동일)
- 방향: Oracle → Forward Price
- 역할: 초기 호가 산출용
- Transition 조건: 일일 체결 ≥ 50건

### Phase 1.5: RWA Ladder

- r_USD.S(T) = 만기 매칭 RWA로 tenor별 rate 차별화
- 방향: T-bill ladder → rate(T)
- 역할: 체결 데이터 없이도 자체 term structure 구성
- 예시: 3M BUIDL 4.8% vs 1Y OUSG 5.2%
- LP Pool의 RWA 배치를 잔여 만기 기준으로 분산하면 가능

### Phase 2: Hybrid Blend

- r_USD.S = α × Implied + (1−α) × RWA Ladder
- 방향: 체결가 + RWA Ladder → Blended rate
- 역할: 시장 데이터 반영 시작
- 역산 공식: r_USD.S(T) = [(S/F) × (1 + r_KRW × T) − 1] / T
- Transition 조건: 5+ tenor에서 일일 100건+

### Phase 3: Market-Driven

- r_USD.S = 체결가 기반 TWAP
- 방향: 체결가 → Implied Rate → Market Reference
- Oracle 방향이 뒤집힘: KustodyFi 체결가가 시장 reference가 된다.
- **KustodyFi = USD Stablecoin Reference Rate**

### CME SOFR 아날로지

| | CME Term SOFR | KustodyFi Term USD.S |
|---|---|---|
| Input | Overnight SOFR (단일 금리) | r_USD.S flat oracle (단일 금리) |
| Instrument | SOFR Futures (1M, 3M) | Dated Futures (NW~12M) |
| Output | 1M/3M/6M/12M Term SOFR | Tenor별 r_USD.S(T) term structure |
| 결과 | USD 금리의 기준 | USD Stablecoin 금리의 기준 |

---

## 11. Quote Currency 확장 — sKRW Scenario

양쪽 모두 stablecoin이 되면 은행 인프라가 완전히 불필요해진다.

| Tenor | F (KRW) | SwPts | F (sKRW) | SwPts | Diff |
|-------|---------|-------|----------|-------|------|
| NW | 1,485.02 | -0.38 | 1,484.80 | -0.60 | -0.22 |
| M26 | 1,478.41 | -6.99 | 1,476.45 | -8.95 | -1.97 |
| U26 | 1,470.08 | -15.32 | 1,467.61 | -17.79 | -2.47 |
| H27 | 1,455.47 | -29.93 | 1,450.56 | -34.84 | -4.90 |

- r_sKRW = 2.5% (가상 KRW Stablecoin RWA yield)
- 양쪽 stablecoin → **USD Stablecoin term structure + KRW Stablecoin term structure** 동시 생성
- 향후 sJPY, sEUR 등으로 확장 → **Multi-currency stablecoin rate discovery infrastructure**

---

## 12. TradFi FX Swap vs KustodyFi 비교

| 항목 | TradFi FX Swap | KustodyFi Dated Futures |
|------|---------------|------------------------|
| Base Currency | USD | USD Stablecoin (USDC/USDT/USDE/USD1) |
| Quote Currency | KRW | KRW / KRW Stablecoin |
| 금리 Source | USD = SOFR/OIS, KRW = IRS/CD | USD.S = RWA/DeFi Oracle, KRW = FX Implied |
| Daycount | USD = ACT/360, KRW = ACT/365 | USD.S = ACT/365, KRW = ACT/365 |
| 유동성 | 은행 Dealer (양자 OTC) | Unified LP Pool + AMM |
| Spread | 은행 마진 (1.5~3.0원, tenor↑ 확대) | 5bp one-side (tenor 무관, 고정) |
| 거래 수수료 | 숨겨진 마진 | Maker 0.5bp / Taker 1bp (투명) |
| 만기 | Broken date (자유) | 셋째주 수요일 (NW + 1~6M, 9M, 12M) |
| 접근성 | Credit Line 필요, 기업만 | 지갑만 있으면 누구나 |
| Settlement | Physical delivery | Cash-settled (Stablecoin 차금결제) |
| 1Y B/A Spread | ~2.28원 (은행 추가 마진 시 4~5원) | ~0.15원 (고정) |

---

## 13. 기술 구현 참조

### 코드 모듈 (stable-fx-engine)

| Module | 역할 |
|--------|------|
| `amm/pricing.py` | AMM forward curve 산출 (CIP, 3rd Wed tenor, dual ZeroCurve) |
| `amm/rate_oracle.py` | 3-tier rate sourcing (RWA 70% + DeFi 30% blend) |
| `amm/spread.py` | Dynamic spread 계산 (Base 5bp + U/Δ/σ multipliers) |
| `fx/swap_points.py` | 전통 USDKRW swap points (StableFX Engine core) |
| `fx/node_builder.py` | Unified curve bootstrapper, _next_wednesday(), cached ZeroCurve |
| `fx/zero_curve.py` | ZeroCurve/ZeroCurveDef, Log DF interpolation |

### 네이밍 규칙

- 외부 API output: **camelCase**
- 내부 변수: **snake_case**
- 상수: **UPPER_SNAKE_CASE**
- Display 텍스트: "USD Stablecoin" (특정 코인명 아님)
- 수식 subscript: USD.S (축약), base/quote (일반)
- Quote currency: "KRW / KRW Stablecoin"

---

*Confidential — KustodyFi Co., Ltd. — March 2026*
