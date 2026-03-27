# MedGrowth Lab Site Setup

MedGrowth Lab 문서를 바탕으로 한 초기 웹사이트 제작 환경입니다.  
현재는 `Vite + React` 기반 단일 페이지 랜딩 구조로 셋업되어 있으며, 이후 다중 페이지 또는 CMS 연동으로 확장할 수 있도록 콘텐츠 구조를 분리해 두었습니다.

## 포함 내용

- 브랜드/전략 문서를 반영한 정보 구조 정리
- `Home / About / Case Study / Service / Contact` 섹션 구성
- 화이트 + 블루 기반의 신뢰 중심 UI
- 바로 개발 가능한 프론트엔드 실행 환경

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://127.0.0.1:5173` 를 열면 됩니다.

## 파일 구조

```text
src/
  App.jsx
  main.jsx
  siteContent.js
  styles.css
DESIGN.md
```

## 다음 작업 권장

1. 실제 병원 사례 데이터 확보 후 Case Study 교체
2. Contact 폼을 이메일/노션/CRM으로 연결
3. About, Case Study, Service를 독립 페이지로 분리
4. SEO 메타 태그와 오픈그래프 이미지 추가
