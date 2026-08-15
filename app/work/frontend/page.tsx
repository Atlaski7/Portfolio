import type { Metadata } from "next";
import { WorkDetailPage } from "../work-detail";

export const metadata: Metadata = { title: "FrontEnd | RJSD" };
export const dynamic = "force-static";

export default function FrontEndPage() {
  return <WorkDetailPage category="frontend" />;
}
