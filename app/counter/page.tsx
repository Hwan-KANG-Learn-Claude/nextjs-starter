// 카운터 페이지 (주소: /counter)
// 버튼을 누를 때마다 숫자가 바뀌어야 해서, 브라우저에서 동작하는 "use client"를 붙였어요.
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TryIt } from "@/components/try-it";

export default function CounterPage() {
  // count: 지금 숫자, setCount: 숫자를 바꾸는 함수
  // setCount로 숫자만 바꾸면 화면은 React가 알아서 다시 그려 줘요.
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="text-3xl font-bold">카운터</h1>
      <p className="mt-2 text-muted-foreground">버튼을 눌러 숫자를 바꿔 보세요.</p>

      <p
        aria-live="polite"
        className={`my-10 text-center text-8xl font-extrabold tabular-nums ${
          count < 0 ? "text-red-500" : "text-primary"
        }`}
      >
        {count}
      </p>

      <div className="flex gap-3">
        <Button
          variant="secondary"
          className="h-14 flex-1 text-2xl"
          aria-label="1 감소"
          onClick={() => setCount(count - 1)}
        >
          −1
        </Button>
        <Button
          className="h-14 flex-1 text-2xl"
          aria-label="1 증가"
          onClick={() => setCount(count + 1)}
        >
          +1
        </Button>
      </div>
      <Button variant="outline" className="mt-3 h-11 w-full" onClick={() => setCount(0)}>
        리셋
      </Button>

      <section className="mt-12 rounded-xl bg-muted p-5 text-sm leading-relaxed">
        <h2 className="mb-2 font-semibold">HTML 버전(counter.html)과 무엇이 다른가요?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <b>HTML 버전:</b> 숫자가 바뀔 때마다 <code>textContent</code>로 화면 글자를 직접 고쳐요.
          </li>
          <li>
            <b>React 버전:</b> <code>setCount</code>로 숫자(상태)만 바꾸면 화면은 알아서 따라 바뀌어요.
          </li>
        </ul>
      </section>

      <TryIt>
        <p>
          <code>app/counter/page.tsx</code>에서 +1 버튼을 복사해 <b>+5 버튼</b>을 만들어 보세요.
        </p>
        <p>
          힌트: <code>setCount(count + 1)</code>의 1을 5로 바꾸면 돼요.
        </p>
      </TryIt>
    </div>
  );
}
