// 카드 목록 페이지 (주소: /cards)
// lib/data.ts의 lessons 목록을 하나씩 꺼내 카드로 보여 줘요.
import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TryIt } from "@/components/try-it";
import { lessons } from "@/lib/data";

export const metadata: Metadata = {
  title: "카드 목록",
};

export default function CardsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">카드 목록</h1>
      <p className="mt-2 text-muted-foreground">
        모두 {lessons.length}개의 강의 주제가 있어요.
      </p>

      {/* 넓은 화면 3칸, 중간 화면 2칸, 휴대폰 1칸 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.title}>
            <CardHeader>
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {lesson.tag}
              </span>
              <CardTitle className="mt-2">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <TryIt>
        <p>
          <code>lib/data.ts</code>를 열고 목록 맨 아래에 항목을 하나 추가해 보세요.
        </p>
        <p>저장하면 카드가 하나 늘어나고, 위의 개수도 함께 바뀌어요.</p>
      </TryIt>
    </div>
  );
}
