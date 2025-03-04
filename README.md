This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Folder 
- app: 애플리케이션의 전역 설정 (라우팅, 스토어, 글로벌 스타일 설정 등)
- pages: 사용자와 상호작용하는 실제 페이지 컴포넌트. (Homepage, Layout, ProductListPage 등)
- widgets: 재사용 가능한 복잡한 UI 블록. (헤더 네비게이션, 검색 필터, 댓글 위젯 등)
- features: 특정 비즈니스 기능을 담당. (좋아요 버튼, 리뷰 작성 폼, 상품 정렬 기능 등)
- entities: 핵심 비즈니스 엔티티와 관련된 코드. (상품, 사용자, 주문 등 도메인 모델의 로직 등)
- shared: 공통 유틸리티와 컴포넌트를 포함. (UI 버튼, 인풋 컴포넌트, 유틸리티 함수 등 , like common)

## Slice Folder
- board - 게시판 도메인

## Segment Folder
- api: 외부 서비스와의 통신을 담당하며 API 엔드포인트와 데이터 변환 로직을 포함.
- model: 데이터 구조(model, hook), 상태 관리(redux), 비즈니스 로직.
- ui: 순수 표현 컴포넌트. 데이터와 이벤트 핸들러를 받아 화면을 렌더링함.
- lib: 순수 함수와 도메인 특화 헬퍼 함수 모음.