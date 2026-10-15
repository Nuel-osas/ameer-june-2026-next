import { notFound } from "next/navigation";
import pages from "@/lib/pages.json";
import { pageComponents } from "@/lib/page-components";

export const dynamicParams = false;
export function generateStaticParams() {
  return pages.map(({ slug }) => ({ slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const pathname = slug.length ? "/" + slug.join("/") + "/" : "/";
  const Component = pageComponents[pathname as keyof typeof pageComponents];
  if (!Component) notFound();
  return <Component />;
}
