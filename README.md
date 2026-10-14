# Next.js Starter Kit

Next.js, Tailwind CSS, shadcn/ui가 미리 설정된 연습용 키트예요.
설치는 끝나 있으니 명령 두 개만 입력하면 바로 시작할 수 있어요.

예제 페이지 4개가 들어 있어요.

| 주소 | 페이지 | 배울 수 있는 것 |
|---|---|---|
| `/` | 홈 | 제목, 버튼, 카드로 첫 화면 만들기 |
| `/cards` | 카드 목록 | 데이터 목록을 화면에 그리기 |
| `/form` | 입력 폼 | 입력받고, 잘못된 값 알려 주기 |
| `/counter` | 카운터 | 버튼으로 숫자(상태) 바꾸기 |

## 1. 준비물

**Node.js**(자바스크립트를 실행하는 프로그램)가 필요해요.
터미널에 아래 명령을 입력해 보세요. 설치된 버전을 보여 주는 명령이에요.

```bash
node -v
```

`v20.9.0`보다 높은 숫자가 나오면 준비 끝이에요.
오류가 나면 [nodejs.org](https://nodejs.org)에서 **LTS** 버전을 내려받아 설치하세요.

## 2. 시작하기

1. 터미널에서 이 폴더로 이동해요.
   ```bash
   cd nextjs-starter
   ```
2. 필요한 부품을 내려받아요. 처음 한 번만 하면 돼요. 몇 분 걸릴 수 있어요.
   ```bash
   npm install
   ```
3. 개발용 서버를 켜요.
   ```bash
   npm run dev
   ```
4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어요.

서버를 끄려면 터미널에서 `Ctrl + C`를 누르세요.

## 3. 폴더 지도

```
nextjs-starter/
├── app/
│   ├── layout.tsx         ← 모든 페이지의 공통 틀 (머리글 + 본문 + 바닥글)
│   ├── page.tsx           ← 홈 페이지 (/)
│   ├── cards/page.tsx     ← 카드 목록 (/cards)
│   ├── form/page.tsx      ← 입력 폼 (/form)
│   ├── counter/page.tsx   ← 카운터 (/counter)
│   └── globals.css        ← 전체 색과 글꼴
├── components/
│   ├── site-header.tsx    ← 상단 메뉴
│   ├── site-footer.tsx    ← 하단 바닥글
│   ├── try-it.tsx         ← "직접 고쳐 보세요" 안내 상자
│   └── ui/                ← shadcn/ui 부품 (버튼, 카드, 입력칸 등)
└── lib/
    └── data.ts            ← 카드 목록에 쓰는 데이터
```

**가장 중요한 규칙: 폴더 이름이 곧 주소예요.**
`app/about/page.tsx` 파일을 만들면 `/about` 주소가 생겨요.

| 이걸 바꾸고 싶다면 | 이 파일을 여세요 |
|---|---|
| 메뉴 항목 | `components/site-header.tsx`의 `menus` |
| 카드 내용 | `lib/data.ts` |
| 사이트 전체 색 | `app/globals.css`의 `--primary` |
| 브라우저 탭 제목 | `app/layout.tsx`의 `metadata` |

## 4. 실습 미션

쉬운 것부터 차례로 해 보세요. 각 페이지 맨 아래 "✏️ 직접 고쳐 보세요" 상자에도 같은 안내가 있어요.

- [ ] **미션 1 (홈):** 큰 제목을 내 이름이 들어간 문장으로 바꾸기
- [ ] **미션 2 (카드):** `lib/data.ts`에 항목을 하나 추가해서 카드 7장 만들기
- [ ] **미션 3 (카운터):** +5 버튼 추가하기
- [ ] **미션 4 (폼):** 전화번호 입력칸 추가하기
- [ ] **보너스:** `app/about/page.tsx`를 만들고 메뉴에 "소개"를 추가하기

## 5. shadcn/ui 부품 더 넣기

shadcn/ui는 버튼, 카드 같은 화면 부품을 내 프로젝트에 복사해 주는 도구예요.
예를 들어 체크박스가 필요하면 아래 명령을 입력해요.

```bash
npx shadcn@latest add checkbox
```

`components/ui/checkbox.tsx` 파일이 생기고, 바로 가져다 쓸 수 있어요.
어떤 부품이 있는지는 [ui.shadcn.com](https://ui.shadcn.com/docs/components)에서 볼 수 있어요.

## 6. 자주 나는 오류

**`npm`을 찾을 수 없다는 오류 (`'npm' is not recognized`)**
Node.js가 설치되지 않았거나, 설치 직후 터미널을 다시 열지 않았을 때 나요.
1단계 준비물을 확인하고, 터미널을 닫았다가 다시 열어 보세요.

**포트가 이미 사용 중이라는 오류 (`Port 3000 is in use`)**
다른 터미널에서 서버가 이미 켜져 있다는 뜻이에요.
그 터미널에서 `Ctrl + C`로 끄거나, 터미널에 나온 다른 주소(예: `localhost:3001`)로 접속하세요.

**`Module not found` 오류**
부품이 아직 설치되지 않았다는 뜻이에요. `npm install`을 다시 실행하세요.

**화면이 빨간 오류 창으로 바뀌었어요**
코드에 오타가 있다는 뜻이에요. 오류 창에 파일 이름과 줄 번호가 나와요.
그 줄을 고치고 저장하면 오류 창이 사라져요. 걱정하지 않아도 돼요.

## 7. 알아 두면 좋은 명령

| 명령 | 하는 일 |
|---|---|
| `npm run dev` | 개발용 서버 켜기 (고치면 바로 반영) |
| `npm run build` | 배포용으로 묶어 보기 (코드 실수를 찾아 줘요) |
| `npm run lint` | 코드 규칙 검사 |
