// 모든 페이지 맨 위에 보이는 머리글(로고 + 메뉴)이에요.
// 지금 주소를 알아야 메뉴를 진하게 표시할 수 있어서, 브라우저에서 동작하는 "use client"를 붙였어요.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 메뉴 목록이에요. 여기에 한 줄을 추가하면 메뉴가 하나 늘어나요.
const menus = [
  { href: "/", label: "홈" },
  { href: "/cards", label: "카드" },
  { href: "/form", label: "폼" },
  { href: "/counter", label: "카운터" },
];

export function SiteHeader() {
  const pathname = usePathname(); // 지금 보고 있는 주소 (예: "/cards")

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-lg font-bold text-primary">
          Next.js Starter Kit
        </Link>

        <nav className="flex flex-wrap gap-1">
          {menus.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.href}
                href={menu.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"
                    : "rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                }
              >
                {menu.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
