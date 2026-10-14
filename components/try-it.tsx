// 페이지마다 맨 아래에 넣는 "직접 고쳐 보세요" 안내 상자예요.
// children 자리에 실습 안내 문장을 넣어서 써요.
export function TryIt({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-12 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm leading-relaxed">
      <p className="mb-2 font-semibold text-primary">✏️ 직접 고쳐 보세요</p>
      <div className="space-y-1 text-foreground/80">{children}</div>
    </aside>
  );
}
