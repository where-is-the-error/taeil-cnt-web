<div align="center">

# 🏢 TAEIL C&T 기업 홈페이지

**건설 IT 기업 태일씨앤티의 회사 소개·사업·ESG·채용 정보를 담은 반응형 기업 웹사이트**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)
![Figma](https://img.shields.io/badge/Figma_Make-F24E1E?logo=figma&logoColor=white)

</div>

---

## 📄 페이지 구성

| 페이지 | 내용 |
|---|---|
| **Home** | 풀스크린 영상 히어로, 스크롤 인터랙션 |
| **Company** | CEO 인사말, 인증·수상 현황, 연혁 |
| **Business** | 무선 화재 감지·AI 재난 방지 플랫폼, 모바일 클라우드 협업 플랫폼, 현장 공정 모니터링 등 사업 소개, 포트폴리오 |
| **Innovation** | 기술·R&D |
| **ESG** | 사회공헌(나눔·정화 활동), 가족친화 경영, 노사 협력 |
| **PR** | 뉴스·보도자료 |
| **Careers** | 인재상, 복리후생, 채용 절차, 채용 공고, FAQ |

## 🛠️ 구현 포인트

- Figma에서 디자인한 화면을 **Figma Make**로 코드로 옮긴 뒤 React 컴포넌트 단위로 정리
- `react-router`로 7개 페이지 라우팅, 공통 `Header`·섹션 컴포넌트 재사용
- `motion`으로 스크롤·등장 애니메이션
- shadcn/ui + Tailwind CSS 4로 반응형 레이아웃

## 🚀 실행

```bash
npm install
npm run dev
```

> UI 컴포넌트는 [shadcn/ui](https://ui.shadcn.com/)(MIT), 일부 사진은 [Unsplash](https://unsplash.com/license)를 사용했습니다. 자세한 내용은 [ATTRIBUTIONS.md](./ATTRIBUTIONS.md)를 참고하세요.
