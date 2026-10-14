// 홈 페이지 (주소: /)
// app 폴더 바로 아래의 page.tsx는 사이트의 첫 화면이 돼요.
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TryIt } from "@/components/try-it";

// 아래쪽 카드 3장에 쓰는 목록이에요.
const examples = [
  {
    href: "/cards",
    title: "카드 목록",
    description: "데이터 목록을 카드로 보여 줘요. 데이터를 고치면 화면이 바뀌어요.",
  },
  {
    href: "/form",
    title: "입력 폼",
    description: "이름과 이메일을 입력받고, 잘못 적으면 안내 문구를 보여 줘요.",
  },
  {
    href: "/counter",
    title: "카운터",
    description: "counter.html을 React로 옮긴 버전이에요. 둘을 비교해 보세요.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="py-12 text-center sm:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          나의 첫 Next.js 사이트
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Next.js, Tailwind CSS, shadcn/ui가 미리 설정된 연습용 키트예요.
          예제를 둘러보고 마음껏 고쳐 보세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/cards" className={buttonVariants({ size: "lg", className: "h-11 px-6" })}>
            예제 둘러보기
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg", className: "h-11 px-6" })}
          >
            Next.js 공식 문서
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {examples.map((example) => (
          <Link key={example.href} href={example.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardHeader>
                <CardTitle>{example.title} →</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>

      <TryIt>
        <p>
          <code>app/page.tsx</code>에서 &quot;나의 첫 Next.js 사이트&quot;를 내 이름이 들어간 제목으로 바꿔 보세요.
        </p>
        <p>저장하면 브라우저가 새로고침 없이 바로 바뀌어요.</p>
      </TryIt>
    </div>
  );
}
