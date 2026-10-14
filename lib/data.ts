// 카드 목록 페이지(/cards)에 보여 줄 데이터예요.
// 항목을 하나 추가하거나 지우면 화면의 카드도 똑같이 늘어나거나 줄어들어요.

export type Lesson = {
  title: string; // 카드 제목
  description: string; // 카드 설명
  tag: string; // 카드 오른쪽 위의 작은 이름표
};

export const lessons: Lesson[] = [
  {
    title: "터미널 첫걸음",
    description: "cd, mkdir, pwd 같은 기본 명령으로 폴더를 오가며 파일을 만들어 봐요.",
    tag: "기초",
  },
  {
    title: "Claude Code 시작하기",
    description: "설치부터 첫 대화까지, Claude에게 일을 맡기는 방법을 익혀요.",
    tag: "기초",
  },
  {
    title: "HTML로 화면 만들기",
    description: "제목, 문단, 버튼을 배치해서 나만의 첫 웹페이지를 만들어요.",
    tag: "웹",
  },
  {
    title: "Tailwind로 꾸미기",
    description: "클래스 이름만 붙여서 색, 여백, 글자 크기를 바꿔 봐요.",
    tag: "웹",
  },
  {
    title: "Next.js 페이지 추가",
    description: "app 폴더에 폴더 하나를 만들면 새 주소가 생기는 규칙을 배워요.",
    tag: "Next.js",
  },
  {
    title: "Playwright로 확인하기",
    description: "버튼을 대신 눌러 주는 도구로 화면이 제대로 동작하는지 검사해요.",
    tag: "테스트",
  },
];
