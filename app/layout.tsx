// 모든 페이지가 공통으로 쓰는 틀이에요.
// 머리글(SiteHeader)과 바닥글(SiteFooter) 사이의 {children} 자리에 각 페이지 내용이 들어가요.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 브라우저 탭에 보이는 제목이에요.
// 페이지에서 title을 정하면 "카드 목록 | Next.js Starter Kit"처럼 보여요.
export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Kit",
    template: "%s | Next.js Starter Kit",
  },
  description: "Next.js, Tailwind CSS, shadcn/ui가 미리 설정된 연습용 키트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* break-keep: 한국어 단어가 중간에서 잘려 줄이 바뀌지 않게 해요. */}
      <body className="flex min-h-full flex-col break-keep">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
