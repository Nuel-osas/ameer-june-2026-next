import type { Metadata } from "next";
import { notFound } from "next/navigation";
import pages from "@/lib/pages.json";
import SiteRuntime from "@/components/SiteRuntime";
type Props = {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = pages.find((page) => page.slug.join("/") === slug.join("/"));
  return {
    title: page?.title || "Page not found",
    description: page?.description,
    robots: { index: false, follow: false },
    icons: { icon: "/icon.png" },
  };
}
export default async function RootLayout({ children, params }: Props) {
  const { slug = [] } = await params;
  const page = pages.find((page) => page.slug.join("/") === slug.join("/"));
  if (!page) notFound();
  return (
    <html lang="en-US" className="archive-static" suppressHydrationWarning>
      <body
        className={page.bodyClass}
        data-primary-color={page.primaryColor}
        suppressHydrationWarning
      >
        <link rel="stylesheet" href={page.stylesheet} precedence="site" />
        <link
          rel="stylesheet"
          href="/styles/enhancements.css"
          precedence="enhancements"
        />
        <a href="#site-main" className="skip-link">
          Skip to content
        </a>
        {children}
        <SiteRuntime />
      </body>
    </html>
  );
}
